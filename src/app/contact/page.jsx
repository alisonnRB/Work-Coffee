import Capa from "@/components/ContatcPageComponents/capa";
import Contact from "@/components/ContatcPageComponents/contact";

import tel from "@/assets/Phone.svg";
import email from "@/assets/Email.svg";
import wpp from "@/assets/whatsapp.svg";
import location from "@/assets/Location.svg";

export default function ContactPage() {
    return (
        <main className="flex flex-col">
            <Capa />

            <span className="bg-pink-300 relative z-30 self-center top-0">
                <aside>
                    <Contact key={1} image={tel} title={"Telefone"} info={"+99 99 99999-9999"}/>
                    <Contact key={2} image={email} title={"Email"} info={"contato.cafe@gmail.com"}/>
                    <Contact key={3} image={wpp} title={"Whatsapp"} info={"+99 99 99999-9999"}/>
                    <Contact key={4} image={location} title={"Location"} info={"Rua. Arnaldo Berreira, 230, São Paulo - SP"}/>
                </aside>

                <div>

                </div>

            </span>

        </main>
    );
}