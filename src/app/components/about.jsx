"use client"
import React from "react";
export function About(){
    return(
        <main id="about">
            <section>
                <h1>Turn your knoledge into an online course - no tech skills required</h1>
                <p>Kajabi's powerful all in one platform gives you everything you need to create, market, and sell you online course.</p>
                <br></br>
                <p>Start your 14-day free trial or <span className="bold">watch the demo</span> to see how simple building a knowledge busines can be</p>
                <br></br>
                <br></br>
                <div>
                <a href="#" id="buttonGetstarted">
                    Start free trial
                </a>
                <a href="#" id="buttonGetstarted" className="outerline">
                    Watch demo
                </a>
                </div>
            </section>
            <section />
        </main>
    )
}