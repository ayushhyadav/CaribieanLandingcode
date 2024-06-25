import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class CookiePolicy extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    title: "1.Introduction ",
                    desc: "Welcome to Caribbeaneaze. This Cookie Policy explains how we use cookies and similar technologies to recognize you when you visit our website [https://www.caribbeaneaze.com]. It explains what these technologies are and why we use them, as well as your rights to control our use of them.",
                },
                {
                    title: "2.What Are Cookies? ",
                    desc: "Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.",


                },
                {
                    title: "3.Why Do We Use Cookies?",
                    desc: "We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as 'essential' or 'strictly necessary' cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for analytics, performance, and functionality, and in some cases, for targeting and advertising purposes.",
                },
                {
                    title: "4.Types of Cookies We Use ",
                    desc: "•	Essential Cookies: These cookies are necessary to provide you with services available through our website and to use some of its features." ,
                    desc2: "•	Performance and Functionality Cookies: These cookies are used to enhance the performance and functionality of our website but are non-essential to their use.",
                    desc3: "•	Analytics and Customization Cookies: These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.",
                    desc4: "•	Advertising Cookies: These cookies are used to make advertising messages more relevant to you."
                }   
                ,
                {
                    title: "5.Control of Cookies ",
                    desc: "You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in the cookie consent banner.",
                },
                {
                    title: "6.Third-Party Cookies  ",
                    desc: "Some cookies that have been set on our website are not set on a first-party basis by Caribbeaneaze. The third-party cookies which might be used include Google Analytics, social media integrations, and advertising platforms.",
                },
                {
                    title: "7.Do Not Track  ",
                    desc: "Some browsers offer a “Do Not Track” feature that signals to websites you visit that you do not want to have your online activity tracked. Our website does not currently respond to 'Do Not Track' signals.",
                },
                {
                    title: "8.Policy Updates  ",
                    desc: "We may update this Cookie Policy to reflect changes to our practices or for other operational, legal, or regulatory reasons.",
                },
                {
                    title: "9.Contact Us ",
                    desc: "If you have any questions about our use of cookies or other technologies, please email us at [Contact Information].",
                },
                
            ]
        }
    }
    render() {
        const { items } = this.state;
        return (
            <div style={{ flex: 1, justifyContent: 'center', display: 'flex', height: '50%' }}>
    <button style={{ border: 'none', background: 'none', height: 50, width: 50 }} onClick={() => this.props.closeModule()}>
        {/*<img style={{ float: 'left' }} src={require('../../assets/close-circle.png')} alt="Close" />*/}
    </button>
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', height: '100%' }}>
        <div style={{ display: 'flex', marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
            {/*<img style={{ width: 50, height: 50, marginRight: 10 }} alt=''*/}
            {/*    src={require('../../assets/Document.png')}*/}
            {/*/>*/}
            <div style={{ flexDirection: 'row' }}>
                <label style={{ fontSize: 20, fontWeight: '700' }}>Cookie Policy</label><br />
            </div>
        </div>
        
        <div className='team' style={{ width: '100%', flex: 1, marginTop: 45, maxHeight: '70vh', overflowY: 'auto', borderTop: '1px solid #E2E8F0' }}>
            {items.map((item) => (
                <ul key={item.title} style={{ listStyleType: 'none' }}>
                    <li style={{ fontSize: 23, fontWeight: 'bold', marginTop: 15 }}>
                        {item.title}
                    </li>
                    <li style={{ fontSize: 16, textAlign: 'justify', marginRight: '3%' }}>
                        {item.desc} <br />{item.desc2}<br />{item.desc3}<br />{item.desc4}
                    </li>
                </ul>
            ))}
        </div>
    </div>
</div>

        )
    }
}