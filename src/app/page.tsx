'use client';
import Testimonial from "@/components/Testimonials/Testimonial";
import ChooseUs from "@/components/choose-us/ChooseUs";
import ChooseUs2 from "@/components/choose-us/ChooseUs2";
import CoffeeTime from "@/components/coffee-time/CoffeeTime";
import Counter from "@/components/counter/Counter";
import Instagram from "@/components/instagram/Instagram";
import Partners from "@/components/partners/Partners";
import Image from "next/image";

export default function Home() {
    return (
        <main>
            
            <div className="banner-page about-page">
                <Image className="item-1" src="/coffee-shop/cup.png" alt="" width={228} height={269}/>
                <Image className="item-2" src="/coffee-shop/cup-1.png" alt="" width={228} height={269}/>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="text">- discovery of basilico coffee -</div>
                            <div className="heading">about us</div>
                            <ul className="breadcrumbs">
                                <li className="item">
                                    <a href="index.html">Home</a>
                                </li>
                                <li className="item">
                                    <a href="#">pages</a>
                                </li>
                                <li className="active">
                                    <a href="#">about us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ChooseUs />
            <ChooseUs2 />
            <Testimonial />
            <Counter />
            <CoffeeTime />
            <Instagram />
            <Partners />
        </main>
    )
}
