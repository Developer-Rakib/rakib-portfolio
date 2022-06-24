import React from 'react';
import me from '../../img/me.jpg';
import skills from '../../img/skillsIcon.png';
import { GoMarkGithub } from 'react-icons/go';
import { GrLinkedinOption } from 'react-icons/gr';
import { CgFacebook } from 'react-icons/cg';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { RiContactsBookLine } from 'react-icons/ri';
import { BiBookContent } from 'react-icons/bi';
import { ImBlog } from 'react-icons/im';
import { HiOutlineAcademicCap } from 'react-icons/hi';

const Header = () => {
    return (
        <header>

            <div class="user">
                <img src={me} alt="" />
                <h3 class="name">Tazul Islam Rakib</h3>
                <ul>
                    <li><a href="https://github.com/Developer-Rakib" target="_blank" rel="noopener noreferrer"><GoMarkGithub></GoMarkGithub></a></li>
                    <li><a href="https://www.linkedin.com/in/developer-rakib1/" target="_blank" rel="noopener noreferrer"><GrLinkedinOption></GrLinkedinOption></a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=100006549750347" target="_blank" rel="noopener noreferrer"><CgFacebook></CgFacebook></a></li>
                    <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><AiOutlineTwitter></AiOutlineTwitter></a></li>
                </ul>
            </div>

            <nav class="navbar">
                <ul>
                    <li><a href="#home"><AiOutlineHome style={{ marginRight: '10px' }}></AiOutlineHome> Home</a></li>

                    <li><a href="#about"><FiUser style={{ marginRight: '10px' }}></FiUser> about</a></li>

                    <li><a href="#mySkills"><img src={skills} alt="" /> Skills</a></li>

                    <li><a href="#blogs"> <ImBlog style={{ marginRight: '8px' }}></ImBlog> Blogs</a></li>

                    <li><a href="#contact"><RiContactsBookLine style={{ marginRight: '10px' }}></RiContactsBookLine> Contact</a></li>

                    <li><a href="#portfolio"><BiBookContent style={{ marginRight: '10px' }}></BiBookContent> Projects</a></li>

                    <li><a href="#education"> <HiOutlineAcademicCap style={{ marginRight: '8px' }} ></HiOutlineAcademicCap> education</a></li>
                    

                    {/* <li><a href="#testimonial"> <VscFeedback style={{ marginRight: '10px' }}></VscFeedback> testimonial</a></li> */}


                </ul>
            </nav>

            <p>	&copy; Copyrignt by <a target={'_blank'} href="https://github.com/Developer-Rakib">Developer-Rakib</a></p>
        </header>
    );
};

export default Header;