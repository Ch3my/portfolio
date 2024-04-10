import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import React from "react"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "SCPP",
        href: "/proyectos/scpp",
        description:
            "WinUI3 y React Native",
    },
    {
        title: "Demucs",
        href: "/proyectos/demucs",
        description:
            "IA separacion de Pistas",
    },
    {
        title: "Music Codex",
        href: "/proyectos/music-codex",
        description:
            "Conocimiento Musical",
    }
]

export default function NavBar() {
    return (
        <NavigationMenu>
            <NavigationMenuList >
                <NavigationMenuLink href="/"
                    className={navigationMenuTriggerStyle()}>
                    Inicio
                </NavigationMenuLink>
                {/* <NavigationMenuLink href="/#proyectos"
                    className={navigationMenuTriggerStyle()}>
                    Proyectos
                </NavigationMenuLink> */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Proyectos</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="flex flex-col gap-4 p-4 w-full md:w-52">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"