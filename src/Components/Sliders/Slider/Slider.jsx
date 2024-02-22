import React, { useState, useRef } from "react";


const Slider = ({sliderData}) => {
    const [valStart, setValueStart] = useState(sliderData.valueStart);
    const [valEnd, setValueEnd] = useState(sliderData.valueEnd);
    const useRefStart = useRef(null)
    const useRefEnd = useRef(null)

    const chankc = sliderData.width / sliderData.endPoint

    const handleStartDrag = () => {
        const rect = useRefStart.current.getBoundingClientRect();
        const onMouseMove = (event) => {
          let newValue = valStart + (event.clientX - rect.x )*chankc;
          console.log(newValue);
          console.log(valStart);
          console.log(event.clientX);
          console.log(rect.x);
          setValueStart(() => {
            if(newValue < 0){
              newValue = 0
            }
            if(newValue > valEnd){
                newValue = valEnd-1
            }
            return Math.round(newValue)
          });
        };
    
        const onMouseUp = () => {
          document.removeEventListener("mousemove", onMouseMove);
          document.removeEventListener("mouseup", onMouseUp);
        };
    
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
      }
    const handleEndDrag = () => {
      const rect = useRefEnd.current.getBoundingClientRect();
      const onMouseMove = (event) => {
        //let newValue = valEnd+(event.clientX - rect.x)/2
        let newValue =  valEnd + (event.clientX - rect.x)*chankc
        
        console.log(newValue)
        console.log(rect.x)
        setValueEnd(() =>{
          if(newValue < valStart){
              newValue = valStart+1
          }if(newValue > sliderData.endPoint){
              newValue = sliderData.endPoint
          } 
          return Math.round(newValue)
        });
      };
      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };
      return (
        <div className="runner-wrap">
          <div className="title">{sliderData.title}</div>
          <div className="runner">
            <div className="scale" style={{ width: sliderData.width}}>
              <div
                className="runner-filled scale-filled"
                //style={{ width: `${((valEnd-valStart)/sliderData.endPoint)*100}%`, left: `${(valStart/sliderData.endPoint) * sliderData.progressBar}%`}}
                //style={{ right: `${((sliderData.width/100)*valEnd)}px`, left: `${(sliderData.width/100)*valStart}px`}}
                style={{ right: `${sliderData.width-chankc*valEnd}px`, left: `${chankc*valStart}px`}}
              >
                <div className="flag flag-start"  style={{pointerEvents: sliderData.disabled?  'auto' : "none" }}  ref={useRefStart} onMouseDown={handleStartDrag}>
                </div>
                <div className="flag flag-end" ref={useRefEnd} onMouseDown={handleEndDrag}>
                  <div className="flag-indicator-wrap">

                    <div className="flag-indicator indicator-end">{valEnd}{sliderData.symbol}</div>
                  </div>
                </div>
              </div>
              <div className="runner-empty scale-empty"></div>
            </div>
            
          </div>
          <div className="runner-price">
            {valStart} {sliderData.symbol} - {valEnd} {sliderData.symbol}
          </div>
        </div>
      );
  };
  Slider.propTypes = {
    sliderData : Slider.node,
  }
  export default Slider;