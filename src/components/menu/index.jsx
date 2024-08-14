import Image from 'next/image';
import Link from 'next/link';
import barist from '../../assets/barist.png';
import './index.css';

import coffee from '../../script/menu';
import CoffeeCard from './cardCoffee';

export default function Menu() {

    const Coffees = () => {
        const list = [];

        for (let i = 0; i < coffee["coffee"].length; i++) {
            let coffees = coffee["coffee"][i];
            let item = <CoffeeCard
                key={coffees.nome}
                item={coffees}
            />

            list.push(item);
        }

        return list;
    };

    return (
        <section className="bg-white relative top-96 z-[250] pb-[25vh] mb-[45vh]">

            <span className="flex flex-col px-[4%] pt-14 portrait:pt-7 mb-[10em] portrait:mb-[2em]">
                <h1 className="font-semibold text-black menu-title">COFFEE MENU</h1>
                <span className='bord'></span>
            </span>


            <div className='flex p-2'>
                <aside className='w-1/3 flex flex-col items-center gap-20 portrait:gap-[3vh]'>

                    <Image
                        src={barist}
                        quality={100}
                        objectFit='contain'
                        className='w-[80%]'
                    />

                    <Link href={'/'} className="w-[80%]">
                        <button className="border-solid border-black text-black aboutText font-medium border-[.2vw] py-[1em] w-full">
                            VER MENU COMPLETO
                        </button>
                    </Link>

                </aside>

                <main className='bg-green-400 grid grid-cols-2 gap-x-[2%] gap-y-[1%] h-full w-2/3 pr-[1vw]'>
                    {Coffees()}
                </main>
            </div>
        </section>
    );
}