import Capa from "@/components/ContatcPageComponents/capa";
import Contact from "@/components/ContatcPageComponents/contact";

import tel from "@/assets/Phone.svg";
import email from "@/assets/Email.svg";
import wpp from "@/assets/whatsapp.svg";
import location from "@/assets/Location.svg";

import Form from "@/components/ContatcPageComponents/form";

export default function ContactPage() {


    return (
        <main className="flex flex-col mb-[30%] portrait:mb-[80%]">
            <Capa />

            <span className="relative z-30 self-center flex h-[50vh] gap-4 portrait:flex-col">

                <aside className="h-full w-[40%] portrait:w-[40vh] portrait:self-center flex flex-col justify-between">
                    <Contact key={1} image={tel} title={"Telefone"} info={"+99 99 99999-9999"} />
                    <Contact key={2} image={email} title={"Email"} info={"contato.cafe@gmail.com"} />
                    <Contact key={3} image={wpp} title={"Whatsapp"} info={"+99 99 99999-9999"} />
                    <Contact key={4} image={location} title={"Location"} info={"Rua. Arnaldo Berreira, 230, São Paulo - SP"} />
                </aside>

                <div className="bg-white p-5 rounded-lg flex flex-col gap-4 portrait:w-[40vh] portrait:min-h-[80%]">
                    <h1 className="font-bold">ENVIE SUA MENSAGEM</h1>

                    <Form />

                </div>

            </span>

        </main>
    );
}