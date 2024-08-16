import Image from "next/image";

export default function Contact({image, title, info}){
    return(
        <div className="flex bg-white gap-4">
            <aside>
                <Image 
                    src={image}
                    objectFit="contain"
                    quality={100}
                />
            </aside>

            <span className="flex flex-col font-bold">
                <h1>{title}</h1>
                <p>{info}</p>
            </span>
        </div>
    );
}