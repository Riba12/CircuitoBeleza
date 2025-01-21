import Link from "next/link";
import Image from 'next/image'
import chica from '../../public/chica2.png'
import logo from '../../public/logo1.png'
import { PropsWithChildren } from "react";


type CompraProps = {
    onCompra: () => void;
}

export default function Landing({ onCompra }: PropsWithChildren<CompraProps>) {


    return (
        <>
            <div className="bg-white flex h-dvh text-marrom-500">
                <div className="grow "></div>
                <section className="flex flex-row font-cocosharp w-full h-full md:w-[960px] md:h-dvh 2xl:w-[1440px] ">
                    <div className="flex flex-col w-1/2">
                        <div className="relative place-content-center pl-2 h-full md:pt-10 md:flex md:flex-col md:justify-center md:h-full md:pb-5">
                            <Image src={chica} alt="Mulher Morena" priority className="rounded-md h-96 md:h-full" />
                        </div>
                        <div className="grow"></div>
                    </div>
                    <div className="w-1/2 flex flex-col justify-around pl-4 md:pl-10 md:justify-evenly md:h-dvh">
                        <div className="w-full flex justify-center motion-scale-in-[0.5] motion-rotate-in-[10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur ">
                            <Image src={logo} alt="Logo" className="w-12 md:w-20 3xl:w-32" />
                        </div>
                        <div className="motion-preset-blur-left-lg motion-delay-500 motion-duration-2000 text-base pt-2 md:text-3xl 3xl:text-5xl">
                            <b>Centro técnico de capacitação e aperfeiçoamento profissional.</b>
                        </div>
                        <div className="motion-preset-blur-left-lg motion-delay-1000 motion-duration-2000 text-[12px] md:text-2xl 3xl:text-4xl">
                            Eleve sua carreira na área da beleza com técnicas práticas e conteúdos dinâmicos de alta qualidade que você precisa para ir mais longe.
                        </div>
                        <div className="motion-preset-blur-left-lg motion-delay-1500 motion-duration-2000 mb-10 w-4/5 md:mt-0">
                            <Link href="https://pay.kiwify.com.br/EmmiDHO" passHref legacyBehavior className="w-full">
                                <a target='_blank' className="w-72 p-4 rounded-full text-center bg-laranja-500 text-white text-sm md:text-2xl 2xl:text-3xl hover:bg-gray-400"
                                onClick={onCompra}
                                >
                                    Comprar Agora
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
                <div className="grow "></div>
            </div>
        </>
    );
}