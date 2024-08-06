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
        <section className="w-full bg-green overflow-hidden">

            <Image
                src={capaLogo}
                objectFit="contain"
                className="w-full max-w-screen absolute z-50 top-0 left-0"
                quality={100}
            />

            <Image
                src={capaCafe}
                objectFit="contain"
                className="w-full max-w-screen absolute z-40 cafeAnimation"
                quality={100}
            />

            <Image
                src={capaFundo}
                objectFit="contain"
                className="w-full max-w-screen absolute z-10 fundoAnimation"
                quality={100}
            />

            <Graos image={Grao1} z={20} key={1} id={1} duration={'2s'} reverse={true} />
            <Graos image={Grao2} z={20} key={2} id={2} duration={'6s'} reverse={true} />
            <Graos image={Grao3} z={20} key={3} id={3} duration={'3s'} reverse={false} />
            <Graos image={Grao4} z={20} key={4} id={4} duration={'7s'} reverse={false} />

        </section>
    );
}