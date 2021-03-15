import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core'
import Slider from "react-slick";

import iconImage from '../../../../assets/images/fast-food.png'
import config from '../../../../constants/config'
const IMG_URL= config.IMG_URL
export default function BadgeSlider({  items }) {
    const sliderConfig = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 10,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 10,
                    slidesToScroll: 10,
                    
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 10,
                    slidesToScroll: 10,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 10,
                    slidesToScroll: 10,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                }
            },
        ]
    }

   

    return (
        <div className="badge-slider">
            
            <div className="badge-slider__slider">
                <Slider {...sliderConfig} >
                    {
                        items.map((item, i) => <Item key={i} item={item}  />)
                    }
                </Slider>
            </div>
        </div>
    )
}

function Item({ item }) {
    return (
        <div className="col-md-1 badge-slider__item" >
            <h5>Burger</h5>
            <img src={iconImage} className="badge-slider__item-img" />
        </div>
    )
}