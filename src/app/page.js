import Capa from "@/components/capa";
import About from "@/components/about";
import Menu from "@/components/menu";

export default function Home() {
  return (
    <main className="flex flex-col self-center w-full">
      <Capa />
      <About />
      <Menu />
    </main>
  );
}
