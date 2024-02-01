import React from 'react'
import Image from 'next/image'

const ChooseUs2 = () => {
  return (
    <div className="choose-us style-1 type-2 py-15">
        <div className="themesflat-container">
            <div className="row">
                <div className="col-12">
                    <div className="wrap flex">
                        <div className="content">
                            <div className="heading-section mb-8">
                                <span className="sub wow fadeInUp sub-before animated">the story of coffee</span>
                                <div className="main wow fadeInUp animated">Hello! i’m Sophia <br/> welcome to my cafe.</div>
                            </div>
                            <p className="wow mb-5 font-calibri mt-10">Simple and balanced. Alexander Petillo brings together flavors and specialties from Italy and beyond to create his own culinary world, full of surprising artistry. Donec quam felis, ultricies nec, pellentesque eu.</p>
                            <p className="wow mb-5 font-calibri">We see our customers as invited guests to a party, and we are the hosts. It’s our job every day to make every important aspect of the customer experience a little bit better. Donec quam felis, ultricies nec, pellentesque eu.</p>
                        </div>
                        <div className="img-right">
                            <div className="image-1 wow fadeInRight animated">
                                <Image className="w-full" src="/coffee-shop/about-6.jpg" alt="" height={550} width={547}/>
                            </div>
                            <div className="image-2 wow fadeInRight animated">
                                <Image className="w-full" src="/coffee-shop/about-7.jpg" alt="" height={550} width={547}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChooseUs2