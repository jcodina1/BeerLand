import React, { useRef, useState, useEffect } from 'react';
// import { Link } from 'react-scroll';
import {Link} from 'react-router-dom'
import NavBar from '../NavBar/NavBar';
import { Formik, Form, Field } from 'formik'
import './Contact.css'

// import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';
import { MdKeyboardArrowUp } from 'react-icons/md'
import { MdKeyboardArrowDown } from 'react-icons/md'
 import { postSupport } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import Footer from '../Footer/Footer';
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {

    const dispatch = useDispatch()
    const captcha = useRef(null)
    const [captchaVal, setCaptchaVal] = useState(false)

    const token = localStorage.getItem("token");
    const [isLogged, setIsLogged] = useState(false);

    const scroll0 = useRef()
    const scroll1 = useRef()
    const scroll2 = useRef()
    const scroll3 = useRef()
    const scroll4 = useRef()
    const scroll5 = useRef()

    var [render, setRender] = useState({
        Home: false,
        WorkTeam: false,
        Networks: false,
        Advertising: false,
        Write: false,
        Payment: false
    })

    const handleClick = (e, bool) => {
        e.preventDefault();
        if (bool) setRender({ ...render, [e.target.id]: true })
        else setRender({ ...render, [e.target.id]: !render[e.target.id] })
    }

    function onChange() {
        setCaptchaVal(true)
    }

    const handleMinimize = (e) => {
        e.preventDefault()
        setRender({
            Home: false,
            WorkTeam: false,
            Networks: false,
            Advertising: false,
            Write: false,
            Payment: false
        })
    }

    useEffect(() => {
        token ? setIsLogged(true) : setIsLogged(false);
    }, [token, isLogged]);

    return (
        <>
            <NavBar />
           
            <div className="contactContainer">
                <div className="conttext">
                   
                                    <Formik className='formulario'
                                        initialValues={{
                                            name: "",
                                            email: "",
                                            comment: ""
                                        }}
                                        validate={(valores) => {

                                            let errors = {};

                                            if (!valores.email) {
                                                errors.email = 'Email has been required!';
                                            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(valores.email)) {
                                                errors.email = 'Invalid email address';
                                            }
                                            if (!valores.name) {
                                                errors.password = 'Name has been required!'
                                            }

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
                                                 dispatch(postSupport(valores))
                                                Swal.fire({
                                                    icon: 'success',
                                                    title: 'Thanks!',
                                                    text: "Your message was sent, we'll see what we can do about it",
                                                })
                                                resetForm()
                                            }
                                        }}>

                                        {({ touched, errors }) => (
                                            <div className='formContainer' style={{ marginLeft: '15%' }} >
                                                <Form style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                                    <div className='contactInfo'>
                                                        <h2 style={{ textAlign: 'center', margin: '0' }}>Write us!</h2>

                                                        <div className='description'>
                                                            <label>Name </label>
                                                            <Field type="text" name="name" placeholder="Name" />
                                                            {touched.name && errors.name && <span className="error">{errors.name}</span>}
                                                        </div>
                                                        <div className='description'>
                                                            <label>Email </label>
                                                            <Field type="text" name="email" placeholder="Email" />
                                                            {touched.email && errors.email && <span className="error">{errors.email}</span>}
                                                        </div>
                                                        <div className='description'>
                                                            <label>What you want to tell us?</label>
                                                        </div>
                                                        <div className='description'>
                                                            <Field style={{ margin: '20px', outline: '1px solid #fc6f53' }} type="text" name="comment" className="descriptionArea" as="textarea" placeholder="Write your question here!" />
                                                        </div>
                                                        {touched.comment && errors.comment && <span className="error">{errors.comment}</span>}
                                                        <div>
                                                            <ReCAPTCHA
                                                                ref={captcha}
                                                                sitekey="6LfFR2YhAAAAAIAfR-w_Nna_b7L1YChu2uYaRRCj"
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

                </div>
                {render?.Advertising || render?.Home || render?.Networks || render?.WorkTeam || render?.Write ?
                    <div className='descriptionS'>
                        <button type="button" className="minimize" onClick={(e) => { handleMinimize(e) }}>Minimize all tags</button>
                    </div>
                    : ''
                }
            </div>
            <Footer />
        </>
    )
}