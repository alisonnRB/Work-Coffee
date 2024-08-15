import Image from "next/image";
import './index.css';

export default function cardFood({item}){
    return(
        <div className="p-[4%] menu-card flex flex-col mb-[15%]">
            <Image 
                src={item.img}
                objectFit="contain"
                quality={100}
            />

            <h3 className="font-bold">{item.nome}</h3>
            <p className="text-gold">R${" " + item.price}</p>
        </div>
    );
}