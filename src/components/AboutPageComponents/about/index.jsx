import Image from "next/image";

import Mission from "../../../assets/aboutMission.png";
import Vision from "../../../assets/aboutVision.png";

export default function About() {
    return (
        <section className="py-[20%]">

            <span className="flex">

                <aside className="w-1/2 flex flex-col items-center justify-around px-[6%] pb-[5%]">
                    <h1 className="font-bold AboutTitle">NOSSA MISSÃO</h1>
                    <p className="font-medium text-center AboutText">Na WorkCoffee, nossa missão é proporcionar um ambiente acolhedor, silencioso e inspirador onde nossos clientes possam trabalhar, estudar e relaxar com conforto. Valorizamos a produtividade, o bem-estar e a satisfação de cada pessoa que escolhe nosso espaço. Acreditamos que um ambiente bem projetado pode estimular a criatividade e a concentração, e nos dedicamos a oferecer o melhor em serviços e comodidades para tornar cada visita uma experiência única e gratificante.</p>
                </aside>

                <Image
                    src={Mission}
                    objectFit="contain"
                    quality={100}
                    className="w-1/2"
                />

            </span>

            <span className="flex flex-row-reverse">

                <aside className="w-1/2 flex flex-col items-center justify-around px-[6%] pb-[5%]">
                    <h1 className="font-bold AboutTitle">NOSSA VISÃO</h1>
                    <p className="font-medium text-center AboutText">Na WorkCoffee, prometemos oferecer um ambiente tranquilo e confortável que atende às necessidades de quem busca um espaço para trabalhar, estudar ou relaxar. Comprometemo-nos a manter um espaço limpo e organizado, fornecer um serviço amigável e de alta qualidade, e garantir que cada visita seja produtiva e agradável. Nossa equipe está sempre pronta para atender e superar as expectativas dos nossos clientes, criando um refúgio perfeito para a concentração e a criatividade.</p>
                </aside>

                <Image
                    src={Vision}
                    objectFit="contain"
                    quality={100}
                    className="w-1/2"
                />

            </span>

        </section>
    )
}