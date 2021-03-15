import React from 'react'
import Slider from "react-slick";
// import BannerCard from '../../BannerCard/BannerCard';
import { useHistory } from 'react-router-dom';
function Testimonials({ items }) {

    const sliderConfig = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
    }

    return (
        <div className="testimonials">
            <div className="container">
                <h2 className="heading">
What Customers Think About Us</h2>
                <p className="heading">our customer reviews</p>
                <div className="w3_testimonials_grids">

                    <Slider {...sliderConfig} >
                        {
                            items.map((item, key) =>


                                <div className="flex-viewport" style="overflow: hidden; position: relative;">
                                    <div className="col-md-7 w3_testimonials_grid_left">
                                        <p>
                                            <img src="https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/q1.png" alt=" " className="" />
    Morbi cursus, turpis quis laoreet blandit, odio turpis imperdiet nisl,
        quis bibendum lorem purus lobortis nunc. Suspendisse tincidunt eu sapien
        pellentesque interdum. Aenean lacus sapien, blandit vel nibh in, imperdiet
        egestas erat Suspendisse tincidunt eusapien. Maecenas ac hendrerit purus. Lorem ipsum dolor sit amet
        <img src="https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/q2.png" alt=" " className="" />
                                        </p>
                                    </div>
                                    <div className="col-md-5 w3_testimonials_grid_right">
                                        <img src="https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/test1.jpg" alt=" " class="img-responsive" />
                                    </div>
                                </div>

                            )
                        }
                    </Slider>
                </div>

            </div>




        </div>


    )
}

Testimonials.defaultProps = {
    items: []
}

export default Testimonials;

