import Image from 'next/image';
import Link from 'next/link';

import SwitOn from '../../../assets/switOn.svg';
import SwitOff from '../../../assets/switOff.svg';

import SaltOn from '../../../assets/saltOn.svg';
import SaltOff from '../../../assets/saltOff.svg';

import CoffeeOn from '../../../assets/CoffeeOn.svg';
import CoffeeOff from '../../../assets/CoffeeOff.svg';

import './index.css';

export default function Filter({ food }) {

    return (
        <section className="flex justify-center w-full py-[5%]">

            <span className='flex items-end justify-center gap-[30%]'>

                <Link href={'/menu/coffee'} className='min-w-[30%] option'>
                    <Image
                        alt='icone de filtro, café'
                        src={food == 'coffee' ? CoffeeOn : CoffeeOff}
                        quality={100}
                        objectFit='contain'
                        className='cursor-pointer relative bottom-[1vw]'
                    />
                </Link>


                <Link href={'/menu/salt'} className='min-w-[30%] option'>
                    <Image
                        alt='icone de filtro, salgados'
                        src={food == 'salt' ? SaltOn : SaltOff}
                        quality={100}
                        objectFit='contain'
                        className='relative cursor-pointer'
                    />
                </Link>



                <Link href={'/menu/swit'} className='min-w-[30%] option'>
                    <Image
                        alt='icone de filtro, doces'
                        src={food == 'swit' ? SwitOn : SwitOff}
                        quality={100}
                        objectFit='contain'
                        className='relative cursor-pointer'
                    />
                </Link>


            </span>

        </section>
    );
}