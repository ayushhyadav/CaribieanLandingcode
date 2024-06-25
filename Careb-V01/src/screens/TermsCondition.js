import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class TermsCondition extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    title: "1.Introduction ",
                    desc: "Welcome to Caribbeaneaze, your premier vacation rental marketplace platform, accessible at https://www.caribbeaneaze.com. These Terms and Conditions govern your access to and use of our services, website, and applications. By accessing or using Caribbeaneaze, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our services.",
                },
                {
                    title: "2. Definitions ",
                    desc: "In these Terms and Conditions, the following definitions apply • Caribbeaneaze refers to the online vacation rental marketplace platform, including all its services, websites, and applications.•	Host means an individual or entity that offers a property for rent through the Caribbeaneaze platform.• Guest refers to a user who books and rents a property through the Caribbeaneaze platform.• Affiliator refers to an independent service provider offering various amenities and services through the Caribbeaneaze platform.Additional terms may be defined throughout these Terms and Conditions.",
                    
                    
                },
                {
                    title: "3. Eligibility ",
                    desc: "To use the Caribbeaneaze platform, you must be at least 18 years old or the age of legal majority in your jurisdiction, whichever is higher. By agreeing to these Terms, you represent and warrant that you have the legal capacity to enter into a binding contract.",
                },
                {
                    title: "4. Platform Description ",
                    desc: "Caribbeaneaze is an online platform that connects guests seeking vacation rentals with hosts offering properties in Caribbean countries and tropical islands worldwide. Our platform allows users to explore paradise vacation spots, enjoy local and exotic amenities, and book accommodations suited to their preferences.",
                }
                ,
                {
                    title: "5. Connecting Platform",
                    desc: "Caribbeaneaze acts solely as a connecting platform for guests, hosts, and affiliators in the vacation rental market. We do not own or manage the properties listed, nor are we directly involved in transactions or services provided between guests, hosts, and affiliators.• Role with Properties: Caribbeaneaze does not own, manage, or control any of the properties listed on our platform. We are not involved in any actual rental transactions between guests and hosts.• Role with Affiliators: Similarly, Caribbeaneaze does not manage or oversee the services provided by affiliators. Our platform facilitates the connection between affiliators and hosts, allowing them to offer enhanced services to guests.•	Liability and Responsibility: Caribbeaneaze is not liable for any aspect of the property listings, rentals, or services provided by affiliators. We do not guarantee the accuracy, legality, or safety of listings or services offered by hosts or affiliators on our platform.•	User Due Diligence: Users of Caribbeaneaze are responsible for complying with all applicable laws and for conducting their own due diligence when using the platform. This includes verifying the credibility of hosts, the quality of properties listed, and the reliability of services offered by affiliators.In summary, Caribbeaneaze serves as a platform to connect users but does not participate in the creation, negotiation, or enforcement of agreements between guests, hosts, and affiliators. Users should exercise their own judgment and caution when engaging with other parties on the platform.",
                },
                {
                    title: "6.	Jurisdiction of Operation ",
                    desc: "Caribbeaneaze operates in various jurisdictions across the globe, specifically focusing on providing services in the following regions: Antigua and Barbuda, the Bahamas, Barbados, Cuba, Dominica, the Dominican Republic, Grenada, Haiti, Jamaica, Saint Kitts and Nevis, Saint Lucia, Saint Vincent and the Grenadines, Trinidad and Tobago, Anguilla, Aruba, Bonaire, the British Virgin Islands, the Cayman Island, Curacao, Guadeloupe, Puerto Rico, Martinique, Saint Maarten, Saint Barthélemy, the US Virgin Islands, and other tropical islands with warm climates and beaches, including but not limited to Seychelles, Belize, Bali, and India.This expansive operational range may be subject to change and expansion. Users agree that they are responsible for ensuring their compliance with the laws and regulations of the specific jurisdiction where they are accessing or using the platform.",
                },
                {
                    title: "7.	Affiliate Program ",
                    desc: "Caribbeaneaze offers an affiliate program where hosts can collaborate with independent service providers, known as affiliators. These affiliators offer various amenities and services, such as culinary experiences, transportation, and beauty services, enhancing the guest experience beyond what the hosts provide.•	Hosts and Affiliators Relationship: Hosts can invite affiliators to join the platform and earn credits or a fee for each successful referral.•	Payment to Affiliators: Affiliators receive payments directly from guests for their services. Caribbeaneaze is not responsible for the payment transactions between guests and affiliators.• Service Fee for Affiliators: Affiliators are subject to a service fee, payable to Caribbeaneaze, which varies based on their policy's strictness.",
                },
                {
                    title: "8.	User Registration and Accounts ",
                    desc: "Users must register and create an account to access certain features of Caribbeaneaze. When registering, you agree to provide accurate, current, and complete information and keep this information updated. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. Caribbeaneaze reserves the right to suspend or terminate your account if any information provided during the registration process or thereafter is inaccurate, not current, or incomplete.",
                },
                {
                    title: "9.	Host Responsibilities",
                    desc: "Hosts play a crucial role in maintaining the high standard of experience on Caribbeaneaze. As a host, you are required to:•	Property Listings: Create comprehensive and detailed listings, including high-quality, current photos and thorough descriptions of the property. Listings should accurately reflect the physical state and amenities of the property. •	Maintenance and Cleanliness: Regularly maintain and clean the property to ensure a comfortable and safe environment for guests. This includes periodic checks and upkeep of all facilities and amenities advertised in the listing. •	Safety and Security: Ensure the property is safe for guests. This includes functional and secure locks, operational fire safety equipment, clearly marked exits, and the availability of first aid kits. Hosts must also provide guests with emergency contact information and instructions. •	Local Compliance: Adhere to all local laws, regulations, and guidelines relevant to property rentals, including but not limited to zoning laws, health and safety codes, and tax requirements.•	Responsive Communication: Promptly respond to guest inquiries, booking requests, and any issues that arise during their stay.•	Check-In/Check-Out Procedures: Clearly communicate check-in and check-out procedures and adhere to the agreed-upon times.",
                },
                {
                    title: "10.	Guest Responsibilities",
                    desc: "As a guest on Caribbeaneaze, you have specific responsibilities to ensure a positive experience for both you and your host:•	Accurate Booking Information: Provide precise and truthful information when making a booking. This includes the number of guests, dates of stay, and any special requirements or requests.•	Adherence to House Rules: Respect and follow the house rules set by the host. This includes noise levels, non-smoking areas, pet policies, and any specific instructions related to the use of amenities.•	Community Respect: Be considerate of the local community and neighbors. Abide by community guidelines and respect local customs and traditions.•	Timely Check-Out: Adhere to the check-out time specified by the host and follow any check-out procedures, such as key return and property condition.•	Property Care: Treat the property with care and respect. Guests are liable for any damages they cause during their stay and may be charged accordingly.",
                },
                {
                    title: "11.	Verification Process",
                    desc: "To enhance the trustworthiness and safety of our community, Caribbeaneaze has implemented a robust verification process:•	Guest Verification: Guests must provide a valid email address, phone number, and create a secure password. Additionally, guests are required to submit a government-issued photo ID to confirm their identity.•	Host Verification: Hosts follow a similar verification process as guests. Furthermore, hosts are required to provide proof of ownership or the right to rent out the listed property. This may include deeds, lease agreements, or other legal documents.•	Authenticity and Reliability: The verification process is designed to verify the authenticity of users and the reliability of listings, fostering a safe and trustworthy environment for all users.",
                },
                {
                    title: "12.	Property Listings",
                    desc: "Property listings are the cornerstone of the Caribbeaneaze experience. Hosts are expected to:•	Accurate Descriptions: Ensure all listings on Caribbeaneaze are true-to-life, with accurate descriptions of the property and amenities. Misrepresentation of the property is strictly prohibited.•	Up-to-Date Information: Regularly update the listing to reflect any changes in the property, amenities, availability, or pricing.•	Clear Terms of Rental: Specify the terms of the rental in the listing, including the rental price, availability dates, minimum and maximum stay requirements, cancellation policy, and any specific house rules or restrictions (such as no pets or no smoking).•	Content Standards: Ensure that the content in the listing, including images and text, adheres to Caribbeaneaze's content standards. Inappropriate or misleading content is not allowed.•	Right to Modify or Remove: Caribbeaneaze reserves the right to edit or remove listings that do not meet these standards, violate our policies, or are found to be misleading or inappropriate.",
                },
                {
                    title: "13.	Booking and Reservations ",
                    desc: "Guests can browse and book vacation rentals through the Caribbeaneaze platform. All bookings are subject to availability and acceptance by the host. The booking process will be completed once the guest receives a confirmation from the host. Caribbeaneaze is not a party to the transaction between the guest and the host and is not responsible for any issues arising from the booking process.",
                }
                ,
                {
                    title: "14.	Payment Terms ",
                    desc: "All payments for bookings made through Caribbeaneaze must be processed using the accepted payment methods, including debit/credit cards and PayPal. Caribbeaneaze facilitates these transactions through a third-party payment processor. Guests are responsible for paying the total booking cost, which includes the rental price set by the host and any applicable service fees.",
                }
                ,
                {
                    title: "15.	Service Fees ",
                    desc: "Caribbeaneaze charges a service fee for each booking made through the platform. This fee is integral to sustaining our operations, facilitating transactions, and maintaining our platform. The structure of our service fees is as follows:•	Base Fee: The base fee for using Caribbeaneaze is calculated as 7% of the total booking cost. This fee is mandatory for every booking processed through our platform.•	Cancellation Policy Impact: Please refer to the refund policy for more information.•	Calculation of Total Service Fee: The total service fee for a booking is the sum of the base fee and the additional fee based on the host's refund policy. For example, a booking under a 'No Refund' policy would incur a total service fee of 10% of the booking cost (7% base fee + 3% for 'No Refund').•	Hosts' Discretion on Cancellation Policy: Hosts have the autonomy to set their cancellation policies, which in turn affects the service fee structure. Hosts are encouraged to consider their chosen policy's impact on the service fee when setting their rental prices and terms.•	Transparency in Fee Display: All service fees will be clearly displayed to both guests and hosts during the booking process. This ensures transparency and enables users to make informed decisions.•	Changes to Service Fee Structure: Caribbeaneaze reserves the right to modify the service fee structure. Any changes will be communicated to users in advance and will be effective from the date specified in such communications.The service fees collected by Caribbeaneaze are non-refundable, except in circumstances where a booking is cancelled by a host or deemed ineligible under our refund policy.",
                }
                ,
                {
                    title: "16.	Cancellation Policy ",
                    desc: "Hosts on Caribbeaneaze have the discretion to set their cancellation policies, including the timeframes and conditions under which guests can cancel bookings. Guests are advised to review the cancellation policy for each property before making a reservation. Caribbeaneaze will facilitate the enforcement of these policies but is not responsible for any disputes arising from cancellations.",
                }
                ,
                {
                    title: "17.	Refund Policy ",
                    desc: "Please refer to the Refund Policy for more information on this section.",
                }
                ,
                {
                    title: "18.	Insurance and Liability for Hosts ",
                    desc: "Caribbeaneaze provides hosts with the option to purchase property protection insurance and travel insurance and assistance through a third-party provider.•	Insurance Fee: Hosts may be required to pay a monthly insurance fee for property protection. Guest may require to pay a one time fee for travel assistance protection in the case of an emergency or for some other reason  This fee is intended to cover potential damages to the property.•	Reporting Damages: In the event of damage, hosts must provide proof, such as videos or pictures, and report the incident to Caribbeaneaze through the designated third-party provider within 30 days of occurrence.•	Insurance Terms: The specific terms, coverage limits, and claims process are governed by the third-party provider's policy. The service fee for using the insurance option is non-refundable.",
                }
                ,
                {
                    title: "19.	User Conduct",
                    desc: "Users of Caribbeaneaze must conduct themselves in a manner that is lawful, respectful, and consistent with the purpose of the platform. Prohibited activities include but are not limited to: engaging in fraudulent or illegal activities, infringing upon the rights of others, posting offensive or defamatory content, and causing harm or inconvenience to other users or the platform. Caribbeaneaze reserves the right to take appropriate action against any user found to be in violation of these conduct standards, including account suspension or termination.",
                }
                ,
                {
                    title: "20.	Intellectual Property Rights ",
                    desc: "All content and materials on the Caribbeaneaze platform, including but not limited to text, graphics, logos, and software, are the property of Caribbeaneaze or its licensors and are protected by intellectual property laws. Users may not use, reproduce, modify, distribute, or display any content from Caribbeaneaze without prior written permission from the rightful owner.",
                }
                ,
                {
                    title: "21.	Content Ownership and Use ",
                    desc: "Users retain ownership of the content they submit to the Caribbeaneaze platform, such as property listings, reviews, and images. By posting content, users grant Caribbeaneaze a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display the content in connection with the operation of the platform. Users are responsible for ensuring they have the necessary rights to the content they post on Caribbeaneaze.",
                }
                ,
                {
                    title: "22.	Dispute Resolution ",
                    desc: "Caribbeaneaze provides a platform for guests and hosts to connect, but is not a party to the contracts formed between guests and hosts. Any disputes arising from these contracts are to be resolved directly between the concerned parties. Caribbeaneaze may provide assistance in dispute resolution but is not obliged to participate in or resolve such disputes.",
                }
                ,
                {
                    title: "23.	Limitation of Liability  ",
                    desc: "Caribbeaneaze is not liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with these terms, the platform, or any services provided by the platform. This limitation of liability applies regardless of the nature of the claim (contract, tort, negligence, strict liability, or any other legal theory) and even if Caribbeaneaze has been advised of the possibility of such damages.",
                }
                ,
                {
                    title: "24.	Indemnification  ",
                    desc: "Users agree to indemnify, defend, and hold harmless Caribbeaneaze, its affiliates, officers, directors, employees, and agents from any and all claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising from or in any way connected with their access to or use of the platform, their violation of these terms, or their violation of any rights of another.",
                }
                ,
                {
                    title: "25.	Termination of Use ",
                    desc: "Caribbeaneaze reserves the right to terminate or suspend a user's access to the platform at any time, with or without notice, for any reason, including but not limited to breach of these Terms and Conditions. Upon termination, the user's right to use the platform will immediately cease.",
                }
                ,
                {
                    title: "26.	Modifications to Terms ",
                    desc: "Caribbeaneaze reserves the right to modify or amend these Terms and Conditions at any time. All changes will be effective immediately upon their posting on the platform. We will make reasonable efforts to notify users of any significant changes through the platform or via email. Continued use of the platform after such changes will constitute acceptance of the new Terms and Conditions.",
                }
                ,
                {
                    title: "27.	Governing Law ",
                    desc: "These Terms and Conditions shall be governed by and construed in accordance with the laws of Canada, without regard to its conflict of law principles. Any legal action or proceeding arising under these Terms and Conditions will be brought exclusively in the federal or provincial courts located in Canada, and the parties hereby irrevocably consent to the personal jurisdiction and venue therein.",
                }
                ,
                {
                    title: "28.	Miscellaneous Provisions",
                    desc: "•	Severability: If any provision of these Terms and Conditions is found to be invalid or unenforceable, that provision will be enforced to the maximum extent permissible, and the other provisions of these Terms will remain in full force and effect.•	Waiver: Any waiver of any provision of these Terms will be effective only if in writing and signed by Caribbeaneaze. The failure of Caribbeaneaze to assert any right under these Terms shall not be considered a waiver of that right.•	Entire Agreement: These Terms and Conditions, together with the Privacy Policy and any other legal notices or agreements published by Caribbeaneaze on the platform, shall constitute the entire agreement between you and Caribbeaneaze concerning the platform.",
                }
                ,
                {
                    title: "29.	Contact Information ",
                    desc: "For any questions about these Terms and Conditions or the practices of this platform, please contact us at info@caribbeaneaze.com.",
                }
            ]
        }
    }
    render() {
        const { items } = this.state;
        return (
            <div style={{ flex: 1, height: window.innerHeight, justifyContent: 'center', display: 'flex' }}>
                <div style={{ width: '80%', overflow: 'hidden' }}>
                    <label style={{ fontSize: 34, fontWeight: '600', textAlign: 'center', display: 'block', marginTop: 50 }}>We are almost there </label>
                    <div style={{ display: 'flex', marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <img style={{ width: 50, height: 50, marginRight: 10 }} alt=''
                            src={require('../assets/Document.png')}
                        />
                        <div style={{ flexDirection: 'row' }}>
                            <label style={{ fontSize: 20, fontWeight: '700' }}>Term and Condition</label><br />
                            <label style={{ fontSize: 12, fontWeight: '400' }}>Last Update 12 May 2022</label>
                        </div>
                    </div>
                    <div className='team&' style={{ height: window.innerHeight / 2, width: '100%', marginTop: 45, overflowY: 'scroll', borderTop: '1px solid #E2E8F0' }} >
                        {/* <p>data {items}</p> */}

                        {items.map((items) => (
                            <ul style={{ listStyleType: 'none' }}>
                                <li style={{ fontSize: 23, fontWeight: 'bold', marginTop: 15 }}>
                                    {items.title}
                                </li>

                                <li style={{ fontSize: 16, textAlign: 'justify' }}>{items.desc}</li>
                            </ul>


                        ))}

                    </div>
                    <div className='btn-accpt' style={{ display: 'flex', flexDirection: 'row', marginTop: '1%', alignItems: 'center', justifyContent: 'flex-end' }}> <button style={{ width: '15%', border: 'none', background: 'white', color: '#000', fontWeight: 600 }}>Decline</button>

                        <NavLink style={{ width: '10%' }} to='/'> <button style={{ color: 'white', background: '#F15A29', borderRadius: 4, height: 35, border: 'none', fontSize: 18 }}>Accept All</button></NavLink>
                    </div>
                </div>

            </div>
        )
    }
}