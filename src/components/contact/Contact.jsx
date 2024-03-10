import React from 'react'
import './contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';
const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Lorem, ipsum dolor. <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eveniet dolor pariatur. Ad at praesentium sit iure. At, aliquam harum!</p>
        <ul>
            <li><img src={mail_icon}/> Lorem, ipsum dolor.</li>
            <li><img src={phone_icon}/>Lorem, ipsum dolor.</li>
            <li><img src={location_icon}/>Lorem, ipsum dolor.</li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter Your Name' required />
          <label>Phone Number</label>
          <input type="text" name='phone' placeholder='Enter Your Phone Number' required />
          <label>Write Your Messages Here</label>
          <textarea type="text" name='message' rows='6' placeholder='Enter Your Phone Number' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span></span>
      </div>
    </div>
  )
}

export default Contact
