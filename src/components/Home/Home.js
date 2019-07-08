import React, { Component } from 'react';

// import Swal from 'sweetalert2';

import './style.css';
import firstImage from '../../Images/Home/Events4.jpg';
var Swiper = require('../../../node_modules/swiper/dist/js/swiper.js');

const $ = require('jquery');





class Home extends Component {

    componentDidMount() {

        var swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

    }

    render(){

        return(

        
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">Slide 1</div>
                    <div className="swiper-slide">Slide 2</div>
                    <div className="swiper-slide">Slide 3</div>
                    <div className="swiper-slide">Slide 4</div>
                    <div className="swiper-slide">Slide 5</div>
                    <div className="swiper-slide">Slide 6</div>
                    <div className="swiper-slide">Slide 7</div>
                    <div className="swiper-slide">Slide 8</div>
                    <div className="swiper-slide">Slide 9</div>
                    <div className="swiper-slide">Slide 10</div>
                </div>
                
                <div className="swiper-pagination"></div>
                
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        );
    }
};

export default Home;