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

  const lidarCompra = async () => {
    try {
      const response = await fetch('/api/meta-events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_name: 'Purchase',
          value: 59.9,
          currency: 'BRL',
          email: 'seu.email@exemplo.com', // Substitua ou capture o e-mail do cliente
        }),
      });
  
      const result = await response.json();
      console.log('Resposta da API Meta:', result);
    } catch (error) {
      console.error('Erro ao enviar evento:', error);
    }
  };
  

  return (
    // faltando responsividade em altura 
    <main className="w-full md:min-w-max font-century font-semibold bg-gray-100">
      <Head scrollToComponent={ScrollToComponent} />
      <Landing onCompra={lidarCompra}/>
      <Quem onCompra={lidarCompra}/>
      <div id="1">
        <Ebook onCompra={lidarCompra}/>
      </div>
      <div id="2">
        <Depo onCompra={lidarCompra}/>
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

