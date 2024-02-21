import React, { useState, useRef } from "react";

const Slider = ({sliderData}) => {
    const [valStart, setValueStart] = useState(sliderData.valueStart);
    const [valEnd, setValueEnd] = useState(sliderData.valueEnd);
    const useRefStart = useRef(null)
    const useRefEnd = useRef(null)
    
    const handleStartDrag = () => {
      if (sliderData.startMove) {
        const rect = useRefStart.current.getBoundingClientRect();
        const onMouseMove = (event) => {
          let newValue = Math.round(event.clientX - rect.x);
          if(newValue < 0){
              newValue = 0
          }
          if(newValue > valEnd){
              newValue = valEnd
          }
          setValueStart(() => newValue);
        };
    
        const onMouseUp = () => {
          document.removeEventListener("mousemove", onMouseMove);
          document.removeEventListener("mouseup", onMouseUp);
        };
    
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
      }
    }

    const handleEndDrag = (event) => {
      event.preventDefault();
      const rect = useRefEnd.current.getBoundingClientRect();
      const onMouseMove = (event) => {

        let newValue = Math.round((event.clientX - rect.x)+valEnd);
        console.log(event.clientX );
        console.log(rect.x);
        console.log(newValue);
        if(newValue < valStart){
            newValue = valStart+1
        }if(newValue > sliderData.startedEnd){
            newValue = sliderData.startedEnd
        }
        setValueEnd( prev => newValue);

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
            <div className="scale">
              <div
                className="runner-filled scale-filled"
                style={{ width: `${(valEnd - valStart) / sliderData.startedEnd * 100}%`, left: `${(valStart / sliderData.startedEnd) * 100}%` }}
              >
                <div className="flag flag-start" ref={useRefStart} onMouseDown={handleStartDrag}>
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
  
  export default Slider;