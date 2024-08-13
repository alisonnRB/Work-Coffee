import Image from 'next/image';
import Link from 'next/link';
import barist from '../../assets/barist.png';
import './index.css';

import coffee from '../../script/menu';
import CoffeeCard from './cardCoffee';

const Coffees = () => {
    return Object.keys(coffee).map(category => {
      const item = coffee[category][0];
      return (
        <CoffeeCard
          key={item.nome}
          item={item}
        />
      );
    });
  };

export default function Menu() {
    return (
        <section className="bg-white relative top-96 z-[250]">
            <span className="flex flex-col px-10 pt-14 mb-[10em]">
                <h1 className="font-semibold text-black menu-title">COFFEE MENU</h1>
                <span className='bord'></span>
            </span>


            <div className='bg-pink-400 flex'>
                <aside className='px-10'>
                    
                    <Image
                        src={barist}
                        quality={100}
                    />

                    <Link href={'/'} className="w-full">
                        <button className="border-solid border-black text-black aboutText font-medium border-[.2em] py-[1em] w-full">
                            VER MENU COMPLETO
                        </button>
                    </Link>

                </aside>

                <main className='bg-green-400 flex h-full w-full mr-[2em]'>
                    <Coffees />
                </main>
            </div>
        </section>
    );
}