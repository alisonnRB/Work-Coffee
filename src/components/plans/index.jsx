import Image from 'next/image';
import plans from '../../assets/plans.png';

export default function Plans() {
    return (
        <section className='relative flex flex-col items-center justify-between z-[250] pb-[20%] bg-white'>
            <Image
                src={plans}
                objectFit='contain'
                className='w-full max-w-screen absolute z-10'
                quality={100}
            />

            <span className='z-20 p-4 w-full mb-[15%]'>
                <h1 className='text-white font-semibold text-[5vw]'>TRABALHE COM UM <br /> BOM CAFÉ</h1>
                <p className='font-semibold text-[2vw]'>R$ 5,00 /h</p>
            </span>

            <div className='w-full flex flex-col items-center z-20 text-white font-semibold gap-6'>
                <p className='text-center text-[3vw] w-[75%]'>O workcoffee oferece um ambiente ideial para trabalhar, estudar e relaxar. Confira também os planos para acesso ao nosso café</p>
                <button className='bg-red text-[2vw] px-[2em] py-1'>VER PLANOS</button>
            </div>

        </section>
    );
}