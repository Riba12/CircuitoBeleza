'use client'

import { Laptop, Smartphone, Tablet, Sparkles } from 'lucide-react';
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
import Link from "next/link";

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
        <div className="flex bg-oliva-500 ">
            <div className="grow"></div>
            <section className="my-8 w-full md:w-[960px]">
                <div className="flex justify-center">
                    <Carousel
                        plugins={[plugin.current]}
                        className="w-2/3 md:w-full max-w-md"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                    >
                        <CarouselContent >
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index} >
                                    <div className="p-1">
                                        <Card className='bg-gray-100 text-marrom-500'>
                                            <CardContent className="flex items-center justify-center p-6">
                                                <div className="flex flex-col text-sm md:text-xl">
                                                    <div className='flex space-x-10'>
                                                        <div className="flex justify-center">
                                                            <img src={depo[index]} className="rounded-full w-80 h-28 " />
                                                        </div>
                                                        <div className="mt-4 ">
                                                            {texto[index]}
                                                        </div>
                                                    </div>
                                                    <div className="pt-6 text-sm font-bold md:text-3xl text-center">
                                                        {nome[index]}
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className='text-black'/>
                        <CarouselNext className='text-black'/>
                    </Carousel>
                </div>
                <div>
                    <div className="text-bold pl-1 pt-2 text-xl">E-book</div>
                    <div className="text-2xl md:text-5xl font-bold text-center my-4">Técnico Educador da área da beleza</div>
                    <div className="text-center space-y-8 text-xl md:text-2xl">
                        <div>
                            O INVESTIMENTO PARA MUDAR SUA VIDA:
                        </div>
                        <div>
                            <div className='flex justify-center space-x-10'>
                                <Tablet className='mt-5' />
                                <Laptop className='w-12 h-12' />
                                <Smartphone className='mt-5' />
                            </div>
                            <div className='my-5'>Aproveite o conteúdo em qualquer dispositivo.</div>
                        </div>
                        <div className='text-red-600'>De <del>R$ 197,00</del></div>
                        <div className='text-3xl'>POR APENAS</div>
                        <div className="text-7xl">
                            R$ 97,00
                        </div>
                        <div className="text-yellow-600">
                            ou 5x de R$ 19,40
                        </div>
                        <div>
                            <Link href="https://pay.kiwify.com.br/fTT4C1K" passHref legacyBehavior >
                                <a target='_blank' className="w-96 p-4 rounded-full text-center bg-laranja-500 text-xl md:text-3xl hover:bg-gray-400">
                                    Quero mudar de vida agora
                                </a>
                            </Link>
                        </div>
                        <div className=''>
                            <div className='flex justify-center space-x-5 my-4'>
                                <Sparkles className='mt-5' />
                                <Sparkles className='w-12 h-12 pb-2' />
                                <Sparkles className='mt-5' />
                            </div>
                            <div className='text-4xl mb-4'>GARANTIA</div>
                            <div className='p-2 border-4 border-bege-100 border-y-marrom-100 space-y-5'>
                                <h1 className='text-3xl md:text-5xl '>Garantia incondicional de 7 dias</h1>
                                <h2 className='text-base'>Seu dinheiro de volta <b>sem perguntas</b> até 7 dias após a compra</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-6 px-1 grid gap-4 grid-cols-3 grid-rows-2">
                    
                        <img src={mk[0]} className="rounded-md" />
                        <img src={mk[1]} className="rounded-md" />
                        <img src={mk[2]} className="rounded-md" />
                    
                    
                        <img src={mk[4]} className="rounded-md" />
                        <img src={mk[5]} className="rounded-md" />
                        <img src={mk[6]} className="rounded-md" />
                    
                </div>
            </section>
            <div className="grow"></div>
        </div>
    );
}