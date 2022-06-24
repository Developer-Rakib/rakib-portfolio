import React from 'react';
import { Bounce, Slide } from 'react-reveal';

const About = () => {
    return (
        <section class="about" id="about">

            <h1 class="heading"> <span>about</span> me </h1>

            <div class="row">

                <div class="info">
                    <Slide duration={1500} right>
                        <div>
                            <h3> <span> name : </span> Tazul Islam Rakib </h3>
                            <h3> <span> age : </span> 23 </h3>
                            <h3> <span> qualification : </span> Kamil </h3>
                            <h3> <span> post : </span> front end developer </h3>
                            <h3> <span> language : </span> English, Hndi, Bangla </h3>
                            <a href="https://www.linkedin.com/in/developer-rakib1/" target={'_blank'}><button class="btn">Hire Me</button></a>
                        </div>
                    </Slide>
                </div>

                <div class="counter">
                    <Slide duration={1500} left>
                        <div>
                            <div class="box">
                                <span>1.5+</span>
                                <h3>years of experience</h3>
                            </div>
                        </div>
                    </Slide>

                    <Slide duration={1500} left>
                        <div>
                            <div class="box">
                                <span>50+</span>
                                <h3>porject completed</h3>
                            </div>
                        </div>
                    </Slide>


                    <Slide duration={1500} left>
                        <div>
                            <div class="box">
                                <span>100+</span>
                                <h3>happy clients</h3>
                            </div>
                        </div>
                    </Slide>


                    <Slide duration={1500} left>
                        <div>

                            <div class="box">
                                <span>3+</span>
                                <h3>awards won</h3>
                            </div>
                        </div>
                    </Slide>


                </div>


            </div>

        </section >
    );
};

export default About;