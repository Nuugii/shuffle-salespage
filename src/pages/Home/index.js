import React, { useRef } from 'react'
import Popup from 'reactjs-popup';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import BurgerMenu from '../../components/BurgerMenu'
import './Home.scss'
import './Iframe.scss'
import './Modal.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper'
import TagManager from 'react-gtm-module'
import ReactPixel from 'react-facebook-pixel'
import { useCookies } from 'react-cookie';

SwiperCore.use([Navigation]);

// https://codepen.io/FelixRilling/pen/vLRNvb

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 

const tagManagerArgs = {
    gtmId: 'UA-72377409-8'
}
TagManager.initialize(tagManagerArgs)

const advancedMatching = { em: '' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
const options = {
  autoConfig: true, // set pixel's autoConfig
  debug: false, // enable logs
};
ReactPixel.init('531537167679147', advancedMatching, options);
ReactPixel.pageView(); // For tracking page view

const Home = props => {

    var signupUrl = document.getElementById("signup_url").value;
    const homeDiv = useRef(null)
    const overviewDiv = useRef(null)
    const featureDiv = useRef(null)

    const executeScrollHome = () => scrollToRef(homeDiv)
    const executeScrollOverview = () => scrollToRef(overviewDiv)
    const executeScrollFeature = () => scrollToRef(featureDiv)
    const [cookies, setCookie] = useCookies(['_cookie_accept'])

    var shouldHide = false

    if(cookies['_cookie_accept']){
        shouldHide = true
    }

    function cookieAccept() {
        var exdays = 5000;
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        setCookie('_cookie_accept', '1', { path: '/', d });
        var element = document.getElementById("_cookie_accept_box");
        element.parentNode.removeChild(element);
    }

    return (
        <div id="home-page">
            <BurgerMenu />
            <header className="header" ref={homeDiv}>
                <img className="header__logo" src="/assets/logo.png" alt="logo" />
                <ul className="header__nav">
                    <li className="header__nav__link"><a className="pointer" type="button" onClick={executeScrollOverview}>overview</a></li>
                    <li className="header__nav__link"><a href="https://support.elify.com/support/home" target="_blank">faqs</a></li>
                    <li className="header__nav__link"><a className="pointer" type="button" onClick={executeScrollFeature}>features</a></li>
                </ul>
                <div className="header__btns">
                    <a className="btn btn--header btn--lightblue" href={signupUrl}>get shuffle</a>
                    <a className="btn btn--header btn--blue" href="https://app.elify.com/#!/signin">sign in</a>
                </div>
            </header>

            <section className="heromobile">
                <div className="heromobile__content">
                    <div className="heromobile__content__title">SIMPLIFIED SALES AND MARKETING FOR ENTREPRENEURS</div>
                    <div className="heromobile__content__text">BUILD YOUR BUSINESS AND DRIVE SALES LIKE A PRO</div>
                </div>
            </section>

            <section className="hero">
                <div className="container hero__phonecontainer">
                    <div className="hero__content">
                        <div className="hero__content__title">SIMPLIFIED SALES AND MARKETING FOR ENTREPRENEURS</div>
                        <div className="hero__content__text">BUILD YOUR BUSINESS AND DRIVE SALES LIKE A PRO</div>
                        <a className="btn btn--hero btn--lightblue" href={signupUrl}>try shuffle</a>
                        <div className="disclaimer">No obligations, no contracts, cancel at any time.</div>
                    </div>
                    <div className="hero__phoneframe">
                        <div id="wrapper">
                            <div className="phone view_3" id="phone_1">
                                <iframe src="/card.html" id="frame_1"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero__scroll_here">
                    <img src="./assets/scroll_here.png" />
                </div>
            </section>

            <section className="heromobile">
                <div className="heromobile__content">
                    <a className="btn btn--hero btn--lightblue" href={signupUrl}>try shuffle</a>
                    <div className="disclaimer">No obligations, no contracts, cancel at any time.</div>
                </div>
            </section>

            <section className="icons" ref={overviewDiv}>
                <div className="container">
                    <div className="hero__icons">
                        <div className="hero__icon">
                            <img src="./assets/hero-1.png" alt="icon" className="hero__icon__image" />
                            <div className="hero__icon__text"><p>Always have the right materials on hand</p></div>
                        </div>
                        <div className="hero__icon">
                            <img src="./assets/hero-2.png" alt="icon" className="hero__icon__image" />
                            <div className="hero__icon__text"><p>Never let a lead fall through the cracks</p></div>
                        </div>
                        <div className="hero__icon">
                            <img src="./assets/hero-3.png" alt="icon" className="hero__icon__image" />
                            <div className="hero__icon__text"><p>See proof that your strategies work</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="entr">
                <div className="card">
                    <img className="card__img" src="/assets/entr.jpg" alt="" />
                    <div className="right-fix">
                        <div className="card__content">
                            <div className="card__title">ENTREPRENEURS LIKE YOU NEED TO DO IT ALL</div>
                            <div className="card__sub-title">YOU’VE GOT YOUR WORK CUT OUT FOR YOU</div>
                            <div className="card__text">
                                In this business, success doesn’t come easy, and your reputation is on the line. To really win, it takes hard work, the right tools...and a little bit of luck.
                                <br /><br/>
                                It’s natural to feel overwhelmed when you’re responsiblefor finding new leads, making sales, fulfilling orders, and maintaining customer relationships. We think there should be a solution that lets you easily manage the most important parts of your business by providing you with a system for success.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="build-marketing" ref={featureDiv}>
                <div className="section-title gradient-back-left" >CREATE AND SHARE YOUR MESSAGE.<br/> WATCH YOUR BUSINESS GROW.</div>
                <div className="sub-title">There should be a system designed with your do-it-all needs in mind.
                    Shuffle helps you elevate your brand, build your network and keep track
                    of all your customers. Share your passion and promote your business using real
                    data and a done-for-you system that works.
                    <br/><br/>
                    We’ve helped thousands of business owners like you build something worth sharing
                </div>
                <div className="cards-container">
                    <div className="card">
                        <div className="left-fix">
                            <div className="card__content">
                                <div className="card__title">BUILD PROFESSIONAL MARKETING COLLATERAL</div>
                                <div className="card__sub-title">BUILD MARKETING MATERIALS THAT MAKE YOU LOOK LIKE THE PROFESSIONAL WE KNOW YOU ARE</div>
                                <div className="card__text">
                                    With Shuffle you won’t just make a great first impression, you’ll always have the right marketing material on hand to share with any prospect.
                                </div>
                                <ul className="card__list">
                                    <li className="card__list__item">Build a digital business card</li>
                                    <li className="card__list__item">Create mobile landing pages that highlight your brand</li>
                                    <li className="card__list__item">Show off your products and services with stunning photos and embedded videos</li>
                                    <li className="card__list__item">Share the resources that work with the rest of your team</li>
                                </ul>
                            </div>
                        </div>
                        <img className="card__img" src="/assets/card-1.jpg" alt="" />
                    </div>
                    <div className="card">
                        <img className="card__img" src="/assets/card-2.jpg" alt="" />
                        <div className="right-fix">
                            <div className="card__content">
                                <div className="card__title">GROW YOUR NETWORK AND YOUR SALES</div>
                                <div className="card__sub-title">SHUFFLE MAKES IT EASY TO ADD CONTACTS, UPDATE RECORDS AND SCHEDULE FOLLOW-UPS SO YOUR LEADS AND CONTACTS NEVER FALL THROUGH THE CRACKS</div>
                                <ul className="card__list">
                                    <li className="card__list__item">Stay in touch with the people that matter most</li>
                                    <li className="card__list__item">Keep notes and set follow-up reminders so you’re always prepared for the next conversation</li>
                                    <li className="card__list__item">Touchless and paperless sharing makes face to face encounters easy</li>
                                    <li className="card__list__item">Socialize with other entrepreneurs who share resources and best practices</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="left-fix">
                            <div className="card__content">
                                <div className="card__title">TRACK & MEASURE YOUR EFFORTS</div>
                                <div className="card__sub-title">it’s crucial to learn what’s working and what’s not.</div>
                                <div className="card__text">
                                Successful entrepreneurs don’t need “magic” to achieve results. They use data to understand what works, then replicate it over and over again to scale their success. With Shuffle you can do this too.
                                </div>
                                <ul className="card__list">
                                    <li className="card__list__item">Track your marketing so you always know how your message is performing</li>
                                    <li className="card__list__item">Get real-time notifications when someone views your material</li>
                                    <li className="card__list__item">Optimize your results with stats and analytics</li>
                                    <li className="card__list__item">Track how much time leads spend on each page and what they’ve clicked on</li>
                                </ul>
                                



                            </div>
                        </div>
                        <img className="card__img" src="/assets/card-3.jpg" alt="" />
                    </div>
                </div>
            </section>
            <section className="get-started">
                <div className="section-title gradient-back-right">GETTING STARTED WITH SHUFFLE IS EASY!</div>
                    <section className="icons">
                        <div className="container">
                            <div className="hero__icons">
                                <div className="hero__icon hero__icon--bigger">
                                    <img src="./assets/started-1.png" alt="icon" className="hero__icon__image" />
                                    <div className="hero__icon__text"><p>Sign up for Shuffle and download the app</p></div>
                                </div>
                                <div className="hero__icon hero__icon--bigger">
                                    <img src="./assets/started-2.png" alt="icon" className="hero__icon__image" />
                                    <div className="hero__icon__text"><p>Create your first landing page</p></div>
                                </div>
                                <div className="hero__icon hero__icon--bigger">
                                    <img src="./assets/started-3.png" alt="icon" className="hero__icon__image" />
                                    <div className="hero__icon__text"><p>Share it with new contacts and track its success</p></div>
                                </div>
                            </div>
                            <a className="btn btn--lightblue" href={signupUrl}>LAST CHANCE TO TRY SHUFFLE</a>
                            <div className="disclaimer">No obligations, no contracts, cancel at any time.</div>
                        </div>
                    </section>
            </section>

            <section className="impressions">
                <div className="impressions__title">WHAT ENTREPRENEURS ARE SAYING ABOUT SHUFFLE</div>
                <div className="container">
                    <Swiper
                        navigation
                        loop
                        breakpoints={{
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 16,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 16,
                            },
                            480: {
                                slidesPerView: 1,
                                spaceBetween: 16, 
                            }
                        }}
                        >
                        <SwiperSlide>
                            <>
                                <div className="imressions__text">
                                    “SHUFFLE! Shuffle has
                                    transformed my life and
                                    my time! I can build a
                                    card to onboard a new
                                    team member (send it out)
                                    and keep up with
                                    everything my day gives me!
                                    It’s a life saver!”
                                </div>
                                <div className="impressions__name">
                                    – Jen S.
                                </div>
                            </>
                        </SwiperSlide>
                        <SwiperSlide>
                            <>
                                <div className="imressions__text">
                                    “Without Shuffle I’d be lost.
                                    Being able to organize my
                                    customers into groups
                                    allows me to communicate
                                    with my customers when
                                    it really matters to them.
                                    They’re always impressed
                                    by how much I remember
                                    about them, even if we’ve
                                    only interacted once
                                    or twice.”
                                </div>
                                <div className="impressions__name">
                                    – John B.
                                </div>
                            </>
                        </SwiperSlide>
                        <SwiperSlide>
                            <>
                                <div className="imressions__text">
                                    “I love how Shuffle makes
                                    it so easy to share my
                                    business to potential
                                    customers, clients and
                                    partners. The ability
                                    to set up follow up reminders,
                                    take detail notes, run
                                    lead capture campaigns
                                    and track data allows
                                    me to remain in the drivers
                                    seat at all times.”
                                </div>
                                <div className="impressions__name">
                                    – Bryce C.
                                </div>
                            </>
                        </SwiperSlide>
                        <SwiperSlide>
                            <>
                                <div className="imressions__text">
                                “I think the app is incredibly intelligent and extremely useful. I have used it effectively for over 2 years.”
                                </div>
                                <div className="impressions__name">
                                - Sara M.
                                </div>
                            </>
                        </SwiperSlide>
                        <SwiperSlide>
                            <>
                                <div className="imressions__text">
                                “Love the ability to give business cards to everyone electronically. This is a great app!”
                                </div>
                                <div className="impressions__name">
                                - Yvonne G.
                                </div>
                            </>
                        </SwiperSlide>
                        <SwiperSlide>
                            <>
                                <div className="imressions__text">
                                “Best app on the market for virtual business cards. Engage your prospects with links to your websites, social media pages, and embedded videos right on your card. Built in CRM with follow up capability. Amazing!”
                                </div>
                                <div className="impressions__name">
                                - Anne M.
                                </div>
                            </>
                        </SwiperSlide>
                        <SwiperSlide>
                            <>
                                <div className="imressions__text">
                                “This is a must if you are in business”
                                </div>
                                <div className="impressions__name">
                                - Gabriel T.
                                </div>
                            </>
                        </SwiperSlide>
                        <SwiperSlide>
                            <>
                                <div className="imressions__text">
                                “I've tried every app on the market for engaging with new contacts and following up over time - Shuffle does it fast, professional and easy! The fortune is in the followup and Shuffle makes it Simple!”
                                </div>
                                <div className="impressions__name">
                                - James L.
                                </div>
                            </>
                        </SwiperSlide>
                        <SwiperSlide>
                            <>
                                <div className="imressions__text">
                                “Whole new experience of making connections with prospects and monitoring their engagement with your content.”
                                </div>
                                <div className="impressions__name">
                                - John D.
                                </div>
                            </>
                        </SwiperSlide>
                        <SwiperSlide>
                            <>
                                <div className="imressions__text">
                                “Make new connections fast! I love being able to share all my information with anyone and track it all in the included CRM plus having access to everything on my phone is great.”
                                </div>
                                <div className="impressions__name">
                                - Allie M.
                                </div>
                            </>
                        </SwiperSlide>
                        <SwiperSlide>
                            <>
                                <div className="imressions__text">
                                “I can't believe how much I've improved the consistency of my follow up by using Shuffle. Highly Recommended!!!!”
                                </div>
                                <div className="impressions__name">
                                - Dallas A. 
                                </div>
                            </>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <footer className="footer gradient-back-left">
                <div className="container">
                    <div className="footer-row">
                        <div className="logo-wrap">
                            <img className="logo" alt="" src="./assets/white-logo.png"/>
                            <div className="elify-text">Smart and fast solutions<br/> to help you succeed.</div>
                        </div>
                        <div className="footer-columns">
                            <div className="footer-column">
                                <div className="column-title">PRODUCTS</div>
                                <div className="column-item"><a className="pointer" type="button" onClick={executeScrollOverview}>Overview</a></div>
                                <div className="column-item"><a href="https://support.elify.com/support/home" target="_blank">FAQs</a></div>
                                <div className="column-item"><a className="pointer" type="button" onClick={executeScrollFeature}>Features</a></div>
                                <div className="column-item"><a href={signupUrl}>Pricing</a></div>
                            </div>
                            <div className="footer-column">
                                <div className="column-title">COMPANY</div>
                                <div className="column-item"><a href="https://elifyshuffle.com/affiliate">Affiliate Program</a></div>
                                <Popup trigger={<div className="column-item pointer"> Contact </div>} 
                                    modal nested>
                                    {close => (
                                    <div className="modal">
                                        <button className="close" onClick={close}>
                                        &times;
                                        </button>
                                        <div className="header"> We would love to hear from you! </div>
                                        <div className="content">
                                        {' '}
                                        Thanks for reaching out, we would love to hear from you. Please email us at:
                                        <br />
                                        <a className="text special cyan" href="mailto:support@elify.com">support@elify.com</a>
                                        <br />
                                        <span className="text">We will get back to you as soon as possible.</span>
                                        <br />
                                        <span className="text">Thank you, <br />
                                        <span className="cyan">Team Elify</span></span>
                                        </div>
                                    </div>
                                    )}
                                </Popup>
                                <Popup trigger={<div className="column-item pointer"> Legal </div>} 
                                    modal nested>
                                    {close => (
                                    <div className="modal">
                                        <button className="close-legal" onClick={close}>
                                        &times;
                                        </button>
                                        <div className="content-legal">
                                            <iframe id="modal-iframe" src="https://app.elify.com/legal" frameBorder="0" />
                                        </div>
                                    </div>
                                    )}
                                </Popup>
                            </div>
                            <div className="footer-column">
                                <div className="column-title">SUPPORT</div>
                                <div className="column-item"><a href="https://www.facebook.com/groups/ElifyInsiders" target="_blank">Insiders</a></div>
                                <div className="column-item"><a href="https://support.elify.com/support/home" target="_blank">Help Desk</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-icons">
                        <a className="footer-icon" href="https://www.instagram.com/goelify" target="_blank"><i className="fab fa-instagram"></i></a>
                        <a className="footer-icon" href="https://www.facebook.com/GoElify" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        <a className="footer-icon" href="https://www.pinterest.com/elifyshuffle" target="_blank"><i className="fab fa-pinterest"></i></a>
                        <a className="footer-icon" href="https://twitter.com/ElifySolutions" target="_blank"><i className="fab fa-twitter"></i></a>
                        <a className="footer-icon" href="https://www.youtube.com/channel/UCYC7qEtULwjSFfcdKTeaW3w" target="_blank"><i className="fab fa-youtube"></i></a>
                        <a className="footer-icon" href="https://www.linkedin.com/company/elify" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <div className="reserved">
                        ©2020 SHUFFLE By Elify, All rights reserved    
                    </div>
                </div>
            </footer>
            <div className={shouldHide?'hidden':''}>
                <div id="_cookie_accept_box" className="cookieaccept">
                    <div>
                        <div className="cookieaccept__content">
                            We use Cookies to enhance your user experience. You can view a complete overview of our <a href="https://elify.com/legal#terms6" target="_blank">Cookie Policy</a>, <a href="https://elify.com/legal#terms2" target="_blank">Privacy Policy</a> and <a href="https://elify.com/legal" target="_blank">User Terms of Service</a>  for more information.
                        </div>
                        <div className="cookieaccept__gotit" id="_cookie_accept_buttons_pad">
                            <button id="_cookie_accept_button" onClick={cookieAccept}>Got It</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home