import React from 'react'
import Image from 'next/image'
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';

const Instagram = () => {
  return (
    <div className="follow-instagram style-1">
        <div className="themesflat-container">
            <div className="row">
                <div className="col-12">
                    <div className="grid-follow-instagram grid grid-cols-2 md:grid-cols-5 gap-4">
                        <div className="follow-item">
                            <Image src="/coffee-shop/follow-1.jpg" alt="" width={218} height={218}/>
                            <div className="icon">
                                <a href="#"><i className="icon-instagram"></i></a>
                            </div>
                        </div>
                        <div className="follow-item">
                            <Image src="/coffee-shop/follow-2.jpg" alt="" width={218} height={218}/>
                            <div className="icon">
                                <a href="#"><i className="icon-instagram"></i></a>
                            </div>
                        </div>
                        <div className="follow-item">
                            <Image src="/coffee-shop/follow-3.jpg" alt="" width={218} height={218}/>
                            <div className="icon">
                                <a href="#"><i className="icon-instagram"></i></a>
                            </div>
                        </div>
                        <div className="follow-item">
                            <Image src="/coffee-shop/follow-4.jpg" alt="" width={218} height={218}/>
                            <div className="icon">
                                <a href="#"><i className="icon-instagram"></i></a>
                            </div>
                        </div>
                        <div className="follow-item">
                            <Image src="/coffee-shop/follow-5.jpg" alt="" width={218} height={218}/>
                            <div className="icon">
                                <a href="#"><i className="icon-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="title mt-4"><Link href="#" className="flex items-center justify-center gap-2"><FaInstagram />follow us instagram</Link></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Instagram