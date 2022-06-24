import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// $(document).ready(function(){

//   $('#menu').click(function(){
//     $(this).toggleClass('fa-times');
//     $('header').toggleClass('toggle');
//   });

//   $(window).on('scroll load',function(){

//     $('#menu').removeClass('fa-times');
//     $('header').removeClass('toggle');

//     if($(window).scrollTop() > 0){
//       $('.top').show();
//     }else{
//       $('.top').hide();
//     }

//   });

//   // smooth scrolling 

//   $('a[href*="#"]').on('click',function(e){

//     e.preventDefault();

//     $('html, body').animate({

//       scrollTop : $($(this).attr('href')).offset().top,

//     },
//       500, 
//       'linear'
//     );

//   });

// });
