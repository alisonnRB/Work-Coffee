import Image from "next/image";
import AboutCapa from '../../../assets/aboutCapa.png';

export default function Capa() {
    return (
        <section className="flex flex-col justify-center items-center relative ">
            <Image
                src={AboutCapa}
                objectFit="contain"
                className="w-full max-w-screen relative"
                quality={100}
                draggable={false}
            />

            <h1 className="absolute text-center text-white text-[5em] font-extrabold">SOBRE <br /> WORKCOFFEE</h1>
        </section>
    );
}