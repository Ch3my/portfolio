import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function () {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>Emisión de Documentos Electrónicos (DTE) Chile</AccordionTrigger>
                <AccordionContent>
                    <p>
                        Dirigí el desarrollo de aplicaciones con interacción con API SOAP
                        y REST utilizando XML y JSON para el Servicio de Impuestos Internos en Chile.
                        En este proyecto, no solo nos enfocamos en la comunicación directa con el Servicio
                        de Impuestos Internos, sino que también integré estas funcionalidades con el
                        software ERP de la organización.
                    </p>
                    <p>

                        Trabajando en estrecha colaboración con los equipos de desarrollo de aplicaciones y
                        de ERP, coordiné la definición de los puntos de integración entre los sistemas.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Dirección de Equipos de Trabajo</AccordionTrigger>
                <AccordionContent>
                    <p>
                        Supervisar un equipo de soporte técnico de 3 miembros, evaluando a
                        los miembros del equipo, capacitando a nuevos colegas y
                        trabajando con metas semanales para garantizar la continuidad
                        operativa de los sistemas.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Modernización Software con Microservicios</AccordionTrigger>
                <AccordionContent>
                    <p>
                        Gestioné la completa reescritura de aplicaciones heredadas en Java
                        y las dividí en microservicios.
                    </p>
                    <p> Al dividir las aplicaciones en microservicios, se logró una mayor flexibilidad para
                        realizar cambios y mejoras en cada componente de forma independiente
                        y la adopción de tecnologías más modernas
                        sin afectar el funcionamiento global del sistema.
                    </p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
