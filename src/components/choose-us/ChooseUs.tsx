import React from 'react'
import Image from 'next/image'
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const ChooseUs = () => {
    return (
        <div className="choose-us style-1 type-1">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-12">
                        <div className="flex flex-col lg:flex-row wrap">
                            <div className="img-left">
                                <div className="image-1">
                                    <Image className="w-full" src="/coffee-shop/about-4.jpg" alt="" width={547} height={581}/>
                                </div>
                                <div className="image-2">
                                    <Image className="w-full" src="/coffee-shop/about-5.jpg" alt="" width={547} height={581}/>
                                    <div className="video-wrap">
                                        <a href="https://www.youtube.com/watch?v=Y8XpQpW5OVY" className="popup-youtube">
                                            <div className="icon">
                                                <i className="icon-play3"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <div className="heading-section mb-5">
                                    <span className="sub sub-before">coffee shop since 2003</span>
                                    <div className="main">We are not your <br/> average coffee shop </div>
                                </div>
                                <p className="font-calibri mb-5">We offer some of the best locally roasted coffee using “Brazilian Santos” beans. Enjoy Dark, Blonde, Jamaican, Italian &amp; Decaf roasts. Also available are our specialty Lattes, Frappes, Mochas, Cappuccinos, Americanos &amp; more. Lorem ipsum dolor sit amet, eu ferri mutat eos, eos ut feugiat eligendi scripserit. Est libris possim.</p>
                                <ul>
                                    <li className="">
                                        <IoCheckmarkCircleSharp size={24} className='text-[#C3A27C]'/> imported coffee and quality control
                                    </li>
                                    <li className="">
                                        <IoCheckmarkCircleSharp size={24} className='text-[#C3A27C]'/> cozy space to enjoy and relax
                                    </li>
                                    <li className="">
                                        <IoCheckmarkCircleSharp size={24} className='text-[#C3A27C]'/> make sure the coffee taste doesn&apos;t change
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseUs