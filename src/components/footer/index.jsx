import Link from "next/link";
import Image from "next/image";

import brand from "../../assets/workCoffeeBrand.png";
import facebook from "../../assets/facebook.svg";
import instagran from "../../assets/instagran.svg";
import send from '../../assets/emailSend.svg';

import './index.css';

export default function Footer() {
    return (
        <footer className="bg-green flex footer-info py-8 justify-around text-white">

            <section className="flex flex-col gap-[9vh]">
                <Link href={'/'}>
                    <Image
                        src={brand}
                        objectFit="contain"
                        quality={100}
                    />
                </Link>

                <span className="flex flex-col gap-1">
                    <h6 className="text-white">Follow us on:</h6>

                    <span className="flex gap-4">
                        <Link href={'/'}>
                            <Image
                                src={facebook}
                            />
                        </Link>

                        <Link href={'/'}>
                            <Image
                                src={instagran}
                            />
                        </Link>
                    </span>
                </span>
            </section>

            <section className="flex flex-col gap-4">
                <h6 className="text-[2vw] font-semibold">Páginas</h6>

                <nav className="flex flex-col text-[1.5vw] gap-2">
                    <Link href={'/'}>
                        About
                    </Link>

                    <Link href={'/'}>
                        Menu
                    </Link>

                    <Link href={'/'}>
                        Plans
                    </Link>

                    <Link href={'/'}>
                        Contact
                    </Link>
                </nav>
            </section>

            <section className="flex flex-col gap-4">
                <h6 className="font-semibold text-[2vw]">News Latters</h6>
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