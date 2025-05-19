// // Definición de una función llamada `temporalAsync` que retorna una promesa
// const temporalAsync = () => {
    
//     // Se retorna una nueva promesa que se resuelve después de un tiempo determinado
//     return new Promise((resolve) => {

//         // `setTimeout` espera 1000 milisegundos (1 segundo) antes de ejecutar la función
//         setTimeout(() => {
            
//             // Una vez pasado el tiempo, la promesa se resuelve con el valor `true`
//             resolve(true);

//         }, 1000); // Tiempo de espera: 1000 ms (1 segundo)
//     });
// }
'use client'
import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link"

//Client component
import { ActiveLink } from "../active-link";

import { usePathname } from "next/navigation";

const navItems = [
    {path:"/about", text:"About"},
    {path:"/contact", text:"Contact"},
    {path:"/pricing", text:"Pricing"},
]

export const  Navbar = () => {    
    // await temporalAsync();
    const pathName = usePathname();
    return (        
        <nav className="flex bg-blue-800 bg-opacity-10 p-2 m-2 rounded">
            {/*
            Barra de navegación:
            - `flex`: usa Flexbox para alinear los elementos horizontalmente
            - `bg-blue-800`: fondo azul oscuro
            - `bg-opacity-10`: fondo con 10% de opacidad
            - `p-2`: padding interno
            - `m-2`: margen externo
            - `rounded`: bordes redondeados
            */}
            
            <Link href={'/'} className={`flex items-center mr-2 hover:underline hover:text-blue-400 transition-all 
                                        ${ (pathName === '/') &&  'text-blue-500' }`}>
                <HomeIcon className="mr-1" />
                <span>Home</span>
            </Link>
             {/* <Link hover:underline hover:text-blue-400 transition-all    ${ (pathName === path) &&  'text-blue-500' }` */}
            {/* Elemento de texto estático que representa el enlace o título "Home" */}

            <div className="flex flex-1"></div>
            {/*
            Espaciador flexible:
            - `flex-1` expande este div para ocupar el espacio restante
            - Esto empuja los enlaces hacia la derecha de la barra de navegación
            */}
            {
                navItems.map(navItem => (
                    <ActiveLink key={navItem.path} {...navItem}/>    
                ))
            }   
        </nav>
    )
}       