import Image from 'next/image';

import SwitOn from '../../../assets/switOn.svg';
import SwitOff from '../../../assets/switOff.svg';

import SaltOn from '../../../assets/saltOn.svg';
import SaltOff from '../../../assets/saltOff.svg';

import CoffeeOn from '../../../assets/CoffeeOn.svg';
import CoffeeOff from '../../../assets/CoffeeOff.svg';


export default function Filter({food}) {

    return (
        <section className="flex justify-center w-full py-[5%]">

            <span className='flex items-end justify-center gap-[30%]'>

                <Image
                    src={food == 'coffee' ? CoffeeOn : CoffeeOff}
                    quality={100}
                    objectFit='contain'
                    className='cursor-pointer'
                />

                <Image
                    src={food == 'salt'  ? SaltOn : SaltOff}
                    quality={100}
                    objectFit='contain'
                    className='relative top-[15%] cursor-pointer'
                />

                <Image
                    src={food == 'swit'  ? SwitOn : SwitOff}
                    quality={100}
                    objectFit='contain'
                    className='relative top-[15%] cursor-pointer'
                />

            </span>

        </section>
    );
}