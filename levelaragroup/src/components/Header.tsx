"use client"
import Image from "next/image"
import { useEffect } from 'react'
import Typed from 'typed.js'

export default function Header() {

    useEffect(() => {
        new Typed('.typed', {
            strings: [
                "LevelARA Pro Academy",
                "LevelARA Invest-Market",
                "LevelARA Career"
            ],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
            backDelay: 2000
        })
    }, [])
    return (
        <>
            <section id="hero" className="hero section dark-background">
                <Image src="/img/18516.jpg" alt="" data-aos="fade-in" className="" width={1500} height={1000} />

                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <h2>LevelARA Group</h2>
                    <p>
                        <span className="typed">LevelARA Group</span>
                    </p>
                </div>
            </section >
        </>
    )
}