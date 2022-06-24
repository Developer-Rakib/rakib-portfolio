import React from 'react';
import { Fade } from 'react-reveal';
import computer from '../../img/Computer Village.png';
import trends from '../../img/trends.png';
import sara from '../../img/saramadicalhall.png';
import book from '../../img/fancybook.png';

const Portfolio = () => {
    return (
        <section class="portfolio" id="portfolio">

            <h1 class="heading"> my <span>Projects</span> </h1>

            <div class="box-container">

                <div class="box">
                    <Fade duration={1500} left>
                        <div>
                            <img src={computer} alt="" />
                            <div className='project-hover'>
                                <h2>Computer Village</h2>
                                <button className='btn-fill'><a target={'_blank'}  href="https://computer-village-c6e02.firebaseapp.com/">Live Link</a></button>
                                <button className='btn'><a target={'_blank'}  href="https://github.com/Developer-Rakib/computer-village-client">Code Link</a></button>
                            </div>
                        </div>
                    </Fade>
                </div>
               
                <div class="box">
                    <Fade duration={1500} top>
                        <div>
                            <img src={trends} alt="" />
                            <div className='project-hover'>
                                <h2>TRENDs</h2>
                                <button className='btn-fill'><a target={'_blank'}  href="https://assignment-10-d74ae.firebaseapp.com/">Live Link</a></button>
                                <button className='btn'><a target={'_blank'}  href="https://github.com/Developer-Rakib/trends-client">Code Link</a></button>
                            </div>
                        </div>
                    </Fade>
                </div>
               
                <div class="box">
                    <Fade duration={1500} right>
                        <div>
                            <img src={sara} alt="" />
                            <div className='project-hover'>
                                <h2>Sara Madical</h2>
                                <button className='btn-fill'><a target={'_blank'}  href="https://assignment-10-d74ae.firebaseapp.com/">Live Link</a></button>
                                <button className='btn'><a target={'_blank'}  href="https://github.com/Developer-Rakib/Sara-Medical-Hall">Code Link</a></button>
                            </div>
                        </div>
                    </Fade>
                </div>
               
                <div class="box">
                    <Fade duration={1500} bottom>
                        <div>
                            <img src={book} alt="" />
                            <div className='project-hover'>
                                <h2>Fancy Book</h2>
                                <button className='btn-fill'><a target={'_blank'} href="https://assignment-9-with-react-router.netlify.app/">Live Link</a></button>
                                <button className='btn'><a target={'_blank'}  href="https://github.com/Developer-Rakib/fancy-book">Code Link</a></button>
                            </div>
                        </div>
                    </Fade>
                </div>
               
               




            </div>

        </section>
    );
};

export default Portfolio;