import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';
import { MdOutlineStarPurple500 } from "react-icons/md";

import 'swiper/css';

const Testimonial = () => {
    return (
        <div className="wg-testimonial style-1 py-20">
                <Image className="item-3" src="/coffee-shop/item-8.png" alt="" width={395} height={268}/>
                <div className="cup-coffee">
                    <Image src="/coffee-shop/item-3.png" alt="" width={256} height={257}/>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="49" height="52" viewBox="0 0 49 52">
                        <image id="Vector_Smart_Object" data-name="Vector Smart Object" width="49" height="52" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAA0CAYAAAAjUdCvAAAEc0lEQVRogcWZa4hWRRzGf7tum4lt5iW7CJkYlXTRCizoYkjagtIFgugOfehDVERhwUaRJdHlQwhFRB+K0oWISDPICiSJzS50sYWyjCi1tDRK3XY39X1iak4cjjPnnTlnjj1wXs47/5nnf565z386JOHAZOAaYAEwGzgB6AQOAFuBz4G3gH7gDxfBIYURkXvGSXpc0rDCMCRpqaQjCjyH9Mm3xDRgLTCrQiUOAlcA3/0fDZGJmAh8CMyswbUduBj4Jt3nhSET0W/HQF18C5wL7I7kGQ8sBM4HpgOTgGHgJ+ATYI0di25IOiuw/4fiuYjxcIyk5ZL2tuFuSXpd0iwXj/l5KrGIlq2YdgIWSvo1kntU0u0uEV8kFmHQ30bAVZL21+BfluczY2IU6E481vYDU4HfHDYz+30MjKvp43pgBXYBSy3AoAu43GN7NoEAg6eBY7EiRhMQujDfkXYBcGEi/qOAe7EidiUiLWKuI+26xD5uMdOzEfFZYuIMM4CxhbR5iX0cCfQaEe8lJs5guI/P/T8MOLkBP/ONo5VAqwFygwmF9zEN+JhjRGzLpqoG0JOj7GzIx0kZcR+wpwEHI7n3ps4dUzIRW4BbG3AwlHsfsX6SI9/EZie7NLGDYutuaFqEwYPAYwn5dxb+v5qQO8Oob4PWl2ATuN3B2y1pawLuPH7wzRjLgBuAfTVqaLMj7S/ggRqcLmwrm/ZeBi4Ffq9I/rUn/QVgXUVOFza1m7vNan6RPT/H4gNP/pZt5SqcLgyGLEBf2h2p62xQhoESm1lgr7Tdqy4GYuJDCyIG2w5JHQGc19Yc1Cbu1R2zFXgbeDEw7xsmBhGQz+zb7o/4hiLe+ac1IyN1pwbW0OJI3v6KLXFTMQIYCjPrnFKS1+yRjrNxo1CMt2NvekSZYXuO31NlZ+ma//NYESnAYC9wZ2SZldm2poqIoTb25ytwGqwGvorIvzx7qSJiaoltoOZx97XAfKuAjdmfWBEm/+kl9kcj+YoYDMhjBvFDxY+Kwdk22OuCqZk3a4oIGUsvFVs7VkRvia0vcG0oQ1lXxe7jlhQTY0SYvDd7bOts+L0uzmxT/h5gx0GpEQtSr2fBMYHh2Qmut8ya9X3JwrbGVzbGyXoP+ZMJBJhnUYmAHyVNritisYd8s72srCugS9KnHh9/SjqnrHyIg7GSNnm60XmJWmGJR0DL3mWUlg9x8IjHQV8iAZdI2ufxcXcIR7sMZ3gcrA48L4Tw7/IIuC+Up8w4RtJHDvKNknoSCJhTcmf3cAxXmfE2B/kWSdMSCLhM0m4HvxkDd8Xy+Qw9jloy8aKZNT++w/bzAw4BI5KursLrM9xRcGBmpxk1BUyyY8kF08Jzq3L7DM/kHK2SNLGmgHklkb93JU2pw+8znGYv6RfV/Pgue+fs6z6m/3fW9BG17Yh9TpS0wVP779uKSuKrKQGmf+90fPzPkm5MtMb891SJdrTDBBtMyB+efgGesBfosUGEtjA3/6lxNHA4/0Yw1tvLm1cShSwPBvA3P+r4KgbUhnoAAAAASUVORK5CYII="></image>
                    </svg>
                </div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading-section text-center mb-66">
                                <span className="sub sub-before sub-after">customer testimonials</span>
                                <div className="main">What customers say?</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="themesflat-container w1550">
                    <div className="w-full flex mt-20">       
                    <Swiper
                        modules={[Pagination]}
                        effect="fade"
                        spaceBetween={50}
                        slidesPerView={3}                        
                        autoplay={false}                         
                        speed={1000}              
                        loop={true}
                        grabCursor={true}        
                    >
                        <SwiperSlide className=''>                 
                            <div className="wg-testimonial-item text-center flex flex-col items-center" data-wow-delay="0.1s">
                                <div className="rating flex text-yellow-600">
                                    <MdOutlineStarPurple500 />
                                    <MdOutlineStarPurple500 />
                                    <MdOutlineStarPurple500 />
                                    <MdOutlineStarPurple500 />
                                    <MdOutlineStarPurple500 />
                                </div>
                                <p>“ So today I contacted the lovely Shaun of Arden this morning. We needed our machine looking at and we also needed some more coffee beans. I was in no way expecting to see Shaun turn up this afternoon to look at the machine! ”</p>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="15" height="14" viewBox="0 0 15 14">
                                    <image data-name="" width="15" height="14" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAA6klEQVQokYWTvRGDMAyFHxwLkBFYgdodjBBKlzBCUlC6SEZISspkhKSjDSt4Ba+QEyfdGZ8NanxI/qynHzIc2DyNFYASgFPaWP92FJ6nkS73AC4Mir2VNp18FBGwAfAAUEXe3fg2mRn87BTSshqrtBkyD6wB/HbAK583Pk++7NcBSM3y71Q5Z+0TNVqW6iKPW8ncR8A7dZdlNkFsUdq4gsdSewHK0rEv1YMneFRlECDwnFAjWVc4562RzaHGkMQUKKpWk5oHhpadORPY+isaLgmBYXPIvpQg3O1wPakW+RHW+sintKGubw3AH0hmQnn/bYKgAAAAAElFTkSuQmCC"></image>
                                </svg>
                                <div className="name"><a href="#">Ron T - Leicester</a></div>
                            </div>               
                        </SwiperSlide>

                        <SwiperSlide className=''>                 
                            <div className="wg-testimonial-item text-center flex flex-col items-center" data-wow-delay="0.1s">
                                <div className="rating flex text-yellow-600">
                                    <MdOutlineStarPurple500 />
                                    <MdOutlineStarPurple500 />
                                    <MdOutlineStarPurple500 />
                                    <MdOutlineStarPurple500 />
                                    <MdOutlineStarPurple500 />
                                </div>
                                <p>“ So today I contacted the lovely Shaun of Arden this morning. We needed our machine looking at and we also needed some more coffee beans. I was in no way expecting to see Shaun turn up this afternoon to look at the machine! ”</p>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="15" height="14" viewBox="0 0 15 14">
                                    <image data-name="" width="15" height="14" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAA6klEQVQokYWTvRGDMAyFHxwLkBFYgdodjBBKlzBCUlC6SEZISspkhKSjDSt4Ba+QEyfdGZ8NanxI/qynHzIc2DyNFYASgFPaWP92FJ6nkS73AC4Mir2VNp18FBGwAfAAUEXe3fg2mRn87BTSshqrtBkyD6wB/HbAK583Pk++7NcBSM3y71Q5Z+0TNVqW6iKPW8ncR8A7dZdlNkFsUdq4gsdSewHK0rEv1YMneFRlECDwnFAjWVc4562RzaHGkMQUKKpWk5oHhpadORPY+isaLgmBYXPIvpQg3O1wPakW+RHW+sintKGubw3AH0hmQnn/bYKgAAAAAElFTkSuQmCC"></image>
                                </svg>
                                <div className="name"><a href="#">Ron T - Leicester</a></div>
                            </div>               
                        </SwiperSlide>

                        <SwiperSlide className=''>                 
                            <div className="wg-testimonial-item text-center flex flex-col items-center" data-wow-delay="0.1s">
                                <div className="rating flex text-yellow-600">
                                    <MdOutlineStarPurple500 />
                                    <MdOutlineStarPurple500 />
                                    <MdOutlineStarPurple500 />
                                    <MdOutlineStarPurple500 />
                                    <MdOutlineStarPurple500 />
                                </div>
                                <p>“ So today I contacted the lovely Shaun of Arden this morning. We needed our machine looking at and we also needed some more coffee beans. I was in no way expecting to see Shaun turn up this afternoon to look at the machine! ”</p>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="15" height="14" viewBox="0 0 15 14">
                                    <image data-name="" width="15" height="14" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAA6klEQVQokYWTvRGDMAyFHxwLkBFYgdodjBBKlzBCUlC6SEZISspkhKSjDSt4Ba+QEyfdGZ8NanxI/qynHzIc2DyNFYASgFPaWP92FJ6nkS73AC4Mir2VNp18FBGwAfAAUEXe3fg2mRn87BTSshqrtBkyD6wB/HbAK583Pk++7NcBSM3y71Q5Z+0TNVqW6iKPW8ncR8A7dZdlNkFsUdq4gsdSewHK0rEv1YMneFRlECDwnFAjWVc4562RzaHGkMQUKKpWk5oHhpadORPY+isaLgmBYXPIvpQg3O1wPakW+RHW+sintKGubw3AH0hmQnn/bYKgAAAAAElFTkSuQmCC"></image>
                                </svg>
                                <div className="name"><a href="#">Ron T - Leicester</a></div>
                            </div>               
                        </SwiperSlide>

                        <SwiperSlide className=''>                 
                            <div className="wg-testimonial-item text-center flex flex-col items-center" data-wow-delay="0.1s">
                                <div className="rating flex text-yellow-600">
                                    <MdOutlineStarPurple500 />
                                    <MdOutlineStarPurple500 />
                                    <MdOutlineStarPurple500 />
                                    <MdOutlineStarPurple500 />
                                    <MdOutlineStarPurple500 />
                                </div>
                                <p>“ So today I contacted the lovely Shaun of Arden this morning. We needed our machine looking at and we also needed some more coffee beans. I was in no way expecting to see Shaun turn up this afternoon to look at the machine! ”</p>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="15" height="14" viewBox="0 0 15 14">
                                    <image data-name="" width="15" height="14" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAA6klEQVQokYWTvRGDMAyFHxwLkBFYgdodjBBKlzBCUlC6SEZISspkhKSjDSt4Ba+QEyfdGZ8NanxI/qynHzIc2DyNFYASgFPaWP92FJ6nkS73AC4Mir2VNp18FBGwAfAAUEXe3fg2mRn87BTSshqrtBkyD6wB/HbAK583Pk++7NcBSM3y71Q5Z+0TNVqW6iKPW8ncR8A7dZdlNkFsUdq4gsdSewHK0rEv1YMneFRlECDwnFAjWVc4562RzaHGkMQUKKpWk5oHhpadORPY+isaLgmBYXPIvpQg3O1wPakW+RHW+sintKGubw3AH0hmQnn/bYKgAAAAAElFTkSuQmCC"></image>
                                </svg>
                                <div className="name"><a href="#">Ron T - Leicester</a></div>
                            </div>               
                        </SwiperSlide>
                        
                    </Swiper>                               
                    </div>
                </div>
            </div>
    )
}

export default Testimonial