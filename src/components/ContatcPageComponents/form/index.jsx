"use client";

export default function Form() {

    function sendEmail(e) {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const number = e.target.number.value;
        const about = e.target.about.value;
        const message = e.target.message.value;

        if (name && email && number && about && message) {
            var link = `mailto:${email}?cc=contato.cafe@gmail.com&subject=${encodeURIComponent(about + ' - ' + name)}&body=${encodeURIComponent(message + "\n\nContato: " + number)}`;

            window.location.href = link;
        }
    }

    return (
        <form onSubmit={sendEmail} className="grid grid-cols-2 grid-rows-6 gap-x-2 gap-y-2  h-full">
            <input type="text" placeholder="Nome" name="name" className="border-solid border-[.1rem] border-black pl-2" />
            <input type="email" placeholder="Email" name="email" className="border-solid border-[.1rem] border-black pl-2" />
            <input type="text" placeholder="Assunto" name="about" className="border-solid border-[.1rem] border-black pl-2" />
            <input type="text" placeholder="Número" name="number" className="border-solid border-[.1rem] border-black pl-2" />
            <textarea name="message" placeholder="Sua mensagem" className="col-span-2 row-span-4 border-solid border-[.1rem] border-black pl-2 rounded-lg"></textarea>
            <button type="submit" className="font-bold p-2 w-full col-span-2 bg-transparent border-solid border-[.1rem] border-black">SEND</button>
        </form>
    );
}