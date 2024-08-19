import Image from "next/image";

export default function Contact({image, title, info}){
    return(
        <div className="flex items-center bg-white gap-4 rounded-lg p-2 h-1/5 portrait:p-5">
            <aside className="pl-2">
                <Image 
                    src={image}
                    objectFit="contain"
                    quality={100}
                    className="max-w-[80%]"
                />
            </aside>

            <span className="flex flex-col font-bold">
                <h1>{title}</h1>
                <p>{info}</p>
            </span>
        </div>
    );
}