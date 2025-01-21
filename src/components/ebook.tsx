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

import { Speech, Scissors, ChartNoAxesCombined, Asterisk } from 'lucide-react';
import Link from "next/link";
import { PropsWithChildren } from "react";


type CompraProps = {
    onCompra: () => void;
}

export default function Ebook({ onCompra }: PropsWithChildren<CompraProps>) {

    return (
        <div className="bg-gray-100 flex">
            <div className="grow"></div>
            <section className="w-full pt-5 md:w-[960px] md:p-10">
                <div>
                    <div>
                        <div className="text-xl pl-10">E-book</div>
                        <div className="flex justify-between my-8 space-x-1">
                            <div className="text-left pl-2 text-2xl w-1/2 md:text-4xl pt-2 flex flex-col justify-center">Técnico Educador da área da beleza</div>
                            <div className="w-1/2">
                                <img src="book.png" className=" md:w-80 rounded-md mr-6" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-around py-4 md:space-x-20 ">
                        <Card className="bg-marrom-500 text-bege-500 w-1/4 flex flex-col justify-between">
                            <CardHeader>
                                <CardTitle className="text-[10px] md:text-2xl">Domine as técnicas</CardTitle>
                            </CardHeader>
                            <CardContent className="text-[8px] md:text-base">
                                <p>Domine as técnicas educacionais e transmita o seu conhecimento com maestria.</p>
                            </CardContent>
                            <CardFooter className="place-content-center ">
                                <p><Scissors /></p>
                            </CardFooter>
                        </Card>
                        <Card className="bg-marrom-500 text-bege-500 w-1/4 flex flex-col justify-between">
                            <CardHeader>
                                <CardTitle className="text-[10px] md:text-2xl text-center">Gestão de carreira</CardTitle>
                            </CardHeader>
                            <CardContent className="text-[8px] md:text-base">
                                <p>Eleve o nível da sua carreira profissional e seja reconhecido como técnico educador da beleza em mais de 120 países.</p>
                            </CardContent>
                            <CardFooter className="place-content-center ">
                                <p><ChartNoAxesCombined /></p>
                            </CardFooter>
                        </Card>
                        <Card className="bg-marrom-500 text-bege-500 w-1/4 flex flex-col justify-between">
                            <CardHeader>
                                <CardTitle className="text-[10px] md:text-2xl">Desenvolva sua Habilidade Educacional</CardTitle>
                            </CardHeader>
                            <CardContent className="text-[8px] md:text-base">
                                <p>Transmita o seu conhecimento com segurança elevando as técnicas dos seus alunos. Crescendo cada vez mais no mercado da beleza e seja reconhecido através das suas habilidades.</p>
                            </CardContent>
                            <CardFooter className="place-content-center">
                                <p><Speech /></p>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="flex bg-bege-500 w-full place-content-center rounded-md text-black">
                        <NavigationMenu>
                            <NavigationMenuList className="w-[80px] md:w-1/4 md:ml-20">
                                <NavigationMenuItem >
                                    <NavigationMenuTrigger className="text-[8px] md:text-xl pr-10 bg-bege-500">1. Completo</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="w-52 p-4">Aborda todos os aspectos educacionais para você ministrar um curso com segurança</div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        <NavigationMenu>
                            <NavigationMenuList className="w-[80px] md:w-1/4 ml-4">
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-[8px] md:text-xl pr-12 bg-bege-500">2. Linguagem Clara</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="w-52 p-4">Escrita de forma simples e didática, fácil de entender e aplicar na prática.</div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        <NavigationMenu>
                            <NavigationMenuList className="w-[80px] md:w-1/4">
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-[8px] md:text-xl bg-bege-500">3. Atualizado</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="w-52 p-4">Conteúdo atualizado com as últimas tendências de posicionamento no mercado.</div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        <NavigationMenu>
                            <NavigationMenuList className="w-[80px] md:w-1/4">
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-[8px] md:text-xl bg-bege-500 ">4. Estratégias</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="w-52 p-4">Aprenda as estratégias e aplique na prática todos os segredos de um educador de sucesso na área da beleza.</div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <div className="bg-marrom-500 text-center text-branco-100 text-xl rounded-md p-4 my-14 mx-3 md:w-[855px]">
                        <h1 className="text-2xl">AUMENTE SEU FATURAMENTO!!!</h1><br />
                        <h2 className="text-lg">Em média, profissionais que investem em formação e especializações na área da beleza podem alcançar um aumento significativo de renda de até 60%</h2>
                        <br/>
                        <h2 className="text-lg ">Com o de Técnico Educador da Área da Beleza você pode aumentar a sua renda em até 150% - Segundo a coordenadora executiva do Circuito da Beleza Andréa Barbosa da Silva: “Já fechei contrato de 20 mil reais por 8 horas de palestra. Hoje no mercado tem profissionais que cobram 80 mil reais por 2 horas de palestra.”</h2>
                    </div>
                    <div className=" flex justify-center m-2 p-4">
                    <Link href="https://pay.kiwify.com.br/qJvU4jo" passHref legacyBehavior >
                        <a target='_blank' className="w-96 py-4 rounded-full text-center bg-laranja-500 text-xl md:text-3xl hover:bg-gray-400"
                        onClick={onCompra}
                        >
                            Garanta o seu agora
                        </a>
                    </Link>
                    </div>
                    <div className="flex text-xl pb-5 pl-1 text-marrom-500">
                        <Asterisk />
                        O Ebook tem o conteúdo aprovado e validado pela FEPCSSP(Federação das Escolas Profissionais de Cabeleireiro e Similares)
                    </div>
                </div>
            </section>
            <div className="grow"></div>
        </div>
    );
}