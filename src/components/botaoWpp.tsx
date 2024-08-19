
export default function BotaoWpp({ phoneNumber, message }: { phoneNumber: string; message: string }) {

    const formattedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-500  px-4 py-2 rounded-full font-bold text-2xl w-60"
        >
            <img
                src="wpp.svg"
                alt="WhatsApp"
                className="mr-6 h-5 w-5"
            />
            Diga Oi !
        </a>

    );
}