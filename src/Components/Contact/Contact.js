import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Slide } from 'react-reveal';

const Contact = () => {
   const form = useRef();
   const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_l4l1k4h', 'template_8e1jdsr', form.current, 'm1lQ_oBWTWmW45qJA')
         .then((result) => {
            console.log(result.text);
            toast.success("Mail Sent!")
            e.target.reset()
         }, (error) => {
            console.log(error.text);
            toast.error(error.text)
         });

   };
   return (
      <section class="contact-section container" id='contact'>
         <h1 class="heading"> <span>contact</span> me </h1>

         <div class="contact-info">

            <Slide duration={1500} right>
               <div>
               <div class="contact">
                  <i class="fab fa-whatsapp"></i>
                  <h3>Whats App</h3>
                  <p>+880 1978870125</p>
               </div>
               </div>
            </Slide>

            <Slide  duration={1500} top>
               <div>

               <div class="contact">
                  <i class="far fa-envelope"></i>
                  <h3>Email</h3>
                  <p style={{ textTransform: 'lowercase' }}>tajulislam601@gmail.com</p>
               </div>
               </div>
            </Slide>

            <Slide  duration={1500} left>
               <div>

               <div class="contact">
                  <i class="fab fa-facebook-f"></i>
                  <h3>Facebook</h3>
                  <p>Md Tazul Islam Rakib</p>
               </div>
               </div>
            </Slide>

         </div>

         <div class="contact-form">
            <Slide  duration={1500} bottom>
            <form ref={form} onSubmit={sendEmail}>
               <input type="text" name="user_name" placeholder="Name" id="" required />
               <input style={{ textTransform: 'lowercase' }} type="email" name="user_email" placeholder="Email" id="" required />
               <textarea name="message" id="" cols="30" rows="10" required placeholder='Message...'></textarea>
               <button className='btn' type="submit"> send <i class="fas fa-paper-plane"></i> </button>
            </form>
            </Slide>

         </div>



      </section>
   );
};

export default Contact;