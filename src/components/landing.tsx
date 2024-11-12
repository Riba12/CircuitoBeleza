import Link from "next/link";
import Image from 'next/image'
import chica from '../../public/chica2.png'
import logo from '../../public/logo1.png'


export default function Landing() {

    return (
        <>
            <div className="bg-gray-100 flex h-dvh text-marrom-500">
                <div className="grow "></div>
                <section className="flex flex-row font-cocosharp w-full h-full md:w-[960px] md:h-dvh 2xl:w-[1440px] ">
                    <div className="flex flex-col w-1/2">
                        <div className="relative place-content-center pl-2 h-2/3 md:pt-10 md:flex md:justify-end md:h-full md:pb-5">
                            <Image src={chica} alt="Mulher Morena" priority className="rounded-md md:w-[512px] 3xl:w-full" />
                        </div>
                        <div className="grow"></div>
                    </div>
                    <div className="w-1/2 flex flex-col justify-around md:justify-evenly md:h-dvh">
                        <div className="animate-slideInLogo w-24 md:animate-slideInLogoBig md:w-44">
                            <Image src={logo} alt="Logo" className="w-12 md:w-20 3xl:w-32" />
                        </div>
                        <div className="animate-slideInText w-4/5 text-base pt-2 md:text-3xl 3xl:text-5xl">
                            Centro técnico de capacitação e aperfeiçoamento profissional.
                        </div>
                        <div className="animate-slideInText w-4/5 text-base md:text-3xl 3xl:text-5xl">
                            Eleve sua carreira na área da beleza com técnicas práticas e conteúdos dinâmicos de alta qualidade que você precisa para ir mais longe.
                        </div>
                        <div className="animate-slideInBT md:animate-slideInBTBig mb-10 w-4/5 md:mt-0">
                            <Link href="https://pay.kiwify.com.br/fTT4C1K" passHref legacyBehavior className="w-full">
                                <a target='_blank' className="w-72 p-4 rounded-full text-center bg-laranja-500 text-white text-xl md:text-2xl 2xl:text-3xl hover:bg-gray-400">
                                    Saber mais
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