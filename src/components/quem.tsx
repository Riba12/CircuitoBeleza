import Link from "next/link";

export default function Quem() {

    return (
        <>
            <div className="flex bg-laranja-500">
                <div className="grow"></div>
                <section className="flex flex-col w-full font-century md:w-[960px] space-x-5  py-10">
                    <div>
                        <div className=" md:text-5xl text-center font-cocosharp">Quem é o TÉCNICO EDUCADOR da área da Beleza?</div>
                    </div>
                    <div className="flex my-4">
                        <div className="w-1/3 place-content-center">
                            <img src="quem2.png" className="rounded-md w-32 md:w-64 md:ml-8 md:mt-22" />
                        </div>
                        <div className="w-2/3 pr-2">
                            <div className="flex my-5 text-center md:space-x-5 text-[14px] md:text-base">
                                <div className="md:mt-10">
                                    <h1 className="text-center md:text-xl"><b>PROFISSIONAIS DA BELEZA</b></h1>
                                    <h2 className="pt-2">Profissionais da área da beleza que já validaram suas técnicas através de seus resultados e agora querem multiplicar esse conhecimento.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-center m-2 text-4xl">
                            <h1><b>Por que ser um TÉCNICO EDUCADOR da Beleza</b></h1>
                        </div>
                        <div className="space-y-2 text-xl mt-9 pr-2">
                            <h3>● Pelo reconhecimento dos clientes, mantendo sua agenda sempre cheia;</h3>
                            <h3>● Aumentando faturamento através de cursos e mentorias;</h3>
                            <h3>● Novas oportunidades de negócios através de marcas de cosméticos renomadas;</h3>
                            <h3>● Lançar sua própria marca de cosméticos;</h3>
                            <h3>● Reconhecimento no mercado da beleza, participando de feiras e eventos;</h3>
                            <h3>● Crescimento profissional em escala.</h3>
                        </div>
                    </div>
                    <div className="mt-5 flex justify-center">
                        <Link href="https://pay.kiwify.com.br/fTT4C1K" passHref legacyBehavior >
                            <a target='_blank' className="w-72 py-4 rounded-full text-center bg-laranja-100 text-white text-xl md:text-3xl hover:bg-gray-400">
                                Conheça
                            </a>
                        </Link>
                    </div>
                </section>
                <div className="grow"></div>
            </div>
        </>
    );
}