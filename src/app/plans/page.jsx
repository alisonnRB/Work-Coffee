import Capa from '@/components/PlansPageComponents/capa';
import ExpressoPlan from '@/components/PlansPageComponents/expressoPlan';
import ToworkPlan from '@/components/PlansPageComponents/toworkPlan';

export default function Plans(){
    return(
        <main className="flex flex-col bg-black">

            <Capa />

            <span className='flex self-center relative z-30 w-full items-center justify-center gap-[10%] portrait:flex-col portrait:gap-6 pb-20'>

                <ExpressoPlan />

                <ToworkPlan />
            </span>

        </main>
    );
}