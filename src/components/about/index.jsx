import Image from "next/image";
import Link from "next/link";

import Room from '../../assets/aboutImage.png';

export default function About(){
    return(
        <section className="flex w-full bg-pink-950 relative top-96 z-[300]">
            <Image
                src={Room}
                objectFit="contain"
                className="w-full max-w-screen"
                quality={100}
                draggable={false}
            />
        </section>
    );
}