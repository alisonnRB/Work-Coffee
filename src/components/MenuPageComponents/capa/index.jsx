import Image from 'next/image';
import MenuCapa from '../../../assets/MenuCapa.png';

export default function Capa() {
    return (
        <section className="flex flex-col justify-center items-center relative ">
            <Image
                src={MenuCapa}
                alt='Imagem de um café feitto na WorkCoffe'
                objectFit="contain"
                className="w-full max-w-screen relative"
                quality={100}
                draggable={false}
            />

            <h1 className="absolute text-center text-white text-[5em] font-extrabold">MENU</h1>
        </section>
    );
}