'use client';
import Contato from "@/components/contato";
import Cursos from "@/components/cursos";
import Depo from "@/components/depo";
import Ebook from "@/components/ebook";
import Footer from "@/components/footer";
import Head from "@/components/head";
import Landing from "@/components/landing";
import LogoFixa from "@/components/logofixa";
import Quem from "@/components/quem";


function ScrollToComponent(componentId: string) {
  setTimeout(() => {
    const element = document.getElementById(componentId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, 150);
}

export default function Home() {
  return (
    <main className="w-[685px] md:min-w-max font-century">
      <Head scrollToComponent={ScrollToComponent} />
      <Landing />
      <Quem />
      <div id="1">
        <Ebook />
      </div>
      <div id="2">
        <Depo />
      </div>
      <div id="3">
        <Cursos />
      </div>
      <div id="4">
        <Contato />
      </div>
      <div id="5">
        <Footer />
      </div>
      <div className="fixed bottom-20 left-3">
        <LogoFixa />
      </div>
    </main>
  );
}

