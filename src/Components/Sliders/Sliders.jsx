import React from "react";
import Slider from './Slider/Slider'
import Radio from './Radio/Radio'
 const obj = [
        {
          title: "Price Range", 
          symbol: "$", 
          valueStart: 0, 
          valueEnd: 300, 
          endPoint: 300, 
          disabled:true,
          width: 225,
          progressBar:100,
        },
        {
          title: "ТНС, %",
          symbol: "%",
          valueStart: 0,
          valueEnd: 100,
          endPoint: 100, 
          disabled:false,
          width: 225,
          progressBar:100,
        },
        {
          title: "CBD, %",
          symbol: "%",
          valueStart: 0,
          valueEnd: 100,
          endPoint: 100, 
          disabled:false,
          width: 225,
          progressBar:100,
        },
      ]
function Sliders() {
   
    return (
        <div className='header-runners'>
            {
                obj.map((item, index) => <Slider  sliderData = {item} key={index}/>)
            }
           <Radio/>
        </div>
    )
}
Slider.propTypes = {
  sliderData : Slider.node,
}
export default Sliders;
