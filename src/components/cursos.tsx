'use client'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Calendar } from "@/components/ui/calendar"

function Scroll() {
    setTimeout(() => {       
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }, 150);
}


export default function Cursos() {
    const data1 = new Date(2024, 7, 25);
    const data2 = new Date(2024, 7, 26);
    const data3 = new Date(2024, 8, 1);
    const data4 = new Date(2024, 8, 23);
    const data5 = new Date(2024, 8, 24);
    const data6 = new Date(2024, 8, 25);
    const data7 = new Date(2024, 8, 15);
    const data8 = new Date(2024, 8, 16);
    const datasMechas = [data1, data2];
    const datasCabelo = [data4, data5, data6];
    const datasMaster = [data7,data8];
    return (
        <div className="flex ">
            <div className="grow"></div>
            <section>
                <div className="text-center text-7xl my-6">Nossos Cursos</div>
                <div className="flex justify-center">
                    <img src="fed.png" className="w-60" alt="Escola Filiada - Federação das escolas de profissionais de cabeleireiros e similares do Brasil - Internacional" />
                </div>
                <div className="h-auto border-8 border-bege-100 border-y-marrom-100">
                    <Accordion type="multiple"  className="w-full" >
                        <AccordionItem value="item-1" className="text-2xl">
                            <AccordionTrigger onClick={() => {Scroll()}}>Curso de Mechas em cabelos crespos e cacheados
                            </AccordionTrigger>
                            <AccordionContent className="flex">
                                <div className="place-content-center"><img src="curso1.png" className="w-96" /></div>
                                <div>
                                    <div className="text-center md:text-2xl p-5">25 e 26 de Agosto</div>
                                    <div>
                                        <Calendar mode="multiple" selected={datasMechas} defaultMonth={data1}/>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="text-2xl">
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
                        </AccordionItem>
                        <AccordionItem value="item-3" className="text-2xl">
                            <AccordionTrigger onClick={() => {Scroll()}}>Segunda Edição do Master Class Expert em Crespos e Cacheados.</AccordionTrigger>
                            <AccordionContent className="flex">
                                <div className="place-content-center"><img src="curso4.png" className="w-96" /></div>
                                <div>
                                    <div className="text-center md:text-2xl p-5">15/16 de Setembro</div>
                                    <div>
                                        <Calendar mode="multiple" selected={datasMaster} defaultMonth={data3} />
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="text-2xl">
                            <AccordionTrigger onClick={() => {Scroll()}}>3ª Edição de Terapia Capilar</AccordionTrigger>
                            <AccordionContent className="flex">
                                <div className="place-content-center"><img src="curso3.png" className="w-96" /></div>
                                <div>
                                    <div className="text-center md:text-2xl p-5">23/24/25 de Setembro</div>
                                    <div className="ml-2">
                                        <Calendar mode="multiple" selected={datasCabelo} defaultMonth={data3} />
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