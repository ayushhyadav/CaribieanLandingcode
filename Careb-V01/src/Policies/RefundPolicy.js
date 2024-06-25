import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class RefundPolicy extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    title: "1.	Policy Overview  ",
                    desc: "This Refund Policy applies to all bookings made through Caribbeaneaze. It outlines the terms under which refunds are processed and provides guidance to both guests and hosts regarding cancellation and refund procedures.",
                },
                {
                    title: "2.	Refund Eligibility  ",
                    desc: "Refunds are available to guests under certain conditions, as outlined by the host's chosen refund policy. The eligibility for a refund depends on the specific circumstances of the cancellation and adherence to the set policy.",
                },
                {
                    title: "3.	Service Fees in Relation to Refund and Cancellation Policies",
                    desc: "Service fees at Caribbeaneaze are structured to align with the refund and cancellation policies set by our hosts. The basic fee for using Caribbeaneaze is 7% of the total booking cost. This fee structure is modified based on the host's chosen refund policy:",
                    desc2: "•	No Refund Policy: An additional 3% fee, making the total service fee 10% of the booking cost.",
                    desc3: "•	Partial Refund Policy: An additional 2% fee, totaling 9% of the booking cost.",
                    desc4: "•	Full Refund Policy: An additional 1% fee, totaling 8% of the booking cost.Hosts have the discretion to set up their cancellation policies, which directly impact the service fee structure. For example:",
                    desc5: "•	Canceling on the day of check-in: The applicable service fee depends on whether it's no refund, partial refund, or full refund.",
                    desc6: "•	Canceling 8 days before check-in: This could result in a full refund, with a service fee of 8%.",
                    desc7: "•	Canceling 3 days before check-in: The service fee might be 9% for a partial refund, depending on the host's policy.These variations in service fees are designed to provide flexibility and choice for hosts while maintaining transparency for guests regarding potential charges when booking."
                },
                {
                    title: "4.	Host-Set Refund Policies  ",
                    desc: "Hosts on Caribbeaneaze can choose between three types of refund policies for their listings: Full Refund, Partial Refund, or No Refund. This choice influences the service fee structure and must be clearly communicated to guests before booking.",
                }
                ,
                {
                    title: "5.	Cancellation Process and Deadlines ",
                    desc: "Guests must follow the cancellation process outlined on Caribbeaneaze to be eligible for a refund. Deadlines for cancellations leading to different types of refunds are set by the host and must be adhered to for eligibility.",
                },
                {
                    title: "6.	Refund Processing  ",
                    desc: "Upon a valid cancellation, refunds are processed back to the original payment method within a specified timeframe. The exact timeline and method of refund will be communicated to the guest.",
                },
                {
                    title: "7.	Service Fees and Refunds ",
                    desc: "Service fees charged by Caribbeaneaze are generally non-refundable. Exceptions to this rule, if any, will be clearly stated in the individual host's cancellation policy.",
                },
                {
                    title: "8.	Insurance Fee Refunds  ",
                    desc: "For property owners who pay insurance fees for property protection, the refund of these fees is subject to the terms and conditions of the third-party insurance provider and the specific circumstances of the claim.",
                },
                {
                    title: "9.	Evidence Requirements for Damage Claims ",
                    desc: "Hosts may claim damages from guests. In such cases, hosts must provide clear evidence (photos, videos, receipts) within a specified timeframe post-checkout to support their claim.",
                },
                {
                    title: "10.	Dispute Resolution ",
                    desc: "In case of disputes related to refunds, Caribbeaneaze offers a mediation process. However, final decisions regarding refunds rest with the host, unless Caribbeaneaze determines that a deviation from the policy is warranted.",
                },
                {
                    title: "11.	Compliance with Local Laws ",
                    desc: "This policy is designed to be in compliance with the local laws of each jurisdiction where Caribbeaneaze operates. In case of any conflict, local laws take precedence.",
                },
                {
                    title: "12.	Modification of Policy ",
                    desc: "Caribbeaneaze reserves the right to modify this Refund Policy. All changes will be effective immediately upon posting and users will be notified of significant changes.",
                },
                {
                    title: "13.	Contact Information ",
                    desc: "For inquiries or assistance regarding refunds, users can contact Caribbeaneaze through [provided contact information].",
                }
                ,
                {
                    title: "14.	Affiliator Refund Policies  ",
                    desc: "Refund policies for services offered by affiliators are subject to the terms set by each affiliator and are independent of Caribbeaneaze’s policy.",
                }
                ,
                {
                    title: "15.	Emergency Cancellations  ",
                    desc: "In exceptional circumstances, such as natural disasters or severe weather, Caribbeaneaze may allow cancellations outside of the standard policy.",
                }
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
                <div style={{ width: '100%', overflow: 'hidden', height: "100%" }}>
                    <div style={{ display: 'flex', marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                        {/*<img style={{ width: 50, height: 50, marginRight: 10 }} alt=''*/}
                        {/*    src={require('../../assets/Document.png')}*/}
                        {/*/>*/}
                        <div style={{ flexDirection: 'row' }}>
                            <label style={{ fontSize: 20, fontWeight: '700' }}>Refund Policy</label><br />
                        </div>
                    </div>
                    {/* <div className='team&' style={{ width: '100%',height: '500px', maxHeight: '80vh', marginTop: 45, overflowY: 'scroll', borderTop: '1px solid #E2E8F0' }} >
                        {items.map((items) => (
                            <ul style={{ listStyleType: 'none' }}>
                                <li style={{ fontSize: 23, fontWeight: 'bold', marginTop: 15 }}>
                                    {items.title}
                                </li>
                                <li style={{ fontSize: 16, textAlign: 'justify', marginRight: '3%' }}>{items.desc}</li>
                            </ul>
                        ))} 
                    </div> */}
                    <div className='team' style={{ width: '100%', height: '500px', maxHeight: '70vh', marginTop: 45, overflowY: 'scroll', borderTop: '1px solid #E2E8F0', }} >
                        {items.map((item) => (
                            <ul key={item.title} style={{ listStyleType: 'none' }}>
                                <li style={{ fontSize: 23, fontWeight: 'bold', marginTop: 15 }}>
                                    {item.title}
                                </li>
                                <li style={{ fontSize: 16, textAlign: 'justify', marginRight: '3%' }}>
                                    {item.desc}
                                </li>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}



{/* <div style={{ flex: 1, justifyContent: 'center', display: 'flex', height: '50%' }}>
                <button style={{ border: 'none', background: 'none', height: 50, width: 50 }} onClick={() => this.props.closeModule()}>
                    <img style={{ float: 'left' }} src={require('../../assets/close-circle.png')} alt="Close" />
                </button>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    <div style={{ display: 'flex', marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <img style={{ width: 50, height: 50, marginRight: 10 }} alt=''
                            src={require('../../assets/Document.png')}
                        />
                        <div style={{ flexDirection: 'row' }}>
                            <label style={{ fontSize: 20, fontWeight: '700' }}>Refund Policy</label><br />
                        </div>
                    </div>

                    <div className='team' style={{ width: '100%', flex: 1, marginTop: 45, overflowY: 'auto', borderTop: '1px solid #E2E8F0', height: "50%" }}>
                        {items.map((item) => (
                            <ul key={item.title} style={{ listStyleType: 'none' }}>
                                <li style={{ fontSize: 23, fontWeight: 'bold', marginTop: 15 }}>
                                    {item.title}
                                </li>
                                <li style={{ fontSize: 16, textAlign: 'justify', marginRight: '3%' }}>
                                    {item.desc}
                                </li>
                            </ul>
                        ))}
                    </div>
                </div>
            </div> */}