import Link from "next/link";

export default function Quem() {

    return (
        <>
            <div className="flex my-10">
                <div className="grow"></div>
                <section className="flex flex-col w-full font-jose md:w-[960px] space-x-5">
                    <div>
                        <div className=" md:text-5xl text-center font-bold">Quem é o Téc. Educador da área da Beleza?</div>
                    </div>
                    <div className="flex ">
                        <div className="w-1/3 place-content-center">
                            <img src="quem2.png" className="rounded-md w-24 md:w-64 md:ml-8 md:mt-22" />
                        </div>
                        <div className="w-2/3">
                            <div className="flex my-5 space-x-1 md:space-x-5 text-[10px] md:text-base">
                                <div className="md:mt-10">
                                    <h1 className="text-center md:text-xl"><b>DONOS DE SALÃO</b></h1>
                                    <h2 className="pt-2 md:pt-10">Que querem aprimorar a gestão de seus negócios e otimizar os processos internos para aumentar a satisfação dos clientes e a rentabilidade do salão.</h2>
                                </div>
                                <div className="md:mt-10">
                                    <h1 className="text-center md:text-xl"><b>PROFISSIONAIS DA BELEZA</b></h1>
                                    <h2 className="pt-2">Profissionais da área da beleza que já validaram suas técnicas através de seus resultados e agora querem multiplicar esse conhecimento.</h2>
                                </div>
                                <div className="md:mt-10 pr-2">
                                    <h1 className="text-center md:text-xl"><b>GESTORES DE SALÃO</b></h1>
                                    <h2 className="pt-2">Que já atendem clientes e querem melhorar a qualidade dos serviços oferecidos, aumentando a fidelidade dos clientes e a eficiência operacional.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-center m-2 text-4xl">
                            <h1><b>Por que ser um Téc. Educador da Beleza</b></h1>
                        </div>
                        <div className="space-y-2 text-xl mt-9">
                            <h3>● Pelo reconhecimento dos clientes mantendo sua agenda sempre cheia</h3>
                            <h3>● Aumentando faturamento através de cursos e mentorias</h3>
                            <h3>● Novas oportunidades de negócios através de marcas de cosméticos renomadas</h3>
                            <h3>● Lançar sua própria marca de cosmético</h3>
                            <h3>● Reconhecimento do Mercado da Beleza participando de feiras e eventos</h3>
                            <h3>● Crescimento profissional em escala</h3>
                        </div>
                    </div>
                    <div className="mt-5 flex justify-center">
                        <Link href="https://www.instagram.com/circuitodabeleza_/" passHref legacyBehavior >
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