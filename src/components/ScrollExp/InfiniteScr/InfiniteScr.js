﻿import React from 'react';
import pirat1 from "./img/pirat1.png";
import pirat2 from "./img/pirat2.png";
import pirat3 from "./img/pirat3.png";
import pirat4 from "./img/pirat4.png";
import pirat5 from "./img/pirat5.png";
import pirat6 from "./img/pirat6.png";
import pirat7 from "./img/pirat7.png";
import pirat8 from "./img/pirat8.png";
import {ReactComponent as Star} from "./img/star.svg";
import {ReactComponent as Arrow } from './img/arrow-icon.svg';
import "./InfiniteScr.css"

       





const InfiniteScr = () => {

    return (
            <div>
               
{/* <!-- div .wrapp --> */}
<div id="luxy" class="wrapp">

{/* <!-- div .header --> */}
<header class="header">
    <h1 class="title" data-splitting><span class="title_paralax">Parallax effect</span><span class="stroke">on
            gsap</span></h1>
    <div class="header__img">
        <img src={pirat1} alt="1" className='img1'/>
    </div>
    <div class="header__marq">
        <div class="header__marq-wrapp">
            <span class="header__marq-txt">discuss your ideas
                <span class="header__marq-star">
                    <Star/>
                </span>
            </span>
            <span class="header__marq-txt">discuss your ideas
                <span class="header__marq-star">
                    <Star/>
                </span>
            </span>
            <span class="header__marq-txt">discuss your ideas
                <span class="header__marq-star">
                    <Star/>  
                </span>
            </span>
            <span class="header__marq-txt">discuss your ideas
                <span class="header__marq-star">
                    <Star/>
                </span>
            </span>
        </div>
    </div>
</header>

<main class="main">

    {/* <!-- div .about --> */}
    <section class="about">
        <div class="about__wrapp">
            <div class="about__img">
                <img src={pirat2} alt="2"/>
            </div>
            <div class="about__txt">
                <h2 class="section-title">abo<span class="stroke">ut</span>
                    <span class="section-title__square"></span>
                </h2>
                <p class="about__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque esse
                    aspernatur fugit debitis quisquam. Quia exercitationem ipsum voluptas voluptatum hic
                    enim quo provident culpa possimus cupiditate! Dolorum quae doloremque cum rerum ipsam
                    inventore beatae, at odit, velit, aspernatur minima! Corporis.</p>
            </div>
        </div>
    </section>

    {/* <!-- div .benefits --> */}
    <section class="benefits">
        <div class="content">
            <h2 class="section-title">benef<span class="stroke">its</span>
                <span class="section-title__square"></span>
            </h2>

            <ul class="benefits__list">
                <li class="benefits__item">
                    <span class="benefits__num" data-speed="-200">/01</span>
                    <p class="benefits__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quas.
                    </p>
                </li>
                <li class="benefits__item">
                    <span class="benefits__num" data-speed="-150">/02</span>
                    <p class="benefits__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quas.
                    </p>
                </li>
                <li class="benefits__item">
                    <span class="benefits__num" data-speed="-150">/03</span>
                    <p class="benefits__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quas.
                    </p>
                </li>
                <li class="benefits__item">
                    <span class="benefits__num" data-speed="-150">/04</span>
                    <p class="benefits__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quas.
                    </p>
                </li>
                <li class="benefits__item">
                    <span class="benefits__num" data-speed="-110">/05</span>
                    <p class="benefits__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quas.
                    </p>
                </li>
                <li class="benefits__item">
                    <span class="benefits__num" data-speed="-200">/06</span>
                    <p class="benefits__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quas.
                    </p>
                </li>
            </ul>
        </div>
    </section>

    {/* <!-- div .work --> */}
    <section class="work">
        <div class="content">
            <h2 class="section-title">portfo<span class="stroke">lio</span>
                <span class="section-title__square"></span>
            </h2>
        </div>

        <div class="work__wrapp">
            <div class="work__item" data-speed="-300">
                <span class="work__item-num" data-speed="-1000">/001</span>
                <div class="work__item-img">
                    <img src={pirat3} alt="3"/>
                </div>
            </div>
            <div class="work__item" data-speed="-600">
                <span class="work__item-num" data-speed="-500">/002</span>
                <div class="work__item-img">
                    <img src={pirat4} alt="4"/>
                </div>
            </div>
            <div class="work__item" data-speed="-700">
                <span class="work__item-num" data-speed="-700">/003</span>
                <div class="work__item-img">
                    <img src={pirat5} alt="5"/>
                </div>
            </div>
            <div class="work__item" data-speed="-400">
                <span class="work__item-num" data-speed="-200">/004</span>
                <div class="work__item-img">
                    <img src={pirat6} alt="6"/>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- div .serv --> */}
    <section class="serv">
        <div class="content">
            <h2 class="section-title">servic<span class="stroke">es</span>
                <span class="section-title__square"></span>
            </h2>

            <div class="serv__list">
                <div class="serv__item">
                    <span class="serv__item-arrow" data-speed="500">
                        <Arrow/>
                    </span>
                    <div class="serv__item-txt">
                        <span class="serv__item-text">/Graphic Design</span>
                    </div>
                </div>
                <div class="serv__item">
                    <span class="serv__item-arrow" data-speed="400">
                         <Arrow/>
                    </span>
                    <div class="serv__item-txt">
                        <span class="serv__item-text">/UX/UI Design</span>
                    </div>
                </div>
                <div class="serv__item">
                    <span class="serv__item-arrow" data-speed="800">
                        <Arrow/>
                    </span>
                    <div class="serv__item-txt">
                        <span class="serv__item-text">/Web Design</span>
                    </div>
                </div>
                <div class="serv__item">
                    <span class="serv__item-arrow" data-speed="600">
                        <Arrow/>
                    </span>
                    <div class="serv__item-txt">
                        <span class="serv__item-text">/Brend Design</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

{/* <!-- div .footer --> */}
<footer class="footer">
    <div class="footer__div">
        <span data-speed="-300">a</span>
        <span data-speed="100">p</span>
        <span data-speed="300">p</span>
        <span data-speed="-300">r</span>
        <span data-speed="350">o</span>
        <span data-speed="200">v</span>
        <span data-speed="-310">e</span>
        <span data-speed="200">c</span>
        <span data-speed="-340">o</span>
        <span data-speed="-100">d</span>
        <span data-speed="300">e</span>
    </div>
</footer>
</div>
                
            </div>
    );
}

export default InfiniteScr;

