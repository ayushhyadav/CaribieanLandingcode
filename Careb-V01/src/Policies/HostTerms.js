import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class HostTerms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    title: "1.Introduction ",
                    desc: "Welcome to Caribbeaneaze! These terms and conditions outline the rules and regulations for hosts listing their properties on our platform. By listing your property, you agree to comply with these terms.",
                },
                {
                    title: "2. Service Fees ",
                    desc: "Caribbeaneaze charges a service fee for each booking made through the platform. This fee helps cover the cost of secure transactions, customer support, and marketing efforts. The service fee is calculated based on the host's chosen cancellation policy and is deducted from the host's payout. The current service fee structure is as follows:",
                    desc1: "- Flexible: 3% (added to the basic service fee charge of 2-2.5%, depending on the region the host is from)",
                    desc2: "- Moderate: 5% (added to the basic service fee charge of 2-2.5%, depending on the region the host is from)",
                    desc3: "- Firm: 7% (added to the basic service fee charge of 2-2.5%, depending on the region the host is from)",
                    desc4: "- Strict: 10% (added to the basic service fee charge of 2-2.5%, depending on the region the host is from)"


                },
                {
                    title: "3. Payment Terms",
                    desc: "Hosts will receive payments for bookings minus applicable fees. Payments are processed and transferred to the host's specified account within [X] days after the guest's check-in date.",
                },
                {
                    title: "4. Cancellation Policies ",
                    desc: "Hosts can choose from the following cancellation policies for their listings:",
                    desc1: "- Flexible: Guests receive a full refund if they cancel at least 24 hours before check-in. Hosts forfeit the cleaning fee if guests cancel within this period. If guests cancel less than 24 hours before check-in, they are charged for the first night but receive a refund for the remaining nights. If guests cancel after checking in, they may be eligible for a partial refund for the remaining nights.",
                    desc2: "- Moderate: Guests must cancel at least 5 days before the reservation date to receive a full refund of accommodation fees. If guests cancel within 5 days of the reservation start date, the first night and service fee are non-refundable, and only 50% of the booking fees are refunded. If guests cancel after checking in, 50% of the remaining nightly accommodation fees will be refunded, but guests still pay for nights spent.",
                    desc3: "- Firm: Guests must cancel at least 30 days prior to check-in to receive a full refund. If guests cancel between 7 and 30 days prior to check-in, they receive a 50% refund. If guests cancel less than seven days prior to check-in, hosts receive 100% of the booking fee. Guests can receive a full refund if they cancel within 48 hours of booking, provided they cancel at least 14 days before check-in.",
                    desc4: "- Strict: Guests receive a full refund if they cancel within 48 hours of booking and at least 14 days before the property's local check-in time. After 48 hours, guests are entitled to a 50% refund regardless of how far in advance the check-in date is. Guests receive a 50% refund of accommodation fees if they cancel 7-14 days before check-in."
                }
                ,
                {
                    title: "5. Host Responsibilities",
                    desc: "Hosts are responsible for maintaining their properties and ensuring they are clean, safe, and accurately represented in their listings. Hosts must comply with all local laws and regulations related to their rental properties.",
                },
                {
                    title: "6.	Insurance and Liability ",
                    desc: "Hosts are encouraged to obtain appropriate insurance coverage for their rental properties. Caribbeaneaze is not liable for any damages, injuries, or losses incurred during a guest's stay.",
                },
                {
                    title: "7.Termination",
                    desc: "Caribbeaneaze reserves the right to remove a host's listing and terminate their account if they violate these terms and conditions or engage in any behavior deemed harmful to the platform or its users.",
                },
                {
                    title: "8.Amendments",
                    desc: "Caribbeaneaze may update these terms and conditions from time to time. Hosts will be notified of any changes, and continued use of the platform constitutes acceptance of the updated terms.",
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
                <label style={{ fontSize: 20, fontWeight: '700' }}>Host Terms and Policy</label><br />
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