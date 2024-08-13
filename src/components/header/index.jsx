import Link from "next/link";
import './index.css';

export default function Header() {
    return (
        <header className="flex cabecalho absolute z-[100] w-full top-2 text-white gap-6 font-normal justify-center py-2 items-center">

            <Link href={'/'} className="cursor-pointer">
                ABOUT
            </Link>

            <Link href={'/'} className="cursor-pointer">
                MENU
            </Link>

            <Link href={'/'} className="cursor-pointer">
                PLANS
            </Link>

            <Link href={'/'} className="cursor-pointer">
                CONTACT
            </Link>

        </header>
    );
}