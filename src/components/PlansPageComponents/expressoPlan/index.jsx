import "./index.css";

export default function ExpressoPlan() {
    return (
        <span className="flex flex-col items-center gap-4 w-[640px] max-w-[30%] max-h-[60vh] portrait:max-w-[70%] portrait:max-h-[45vh]">

            <h1 className="font-extrabold text-gold popular">POPULAR</h1>

            <main className="flex flex-col items-center gap-6 bg-white rounded-xl py-6 w-full h-full">

                <h2 className="font-extrabold plan-title">PLANO EXPRESSO</h2>

                <div className="bg-red w-[103%] py-8 flex justify-center items-center ">
                    <p className="text-white popular font-extrabold">R$ 200,OO p/mês</p>
                </div>

                <h3 className="font-extrabold max-w-[70%] text-center plan-title">ENTRADA LIVRE TODOS OS DIAS</h3>

                <button className="border-solid border-[.1rem] border-black pl-2 w-[70%] font-extrabold py-2">ADQUIRIR</button>
            </main>
        </span>
    );
}