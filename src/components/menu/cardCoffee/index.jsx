import Image from "next/image";
import './index.css';

export default function CoffeeCard({ item }) {
    return (
        <div className="flex gap-[.7vw]">
            <aside className="h-full flex justify-center items-center w-[20%] min-w-[25px] barman">
                <Image
                    src={item.src}
                    objectFit="contain"
                    quality={100}
                    className="min-w-[20px] barman"
                />
            </aside>

            <span className="h-full w-full">

                <span className="flex items-end h-[35%] gap-[.7vw]">
                    <h3 className="font-semibold product-name text-nowrap">{item.nome}</h3>
                    <span className="border-b-[.3vw] border-solid border-gold h-1 w-full relative bottom-[0.7vw]"></span>
                    <h4 className="font-semibold text-gold price text-nowrap">R$ {" " + item.price}</h4>
                </span>

                <p className="desc-product font-medium">
                    {item.alt}
                </p>
                
            </span>

        </div>
    );
}