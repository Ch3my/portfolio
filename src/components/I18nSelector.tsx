import React, { useState } from 'react';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

// Define props interface extending HTML attributes for select element
interface I18nSelectorProps extends React.HTMLAttributes<HTMLSelectElement> {
    currentLocale?: string
}

export default function I18nSelector({ currentLocale, className, ...props }: I18nSelectorProps) {
    const [language, setLanguage] = useState(currentLocale);

    const segmentTranslations: Record<string, Record<string, string>> = {
        en: { projects: 'proyectos' },
        es: { proyectos: 'projects' },
    };

    const handleChange = (value: string) => {
        if (value === currentLocale) return;
        setLanguage(value);

        const base = import.meta.env.BASE_URL;
        const basePath = base.endsWith('/') ? base.slice(0, -1) : base;
        const relativePath = window.location.pathname.startsWith(basePath)
            ? window.location.pathname.slice(basePath.length)
            : window.location.pathname;

        const segments = relativePath.split('/').filter(Boolean);
        // swap locale segment
        if (segments[0] === currentLocale) segments[0] = value;
        // swap translated path segments (e.g. projects <-> proyectos)
        const map = segmentTranslations[currentLocale ?? 'es'] ?? {};
        const mapped = segments.map(seg => map[seg] ?? seg);

        window.location.href = base + mapped.join('/');
    }

    return (
        <div className='flex items-center'>

            <Select value={language} onValueChange={handleChange}   >
                <SelectTrigger >
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Lang</SelectLabel>
                        <SelectItem value="es">ES</SelectItem>
                        <SelectItem value="en">EN</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
