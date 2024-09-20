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
    const data1 = new Date(2024, 8, 23);
    const data2 = new Date(2024, 8, 24);
    // const data3 = new Date(2024, 8, 1);
    const data4 = new Date(2024, 8, 23);
    const data5 = new Date(2024, 8, 24);
    const data6 = new Date(2024, 8, 25);
    const data7 = new Date(2024, 10, 3);
    const data8 = new Date(2024, 10, 4);
    const datasMechas = [data1, data2];
    const datasCabelo = [data4, data5, data6];
    const datasMaster = [data7, data8];
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
                            <AccordionTrigger onClick={() => { Scroll() }}>Curso de Arquitetura do Corte
                            </AccordionTrigger>
                            <AccordionContent className="flex">
                                <div className="place-content-center"><img src="arquitetura.png" className="w-96" /></div>
                                <div>
                                    <div className="text-center md:text-2xl p-5">23 e 24 de Setembro</div>
                                    <div>
                                        <Calendar mode="multiple" selected={datasMechas} defaultMonth={data1} />
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        {/* <AccordionItem value="item-2" className="text-2xl">
                            <AccordionTrigger onClick={() => {Scroll()}}>Curso de Spa dos Pés</AccordionTrigger>
                            <AccordionContent className="flex">
                                <div className="place-content-center"><img src="curso2.png" className="w-96" /></div>
                                <div>
                                    <div className="text-center md:text-2xl p-5">01 de Setembro</div>
                                    <div>
                                        <Calendar mode="single" selected={data3} defaultMonth={data3} />
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem> */}
                        <AccordionItem value="item-4" className="text-2xl">
                            <AccordionTrigger onClick={() => { Scroll() }}>Workshop de Terapia Capilar</AccordionTrigger>
                            <AccordionContent className="flex">
                                <div className="place-content-center"><img src="terapia.png" className="w-96" /></div>
                                <div>
                                    <div className="text-center md:text-2xl p-5">23/24/25 de Setembro</div>
                                    <div className="ml-2">
                                        <Calendar mode="multiple" selected={datasCabelo} defaultMonth={data4} />
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="text-2xl">
                            <AccordionTrigger onClick={() => { Scroll() }}>Master Class - Expert em Crespos e Cacheados</AccordionTrigger>
                            <AccordionContent className="flex">
                                <div className="place-content-center"><img src="curso4.png" className="w-96" /></div>
                                <div>
                                    <div className="text-center md:text-2xl p-5">3 e 4 de Novembro</div>
                                    <div>
                                        <Calendar mode="multiple" selected={datasMaster} defaultMonth={data7} />
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

            </section>
            <div className="grow"></div>
        </div>
    );
}