import Image from "next/image";
import Link from "next/link";

import Room from '../../assets/aboutImage.png';
import Form from '../../assets/aboutForm.svg';

import './index.css';

export default function About() {
    return (
        <section className="flex w-full relative top-96 z-[300] overflow-x-clip">
            <Image
                src={Room}
                alt="Imagem do ambiente disponibilizado pela WorkCoffee para trabalhar"
                objectFit="contain"
                className="w-full max-w-screen"
                quality={100}
                draggable={false}
            />

            <div className="w-[75%] h-full absolute right-[-15%] mt-[-5%] flex flex-col items-center">
                <Image
                    src={Form}
                    alt="forma ilustrativa"
                    objectFit="contain"
                    className="w-full l max-w-screen absolute z-10"
                    quality={100}
                    draggable={false}
                />

                <span className="flex flex-col justify-around items-center z-20 h-full w-[70%] mt-[6%] mr-[13%]">
                    <h1 className="text-white font-bold relative text-[4rem] aboutTitle">
                        SOBRE A WORK COFFEE
                    </h1>

                    <p className="text-white text-center relative font-medium  w-[80%] aboutText">
                        Na WorkCoffe, acreditamos na criação do ambiente perfeito para você ler, estudar ou trabalhar em paz. Nosso café oferece um ambiente sereno e tranquilo, projetado para ajudar você a se concentrar e relaxar. Esteja você aqui para saborear nosso café cuidadosamente preparado, desfrutar de uma bebida quente ou saborear uma de nossas deliciosas refeições, estamos empenhados em fornecer a você um espaço confortável e produtivo.
                    </p>
                    <Link href={'/about'} className="w-full ml-[25%]">
                        <button className="border-solid border-white text-white aboutText font-medium border-[.2em] py-[1em] w-[75%]">
                            LER MAIS
                        </button>
                    </Link>

                </span>
            </div>

        </section>
    );
}