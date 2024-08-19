export default function toworkPlan() {
    return (
        <span className="flex flex-col items-center gap-4 w-[598px] max-w-[30%] max-h-[50vh] portrait:max-w-[70%] portrait:max-h-[40vh]">
            <main className="flex flex-col items-center gap-4 bg-white rounded-xl py-4 h-full w-full mt-[15%]">

                <h2 className="font-extrabold plan-title">PLANO TO WORK</h2>

                <div className="bg-green w-[103%] py-8 flex justify-center items-center">
                    <p className="text-white popular font-extrabold">R$ 400,OO p/mês</p>
                </div>

                <span className="flex flex-col items-center gap-1">
                    <h3 className="font-extrabold max-w-[70%] text-center plan-title">ENTRADA LIVRE TODOS OS DIAS</h3>
                    <h3 className="font-extrabold max-w-[70%] text-center plan-title">CAFÉ LIBERADO</h3>
                </span>


                <button className="border-solid border-[.1rem] border-black pl-2 w-[70%] font-extrabold py-2">ADQUIRIR</button>
            </main>
        </span>
    );
}