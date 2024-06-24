import React, { useState, useEffect } from 'react';

// Define props interface extending HTML attributes for select element
interface I18nSelectorProps extends React.HTMLAttributes<HTMLSelectElement> { }

export default function I18nSelector(props: I18nSelectorProps) {
    const [language, setLanguage] = useState("es");

    useEffect(() => {
        // Read language preference from localStorage
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            setLanguage(savedLanguage);
        }
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value;
        setLanguage(selectedLanguage);

        window.localStorage.setItem("language", selectedLanguage)

        const currentPath = window.location.pathname;

        if (selectedLanguage === 'en') {
            if (!currentPath.startsWith('/portfolio/en')) {
                window.location.href = '/portfolio/en'
            }
        } else if (selectedLanguage === 'es') {
            console.log("REferesh")
            if (currentPath.startsWith('/portfolio/en')) {
                window.location.href = '/portfolio';
            }
        }
    };

    return (
        <div className='flex items-center'>
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-fit" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M3.6 9h16.8" />
                <path d="M3.6 15h16.8" />
                <path d="M11.5 3a17 17 0 0 0 0 18" />
                <path d="M12.5 3a17 17 0 0 1 0 18" />
            </svg> */}
            <select name="language" id="language" value={language} onChange={handleChange}  {...props}>
                <option value="es">ES</option>
                <option value="en">EN</option>
            </select>
        </div>
    )
}
