'use client';

import { Separator } from "./ui/separator";
import React from 'react';

interface HeadProps {
    scrollToComponent: (componentId: string) => void;
}

export default function Head({ scrollToComponent }: HeadProps) {
    return (
        <><div className="flex text-white">
            <div className="grow"></div>
            <section className="flex justify-around text-xs space-x-2 md:text-base md:w-4/5">
                <div className="md:w-1/5 hover:bg-bege-100">
                    <button className="w-full pt-2" onClick={() => scrollToComponent('5')}>Redes Sociais</button>
                </div>
                <Separator orientation="vertical" className="pt-10" />
                <div className=" md:w-1/5 hover:bg-bege-100">
                    <button className="w-full pt-2" onClick={() => scrollToComponent('1')}>E-Book</button>
                </div>
                <Separator orientation="vertical" className="pt-10" />
                <div className=" md:w-1/5 hover:bg-bege-100">
                    <button className="w-full pt-2" onClick={() => scrollToComponent('2')}>Depoimentos</button>
                </div>
                <Separator orientation="vertical" className="pt-10" />
                <div className=" md:w-1/5 hover:bg-bege-100">
                    <button className="w-full pt-2" onClick={() => scrollToComponent('3')}>Cursos</button>
                </div>
                <Separator orientation="vertical" className="pt-10" />
                <div className=" md:w-1/5 hover:bg-bege-100">
                    <button className="w-full pt-2" onClick={() => scrollToComponent('4')}>Contato</button>
                </div>
            </section>
            <div className="grow"></div>
        </div>
        </>
    );
}
