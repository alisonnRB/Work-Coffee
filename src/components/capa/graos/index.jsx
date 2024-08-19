'use client';

import Image from 'next/image';
import { useEffect } from 'react';



export default function Graos({ image, m, duration, reverse, id }) {

    useEffect(() => {
        const grao = document.getElementById(`${id}`);
        if (grao) {
            grao.style.animationDuration = duration;
            if(reverse){
                grao.style.animationDirection = 'alternate-reverse';
            }
        }
    }, [id, reverse]);

    return (
        <>
            <Image
                src={image}
                alt='Gão de café, representando o tabalho de qualidade da WorkCoffe'
                objectFit="contain"
                className={`w-full max-w-screen z-20 relative ${m ? "mb-[-20%] adjust-media" : "mb-[-90%]"} grao sombra`}
                id={`${id}`}
                quality={100}
                draggable={false}
            />
        </>
    );
}