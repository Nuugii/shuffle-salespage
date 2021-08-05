import React from 'react'
import './MobileOverlay.scss'

const MobileOverlay = () => {
    return (
        <div id="mobile-overlay">
            <section className="header">
                <img className="header-img" src="" alt=""/>
                <div className="header-name">Micheal Richards</div>
                <div className="header-job"></div>
            </section>
            <section className="social">
                <div className="social-title">Contact me</div>
                <div className="social-icons">
                    <a className="social-icon" href="/"></a>
                    <a className="social-icon" href="/"></a>
                    <a className="social-icon" href="/"></a>
                    <a className="social-icon" href="/"></a>
                </div>
                <div className="social-title">Connect with me</div>
                <div className="social-icons">
                    <a className="social-icon" href="/"></a>
                    <a className="social-icon" href="/"></a>
                    <a className="social-icon" href="/"></a>
                    <a className="social-icon" href="/"></a>
                </div>
                <a className="btn btn-social">ADD TO CONTACTS</a>
                <a className="btn btn-social">SHARE THE CARD</a>
            </section>
            <section className="social-marketing">
                <div className="section-title">LEARN THE BENEFITS <br/> OF SOCIAL MARKETING</div>
                {/* embedded video */}
            </section>
            <section className="top-25">
                <div className="section-title">TOP 25 <br/> ENTREPRENEURIAL TIPS</div>
                <img className="section-img" src="" alt="" />
            </section>
            <section className="join-form">
                <div className="section-title">JOIN MY MAILING LIST</div>
            </section>
            <section className="footer">
                DESIGN YOUR OWN CARD NOW
            </section>
        </div>
    )
}

export default MobileOverlay