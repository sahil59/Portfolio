import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Contact() {

    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [snackbarSeverity, setSnackbarSeverity] = React.useState('success');

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_uwntoil', 'template_7x7fv53', refForm.current, 'dlGGQb2d2yTvzRX7X')
            .then((result) => {
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
                console.log(result.text);
                document.getElementsByName('user_name')[0].value = '';
                document.getElementsByName('user_email')[0].value = '';
                document.getElementsByName('message')[0].value = '';
            })
            .catch((error) => {
                // alert("Form Submission Failed!");
                setSnackbarSeverity('error');
                setSnackbarOpen(true);
                document.getElementsByName('user_name')[0].value = '';
                document.getElementsByName('user_email')[0].value = '';
                document.getElementsByName('message')[0].value = '';
            });
    };

    return (
        <>
            <section id='contact' className='contact-sec'>
                <h2 data-aos="fade-left">CONTACT</h2>
                <div data-aos="fade-right" className='contact'>
                    <div className='contact-info'>
                        <h3>CONTACT INFO</h3>
                        <p>
                            <span><LocationOnIcon sx={{ fontSize: "20px" }} /> Mumbai, India</span>
                            <br />
                            <br />
                            <span><EmailOutlinedIcon sx={{ fontSize: "20px" }} /> sahil.kumar@somaiya.edu</span>
                            <br />
                            <br />
                            <span><CallOutlinedIcon sx={{ fontSize: "20px" }} /> +91 9326230242</span>
                        </p>
                    </div>
                    <div className='divider'></div>
                    <div className='contact-form'>
                        <h3>SEND A MESSAGE</h3>
                        <form className='form' ref={refForm} onSubmit={sendEmail}>
                            <input type="text" placeholder="Name" name='user_name' required/>
                            <input type="email" placeholder="Email" name='user_email' required/>
                            <textarea placeholder="Message" cols="10" rows="4" name='message' required></textarea>
                            <input type="submit" value="Send"/>
                        </form>
                    </div>
                </div>
            </section>
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarSeverity === 'success' ? 'Form Submitted Successfully!' : 'Form Submission Failed!'}
                </Alert>
            </Snackbar>
        </>
    )
}
