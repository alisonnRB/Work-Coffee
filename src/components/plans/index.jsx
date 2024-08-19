import Image from 'next/image';
import plans from '../../assets/plans.png';

import './index.css';

export default function Plans() {
    return (
        <section className='relative flex flex-col items-center gaper z-[250] pb-[20%] bg-white'>
            <Image
                alt='Imagem aconchegante de um dia de trabalho na WorkCoffee'
                src={plans}
                objectFit='contain'
                className='w-full max-w-screen absolute z-10'
                quality={100}
            />

            <span className='z-20 p-4 w-full'>
                <h1 className='text-white font-semibold plans-title'>TRABALHE COM UM <br /> BOM CAFÉ</h1>
                <p className='font-semibold plans-price'>R$ 5,00 /h</p>
            </span>

            <div className='w-full flex flex-col items-center z-20 text-white font-semibold gap-4'>
                <p className='text-center plans-text w-[75%]'>O workcoffee oferece um ambiente ideial para trabalhar, estudar e relaxar. Confira também os planos para acesso ao nosso café</p>
                <button className='bg-red plans-text px-[2em] py-1'>VER PLANOS</button>
            </div>

        </section>
    );
}