import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './FormContact.css'
import Swal from 'sweetalert2'

const FormContact = () => {
    const [nameForm, setNameForm] = useState('')
    const [emailForm, setEmailForm] = useState('')
    const [messageForm, setMessageForm] = useState('')

    const [errorNameForm, setErrorNameForm] = useState('')
    const [errorEmailForm, setErrorEmailForm] = useState('')
    const [errorMessageForm, setErrorMessageForm] = useState('')

    const form = useRef();

    const alertOk = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your message has been send',
            showConfirmButton: true,
            confirmButtonColor: 'rgb(145, 184, 85)'
        })
    }
    const alertNotOk = () => {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Something went wrong',
            showConfirmButton: true,
            confirmButtonColor: 'rgb(251, 56, 56)'
        })
    }

    const sendEmail = (e) => {
        e.preventDefault();
        if (errorNameForm === '' && errorEmailForm === '' && errorMessageForm === '') {
            emailjs.sendForm(process.env.REACT_APP_SERVICE_KEY, process.env.REACT_APP_TEMPLATE_KEY, form.current, process.env.REACT_APP_API_KEY)
                .then((result) => {
                    alertOk()
                }, (error) => {
                    alertNotOk()
                });
        } else {
            alertNotOk()
        }
        e.target.reset()
    };


    
    const handleNameOnBlur = () => {
        const regex = /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/gi;
        if(nameForm.length < 3){
            setErrorNameForm("* Make sure to put your full name")
        }
        else if(!regex.test(nameForm)){
            setErrorNameForm("* Make sure to put your full name and don't include numbers or simbols")
        }else{
            setErrorNameForm('')
        }
    }

    const handleEmailOnBlur = () => {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         if(!regex.test(emailForm)){
            setErrorEmailForm(" *You have entered a invalid email address!")
        }else{
            setErrorEmailForm('')
        }
    }

    const handleMessageOnBlur = () => {
        if(messageForm.length < 5){
            setErrorMessageForm('* Your message must have a minimum of 5 characters')
        }else{
            setErrorMessageForm('')
        }
    }


    

    return (
        <div className='conteiner-form-input'>
            <div className='container-title-text-contact'>
                <h1>Contact Me</h1>
                <p>I am interested in opportunities as a frontend or fullstack developer.<br />However, if you have any other request or question, feel free to contact me using the form below or via social media.</p>
            </div>
            <form ref={form} onSubmit={sendEmail} >
                <label>Full name</label>
                <div id='error'>
                    <label>{errorNameForm}</label>
                </div>
                <input className='input-style' type="text" name="user_name" required onBlur={handleNameOnBlur} onChange={(e) => setNameForm(e.target.value)} />
                <label>Email</label>
                <div id='error'>
                    <label>{errorEmailForm}</label>
                </div>
                <input className='input-style' type="email" name="user_email" required onBlur={handleEmailOnBlur} onChange={(e) => setEmailForm(e.target.value)} />

                <label>Message</label>
                <div id='error'>
                    <label>{errorMessageForm}</label>
                </div>
                <textarea className='textarea-input' name="message" required onBlur={handleMessageOnBlur} onChange={(e) => setMessageForm(e.target.value)} />
                <input className='buton-submit' disabled={errorNameForm === '' && errorEmailForm === '' && messageForm.length > 5 ? false : true} type="submit" value="Send" />
            </form>

        </div>
    );
}
export default FormContact