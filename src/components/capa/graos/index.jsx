'use client';

import Image from 'next/image';
import { useEffect } from 'react';



export default function Graos({ image, z, duration, reverse, id }) {

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
                objectFit="contain"
                className="w-full max-w-screen z-20 absolute grao sombra"
                id={`${id}`}
                quality={100}
                draggable={false}
            />
        </>
    );
}