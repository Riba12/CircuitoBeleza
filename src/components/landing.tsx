import Link from "next/link";
import Image from 'next/image'
import chica from '../../public/chica1.png'
import logo from '../../public/logo1.png'


export default function Landing() {

    return (
        <>
            <div className="bg-bege-500 flex">
                <div className="grow "></div>
                <section className="flex flex-row font-cocosharp w-full h-[32rem] pt-5 md:w-[960px] md:h-dvh 2xl:w-[1440px] ">
                    {/* <div className="h-4/5  flex justify-center space-x-40">
                    <div className="flex flex-col justify-center w-14 md:w-1/3 z-10">
                        <div className="flex justify-end mt-8">
                            <img src="logo1.png" className="w-12 md:w-32" />
                        </div>
                        <div className="md:text-4xl font-jose md:p-2 md:text-center w-72 mt-12 md:w-[420px]">
                            Centro técnico de capacitação e aperfeiçoamento profissional.
                        </div>
                        <div className="font-jose md:p-2 md:pl-10 w-72 md:w-[420px]">
                            Eleve sua carreira na área da beleza com técnicas práticas e conteúdos dinâmicos de alta qualidade que você precisa para ir mais longe.
                        </div>
                    </div>
                    <div className="w-1/3">
                        <Image src={chica} className="p-2 rounded-full z-0"  alt="Mulher Morena"/>
                    </div>
                </div>
                <div className="flex justify-center h-1/5 m-2 pt-8 font-jose">
                    <Link href="https://pay.kiwify.com.br/fTT4C1K" passHref legacyBehavior >
                        <a target='_blank' className="w-72 py-4 rounded-full text-center bg-laranja-100 text-white text-xl md:text-3xl hover:bg-gray-400">
                            Saber mais
                        </a>
                    </Link>
                </div>
                <div className="text-center font-jose text-2xl p-4 ">
                    O Brasil é o quarto maior mercado de beleza no mundo. (FORBES)<br/>
                    A indústria de beleza brilhou no início de 2024, movimentando impressionantes R$ 667,5 milhões em exportações no primeiro bimestre, um salto de 7,7%. (ABIHPEC)
                </div> */}
                    <div className="w-1/2 relative">
                        <Image src={chica} fill alt="Mulher Morena" priority />
                    </div>
                    <div className="w-1/2 flex flex-col md:justify-evenly">
                        <div className="animate-slideInLogo w-24 md:animate-slideInLogoBig md:w-44">
                            <Image src={logo} alt="Logo" className="w-12 md:w-20 2xl:w-32" />
                        </div>
                        <div className="animate-slideInText w-4/5 text-sm pt-2 md:text-xl 2xl:text-4xl">
                            Centro técnico de capacitação e aperfeiçoamento profissional.
                        </div>
                        <div className="animate-slideInText w-4/5 text-sm md:text-xl 2xl:text-4xl">
                            Eleve sua carreira na área da beleza com técnicas práticas e conteúdos dinâmicos de alta qualidade que você precisa para ir mais longe.
                        </div>
                        <div className="animate-slideInBT w-4/5 mt-10 md:mt-0">
                            <Link href="https://pay.kiwify.com.br/fTT4C1K" passHref legacyBehavior >
                                <a target='_blank' className="w-72 p-4 rounded-full text-center bg-laranja-100 text-white text-xl md:text-2xl 2xl:text-3xl hover:bg-gray-400">
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