import React, { useEffect, useRef, useState } from 'react';
import { Formik, Form, Field } from 'formik'
import Footer from '../Footer/Footer';
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Swal from "sweetalert2";
import NavBar from '../NavBar/NavBar';
// import { postSupport } from '../../redux/actions';


export default function SupportUser() {

    const dispatch = useDispatch()
    const captcha = useRef(null)
    const [captchaVal, setCaptchaVal] = useState(false)
    const token = localStorage.getItem("token");
    const [isLogged, setIsLogged] = useState(false);

    const user = useSelector((state) => state.user);

    useEffect(() => {
        token ? setIsLogged(true) : setIsLogged(false);
    }, [token]);

    function onChange() {
        setCaptchaVal(true)
    }

    return (
        <>
            <NavBar />
            {token?
            <div>
                <Formik
                    initialValues={{
                        comment: ""
                    }}

                    validate={(valores) => {

                        let errors = {};

                        if (valores.comment.length > 255) {
                            errors.comment = 'Your question can not be longer than 255 characters!'
                        }
                        return errors;

                    }}

                    onSubmit={(valores, { resetForm }) => {
                        if (captchaVal === false) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Please check the captcha box to send your question',
                            })
                        }
                        else {
                            // dispatch(postSupport({ comment: valores.comment, email: user.email }))
                            Swal.fire({
                                icon: 'success',
                                title: 'Thanks!',
                                text: "Your message was sent, we'll see what we can do about it",
                            })
                            resetForm()
                        }
                    }}>

                    {({ touched, errors }) => (
                        <div className='formContainer'>
                            <Form>
                                <div className='contactInfo'>

                                    <div className='description'>
                                        <label>What do you want to tell us?</label>
                                        <p>If you want to ask about a purchase, dont forget to detail the ID!</p>
                                    </div>
                                    <div className='description'>
                                        <Field style={{ margin: '20px', outline: '1px solid #fc6f53' }} type="text" name="comment" className="descriptionArea" as="textarea" placeholder="Write your question here!" />
                                    </div>
                                    {touched.comment && errors.comment && <span className="error" style={{ textAlign: 'center', width: '100%', margin: 'auto' }}>{errors.comment}</span>}
                                    <div>
                                        <ReCAPTCHA
                                            ref={captcha}
                                            sitekey="6Lc_RlkgAAAAAHm3lFu7iwKYTD3wu2owN56SxDdW"
                                            onChange={onChange}
                                            style={{ justifyContent: 'center', display: 'flex' }}
                                        />
                                    </div>
                                    <button className="minimize" type="submit">Send!</button>

                                </div>
                            </Form>
                        </div>
                    )}
                </Formik>
                <Footer />
            </div>:
             <div  className="aviso">
             <h2>You need to be logged in to access here</h2>
             <Link to={`/home`}>
             <button className='minimize'>Back home</button>
             </Link>
             </div>}
        </>
    )

}