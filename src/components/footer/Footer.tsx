import React from 'react'
import Image from 'next/image'
import { RiFacebookFill } from "react-icons/ri";
import { TiSocialTwitter } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer id="footer" className="footer">
                <Image className="item-1" src="/coffee-shop/footer-1.png" alt="" width={228} height={280}/>
                <Image className="item-2" src="/coffee-shop/footer-2.png" alt="" width={228} height={280}/>
                <div className="themesflat-container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white gap-x-8 items-center">
                        <div className="col-md-6 col-lg-3 logo">
                            <div className="logo-footer" id="logo-footer">
                                <a href="index.html">
                                    <Image id="logo_footer" alt="" src="/coffee-shop/logo-dark.png" width={121} height={117}/>
                                </a>
                            </div>
                            <div className="text">Welcome to our Basilico Coffee <br/> House. Lorem simply text amet cing elit aenean feugiat. t hendrerit mi pulvinar vel.</div>
                        </div>
                        <div className="col-md-6 col-lg-3 contact">
                            <div className="title-wg">Contact Us</div>
                            <ul>
                                <li>
                                    <div className="text">
                                        <span>LOCATION:</span> <br/>
                                        4517 Washington Ave.   
                                    </div>
                                </li>
                                <li>
                                    <div className="text">
                                        <span>BOOK A TABLE:</span> <br/>
                                        Basilicofood123@gmail.com <br/> (734) 665-1852
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3 time">
                            <div className="title-wg">Hour Open</div>
                            <ul>
                                <li>
                                    <div className="text">
                                        <span>Monday - Friday : </span>
                                        9:00- 22:00
                                    </div>
                                </li>
                                <li>
                                    <div className="text">
                                        <span>Saturday: </span>
                                        10:00 - 23:00
                                    </div>
                                </li>
                                <li>
                                    <div className="text">
                                        <span>Sunday: </span>
                                        5:00 - 23:00
                                    </div>
                                </li>
                                <li>
                                    <div className="text">
                                        <span>Holidays: </span>
                                        Closed
                                    </div>
                                </li>
                                <li>
                                    <div className="text">
                                        <span>Happy Hours: </span>
                                        18:00 - 20:00
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3 newletters">
                            <div className="title-wg">Newletters &amp; Event </div>
                            <div className="text">Register your email to not miss any news and offers from us!</div>
                            <form className="comment-form">
                                <fieldset className="email">
                                    <input type="email" id="email" placeholder="Email address..." className="style-1" name="email" tabIndex={2} value="" aria-required="true"/>
                                </fieldset>
                                <div className="">
                                    <button className="" type="submit"><i className="icon-send"></i></button>
                                </div>
                                <div className="check">
                                    <label htmlFor="check-1" className="relative">
                                        <input id="check-1" type="checkbox"/>
                                        <span className="btn-checkbox"></span>
                                        I agree to the Privacy Policy
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="15" height="14" viewBox="0 0 15 14">
                            <image data-name="" width="15" height="14" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAA6klEQVQokYWTvRGDMAyFHxwLkBFYgdodjBBKlzBCUlC6SEZISspkhKSjDSt4Ba+QEyfdGZ8NanxI/qynHzIc2DyNFYASgFPaWP92FJ6nkS73AC4Mir2VNp18FBGwAfAAUEXe3fg2mRn87BTSshqrtBkyD6wB/HbAK583Pk++7NcBSM3y71Q5Z+0TNVqW6iKPW8ncR8A7dZdlNkFsUdq4gsdSewHK0rEv1YMneFRlECDwnFAjWVc4562RzaHGkMQUKKpWk5oHhpadORPY+isaLgmBYXPIvpQg3O1wPakW+RHW+sintKGubw3AH0hmQnn/bYKgAAAAAElFTkSuQmCC"></image>
                        </svg>
                        <div className="widget-social flex justify-end w-full">
                            <div className="text">Follow Us:</div>
                            <ul className="text-white flex gap-x-3">
                                <li><a href="#" className="icon-fb"><RiFacebookFill/></a></li>
                                <li><a href="#" className="icon-twitter"><TiSocialTwitter/></a></li>
                                <li><a href="#" className="icon-instagram"><AiFillInstagram/></a></li>
                                <li><a href="#" className="icon-youtube-play"><FaYoutube/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
    )
}

export default Footer