import {useMemo} from "react";
import {HomeIcon} from "lucide-react";
import Link from "next/link";

const NavItems = () => {

    const navItems = [
        {
            id: 1,
            title: "Home",
            link: '/',
        },
        {
            id: 2,
            title: "Companion",
            link: 'companion',
        },
        {
            id: 3,
            title: "My Journey",
            link: 'profile',
        },
        {
            id: 4,
            title: "Sign In",
            link: 'sign-in',
        }

    ]
    return (
        <nav className="flex items-center gap-8">
            {navItems.map(({id, title, link}) => (
                <Link key={id} href={`/${link}`}>
                    {title}
                </Link>
            ))}
        </nav>
    )
}
export default NavItems;