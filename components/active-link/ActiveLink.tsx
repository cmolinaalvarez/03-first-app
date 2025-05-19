'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    path : string;
    text : string;
}
//Client component
export const ActiveLink = ({path, text}:Props) => {
    const pathName = usePathname();

    // console.log('pathName:',pathName);
    // console.log('path:',path);

    return (      
        <Link className={`mr-2 hover:underline hover:text-blue-400 transition-all 
            ${ (pathName === path) &&  'text-blue-500' }`} key={ path }  href={ path }>
            { text }
        </Link>                     
    )
}