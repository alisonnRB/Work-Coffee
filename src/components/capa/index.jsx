import Image from "next/image";

import capaCafe from '../../assets/capaCafe.png';
import capaFundo from '../../assets/capaFundo.png';
import capaLogo from '../../assets/capaLogo.png'
import Grao1 from '../../assets/graoDeCafe1.png';
import Grao2 from '../../assets/graoDeCafe2.png';
import Grao3 from '../../assets/graoDeCafe3.png';
import Grao4 from '../../assets/graoDeCafe4.png';

import Graos from "./graos";

import './index.css';

export default function Capa() {
    return (
        <section className="w-full">

            <Image
                src={capaLogo}
                objectFit="contain"
                className="w-full max-w-screen relative z-50 mb-[-90%] sombra"
                quality={100}
                draggable={false}
            />

            <Image
                src={capaCafe}
                objectFit="contain"
                className="w-full max-w-screen relative z-40 mb-[-90%] cafeAnimation"
                quality={100}
                draggable={false}
            />

            <Image
                src={capaFundo}
                objectFit="contain"
                className="w-full max-w-screen relative mb-[-70%] z-10 fundoAnimation"
                quality={100}
                draggable={false}
            />

            <Graos image={Grao1} key={1} id={1} duration={'2s'} reverse={true} />
            <Graos image={Grao2} key={2} id={2} duration={'6s'} reverse={true} />
            <Graos image={Grao3} key={3} id={3} duration={'3s'} reverse={false} />
            <Graos image={Grao4} key={4} id={4} duration={'7s'} reverse={false} m={true}/>

        </section>
    );
}