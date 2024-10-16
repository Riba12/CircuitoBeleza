import Link from "next/link";
import { Button } from "./ui/button";


export default function Landing() {

    return (
        <><div className="bg-bege-100 flex">
            <div className="grow "></div>
            <section className="flex flex-col font-medium p-10 w-full md:w-[960px] h-1/2">
                <div className="h-4/5  flex justify-center space-x-40">
                    <div className="flex flex-col justify-center w-14 md:w-1/3 ">
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
                        <img src="chica1.png" className="p-2 rounded-full" />
                    </div>
                </div>
                <div className="flex justify-center h-1/5 m-2 pt-8 font-jose">
                    <Link href="https://www.instagram.com/circuitodabeleza_/" passHref legacyBehavior >
                        <a target='_blank' className="w-72 py-4 rounded-full text-center bg-laranja-100 text-white text-xl md:text-3xl hover:bg-gray-400">
                            Saber mais
                        </a>
                    </Link>
                </div>
                <div className="text-center font-jose text-2xl p-4 ">
                    O Brasil é o quarto maior mercado de beleza no mundo. (FORBES)<br/>
                    A indústria de beleza brilhou no início de 2024, movimentando impressionantes R$ 667,5 milhões em exportações no primeiro bimestre, um salto de 7,7%. (ABIHPEC)
                </div>
            </section>
            <div className="grow "></div>
        </div>
        </>
    );
}