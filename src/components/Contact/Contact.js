import React, { useRef } from 'react';
import { MdPhone } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import { TbLocation } from 'react-icons/tb';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import './Contact.css'
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiSend } from 'react-icons/fi';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fiwyr8n', 'template_vrsyynb', form.current, 'nKgc_djBGbE5VBSu4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
            .then(() => {
                toast('Email Sent')
                e.target.reset()

            })
            ;
    };
    return (
        <div className='contact-container mt-20 mb-14'>
            <div className="contact-page-title">
                <h2>Get <span>in Touch</span></h2>
            </div>
            <div className="contact-section">
                <div className="info-icon">
                    <div className="contact-info">
                        <div className="icon-details">
                            <div className="icon">
                                <MdPhone />
                            </div>
                            <div className="info">
                                <h5>Phone</h5>
                                <p>+8801 770 309 969</p>
                            </div>
                        </div>
                        <div className="icon-details">
                            <div className="icon">
                                <AiOutlineMail />
                            </div>
                            <div className="info">
                                <h5>Email</h5>
                                <p>razumolla75@gmail.com</p>
                            </div>
                        </div>
                        <div className="icon-details">
                            <div className="icon">
                                <TbLocation />
                            </div>
                            <div className="info">
                                <h5>Location</h5>
                                <p>Faridpur, Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                    <div className="social-network">
                        <div className="linkedin">
                            <a target='-blank' href="https://www.linkedin.com/in/razu-molla/"><BsLinkedin /></a>
                        </div>
                        <div className="fb">
                            <a target='-blank' href="https://www.facebook.com/razu.molla75bd"><AiFillFacebook /></a>
                        </div>
                        <div className="github">
                            <a target='-blank' href="https://github.com/razumolla"><BsGithub /></a>
                        </div>
                    </div>
                </div>

                <form className='contact-form' ref={form} onSubmit={sendEmail}>
                    <label>Your Name</label> <br />
                    <input className='name-email' type="text" name="user_name" required /> <br />
                    <label>Your Email</label> <br />
                    <input className='name-email' type="email" name="user_email" required /> <br />
                    <label>Message</label><br />
                    <textarea name="message" required /><br /> <br />
                    <div className='message-submit-button'>
                        <FiSend />
                        <input type="submit" value="Send" />
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;