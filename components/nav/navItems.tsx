'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

const NavItems = () => {

    const pathName = usePathname();

    const navItems = [
        {
            id: 1,
            title: "Home",
            link: '/',
        },
        {
            id: 2,
            title: "Companion",
            link: '/companion',
        },
        {
            id: 3,
            title: "My Journey",
            link: '/profile',
        },
        {
            id: 4,
            title: "Sign In",
            link: '/sign-in',
        }

    ]
    return (
        <nav className="flex items-center gap-4">
            {navItems.map(({id, title, link}) => (
                <Link key={id} href={`${link}`} className={cn(pathName === link && "text-primary font-semibold")}>
                    {title}
                </Link>
            ))}
        </nav>
    )
}
export default NavItems;