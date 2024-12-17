'use client'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from "react";


export default function Cursos() {

    // function Scroll() {

    //     if (abrir) {
    //         setTimeout(() => {
    //             window.scrollTo({
    //                 top: window.scrollY + 200,
    //                 behavior: 'smooth'
    //             });
    //         }, 150);
    //         setAbrir(false)
    //     }
    //     else
    //         setAbrir(true)
    // }

    function Listar() {
        return cursos.map((curso, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="text-start md:text-2xl">
              <AccordionTrigger className="text-start" >
                Curso de {curso}
              </AccordionTrigger>
              <AccordionContent className="flex justify-center">
                <img src={`/novas_artes/${index + 1}.png`} alt={`Arte ${curso}`} className="w-[640px] md:w-[704px]" />
              </AccordionContent>
            </AccordionItem>
          ));
    }

    // const [abrir, setAbrir] = useState(true)
    const cursos = ['Barbeiro - João Franco', 'Arquitetura do Corte - Raiane Alvez','Cabeleireiro - Alessandro Colares',
        'Cabeleireiro - Raiane Alvez', 'Colorimetria - Raiane Alvez', 'Técnico Educador - Andrea Barbosa', 'Loose Curls e Cachoterapia - Beatriz Cortácio',
        'Desvendando os Segredos Mechas em Cabelos Crespos e Cacheados - Beatriz Cortácio', 'Corte - Alessandro Colares',
        'Fade e Tesoura - João Franco', 'Manicure E Pedicure -  Juliana Marques',
        'Depilação - Tatiana Evaristo', 'Extensão de cílios - Karen Kelle', 'Designer de Sobrancelha - Karen Kelle',
        'Maquiagem Profissional - Thainá Pereira', 'Automaquiagem  - Thainá Pereira','Mega Hair - Uélita Aguiar'
        ]

    return (
        <div className="flex bg-gray-100">
            <div className="grow"></div>
            <section>
                <div className="text-center text-3xl md:text-7xl my-6 ">Nossos Cursos</div>
                <div  className="md:flex md:justify-center">

                <div className="h-auto border-8 border-marrom-500 border-y-black mt-5 md:w-3/4 ">
                    <Accordion type="multiple" className="w-full" >
                        <div className="max-h-80 md:max-h-[576px] overflow-y-auto border border-gray-300 rounded-md">
                            {Listar()}
                        </div>
                    </Accordion>
                </div>
                </div>
                <div>
                    <div className="flex justify-center bg-bege-500 rounded-full mt-5">
                        <img src="fed.png" className="w-60" alt="Escola Filiada - Federação das escolas de profissionais de cabeleireiros e similares do Brasil - Internacional" />
                    </div>
                    <div className="my-5 flex ">
                        <img src="logo_BH.png" className="rounded-full w-20 h-20 mt-10 ml-2 md:mt-0 md:w-32 md:h-32" />
                        <div className="md:pt-12 pl-5 text-3xl text-center">
                            Melhor Centro Técnico do Estado do Rio de Janeiro por 3 anos consecutivos<br />(2021, 2022 e 2023)
                        </div>
                    </div>
                    <div className="place-items-center space-y-4">
                        <img src="premio1.png" className="w-72 md:w-96 rounded-md" />
                        <img src="premio2.png" className="w-72 md:object-cover md:w-[576px] rounded-md" />
                    </div>
                </div>
            </section>
            <div className="grow"></div>
        </div>
    );
}