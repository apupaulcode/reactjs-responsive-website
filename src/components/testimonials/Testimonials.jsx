import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
    const sliderRef=useRef();
    let tx = 0;
    const slideFoword=()=>{
        if(tx > -50){
            tx -= 25;
        }
        sliderRef.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackword=()=>{
        if(tx < 0){
            tx += 25;
        }
        sliderRef.current.style.transform = `translateX(${tx}%)`
    }
  return (
    <div className='testimonials'>
      <img src={next_icon} className='next-btn' onClick={slideFoword} />
      <img src={back_icon} className='back-btn' onClick={slideBackword} />
      <div className="slider">
        <ul ref={sliderRef}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Lorem, ipsum.</h3>
                            <span>Lorem, ipsum.</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est exercitationem ullam rem placeat obcaecati dolorem voluptates cumque nemo suscipit dolorum?</p>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Lorem, ipsum.</h3>
                            <span>Lorem, ipsum.</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est exercitationem ullam rem placeat obcaecati dolorem voluptates cumque nemo suscipit dolorum?</p>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Lorem, ipsum.</h3>
                            <span>Lorem, ipsum.</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est exercitationem ullam rem placeat obcaecati dolorem voluptates cumque nemo suscipit dolorum?</p>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Lorem, ipsum.</h3>
                            <span>Lorem, ipsum.</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est exercitationem ullam rem placeat obcaecati dolorem voluptates cumque nemo suscipit dolorum?</p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
