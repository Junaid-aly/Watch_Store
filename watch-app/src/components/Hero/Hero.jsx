import React, { useState } from 'react'
import  YellowWatch from "../../assets/yellow-watch.png";
import  OrangeWatch from "../../assets/orange-watch.png";
import  BlueWatch from "../../assets/blue-watch.png";


const ImagesList = [
  {
    id: 1,
    img: BlueWatch,
    price:"200.00",
    tag:"New",
    title:"Next Gen Blue Watch",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate veritatis dicta odio laborum officia ratione animi ex. Cupiditate eum atque voluptatum ea nam laudantium! Labore deserunt perferendis, voluptatem dignissimos molestiae est necessitatibus quisquam dolorum, placeat perspiciatis, ",
  },
  {
    id: 2,
    img: YellowWatch,
    price:"14.99",
    tag:"Sale",
    title:"Best & Smart Yellow Watch",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate veritatis dicta odio laborum officia ratione animi ex. Cupiditate eum atque voluptatum ea nam laudantium! Labore deserunt perferendis, voluptatem dignissimos molestiae est necessitatibus quisquam dolorum, placeat perspiciatis, ",
  },
  {
    id: 3,
    img: OrangeWatch,
    price:"15.99",
    tag:"Hot",
    title:"Apple Ultra Smart Watch 2",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate veritatis dicta odio laborum officia ratione animi ex. Cupiditate eum atque voluptatum ea nam laudantium! Labore deserunt perferendis, voluptatem dignissimos molestiae est necessitatibus quisquam dolorum, placeat perspiciatis, ",
  },
  
];
const Hero = () => {
  const[ImageId , setImageId] = useState(BlueWatch)
  const [title, setTitle] = React.useState("Best & Smart Digital Products")
  const [description, setDescription] = useState("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate veritatis dicta odio laborum officia ratione animi ex. Cupiditate eum atque voluptatum ea nam laudantium! Labore deserunt perferendis, voluptatem dignissimos molestiae est necessitatibus quisquam dolorum, placeat perspiciatis")



  return (
    <>
      <div className='min-h-[550px ] sm:min-h-[700px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 relative'>
        {/* "Background assets div" */}
        <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>
        </div>
          <div className='container pb-8 sm:pb-0'>
            <div className="grid grid-cols-1 sm:grid-cols-2" >
              {/* text content selction */}
              <div  className='flex flex-col justify-center gap-6 pt-12 lg:pr-8 sm:-pt-0 text-center sm:text-left order-2 sm:order-1'>
                <h1 data-aos="zoom-out" className='text-4xl lg:text-6xl font-bold'>{title}</h1>
                <p data-aos="slide-up" className='text-sm'>{description}</p>
              <div data-aos="slide-up" data-aos-delay="200">

              <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded hover:scale-105  duration-200'>Order Now</button>
              </div>
              {/* "watch controller" */}
              <div className='flex justify-center lg:justify-left gap-6 py-2 lg:gap-14 bg-white dark:bg-black rounded-3xl'>
                {ImagesList.map((item) => (
                  <div key={item.id}
                  onClick={() => {
                    setImageId(item.img);
                    setTitle(item.title);
                    setDescription(item.description);
                  }}
                   className='flex flex-col lg:flex-row items-center gap-1 '>
                    <img src={item.img} alt="" data-aos="zoom-in" className='w-[100px] h-[100px] object-contain  inline-block  hover:scale-110  duration-200'/>
                    <div className='flex flex-col items-center  justify-center  lg:items-start'>
                      <p className='font-black  lg:text-lg'>{item.price}</p>
                      <p className='text-sm'>{item.tag}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
      {/* image content section */}
      <div className=' order-1 sm:order-2  min-h-[450px] flex justify-center items-center  relative'>
          <div className='h-[400px]  overflow-hidden  flex justify-center items-center'>
            <img src={ImageId} alt="" data-aos="zoom-in" className='w-[300px] h-[300px] sm:h-[450] sm:w-[450px] sm:scale-125 object-contain mx-auto' />
          </div>
        </div>
          </div>
      
        </div>
      </div>
    </>
  )
}

export default Hero
