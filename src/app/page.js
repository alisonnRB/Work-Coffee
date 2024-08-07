import Capa from "@/components/capa";
import About from "@/components/about";

export default function Home() {
  return (
    <main className="flex flex-col self-center w-full">
      <Capa />
      <About />
    </main>
  );
}
