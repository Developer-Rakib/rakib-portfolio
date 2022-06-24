import React from 'react';

const Testimonial = () => {
    return (
        <div className='testimonial' id='testimonial'>
            <h1 class="heading"> <span>My</span> Testimonial </h1>

            <div className="testimonial-container">
                <div className='reveiw'>
                    <p className=''>Kamrul is great, professional service, good communication through the project and he seems to really care about doing a good job! I recommend working with Kamrul, he’s a good</p>
                    <div className="clint-img">
                        <img src={'https://kamrulthepro.com/images/testimonial%20img-1.webp'} alt="" />
                    </div>


                    <h3>{"Gusmancilla"}</h3>
                    <h3 className="pt-1 w-2/6 mx-auto">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </h3>
                </div>
            </div>

        </div>
    );
};

export default Testimonial;