'use client'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import { useRef } from "react";
import { Button } from "./ui/button";

export default function Depo() {

    const plugin = useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    )

    const texto = ['O e-book me ajudou a ter mais segurança no meu trabalho e a oferecer serviços de qualidade.',
        'O conteúdo do e-book é completo e me deu uma visão abrangente da área da beleza.',
        'Adorei!!! Muito bom o e-book pra todos que desejam trabalhar na área da beleza.',
        'Estou impressionada com o e-book e suas dicas para profissionais',
        'Recomendo esse e-book a todos que sonham em trabalhar com beleza'
    ]
    const depo = ['depo0.png', 'depo1.png', 'depo2.png', 'depo3.png', 'depo4.png']
    const nome = ['Ana Maria Souza', 'Carla Francoso da Conceição', 'Joselma Rafaela Guimarães da Silva', 'Julia Soares', 'Marcela Souza Lima']
    const mk = ['mk1.png', 'mk2.png', 'mk3.png', 'mk4.png', 'mk5.png', 'mk6.png', 'mk7.png']
    return (
        <div className="flex bg-bege-100">
            <div className="grow"></div>
            <section className="my-8">
                <div className="flex justify-center">
                    <Carousel
                        plugins={[plugin.current]}
                        className="w-full max-w-xs"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                    >
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                <div className="flex flex-col text-xl">
                                                    <div className="flex justify-center">
                                                        <img src={depo[index]} className="rounded-md w-32" />
                                                    </div>
                                                    <div className="mt-4">
                                                        {texto[index]}
                                                    </div>
                                                    <div className="pt-6 text-3xl text-center">
                                                        {nome[index]}
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                <div>
                    <div className="text-yellow-600 text-xl">E-book</div>
                    <div className="text-5xl my-4">Técnico Educador da área da beleza</div>
                    <div className="text-center space-y-8">
                        <div>
                            O INVENTISMENTO PARA MUDAR SUA VIDA:
                        </div>
                        <div className="text-marrom-100 text-7xl">
                            R$ 97,00
                        </div>
                        <div className="text-marrom-100">
                            ou 5x de R$ 19,40
                        </div>
                        <div>
                            <Button className="text-2xl p-6">Quero mudar de vida agora</Button>
                        </div>
                    </div>
                </div>
                <div className="my-6 space-y-5">
                    <div className="flex space-x-5">
                        <div><img src={mk[0]} className="w-56" /></div>
                        <div><img src={mk[1]} className="w-60" /></div>
                        <div><img src={mk[2]} className="w-60" /></div>
                    </div>
                    <div className="flex space-x-5">
                        <div><img src={mk[4]} className="w-60" /></div>
                        <div><img src={mk[5]} className="w-60" /></div>
                        <div><img src={mk[6]} className="w-64" /></div>
                    </div>
                </div>
            </section>
            <div className="grow"></div>
        </div>
    );
}