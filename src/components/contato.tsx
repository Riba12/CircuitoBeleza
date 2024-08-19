import BotaoWpp from "./botaoWpp";


export default function Contato(){

    return(
        <div className="flex mt-10 ">
            <div className="grow"></div>
            <section className="flex flex-col w-[960px]">
                <div className="text-center text-5xl">Estamos a um clique de distância. Envie sua mensagem!</div>
                <div className="flex justify-center my-10">
                    <BotaoWpp 
                    phoneNumber="5524111111111"
                    message="Olá, gostaria de mais informações!"
                    />
                </div>
            </section>
            <div className="grow"></div>
        </div>
    );
}