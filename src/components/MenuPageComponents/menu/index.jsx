import './index.css';

import CardFood from './cardFood';
import menu from '@/script/menu';

export default function Menu({ food }) {

    const FoodGenerator = () => {
        const list = [];

        const exist = ["coffee", "salt", "swit"];
        if(!exist[food]){
            return <p>Don't Have This</p>;
        }

        for (let i = 0; i < menu[food].length; i++) {
            let foods = menu[food][i];
            let item = <CardFood
                key={foods.nome}
                item={foods}
            />

            list.push(item);
        }

        return list;
    };

    return (
        <section className="w-full h-full flex justify-center">
            <main className="w-[80%] menuGrid gap-x-[5%] gap-y-[5%] pb-[20%] py-[5%]">
                {FoodGenerator()}
            </main>
        </section>
    );
}