import Capa from '../../components/AboutPageComponents/capa';
import AboutText from '../../components/AboutPageComponents/about';

export default function About() {
    return (
        <main className="w-full flex flex-col bg-white">
            <Capa />
            <AboutText />
        </main>
    );
}