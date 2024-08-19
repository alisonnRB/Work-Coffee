import Link from "next/link";
import './index.css';

export default function Header() {
    return (
        <header className="flex cabecalho absolute z-[100] w-full top-2 text-white gap-6 font-normal justify-center py-2 items-center">


            <Link href={'/'} className="cursor-pointer">
                <p>HOME</p>
            </Link>

            <Link href={'/about'} className="cursor-pointer">
                <p>ABOUT</p>
            </Link>

            <Link href={'/menu/coffee'} className="cursor-pointer">
                <p>MENU</p>
            </Link>

            <Link href={'/plans'} className="cursor-pointer">
                <p>PLANS</p>
            </Link>

            <Link href={'/contact'} className="cursor-pointer">
                <p>CONTACT</p>
            </Link>

        </header>
    );
}