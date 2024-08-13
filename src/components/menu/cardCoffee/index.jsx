import Image from "next/image";

export default function CoffeeCard({ item }) {
    return (
        <div className="flex">
            <aside className="h-full flex justify-center items-center w-max-[30%] min-w-[30%]">
                <Image
                    src={item.src}
                />
            </aside>

            <span className="h-full w-full">
                <span className=" flex items-center h-[40%] gap-3">
                    <h3 className="font-semibold text-white">{item.nome}</h3>
                    <span></span>
                    <h4 className="font-semibold">R$ {" " + item.price}</h4>
                </span>

                
            </span>

        </div>
    );
}