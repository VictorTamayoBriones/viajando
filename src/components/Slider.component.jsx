import React from 'react';
import '../assets/css/slider.css';
import ctz from '../assets/images/ctz-4.jpeg';
import tj from '../assets/images/tj-1.jpeg';
import tpz from '../assets/images/tpz-3.jpeg';
const Slider = () => {

    /*
    var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 3){
        counter = 1;
      }
    }, 5000);
    */

    return (
    
        <div className="slider">

            <div className="slides">
                <input type="radio" name="radio-btn" id="radio1" />
                <input type="radio" name="radio-btn" id="radio2" />
                <input type="radio" name="radio-btn" id="radio3" />

                <div className="slide first">
                    <img src={ctz} alt=""/>
                </div>

                <div className="slide">
                    <img src={tj} alt=""/>
                </div>

                <div className="slide">
                    <img src={tpz} alt=""/>
                </div>

                <div className="navigation-auto">
                    <div className="auto-btn1"></div>
                    <div className="auto-btn2"></div>
                    <div className="auto-btn3"></div>
                </div>
            </div>

            <div className="navigation-manual">
                <label for="radio1" className="manual-btn"></label>
                <label for="radio2" className="manual-btn"></label>
                <label for="radio3" className="manual-btn"></label>
            </div>

        </div>
    );
}

export default Slider;