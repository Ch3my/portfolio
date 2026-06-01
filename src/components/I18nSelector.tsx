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

    const handleChange = (value: string) => {
        setLanguage(value);
        const currentPath = window.location.pathname;
        const base = import.meta.env.BASE_URL;
        if (value === 'en') {
            if (!currentPath.startsWith(`${base}en`)) {
                window.location.href = `${base}en`
            }
        } else if (value === 'es') {
            if (currentPath.startsWith(`${base}en`)) {
                window.location.href = `${base}es`;
            }
        }
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
