import React, {  useState ,useEffect } from 'react';
import Layout from '../../element/Layout'
import Slides from '../../element/Sliders/Slides/Slides'
import { BannerSlider } from '../../element/Sliders'
import Skeleton from '@material-ui/lab/Skeleton';
import AboutSection from './AboutSection'
import HomeGallery from './HomeGallery'
import Testimonials from '../../element/Testimonials'
import { config } from '../../../constants';
import BadgeSlider from './BadgeSlider'
function Home() {
  //const [homePageData, setHomePageData] = useState({})
  const [loding ,setLoading] =useState(true)
  const demoData={
    bannerImages:[
      {
        imageUrl:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/slider4.jpg',
        title:'banner test',
        redirectLink:'#'
      },
      {
        imageUrl:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/slider3.jpg',
        title:'banner test',
        redirectLink:'#'
      },
      {
        imageUrl:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/slider2.jpg',
        title:'banner test',
        redirectLink:'#'
      },
      {
        title:'Bread Egg',
        img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp1.jpg',
        id:'6',
        redirectLink:'#'
      },
      {
        title:'Bread Egg',
        img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp1.jpg',
        id:'5',
        redirectLink:'#'
      },
      {
        title:'Bread Egg',
        img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp1.jpg',
        id:'6',
        redirectLink:'#'
      }
    ],
   categoryList:[
     {
       id:'a1',
       title:'Offers',
       url:'#',
       isSmall:true,
       items:[
         {
           title:'Bread Egg',
           img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp1.jpg',
           id:'1',
           redirectLink:'#'
         },
         {
          title:'Bread Egg',
          img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp1.jpg',
          id:'2',
          redirectLink:'#'
        },
        {
          title:'Bread Egg',
          img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp1.jpg',
          id:'3',
          redirectLink:'#'
        },
        {
          title:'Bread Egg',
          img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp1.jpg',
          id:'4',
          redirectLink:'#'
        },
        {
          title:'Bread Egg',
          img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp1.jpg',
          id:'5',
          redirectLink:'#'
        },
        {
          title:'Bread Egg',
          img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp1.jpg',
          id:'6',
          redirectLink:'#'
        }
       ]
     },
     {
      id:'a2',
      title:'Offers Buy 1 Get 1 Free',
      url:'#',
      isSmall:false,
      items:[
       
 {
  title:'Bread Egg',
  img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp3.jpg',
  id:'1',
  redirectLink:'#'
},
{
 title:'Bread Egg',
 img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp3.jpg',
 id:'2',
 redirectLink:'#'
},
{
 title:'Bread Egg',
 img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp3.jpg',
 id:'3',
 redirectLink:'#'
},
{
 title:'Bread Egg',
 img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp3.jpg',
 id:'4',
 redirectLink:'#'
},
{
 title:'Bread Egg',
 img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp3.jpg',
 id:'5',
 redirectLink:'#'
},
{
 title:'Bread Egg',
 img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp3.jpg',
 id:'6',
 redirectLink:'#'
},
{
title:'Bread Egg',
img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp3.jpg',
id:'5',
redirectLink:'#'
},
{
title:'Bread Egg',
img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp3.jpg',
id:'6',
redirectLink:'#'
},
{
title:'Bread Egg',
img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp3.jpg',
id:'5',
redirectLink:'#'
},
{
title:'Bread Egg',
img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp3.jpg',
id:'6',
redirectLink:'#'
},
{
title:'Bread Egg',
img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp3.jpg',
id:'5',
redirectLink:'#'
},
{
title:'Bread Egg',
img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp3.jpg',
id:'6',
redirectLink:'#'
}
      ]
    },
    {
      id:'a1',
      title:'Newly Featured',
      url:'#',
      isSmall:true,
      items:[
        {
          title:'Bread Egg',
          img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp1.jpg',
          id:'1',
          redirectLink:'#'
        },
        {
         title:'Bread Egg',
         img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp1.jpg',
         id:'2',
         redirectLink:'#'
       },
       {
         title:'Bread Egg',
         img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp1.jpg',
         id:'3',
         redirectLink:'#'
       },
       {
         title:'Bread Egg',
         img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp1.jpg',
         id:'4',
         redirectLink:'#'
       },
       {
         title:'Bread Egg',
         img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp1.jpg',
         id:'5',
         redirectLink:'#'
       },
       {
         title:'Bread Egg',
         img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp1.jpg',
         id:'6',
         redirectLink:'#'
       },
       {
        title:'Bread Egg',
        img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp1.jpg',
        id:'6',
        redirectLink:'#'
      },
      {
        title:'Bread Egg',
        img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp1.jpg',
        id:'5',
        redirectLink:'#'
      },
      {
        title:'Bread Egg',
        img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp1.jpg',
        id:'6',
        redirectLink:'#'
      },
      
      ]
    },
    {
      id:'a1',
      title:'Newly Featured',
      url:'#',
      isSmall:false,
      items:[
        {
          title:'Bread Egg',
          img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp1.jpg',
          id:'1',
          redirectLink:'#'
        },
        {
         title:'Bread Egg',
         img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp1.jpg',
         id:'2',
         redirectLink:'#'
       },
       {
         title:'Bread Egg',
         img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp1.jpg',
         id:'3',
         redirectLink:'#'
       },
       {
         title:'Bread Egg',
         img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp1.jpg',
         id:'4',
         redirectLink:'#'
       },
       {
         title:'Bread Egg',
         img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp1.jpg',
         id:'5',
         redirectLink:'#'
       },
       {
         title:'Bread Egg',
         img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp1.jpg',
         id:'6',
         redirectLink:'#'
       },
       {
        title:'Bread Egg',
        img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp1.jpg',
        id:'6',
        redirectLink:'#'
      },
      {
        title:'Bread Egg',
        img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp1.jpg',
        id:'5',
        redirectLink:'#'
      },
      {
        title:'Bread Egg',
        img:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/sp1.jpg',
        id:'6',
        redirectLink:'#'
      },
      
      ]
    }
    
   ],
   testimonials:[
     {
       details:'Morbi cursus, turpis quis laoreet blandit, odio turpis imperdiet nisl, quis bibendum lorem purus lobortis nunc. Suspendisse tincidunt eu sapien pellentesque interdum. Aenean lacus sapien, blandit vel nibh in, imperdiet egestas erat Suspendisse tincidunt eusapien. Maecenas ac hendrerit purus. Lorem ipsum dolor sit amet',
       byImg:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/test1.jpg',

     },
     {
      details:'Morbi cursus, turpis quis laoreet blandit, odio turpis imperdiet nisl, quis bibendum lorem purus lobortis nunc. Suspendisse tincidunt eu sapien pellentesque interdum. Aenean lacus sapien, blandit vel nibh in, imperdiet egestas erat Suspendisse tincidunt eusapien. Maecenas ac hendrerit purus. Lorem ipsum dolor sit amet',
      byImg:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/test1.jpg',

    },
    {
      details:'Morbi cursus, turpis quis laoreet blandit, odio turpis imperdiet nisl, quis bibendum lorem purus lobortis nunc. Suspendisse tincidunt eu sapien pellentesque interdum. Aenean lacus sapien, blandit vel nibh in, imperdiet egestas erat Suspendisse tincidunt eusapien. Maecenas ac hendrerit purus. Lorem ipsum dolor sit amet',
      byImg:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/test1.jpg',

    },
    {
      details:'Morbi cursus, turpis quis laoreet blandit, odio turpis imperdiet nisl, quis bibendum lorem purus lobortis nunc. Suspendisse tincidunt eu sapien pellentesque interdum. Aenean lacus sapien, blandit vel nibh in, imperdiet egestas erat Suspendisse tincidunt eusapien. Maecenas ac hendrerit purus. Lorem ipsum dolor sit amet',
      byImg:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/test1.jpg',

    },
    {
      details:'Morbi cursus, turpis quis laoreet blandit, odio turpis imperdiet nisl, quis bibendum lorem purus lobortis nunc. Suspendisse tincidunt eu sapien pellentesque interdum. Aenean lacus sapien, blandit vel nibh in, imperdiet egestas erat Suspendisse tincidunt eusapien. Maecenas ac hendrerit purus. Lorem ipsum dolor sit amet',
      byImg:'https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/test1.jpg',

    }
   ]
  }
  useEffect(()=>{
    loding && setTimeout(()=>{setLoading(false)},2000)
  },[])
  
  const {bannerImages,categoryList,testimonials}=demoData
  return (
    <Layout >
      
       
          
        
      
      {
        loding ?  <>
        <Skeleton variant="rect" width="100%" height="50vh" />
        <Skeleton variant="rect" width="25%" height="20px"  style={{ marginTop: 20 }} />
        <Skeleton variant="rect" width="100%" height="30vh"  style={{ marginTop: 10 }} />
        <Skeleton variant="rect" width="25%" height="20px"  style={{ marginTop: 20 }} />
        <Skeleton variant="rect" width="100%" height="30vh"  style={{ marginTop: 10 }} />
        </>
        :
        <>
        <BannerSlider items={bannerImages} />
          {/* <AboutSection /> */}
          {
            categoryList?.map((itm, index) =>
              <Slides key={index}  items={itm.items} isSmall={itm.isSmall} allLink={itm.url} title={itm.title} />
            )
          }
          <h6 className="MuiTypography-root MuiTypography-h6 MuiTypography-alignLeft" style={{marginLeft:8}}> What We Serve</h6>
          <BadgeSlider items={[{name:''},{name:''},{name:''},{name:''},{name:''},{name:''},{name:''},{name:''},{name:''},{name:''}]}/>
          <BadgeSlider items={[{name:''},{name:''},{name:''},{name:''},{name:''},{name:''},{name:''},{name:''},{name:''},{name:''}]}/>
          
          <HomeGallery/>
          <Testimonials items={testimonials}/>
          
        </>
      }

    </Layout>
  );
}
export default Home
