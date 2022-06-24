// import ProgressBar from '@ramonak/react-progress-bar';
import React from 'react';
import node from '../../img/node-removebg-preview.png';
import html from '../../img/html5.png';
import css from '../../img/CSS3.png';
import mongoDB from '../../img/mongo.png';
import js from '../../img/js-removebg-preview.png';
import typeScript from '../../img/Typescript_logo_2020.svg-removebg-preview.png';
import express from '../../img/express.png';
import react from '../../img/React-icon.svg-removebg-preview.png';
import NextJS from '../../img/1_KDMx1YspSrBcFJG-NDZgDg-removebg-preview.png';
import firebase from '../../img/firebase-removebg-preview.png';
import { Zoom } from 'react-reveal';

const MySkills = () => {
    const skillImgs = [
        { img: html, name: "HTML" },
        { img: css, name: "CSS" },
        { img: "https://i.ibb.co/KDGNZDH/bootstrap.png", name: "Bootstrap" },
        { img: "https://i.ibb.co/bQzjJ5p/material.png", name: "Material UI" },
        { img: "https://i.ibb.co/X2VprfD/tailwind-css-removebg-preview.png", name: "Tailwind" },
        { img: "https://i.ibb.co/LNp1Qh9/sass.png", name: "SASS" },
        { img: js, name: "JavaScipt" },
        { img: typeScript, name: "TypeScript" },
        { img: react, name: "React" },
        { img: node, name: "NodeJS" },
        { img: express, name: "ExpressJS" },
        { img: NextJS, name: "NextJS" },
        { img: mongoDB, name: "MongoDB" },
        { img: firebase, name: "Firebase" },
        { img: "https://i.ibb.co/SmgyHtR/heroku.png", name: "Heroku" },
        { img: "https://i.ibb.co/dWK5RCW/git.png", name: "Git" },
    ]
    return (
        <section class="mySkill-section" id="mySkills">

            <h1 class="heading"> <span>My</span> Skills </h1>
            <div className='mySkill-container'>
                <div className="skillAbout">
                    <div>
                        <h3>My Creative Skills & Experiences.</h3>
                        <p>My name is Md. Tazul Islam, And I'm Studying Programming Hero. Web Design & Development is my passion. I Love To Learn New Skills to Become myself a Pro Developer. Now Learning JavaScript. I Get Deeper to Understand Client's Needs & Problems. My Mission is to Satisfy Every Client. Because Client Satisfaction is My First Priority. You'll Get Lifetime Support in Any Situation, I Promise that, You'll Get Fanatical Support And Absolutely Positively On-Time Delivery.</p>
                        <button className='btn-fill'>Read More</button>
                    </div>
                </div>
                <div className="skillProgress">
                    {
                        skillImgs.map(skillImg => {
                            return (
                                <Zoom duration={1000} >
                                    <div className='skill'>
                                    <img src={skillImg.img} alt="" />
                                    <h3>{skillImg.name}</h3>
                                </div>
                                </Zoom>
                            )
                        })
                    }
                </div>
                {/* <div className="skillProgress">
                    <div className='skill'>
                        <h5>HTML & CSS</h5>
                        <ProgressBar
                            completed={90}
                            bgColor="blue"
                            baseBgColor="rgb(191, 191, 255)"
                            height="11px"
                            labelColor="#ffffff"
                            labelSize="10px"
                            animateOnRender
                            maxCompleted={100}
                            customLabel="90%"
                        />
                    </div>
                    <div className='skill'>
                        <h5>Tailwind & Bootstrap</h5>
                        <ProgressBar
                            completed={88}
                            bgColor="blue"
                            baseBgColor="rgb(191, 191, 255)"
                            height="11px"
                            labelColor="#ffffff"
                            labelSize="10px"
                            animateOnRender
                            maxCompleted={100}
                            customLabel="88%"
                        />
                    </div>
                    <div className='skill'>
                        <h5>JavaScript</h5>
                        <ProgressBar
                            completed={90}
                            bgColor="blue"
                            baseBgColor="rgb(191, 191, 255)"
                            height="11px"
                            labelColor="#ffffff"
                            labelSize="10px"
                            animateOnRender
                            maxCompleted={100}
                            customLabel="90%"
                        />
                    </div>
                    <div className='skill'>
                        <h5>TypeScript</h5>
                        <ProgressBar
                            completed={60}
                            bgColor="blue"
                            baseBgColor="rgb(191, 191, 255)"
                            height="11px"
                            labelColor="#ffffff"
                            labelSize="10px"
                            animateOnRender
                            maxCompleted={100}
                            customLabel="60%"
                        />
                    </div>
                    <div className='skill'>
                        <h5>ReactJS</h5>
                        <ProgressBar
                            completed={90}
                            bgColor="blue"
                            baseBgColor="rgb(191, 191, 255)"
                            height="11px"
                            labelColor="#ffffff"
                            labelSize="10px"
                            animateOnRender
                            maxCompleted={100}
                            customLabel="90%"
                        />
                    </div>
                    <div className='skill'>
                        <h5>NodeJS</h5>
                        <ProgressBar
                            completed={50}
                            bgColor="blue"
                            baseBgColor="rgb(191, 191, 255)"
                            height="11px"
                            labelColor="#ffffff"
                            labelSize="10px"
                            animateOnRender
                            maxCompleted={100}
                            customLabel="50%"
                        />
                    </div>
                    <div className='skill'>
                        <h5>ExpressJS</h5>
                        <ProgressBar
                            completed={78}
                            bgColor="blue"
                            baseBgColor="rgb(191, 191, 255)"
                            height="11px"
                            labelColor="#ffffff"
                            labelSize="10px"
                            animateOnRender
                            maxCompleted={100}
                            customLabel="78%"
                        />
                    </div>
                    <div className='skill'>
                        <h5>NextJS</h5>
                        <ProgressBar
                            completed={72}
                            bgColor="blue"
                            baseBgColor="rgb(191, 191, 255)"
                            height="11px"
                            labelColor="#ffffff"
                            labelSize="10px"
                            animateOnRender
                            maxCompleted={100}
                            customLabel="72%"
                        />
                    </div>
                    <div className='skill'>
                        <h5>MongoDB</h5>
                        <ProgressBar
                            completed={75}
                            bgColor="blue"
                            baseBgColor="rgb(191, 191, 255)"
                            height="11px"
                            labelColor="#ffffff"
                            labelSize="10px"
                            animateOnRender
                            maxCompleted={100}
                            customLabel="75%"
                        />
                    </div>
                </div> */}
            </div>


        </section>

    );
};

export default MySkills;