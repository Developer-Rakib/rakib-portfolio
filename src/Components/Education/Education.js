import React from 'react';
import { Bounce, } from 'react-reveal';

const Education = () => {
    return (
        <section class="education-container" id="education">

            <h1 class="heading"><span>my </span> education </h1>

            <div class="box-container">

                <Bounce duration={1500} left>
                    <div>
                        <div class="education">
                            <i class="fas fa-graduation-cap"></i>
                            <span>2022</span>
                            <h3>front end development</h3>
                            <p>
                                Programming Hero <br />
                                Level-4, 34, Awal Centre, Banani, Dhaka
                            </p>
                        </div>
                    </div>
                </Bounce>



                <Bounce duration={1500} top>
                    <div>

                        <div class="education">
                            <i class="fas fa-graduation-cap"></i>
                            <span>2021</span>
                            <h3>Masters</h3>
                            <p>
                                Darul Uloom Mueenul Islam <br />
                                Hathazari, Chottogram, Bangladesh
                            </p>
                        </div>
                    </div>
                </Bounce>

                <Bounce duration={1500} right>
                    <div>

                        <div class="education">
                            <i class="fas fa-graduation-cap"></i>
                            <span>2016</span>
                            <h3>HSC</h3>
                            <p>
                                Al-Jamiatul Islamia <br />
                                Maijdee, Noakhali, Bangladesh
                            </p>
                        </div>
                    </div>
                </Bounce>

                <Bounce duration={1500} bottom>
                    <div>
                        <div class="education">
                            <i class="fas fa-graduation-cap"></i>
                            <span>2012</span>
                            <h3>Hifzul Quran</h3>
                            <p>
                                Al-Faruq Islamic Academy <br />
                                Chatkhil, Noakhali, Bangladesh
                            </p>
                        </div>
                    </div>
                </Bounce>
            </div>

        </section>
    );
};

export default Education;