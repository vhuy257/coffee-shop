import React from "react";
import { GiCoffeeCup } from "react-icons/gi";
import { FaRegFaceSmile } from "react-icons/fa6";
import { SiCoffeescript } from "react-icons/si";
import { TbShoppingBagCheck } from "react-icons/tb";
import CountUp from 'react-countup';

const Counter = () => {
  return (
    <div className="wg-counter">
      <div className="item-1"></div>
      <div className="item-2"></div>
      <div className="themesflat-container">
        <div className="flex flex-wrap gap-y-4">
            <div className="w-full sm:w-1/2 md:w-1/4">
                <div className="counter-item line-right style-1 type-1">
                <div className="icon">
                    <GiCoffeeCup />
                </div>
                <div className="counter">
                    <div className="number-counter">                    
                    <CountUp start={0} end={658}  delay={0} enableScrollSpy={true}></CountUp>
                    +
                    </div>
                </div>
                <div className="text">Cup coffee every day</div>
                </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/4">
                <div className="counter-item line-right style-1 type-1">
                <div className="icon">
                    <FaRegFaceSmile />
                </div>
                <div className="counter">
                    <div className="number-counter">                    
                    <CountUp start={0} end={98}  delay={0} enableScrollSpy={true}></CountUp>
                    %
                    </div>
                </div>
                <div className="text">Customer Satisfaction</div>
                </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/4">
                <div className="counter-item line-right style-1 type-1">
                <div className="icon">
                    <SiCoffeescript />
                </div>
                <div className="counter">
                    <div className="number-counter">
                    <CountUp start={0} end={125}  delay={0} enableScrollSpy={true}></CountUp>
                    </div>
                </div>
                <div className="text">type of drink &amp; coffee</div>
                </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/4">
                <div className="counter-item style-1 type-1">
                <div className="icon">
                    <TbShoppingBagCheck size={80}/>
                </div>
                <div className="counter">
                    <div className="number-counter">                    
                    <CountUp start={0} end={6758}  delay={0} enableScrollSpy={true}></CountUp>
                    +
                    </div>
                </div>
                <div className="text">order delivered</div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Counter;
