
export default function Quem() {

    return (
        <>
            <div className="flex my-10">
                <div className="grow"></div>
                <section className="flex flex-col w-full md:w-[960px] space-x-5">
                    <div>
                        <div className=" md:text-5xl text-center font-bold">Pra quem é o Técnico Educador da área da beleza?</div>
                    </div>
                    <div className="flex ">
                        <div className="w-1/3 place-content-center">
                            <img src="book2.png" className="rounded-md w-24 md:w-64 md:ml-8 md:mt-22" />
                        </div>
                        <div className="w-2/3">
                            <div className="flex my-5 space-x-1 md:space-x-5 text-[10px] md:text-base">
                                <div className="md:mt-10">
                                    <h1 className="text-center md:text-xl"><b>DONOS DE SALÃO</b></h1>
                                    <h2 className="pt-2 md:pt-10">Que querem aprimorar a gestão de seus negócios e otimizar os processos internos para aumentar a satisfação dos clientes e a rentabilidade do salão.</h2>
                                </div>
                                <div className="md:mt-10">
                                    <h1 className="text-center md:text-xl"><b>PROFISSIONAIS DA BELEZA</b></h1>
                                    <h2 className="pt-2">Que desejam expandir sua atuação, se tornando educadores e capacitando outros profissionais na área, além de reduzir custos e otimizar processos no negócio.</h2>
                                </div>
                                <div className="md:mt-10 pr-2"> 
                                    <h1 className="text-center md:text-xl"><b>GESTORES DE SALÃO</b></h1>
                                    <h2 className="pt-2">Que já atendem clientes e querem melhorar a qualidade dos serviços oferecidos, aumentando a fidelidade dos clientes e a eficiência operacional.</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <div className="grow"></div>
            </div>
        </>
    );
}