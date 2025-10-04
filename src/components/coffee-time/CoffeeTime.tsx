import React from 'react'
import Image from 'next/image'

const CoffeeTime = () => {
  return (
    <div className="wg-coffee-time grid grid-cols-1 lg:grid-cols-3">
        <div className="left">
            <Image src="/coffee-shop/coffee-time.jpg" alt="" width={614} height={717}/>
        </div>
        <div className="center">
            <div className="heading-section text-center mb-35">
                <span className="sub sub-before sub-after">location</span>
                <div className="main mb-8">how to find us?</div>
            </div>
            <div className="text">call us book a table &amp; delivery:</div>
            <div className="number-phone"><a href="tel:734-665-1852">(734) 665-1852</a></div>
            <div className="text s1">information coffee house:</div>
            <p>4517 Washington Ave. Manchester, Kentucky 39495, USA</p>
            <p><a href="mailto:Basilicofood123@gmail.com">Basilicofood123@gmail.com</a></p>
            <p>Mon - Fri : 9.00am - 22.00pm, Holidays : Close</p>
            <a href="contact.html" className="button-style-2 m-auto">GET DIRECTIONS</a>
        </div>
        <div className="right relative w-full">
            <div id="map" className="mapboxgl-map">
                <iframe src="https://snazzymaps.com/embed/567613" width="100%" height="714px" style={{border: "none"}}></iframe>
            </div>
        </div>
    </div>
  )
}

export default CoffeeTime