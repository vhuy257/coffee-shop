'use client';
import React from 'react'
import Image from 'next/image'
import { basePath } from '@/constant/constant'
import { MdLocationOn } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import Link from 'next/link';

const Header = () => {
    
    return (
        <header id="header_main" className="header header-fixed style-absolute">
                    <div className="themesflat-container">
                        <div className="flex">
                            <div className="w-full">
                                <div className="header-top flex justify-between wrap my-4 items-center">
                                    <div className="wg-information location">
                                        <div className="icon text-white">
                                            <MdLocationOn fill='#fff' size={20}/>
                                        </div>
                                        <div className="content">
                                            <div className="title">LOCATION</div>
                                            <p>448 West Foxrun St. Bronx</p>
                                        </div>
                                    </div>
                                    <div className="wg-information call flex-row-reverse text-end">
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="18" viewBox="0 0 16 18">
                                                <image data-name="" width="16" height="18" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAzklEQVQ4jZVTURXCMAy88GagFmYBC9OCBbRMAxKYBJDAJDAJxytr8rLSsfZ+9toll7skhYJkT/LFOjxIBniQHCuTFdeYLliT7wAGtGEBMEmS8m5MNqiCC4BQl7LBLK6JQ6ONm4g87RRVNDbxW+zkGOdG+bGJ6PKLhCk7K4KzuS2YFknRl0pG2Rqgd96Cr1g9ESMQkcWR7BGc09e6f8oClKBooaS22/kRfh7LlrjU4PVNVO7AeGThCBaXE8T518Di7C04G9HnvzEuIrIuEYAP95cHumv/LXMAAAAASUVORK5CYII="></image>
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <div className="title">CALL DELIVERY</div>
                                            <p>(734) 665-1852 or (770) 942-7739</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-inner"> 
                        <div className="header-inner-wrap">
                            <div className="mobile-button">
                                <span></span>
                            </div>
                        
                            <div className="header-left">
                                <div className="canvas">
                                    <div className="canvas-button"><span></span></div>
                                    <div className="wg-welcom">
                                        <div className="inner">
                                            <div className="button-close"><i className="icon-close"></i></div>
                                            <div className="title">Welcome To <br/> Basilico Coffee &amp; Tea.</div>
                                            <div className="text">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</div>
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="15" height="14" viewBox="0 0 15 14">
                                                <image data-name=" copy" width="15" height="14" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAA6klEQVQokYWTvRGDMAyFHxwLkBGgoKJiBRghjGBGSEZIRkhGSEZIRgiVKxf2CqyQEyfdGZ8NanxI/qynHzIcWNvUFYASwKKNdf7tKNw2NV1WAC4Mir21saN8FBGwB/AAUEXe3fg2mRn87BQysBqnjZ0yD+wA/HbAK583Pk++7NcBSM3y71Q5Z1WJGh1LXSKPO8msIuCdussy+yA2a2OXgsfSeQHKMrIv1YMneFRlECDwnFAjWVc4562RzaHGkMQUKKpWk5onhuadORM4+CsaLgmBYXPIvpQg3O1wPakW+RHW+sinjaWubw3AH1VWQ+OlMsz1AAAAAElFTkSuQmCC"></image>
                                            </svg>
                                            <div className="number-phone"><a href="tel:734-665-1852">(734) 665-1852</a></div>
                                            <div className="place">62 Big Tree St, Livonia, New York 14487, USA</div>
                                            <div className="mail"><a href="mailto:customer_support@example.com">customer_support@example.com</a></div>
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="15" height="14" viewBox="0 0 15 14">
                                                <image data-name=" copy" width="15" height="14" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAA6klEQVQokYWTvRGDMAyFHxwLkBGgoKJiBRghjGBGSEZIRkhGSEZIRgiVKxf2CqyQEyfdGZ8NanxI/qynHzIcWNvUFYASwKKNdf7tKNw2NV1WAC4Mir21saN8FBGwB/AAUEXe3fg2mRn87BQysBqnjZ0yD+wA/HbAK583Pk++7NcBSM3y71Q5Z1WJGh1LXSKPO8msIuCdussy+yA2a2OXgsfSeQHKMrIv1YMneFRlECDwnFAjWVc4562RzaHGkMQUKKpWk5onhuadORM4+CsaLgmBYXPIvpQg3O1wPakW+RHW+sinjaWubw3AH1VWQ+OlMsz1AAAAAElFTkSuQmCC"></image>
                                            </svg>
                                            <ul className="time">
                                                <li><span>Monday – Friday:</span> 8.00am – 21.00pm</li>
                                                <li><span>Saturday – Sunday :</span> 9.00am – 22.00pm</li>
                                                <li><span>Holiday:</span> Closed</li>
                                            </ul>
                                            <div className="widget-social justify-center style-2">
                                                <ul className="">
                                                    <li><a href="#" className="icon-fb"></a></li>
                                                    <li><a href="#" className="icon-twitter"></a></li>
                                                    <li><a href="#" className="icon-instagram"></a></li>
                                                    <li><a href="#" className="icon-pinterest"></a></li>
                                                    <li><a href="#" className="icon-skype"></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <nav className="main-nav left">
                                <ul className="menu-primary-menu flex gap-10">
                                    <li className="menu-item menu-item-has-children">
                                        <a href="#">Home</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><a href="index.html">Home 1</a></li>
                                            <li className="menu-item"><a href="home-2.html">Home 2</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <a href="menu.html">Menu</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="reservation.html">Reservation</a>
                                    </li>
                                </ul>
                            </nav>
                            <div id="site-logo">
                                <div id="site-logo-inner">
                                    <a href="index.html" rel="home" className="main-logo">
                                        <Image id="logo_header" alt="" src={`${basePath}/logo.png`} width={96} height={94}/>
                                    </a>
                                </div>
                            </div>
                            <nav className="main-nav right">
                                <ul className="menu-primary-menu">
                                    <li className="menu-item menu-item-has-children current-menu-item">
                                        <a href="#">Pages</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item current-item"><a href="about.html">About</a></li>
                                            <li className="menu-item"><a href="offer.html">Offer</a></li>
                                            <li className="menu-item"><a href="team.html">Our Team</a></li>
                                            <li className="menu-item"><a href="portfolio.html">Portfolio</a></li>
                                            <li className="menu-item"><a href="event.html">Private Event</a></li>
                                            <li className="menu-item"><a href="shop.html">Shop</a></li>
                                            <li className="menu-item"><a href="shop-single.html">Shop Single</a></li>
                                            <li className="menu-item"><a href="404.html">404</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children">
                                        <a href="#">Blog</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><a href="blog.html">Blog</a></li>
                                            <li className="menu-item"><a href="blog-single.html">Blog Single</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <a href="contact.html">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="header-right">
                                <div className="header-search relative">
                                    <Link href="#" className="show-search text-white">
                                        <FiSearch size={20}/>
                                    </Link>
                                    <div className="top-search">
                                        <form className="search-form relative">
                                            <fieldset className="search">
                                                <input type="search" placeholder="Search..." className="" name="search" tabIndex={2} value="" aria-required="true"/>
                                            </fieldset>
                                            <div className="">
                                                <button className="" type="submit"><i className="icon-search"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="wg-bag relative cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="17" height="19" viewBox="0 0 17 19">
                                        <image id="shopping-bag" width="17" height="19" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAATCAYAAAB2pebxAAABDElEQVQ4jc2RsUoDQRCGvxyxiYjEhAtG0lj5CkIKIb0PkyZt6hQ+k61CerUQC/EKQRCDIEf4w8KEbCZ7EkkKf9i7229m/p25RVJqHUoaS3qSNLP32PhGfi08nI6AW+AUuAEegAtgCBTAFfC1VpJwnkh6k9R1vGt84mtSJi+SRhVjjiy+xjM/C9ADHhMc4z0Pl//kGTgxdgx8A2XC5ABoAJ+2/wDOQzuZVpra173SujM6jaJZMMkjcClpLulaUuFsCuNzy1sqrwOtqN2BrR/Hsf17lLPikvruxFdJZcU4pcVj9UMnHXfiWcXNBNUT8U644vYvRduonSVm/6tae+sk39Ek/1/j7MWkuZMFNBdxsnqKklujVAAAAABJRU5ErkJggg=="></image>
                                    </svg>
                                    <span className="number">3</span>
                                    <div className="bag-box">
                                        <div className="cart-item">
                                            <div className="image style-1">
                                                <Image src={`${basePath}/avt-product-1.png`} alt="" width={40} height={40}/>
                                            </div>
                                            <div className="content">
                                                <div className="price">$20.00</div>
                                                <div className="name"><a href="#">instant coffee</a></div>
                                            </div>
                                        </div>
                                        <div className="cart-item">
                                            <div className="image">
                                                <Image src={`${basePath}/avt-product-2.png`} alt="" width={40} height={40}/>
                                            </div>
                                            <div className="content">
                                                <div className="price">$20.00</div>
                                                <div className="name"><a href="#">instant coffee</a></div>
                                            </div>
                                        </div>
                                        <div className="cart-item last">
                                            <div className="image">
                                                <Image src={`${basePath}/avt-product-3.png`} alt="" width={40} height={40}/>
                                            </div>
                                            <div className="content">
                                                <div className="price"><span>$41.00</span> $31.00</div>
                                                <div className="name"><a href="#">instant coffee</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-nav-wrap">
                        <div className="overlay-mobile-nav"></div>
                        <div className="inner-mobile-nav">
                            <a href="index.html" rel="home" className="main-logo">
                                <Image id="mobile-logo_header" alt="" src={`${basePath}/logo-dark.png"`} width={121} height={117}/>
                            </a>
                            <div className="mobile-nav-close">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="white" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 122.878 122.88" enable-background="new 0 0 122.878 122.88" xmlSpace="preserve"><g><path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z"></path></g></svg>
                            </div>
                            <nav id="mobile-main-nav" className="mobile-main-nav">
                                <ul id="menu-mobile-menu" className="menu">
                                    <li className="menu-item menu-item-has-children-mobile">
                                        <a className="item-menu-mobile">Home</a>
                                        <ul className="sub-menu-mobile">
                                            <li className="menu-item"><a href="index.html">Home 1</a></li>
                                            <li className="menu-item"><a href="home-2.html">Home 2</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <a className="item-menu-mobile" href="menu.html">Menu</a>
                                    </li>
                                    <li className="menu-item">
                                        <a className="item-menu-mobile" href="reservation.html">Reservation</a>
                                    </li>
                                    <li className="menu-item menu-item-has-children-mobile current-menu-item">
                                        <a className="item-menu-mobile">Pages</a>
                                        <ul className="sub-menu-mobile">
                                            <li className="menu-item current-item"><a href="about.html">About</a></li>
                                            <li className="menu-item"><a href="offer.html">Offer</a></li>
                                            <li className="menu-item"><a href="team.html">Our Team</a></li>
                                            <li className="menu-item"><a href="portfolio.html">Portfolio</a></li>
                                            <li className="menu-item"><a href="event.html">Private Event</a></li>
                                            <li className="menu-item"><a href="shop.html">Shop</a></li>
                                            <li className="menu-item"><a href="shop-single.html">Shop Single</a></li>
                                            <li className="menu-item"><a href="404.html">404</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children-mobile">
                                        <a className="item-menu-mobile">Blog</a>
                                        <ul className="sub-menu-mobile">
                                            <li className="menu-item"><a href="blog.html">Blog</a></li>
                                            <li className="menu-item"><a href="blog-single.html">Blog Single</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <a href="contact.html">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
    )
}

export default Header