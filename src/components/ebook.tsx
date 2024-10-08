import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import { Speech, Scissors, ChartNoAxesCombined } from 'lucide-react';
import Link from "next/link";


export default function Ebook() {

    return (
        <div className="bg-branco-100 flex">
            <div className="grow"></div>
            <section className="w-full md:w-[960px] md:p-10">
                <div>
                    <div>
                        <div className="text-yellow-600 text-xl pl-10">E-book</div>
                        <div className="flex justify-between my-8 space-x-3">
                            <div className="text-center text-2xl md:text-4xl pt-2 flex flex-col justify-center">Técnico Educador da área da beleza</div>
                            <div className="flex justify-center ">
                                <img src="book.png" className="w-72 md:w-80 rounded-md mr-6" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-around py-4 md:space-x-20">
                        <Card className="bg-bege-100 w-1/4">
                            <CardHeader>
                                <CardTitle className="text-sm md:text-2xl">Domine as Técnicas</CardTitle>
                            </CardHeader>
                            <CardContent className="text-[12px] md:text-base">
                                <p>Aprenda as técnicas mais modernas e eficazes para oferecer serviços impecáveis.</p>
                            </CardContent>
                            <CardFooter className="place-content-center pt-10">
                                <p><Scissors /></p>
                            </CardFooter>
                        </Card>
                        <Card className="bg-bege-100 w-1/4">
                            <CardHeader>
                                <CardTitle className="text-sm md:text-2xl">Entenda a Gestão</CardTitle>
                            </CardHeader>
                            <CardContent className="text-[12px] md:text-base">
                                <p>Desvende os segredos da gestão de um negócio de sucesso na área da beleza</p>
                            </CardContent>
                            <CardFooter className="place-content-center pt-10">
                                <p><ChartNoAxesCombined /></p>
                            </CardFooter>
                        </Card>
                        <Card className="bg-bege-100 w-1/4">
                            <CardHeader>
                                <CardTitle className="text-sm md:text-2xl">Desenvolva sua Habilidade</CardTitle>
                            </CardHeader>
                            <CardContent className="text-[12px] md:text-base">
                                <p>Aprimore suas habilidades de comunicação, atendimento e relacionamento com o cliente.</p>
                            </CardContent>
                            <CardFooter className="place-content-center">
                                <p><Speech /></p>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="flex bg-bege-100 w-full place-content-center rounded-md">
                        <NavigationMenu>
                            <NavigationMenuList className="w-[80px] md:w-1/4 md:ml-20">
                                <NavigationMenuItem >
                                    <NavigationMenuTrigger className="text-[8px] md:text-xl  bg-bege-100">1. Completo</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="w-52 p-4">Aborda todos os aspectos da área da beleza, desde técnicas básicas até as mais avançadas.</div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        <NavigationMenu>
                            <NavigationMenuList className="w-[80px] md:w-1/4 ml-4">
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-[8px] md:text-xl bg-bege-100">2. Linguagem Clara</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="w-52 p-4">Escrita de forma simples e didática, fácil de entender e aplicar na prática.</div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        <NavigationMenu>
                            <NavigationMenuList className="w-[80px] md:w-1/4">
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-[8px] md:text-xl bg-bege-100">3. Atualizado</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="w-52 p-4">Conteúdo atualizado com as últimas tendências e novidades do mercado.</div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        <NavigationMenu>
                            <NavigationMenuList className="w-[80px] md:w-1/4">
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-[8px] md:text-xl bg-bege-100 ">4. Estratégias</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="w-52 p-4">Compartilhe dicas e estratégias práticas para alcançar o sucesso em sua carreira.</div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <div className="bg-marrom-100 text-center text-branco-100 text-xl rounded-md p-4 my-14 ml-3 md:w-[855px]">
                        <h1 className="text-2xl"> DESCUBRA OPORTUNIDADES PARA GANHAR MUITO MAIS!</h1><br />
                        <h2 className="text-lg">Em média, profissionais que investem em formação e especializações na área da beleza podem alcançar um aumento significativo de renda de até 60%</h2>
                    </div>
                    <div className=" flex justify-center m-2 p-4">
                    <Link href="https://www.instagram.com/circuitodabeleza_/" passHref legacyBehavior >
                        <a target='_blank' className="w-96 py-4 rounded-full text-center bg-gray-800 text-white text-xl md:text-3xl hover:bg-gray-400">
                            Garanta o seu agora
                        </a>
                    </Link>
                    </div>
                </div>
            </section>
            <div className="grow"></div>
        </div>
    );
}