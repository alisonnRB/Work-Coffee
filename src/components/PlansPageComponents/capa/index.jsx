import Image from "next/image";
import PlansCapa from '../../../assets/plansCapa.png';

export default function Capa() {
    return (
        <section className="flex flex-col justify-center items-center relative mb-[-50%] landscape:mb-[-60%]">
            <Image
                alt="imagem moderna para representar os beneficios dos planos na WorkCoffe"
                src={PlansCapa}
                objectFit="contain"
                className="w-full max-w-screen relative"
                quality={100}
                draggable={false}
            />
        </section>
    );
}