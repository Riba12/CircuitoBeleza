import { Instagram, Facebook, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {

    return (
        <section className='bg-black text-branco-100 flex justify-between mt-10'>
            <div className='flex p-2 space-x-1 mt-2'>
                <Link href='https://www.instagram.com/circuitodabeleza_/' passHref legacyBehavior>
                    <a target='_blank'>
                        <Instagram/>
                    </a>
                </Link>
                <Link href='https://www.facebook.com/CircuitodaBelezaRegiaoSerrana/?locale=pt_BR' passHref legacyBehavior>
                    <a target='_blank'>
                        <Facebook/>
                    </a>
                </Link>
                <Link href='https://www.youtube.com/channel/UC-Oj0--Fh2fTpOhjGASg7YQ' passHref legacyBehavior>
                    <a target='_blank'>
                        <Youtube/>
                    </a>
                </Link>
            </div>
            <div className='p-2 mt-2 ml-32'>CIRCUITO DA BELEZA®</div>
            <div className='flex p-2 space-x-5'>
                <div>(24) 99335-1765</div>
                <div>Rua do Imperador 625 - 102<br/>Centro - Petrópolis-RJ</div>
            </div>
        </section>
    );
}