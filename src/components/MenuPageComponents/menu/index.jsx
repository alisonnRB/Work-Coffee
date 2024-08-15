import './index.css';

import CardFood from './cardFood';
import menu from '@/script/menu';

export default function Menu({ food }) {

    const FoodGenerator = () => {
        const list = [];

        if(!menu[food]){
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
        <section className="w-full flex justify-center">
            <main className="w-[80%] menuGrid gap-x-[5%]">
                {FoodGenerator()}
            </main>
        </section>
    );
}