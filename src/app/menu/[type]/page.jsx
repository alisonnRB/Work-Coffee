import Capa from "@/components/MenuPageComponents/capa";
import Filter from "@/components/MenuPageComponents/filter";
import MenuS from "@/components/MenuPageComponents/menu";

import { notFound } from 'next/navigation';

export default function Menu({ params }) {
    const slug = params.type;
    const validSlugs = ['coffee', 'salt', 'swit'];

    if (!validSlugs.includes(slug)) {
        notFound();
    }

    return (
        <main className="flex flex-col bg-white">
            <Capa />
            <Filter food={params.type} />
            <MenuS food={params.type} />
        </main>
    )
}