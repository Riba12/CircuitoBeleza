import { Button } from "./ui/button";


export default function Landing() {

    return (
        <><div className="bg-bege-100 flex">
            <div className="grow "></div>
            <section className="flex flex-col font-medium p-10 w-[960px] h-1/2">
                <div className="h-4/5  flex justify-center space-x-40">
                    <div className="flex flex-col justify-center w-1/3 ">
                        <div className="flex justify-end">
                            <img src="logo1.png" className="w-32" />
                        </div>
                        <div className="text-4xl p-2 text-center w-[420px]">Sua escola de capacitação profissional</div>
                        <div className="font-light p-2 pl-10 w-[420px]">Eleve sua carreira na área da beleza com o Circuito da Beleza.
                            Descubra a educação de alta qualidade que você precisa para ir mais longe.</div>
                    </div>
                    <div className="w-1/3">
                        <img src="chica1.png" className="p-2 rounded-full" />
                    </div>
                </div>
                <div className="flex justify-center h-1/5 m-2 pt-8">
                    <Button className="w-96 py-8 rounded-full text-3xl hover:bg-gray-400">Saber mais</Button>
                </div>
                <div className="text-center font-bold text-2xl p-4 ">
                    O mercado de beleza no Brasil é o quarto maior do mundo.
                    Em 2020, por exemplo, houve um aumento de 54% na demanda por serviços de beleza em comparação ao ano anterior.
                </div>
            </section>
            <div className="grow "></div>
        </div>
        </>
    );
}