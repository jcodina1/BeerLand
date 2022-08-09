import React, { useRef, useState, useEffect } from 'react';
// import { Link } from 'react-scroll';
import {Link} from 'react-router-dom'
import NavBar from '../NavBar/NavBar';
import './support.css'
// import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';
import { MdKeyboardArrowUp } from 'react-icons/md'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Footer from '../Footer/Footer';


export default function Support() {
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

    useEffect(() => {
        token ? setIsLogged(true) : setIsLogged(false);
    }, [token, isLogged]);

    return (
        <>
            <NavBar />
            <div className="options">
                <ul style={{ display: 'column', listStyle: 'none', justifyContent: 'space-around' }}>
                    <h3 className='minitag'><Link className='gg' id="Home" onClick={(e) => { scroll0.current.scrollIntoView({ behavior: "smooth" }); handleClick(e, true) }}>- What is Beerland?</Link></h3>
                    <h3 className='minitag'><Link className='gg' id="WorkTeam" onClick={(e) => { scroll1.current.scrollIntoView({ behavior: "smooth" }); handleClick(e, true) }}>- Team Work</Link></h3>
                    <h3 className='minitag'><Link className='gg' id="Networks" onClick={(e) => { scroll2.current.scrollIntoView({ behavior: "smooth" }); handleClick(e, true) }}>- Networks</Link></h3>
                    <h3 className='minitag'><Link className='gg' id="Payment" onClick={(e) => { scroll3.current.scrollIntoView({ behavior: "smooth" }); handleClick(e, true) }}>- Payment metods</Link></h3>
                    <h3 className='minitag'><Link className='gg' id="Advertising" onClick={(e) => { scroll4.current.scrollIntoView({ behavior: "smooth" }); handleClick(e, true) }}>- Advertising</Link></h3>
                    <h3 className='minitag'><Link className='gg' id="Write" onClick={(e) => { scroll5.current.scrollIntoView({ behavior: "smooth" }); handleClick(e, true) }}>- Write us!</Link></h3>
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
                         
                        </p>}

                </div>
                <div className="conttext">
                    <h1 ref={scroll2} id="Networks" onClick={(e) => handleClick(e)}>Any social network to follow you?<span className='clickMe'> Click to {render.Networks ? 'Hide' : 'find out!'}</span>{render.Networks ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}</h1>
                    {
                        render.Networks && <p className='text'>
                            Forks! You can follow us on Facebook (beerland), Instagram (@beerland) and LinkedIn (beerland).
                            Every day we upload content about our store, new beers, and more!
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
                {/* <div className="conttext">
                    <h1 ref={scroll4} id="Advertising" onClick={(e) => handleClick(e)}>Do you sell advertising on your site?<span className='clickMe'> Click to {render.Advertising ? 'Hide' : 'find out!'}</span>{render.Advertising ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}</h1>
                    {
                        render.Advertising && <p className='text'>
                            By the moment we only focus on offers you the most complete collection of books! Maybe later. If you want to
                            buy some space in our page to put your advertising there, you contact us at the end of this section, by sending
                            an email whit your offer. We will consider the option and we will contact you in case of accept it.
                            <br /><br />
                        </p>}
                </div> */}
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
                                    You then have the option to ask a question and we'll get back to you 
                                    quickly. You can ask what you want. Despite that, the best way to clear all your doubts is to be a member of our community,
                                     we can follow all your requests more closely. If you are not yet registered on our page, 
                                     we recommend that you do so now by clicking <Link to="/Contact">here</Link>. 
                                    </p>
                                    
                                      
                                </div>
                            }
                        </div>
                    }
                </div>
                
            </div>
            <Footer />
        </>
    )
}