'use client';
import Cursos from "@/components/cursos";
import Depo from "@/components/depo";
import Ebook from "@/components/ebook";
import Footer from "@/components/footer";
import Head from "@/components/head";
import Landing from "@/components/landing";
import LogoFixa from "@/components/logofixa";


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
    <main className="min-w-max font-century">
      <Head scrollToComponent={ScrollToComponent} />
      <Landing />
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
        <Footer />
      </div>
      <div className="fixed bottom-20 left-5">
        <LogoFixa />
      </div>
    </main>
  );
}

