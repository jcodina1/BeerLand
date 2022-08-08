import React, { useRef, useState, useEffect } from 'react';
// import { Link } from 'react-scroll';
import {Link} from 'react-router-dom'
import NavBar from '../NavBar/NavBar';
import { Formik, Form, Field } from 'formik'
import './support.css'
// import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';
import { MdKeyboardArrowUp } from 'react-icons/md'
import { MdKeyboardArrowDown } from 'react-icons/md'
 import { postSupport } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import Footer from '../Footer/Footer';
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";

export default function Support() {

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
            <div className="options">
                <ul style={{ display: 'column', listStyle: 'none', justifyContent: 'space-around' }}>
                    <h3 className='minitag'><Link id="Home" onClick={(e) => { scroll0.current.scrollIntoView({ behavior: "smooth" }); handleClick(e, true) }}>- What is BookStore?</Link></h3>
                    <h3 className='minitag'><Link id="WorkTeam" onClick={(e) => { scroll1.current.scrollIntoView({ behavior: "smooth" }); handleClick(e, true) }}>- Team Work</Link></h3>
                    <h3 className='minitag'><Link id="Networks" onClick={(e) => { scroll2.current.scrollIntoView({ behavior: "smooth" }); handleClick(e, true) }}>- Networks</Link></h3>
                    <h3 className='minitag'><Link id="Payment" onClick={(e) => { scroll3.current.scrollIntoView({ behavior: "smooth" }); handleClick(e, true) }}>- Payment metods</Link></h3>
                    <h3 className='minitag'><Link id="Advertising" onClick={(e) => { scroll4.current.scrollIntoView({ behavior: "smooth" }); handleClick(e, true) }}>- Advertising</Link></h3>
                    <h3 className='minitag'><Link id="Write" onClick={(e) => { scroll5.current.scrollIntoView({ behavior: "smooth" }); handleClick(e, true) }}>- Write us!</Link></h3>
                </ul>
            </div>
            <div className="contactContainer">
                <div className="conttext">
                    <h1 ref={scroll0} id="Home" onClick={(e) => handleClick(e)}>What is Beerland?<span className='clickMe'> Click to {render.Home ? 'Hide' : 'find out!'}</span>{render.Home ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />} </h1>
                    {
                        render.Home && <p className='text'>
                           BeerLand is an online craft-beer site where you can buy (as a user) or sell (as a company) the finest craft-beers.
                            <br /><br />
                        </p>
                    }

                </div>
                <div className="conttext">
                    <h1 ref={scroll1} id="WorkTeam" onClick={(e) => handleClick(e)}>Can you tell me about the work team behind?<span className='clickMe'> Click to {render.WorkTeam ? 'Hide' : 'find out!'}</span>{render.WorkTeam ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}</h1>
                    {
                        render.WorkTeam && <p className='text'>
                            Of course! We are students at Henry's bootcamp. We are studying to be Full Stack Web Developers, by the moment
                            you can see us like juniors web page developers. As you can see, our web is awsome.
                            <br /><br />
                            The team is:<br />
                            <span style={{ display: 'flex', justifyContent: 'center', lineHeight: '30px' }}>Christian Cordoba /
                                Alvaro Cordoba /
                                Federico Garcia /
                                Camila Castillo
                                <br />

                                Gaston Cajal Skaf /
                                Ignacion Burgos /
                                Jorge Torres /
                                Gonzalo Rumi
                            </span >
                        </p>}

                </div>
                <div className="conttext">
                    <h1 ref={scroll2} id="Networks" onClick={(e) => handleClick(e)}>Any social network to follow you?<span className='clickMe'> Click to {render.Networks ? 'Hide' : 'find out!'}</span>{render.Networks ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}</h1>
                    {
                        render.Networks && <p className='text'>
                            Yes! You can follow us on Facebook (bookStore), Instagram (@bookstore) and LinkedIn (bookstore).
                            Every day we upload content about our store, new books, new collection and more!
                            <br /><br />
                        </p>}

                </div>
                <div className="conttext">
                    <h1 ref={scroll3} id="Payment" onClick={(e) => handleClick(e)}>Which are the payment metods availables?<span className='clickMe'> Click to {render.Payment ? 'Hide' : 'find out!'}</span>{render.Payment ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}</h1>
                    {
                        render.Payment && <p className='text'>
                            You can pay through PayPal. At this moment, we are developing a
                            new feature that will allow to our users to pay whit cryptocurrency!
                            <br /><br />
                        </p>}
                </div>
                <div className="conttext">
                    <h1 ref={scroll4} id="Advertising" onClick={(e) => handleClick(e)}>Do you sell advertising on your site?<span className='clickMe'> Click to {render.Advertising ? 'Hide' : 'find out!'}</span>{render.Advertising ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}</h1>
                    {
                        render.Advertising && <p className='text'>
                            By the moment we only focus on offers you the most complete collection of books! Maybe later. If you want to
                            buy some space in our page to put your advertising there, you contact us at the end of this section, by sending
                            an email whit your offer. We will consider the option and we will contact you in case of accept it.
                            <br /><br />
                        </p>}
                </div>
                <div className="conttext">
                    <h1 ref={scroll5} id="Write" onClick={(e) => handleClick(e)}>How can i do to contact you directly?<span className='clickMe'> Click to {render.Write ? 'Hide' : 'find out!'}</span>{render.Write ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}</h1>
                    {
                        render.Write &&
                        <div>
                          
                            {isLogged ?

                                <p className='text'>You are already a member of our community! You can ask whatever you want, just click the option "User Support" on your profile menu!</p>

                                :
                                <div>
                                    <p className='text'>
                                        Down below you have the option to send us an email, and we will response you quickly. You can
                                        ask what ever you want. In spite of that, the best way to clean all your doubts is being a
                                        member of our community, we can follow all your request closer. If you are not register
                                        in our page yet, we recomends you to do it now clicking here.
                                    </p>
                                    <Formik
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
                                                <Form style={{ display: 'flex', justifyContent: 'center' }}>
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
                                </div>
                            }
                        </div>
                    }
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