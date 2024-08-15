import Link from "next/link";
import Image from "next/image";

import brand from "../../assets/workCoffeeBrand.png";
import facebook from "../../assets/facebook.svg";
import instagran from "../../assets/instagran.svg";
import send from '../../assets/emailSend.svg';

import './index.css';

export default function Footer() {
    return (
        <footer className="bg-green justify-items-center footer-info py-8 fote grid grid-cols-3 text-white">

            <section className="flex flex-col gap-[9vh] max-w-[50%]">
                <Link href={'/'}>
                    <Image
                        src={brand}
                        objectFit="contain"
                        quality={100}
                    />
                </Link>

                <span className="flex flex-col gap-1">
                    <h6 className="text-white subTitle-follow">Follow us:</h6>

                    <span className="flex gap-4">
                        <Link href={'/'} className="max-w-[30%]">
                            <Image
                                src={facebook}
                                objectFit="contain"
                                quality={100}
                            />
                        </Link>

                        <Link href={'/'} className="max-w-[30%]">
                            <Image
                                src={instagran}
                                objectFit="contain"
                                quality={100}
                            />
                        </Link>
                    </span>
                </span>
            </section>

            <section className="flex flex-col gap-4">
                <h6 className="subTitle-footer font-semibold">Páginas</h6>

                <nav className="flex flex-col footer-nav gap-2">
                    <Link href={'/about'}>
                        About
                    </Link>

                    <Link href={'/menu/coffee'}>
                        Menu
                    </Link>

                    <Link href={'/plans'}>
                        Plans
                    </Link>

                    <Link href={'/contact'}>
                        Contact
                    </Link>
                </nav>
            </section>

            <section className="flex flex-col gap-4 tree">
                <h6 className="font-semibold subTitle-footer">News Latters</h6>
                <span className="flex gap-2">
                    <input type="email" placeholder="Email" className="px-1 text-black outline-none" />
                    <Image
                        src={send}
                        objectFit="contain"
                        quality={100}
                        className="cursor-pointer"
                    />
                </span>
            </section>
        </footer>
    );
}