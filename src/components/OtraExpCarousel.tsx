import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselNextCustom,
    CarouselPreviousCustom
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import React, { useEffect, useState } from "react"

interface LanguageContent {
    title: string;
    content: string[];
}

interface Data {
    [language: string]: LanguageContent[];
}

interface CarouselComponentProps {
    locale?: string;
}

export default function CarouselComponent({ locale = "es" }: CarouselComponentProps) {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    )

    const [language, setLanguage] = useState<string>(locale);

    // useEffect(() => {
    //     // Read language preference from localStorage
    //     const savedLanguage = localStorage.getItem('language');
    //     if (savedLanguage) {
    //         setLanguage(savedLanguage);
    //     }
    // }, []);

    let data: Data = {
        es: [{
            title: "Emisión de Documentos Electrónicos (DTE) Chile",
            content: [`Dirigí el desarrollo de aplicaciones con interacción con API SOAP
            y REST utilizando XML y JSON para el Servicio de Impuestos Internos en Chile.
            En este proyecto, no solo nos enfocamos en la comunicación directa con el Servicio
            de Impuestos Internos, sino que también integré estas funcionalidades con el
            software ERP de la organización.`,
                `Trabajando en estrecha colaboración con los equipos de desarrollo de aplicaciones y
            de ERP, coordiné la definición de los puntos de integración entre los sistemas.`]
        }, {
            title: "Dirección de Equipos de Trabajo",
            content: [`Supervisar un equipo de soporte técnico de 3 miembros, evaluando a
            los miembros del equipo, capacitando a nuevos colegas y
            trabajando con metas semanales para garantizar la continuidad
            operativa de los sistemas.`]
        }, {
            title: "Actualización de Sistemas",
            content: [`Gestioné la completa reescritura de aplicaciones heredadas en Java
            y las dividí en microservicios.`,
                `Al dividir las aplicaciones en microservicios, se logró una mayor flexibilidad para
            realizar cambios y mejoras en cada componente de forma independiente
            y la adopción de tecnologías más modernas
            sin afectar el funcionamiento global del sistema.`]
        }, {
            title: "Experiencia en Cloud",
            content: [`Lideré proyectos de implementación de aplicaciones en la nube utilizando Elastic Beanstalk y
            Lightsail de AWS. Esta experiencia me ha permitido trabajar en el despliegue y la gestión de aplicaciones,
            garantizando escalabilidad y alta disponibilidad.`]
        }],
        en: [{
            title: "Issuance of Electronic Documents (DTE) Chile",
            content: [`I led the development of applications interacting with SOAP and REST APIs
            using XML and JSON for the Internal Revenue Service in Chile.
            In this project, we not only focused on direct communication with the Internal Revenue Service,
            but I also integrated these functionalities with the organization's ERP software.`,
                `Working closely with the application development and ERP teams,
            I coordinated the definition of integration points between the systems.`]
        }, {
            title: "Team Leadership",
            content: [`Supervised a technical support team of 3 members, evaluating
            team members, training new colleagues, and
            working with weekly goals to ensure the operational
            continuity of the systems.`]
        }, {
            title: "Systems Update",
            content: [`Managed the complete rewrite of legacy applications in Java
            and divided them into microservices.`,
                `By dividing the applications into microservices, greater flexibility was achieved to
            make changes and improvements to each component independently,
            and the adoption of more modern technologies
            without affecting the overall system operation.`]
        }, {
            title: "Cloud Experience",
            content: [`Led projects for deploying applications in the cloud using AWS Elastic Beanstalk and
            Lightsail. This experience allowed me to work on the deployment and management of applications,
            ensuring scalability and high availability.`]
        }]
    }

    return (
        <Carousel
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
                align: "start",
                loop: true,
            }}>
            <CarouselContent>
                {data[language].map((d, index) => (
                    <CarouselItem key={index}>
                        <h3 className="text-xl font-bold mb-4">{d.title}</h3>
                        {d.content.map((c, i) => (
                            <p key={i}>{c}</p>
                        ))}
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="flex justify-center gap-6">
                <CarouselPreviousCustom />
                <CarouselNextCustom />
            </div>
        </Carousel>
    )
}