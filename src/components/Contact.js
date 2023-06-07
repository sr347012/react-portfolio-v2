import React, {useState, useRef, useEffect} from 'react'
import './Styles.css';
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';

function Contact() {
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [emailSent, setEmailsent] = useState(false);
    const textRef = useRef();

    const sendEmail = () => {
        setEmailsent(!emailSent);
        var templateParams = {
            name: name,
            text: text
        }
        emailjs.send('service_8cdoze3', 'template_gob8xig', templateParams, 'nwD_Rx4QvdQxaXrjM')
        .then(()=>  setTimeout(()=> setEmailsent(emailSent), 4000))
    }

    const updateName = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const updateText = () => {
        setText(textRef.current.value);
    }
  return (
    <>
    <div className='contact'>
    <div className='contact-location'>
        <h3>My Address</h3>
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.9072688642236!2d77.7073125745899!3d12.784530887513878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6e7a6e9f5201%3A0x1113c91c7aabf953!2sVakil%20Marigold!5e0!3m2!1sen!2sin!4v1685862467537!5m2!1sen!2sin" 
        width="450" height="300" allowfullscreen="" 
        loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
    <div className='contact-form'>
        <h3 className='contact-form-h3'>Get in touch</h3>
        <div className='contact-name'>
            <label>Name:</label>  
            <input onChange={updateName}/>
        </div>
        <div className='contact-textarea'>
            <label>Message: </label>
            <textarea ref={textRef} onChange={updateText}></textarea>
        </div>
        <div className='contact-btn'>
            <button onClick={sendEmail}>Submit</button>
        </div>
        {name} {text}
        <div >
            {emailSent? 
            (<Alert severity="success">Thank you for contacting us!!</Alert>) : <></> }
        </div>
    </div>
    </div>
    </>
  )
}

export default Contact
