import Capa from "@/components/MenuPageComponents/capa"
import Filter from "@/components/MenuPageComponents/filter"

export default function Menu({food}){
    
    return(
        <main className="flex flex-col bg-white">
            <Capa />
            <Filter food={food}/>
        </main>
    )
}