import Image from "next/image";
import ContactCapa from '../../../assets/contactCapa.png';

export default function Capa() {
    return (
        <section className="flex flex-col justify-center items-center relative mb-[-50%]">
            <Image
                src={ContactCapa}
                alt="doce e pães produzidos na WorkCoffee"
                objectFit="contain"
                className="w-full max-w-screen relative"
                quality={100}
                draggable={false}
            />
        </section>
    );
}