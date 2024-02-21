
import Slider from './Slider/Slider'
import Radio from './Radio/Radio'
 const obj = [
        {
          title: "Price Range", 
          symbol: "$", 
          valueStart: 0, 
          valueEnd: 300, 
          startedStart:0,
          startedEnd:300,
          startMove:true,
        },
        {
          title: "ТНС, %",
          symbol: "%",
          valueStart: 0,
          valueEnd: 100,
          startedStart:0,
          startedEnd:100,
          startMove:false,
        },
        {
          title: "CBD, %",
          symbol: "%",
          valueStart: 0,
          valueEnd: 100,
          startedStart:0,
          startedEnd:100,
          startMove:false,
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

export default Sliders;
