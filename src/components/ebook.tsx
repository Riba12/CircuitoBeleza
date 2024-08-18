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
import { Button } from "./ui/button";


export default function Ebook() {

    return (
        <div className="bg-branco-100 flex">
            <div className="grow"></div>
            <section className="w-[960px] p-10">
                <div>
                    <div>
                        <div className="text-yellow-600 text-xl pl-10">E-book</div>
                        <div className="text-center text-3xl pt-2">Técnico Educador da área da beleza</div>
                    </div>
                    <div className="flex justify-around py-4 space-x-20">
                        <Card className="bg-bege-100 w-1/4">
                            <CardHeader>
                                <CardTitle>Domine as Técnicas</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Aprenda as técnicas mais modernas e eficazes para oferecer serviços impecáveis.</p>
                            </CardContent>
                            <CardFooter className="place-content-center pt-10">
                                <p><Scissors /></p>
                            </CardFooter>
                        </Card>
                        <Card className="bg-bege-100 w-1/4">
                            <CardHeader>
                                <CardTitle>Entenda a Gestão</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Desvende os segredos da gestão de um negócio de sucesso na área da beleza</p>
                            </CardContent>
                            <CardFooter className="place-content-center pt-10">
                                <p><ChartNoAxesCombined /></p>
                            </CardFooter>
                        </Card>
                        <Card className="bg-bege-100 w-1/4">
                            <CardHeader>
                                <CardTitle>Desenvolva sua Habilidade</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Aprimore suas habilidades de comunicação, atendimento e relacionamento com o cliente.</p>
                            </CardContent>
                            <CardFooter className="place-content-center">
                                <p><Speech /></p>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="flex place-content-center space-x-2 m-4 bg-bege-100">
                        <NavigationMenu >
                            <NavigationMenuList>
                                <NavigationMenuItem >
                                    <NavigationMenuTrigger className="text-1xl bg-bege-100">1. Conteúdo Completo</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="w-52 p-4">Aborda todos os aspectos da área da beleza, desde técnicas básicas até as mais avançadas.</div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-1xl bg-bege-100">2. Linguagem Clara</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                    <div className="w-52 p-4">Escrita de forma simples e didática, fácil de entender e aplicar na prática.</div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-1xl bg-bege-100">3. Atualizado e Relevante</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                    <div className="w-52 p-4">Conteúdo atualizado com as últimas tendências e novidades do mercado.</div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-1xl bg-bege-100">4. Dicas e Estratégias</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                    <div className="w-52 p-4">Compartilhe dicas e estratégias práticas para alcançar o sucesso em sua carreira.</div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <div className="bg-marrom-100 text-center text-branco-100 text-xl rounded-md p-4 my-14 ml-3 w-[855px]">
                        DESCUBRA OPORTUNIDADES PARA GANHAR MUITO MAIS!
                    </div>
                    <div className=" flex justify-center m-2 p-4">
                        <Button className="bg-black text-2xl p-8">Garanta o seu agora</Button>
                    </div>
                </div>
            </section>
            <div className="grow"></div>
        </div>
    );
}