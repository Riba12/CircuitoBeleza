'use client'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "./ui/card";

function Scroll() {
    setTimeout(() => {
        window.scrollTo({
            top: window.scrollY + 300,
            behavior: 'smooth'
        });
    }, 150);
}


export default function Cursos() {
    const data1 = new Date(2024, 9, 19);
    const data2 = new Date(2024, 9, 20);
    const data3 = new Date(2024, 9, 21);
    const data4 = new Date(2024, 10, 3);
    const data5 = new Date(2024, 10, 4);
    const data6 = new Date(2024, 10, 18);
    const data7 = new Date(2024, 10, 19);
    // const data8 = new Date(2024, 10, 4);
    const datasArq = [data2, data3];
    const datasColorimetria = [data6, data7];
    const datasMaster = [data4, data5];
    return (
        <div className="flex ">
            <div className="grow"></div>
            <section>
                <div className="text-center text-7xl my-6">Nossos Cursos</div>
                <div className="flex justify-center">
                    <img src="fed.png" className="w-60" alt="Escola Filiada - Federação das escolas de profissionais de cabeleireiros e similares do Brasil - Internacional" />
                </div>
                <div className="flex flex-col space-y-5">
                    <h1 className="text-center text-3xl">CURSOS SEMANAIS</h1>
                    <div className="flex justify-around text-center space-x-2 px-2">
                        <Card className="w-1/3 md:w-80 space-y-3">
                            <img src="manicure.png" className="rounded-md" />
                            <h2 className="text-sm">Segunda-Feira</h2>
                            <h3 className="text-xs pb-2">Manicure 8h às 17h</h3>
                        </Card>
                        <Card className="w-1/3 md:w-80 space-y-3">
                            <img src="barbeiro.png" className="rounded-md" />
                            <h2 className="text-sm">Terça-Feira</h2>
                            <h3 className="text-xs pb-2">Barbeiro 8h às 17h</h3>
                        </Card>
                        <Card className="w-1/3 md:w-80 space-y-3">
                            <img src="corte.png" className="rounded-md" />
                            <h2 className="text-sm">Quarta-Feira</h2>
                            <h3 className="text-xs pb-2">Corte 18h às 21h30</h3>
                        </Card>
                    </div>
                </div>
                <div className="h-auto border-8 border-bege-100 border-y-marrom-100 mt-5">
                    <Accordion type="multiple" className="w-full" >
                        <AccordionItem value="item-1" className="text-2xl">
                            <AccordionTrigger onClick={() => { Scroll() }}>Curso de Spa dos Pés (Método Juliana Marques)
                            </AccordionTrigger>
                            <AccordionContent className="flex">
                                <div className="place-content-center"><img src="pes.png" className="w-96 md:w-64" /></div>
                                <div className="hidden md:block">
                                    <div className="text-center md:text-2xl p-5">19 de Outubro</div>
                                    <div >
                                        <Calendar mode="single" selected={data1} defaultMonth={data1} />
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="text-2xl">
                            <AccordionTrigger onClick={() => {Scroll()}}>Curso de Arquitetura do Corte</AccordionTrigger>
                            <AccordionContent className="flex">
                                <div className="place-content-center"><img src="arquitetura1.png" className="w-96 md:w-64" /></div>
                                <div className="hidden md:block">
                                    <div className="text-center md:text-2xl p-5">20 e 21 de Outubro</div>
                                    <div>
                                        <Calendar mode="multiple" selected={datasArq} defaultMonth={data1} />
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="text-2xl">
                            <AccordionTrigger onClick={() => { Scroll() }}>Master Class - Expert em Cabelos Crespos e Cacheado</AccordionTrigger>
                            <AccordionContent className="flex">
                                <div className="place-content-center"><img src="master.png" className="w-96 md:w-64" /></div>
                                <div className="hidden md:block">
                                    <div className="text-center md:text-2xl p-5">3 e 4 de Novembro</div>
                                    <div className="ml-2">
                                        <Calendar mode="multiple" selected={datasMaster} defaultMonth={data4} />
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="text-2xl">
                            <AccordionTrigger onClick={() => { Scroll() }}>Curso de Colorimetria (Prático)</AccordionTrigger>
                            <AccordionContent className="flex">
                                <div className="place-content-center"><img src="colorimetria.png" className="w-96 md:w-64" /></div>
                                <div className="hidden md:block">
                                    <div className="text-center md:text-2xl p-5">18 e 19 de Novembro</div>
                                    <div>
                                        <Calendar mode="multiple" selected={datasColorimetria} defaultMonth={data7} />
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5" className="text-2xl">
                            <AccordionTrigger onClick={() => { Scroll() }}>Curso de Designer de Sobrancelha (Formação profissional)</AccordionTrigger>
                            <AccordionContent className="flex">
                                <div className="place-content-center"><img src="sobrancelha.png" className="w-96" /></div>                               
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6" className="text-2xl">
                            <AccordionTrigger onClick={() => { Scroll() }}>Curso de Manicure e Pedicure (Formação profissional)</AccordionTrigger>
                            <AccordionContent className="flex">
                                <div className="place-content-center"><img src="manicure1.png" className="w-96" /></div>                               
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-7" className="text-2xl">
                            <AccordionTrigger onClick={() => { Scroll() }}>Curso de Barbeiro (Formação profissional)</AccordionTrigger>
                            <AccordionContent className="flex">
                                <div className="place-content-center"><img src="barbeiro1.png" className="w-96" /></div>                               
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-8" className="text-2xl">
                            <AccordionTrigger onClick={() => { Scroll() }}>Curso de Mega Hair (Formação profissional)</AccordionTrigger>
                            <AccordionContent className="flex">
                                <div className="place-content-center"><img src="mega.png" className="w-96" /></div>                               
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div>
                    <div className="my-5 flex ">
                        <img src="logo_BH.png" className="rounded-full w-20 h-20 mt-10 ml-2 md:mt-0 md:w-32 md:h-32" />
                        <div className="md:pt-12 pl-5 text-3xl text-center">
                            Melhor Centro Técnico do Estado do Rio de Janeiro por 3 anos consecutivos<br/>(2021, 2022 e 2023)
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <img src="premio1.png" className="w-32 pl-2 md:w-96 rounded-md"/>
                        <img src="premio2.png" className="w-[226px] pr-2 md:object-cover md:w-[576px] rounded-md"/>
                    </div>
                </div>
            </section>
            <div className="grow"></div>
        </div>
    );
}