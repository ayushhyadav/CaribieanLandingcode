import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class PrivacyPolicy extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    title: "1.Introduction ",
                    desc: "Welcome to Caribbeaneaze, accessible at www.caribbeaneaze.com. This Privacy Policy is designed to inform you about how we collect, use, disclose, and protect the personal information of our users. Our commitment is to ensure the confidentiality and integrity of your data, adhering to the best practices in data protection. This policy applies to all services offered by Caribbeaneaze and outlines our obligations and your rights concerning your personal information. ",
                },
                {
                    title: "2. Definitions ",
                    desc: "•	'Personal Data': Any information relating to an identifiable individual. This includes, but is not limited to, names, addresses, email addresses, payment information, and any other data that can be directly or indirectly linked to an individual.",
                    desc2: "•	'Processing': Any operation or set of operations performed on personal data, including collection, recording, organization, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination, or otherwise making available, alignment or combination, restriction, erasure, or destruction.",
                    desc3: "•	'Data Controller': The entity that determines the purposes and means of processing personal data. In this context, Caribbeaneaze is the data controller.",
                    desc4: "•	'Data Subject': Any living individual who is the subject of personal data."
                },
                {
                    title: "3. Data Controller Information  ",
                    desc: "Caribbeaneaze, the data controller, is responsible for your personal data. We are committed to protecting your privacy and ensuring that your personal data is processed in accordance with applicable laws. For any inquiries or requests regarding your personal data, please contact us at the following address:" ,
                    desc2:" [Privacy Contact Details]", 
                    desc3: "Caribbeaneaze", 
                    desc4: "[Physical Address]",

                },
                {
                    title: "4.Jurisdiction and Compliance  ",
                    desc: "Our operations span various regions, each with its data protection laws. In all jurisdictions, including the European Union under the GDPR and Canada, we commit to upholding the highest standards of data protection. We implement policies and practices to ensure compliance with each region's legal requirements. This policy reflects our dedication to safeguarding personal information and respecting the nuances of international data protection standards.",
                }
                ,
                {
                    title: "5. Personal Data Collection ",
                    desc: "We collect personal data essential for providing our services. This includes, but is not limited to:",
                    desc2: "•	Identification and contact data (name, email address, telephone number).",
                    desc3: "•	Financial and transaction data (credit card details, payment history).",
                    desc4: "•	Interaction data (user preferences, feedback).",
                    desc5: "•	Technical data (IP addresses, browser type, operating system). This data is collected through various means, such as when you register on our platform, make a booking, or interact with our customer service."
                },
                {
                    title: "6. Purpose of Data Collection  ",
                    desc: "The personal data we collect is used for specific, explicit, and legitimate purposes, including:",
                    desc2: "•	To provide and manage our services effectively.",
                    desc3: "•	To process transactions and billing.",
                    desc4: "•	To communicate with you regarding your account or bookings.",
                    desc5: "•	For customer support and to respond to your inquiries.",
                    desc6: "•	To improve and customize our services based on user preferences.",
                    desc7: "•	For internal operations, such as data analysis, audits, fraud prevention.",
                    desc8: "•	To comply with legal obligations and regulatory requirements.",
                },
                {
                    title: "7.	Lawful Basis for Processing  ",
                    desc: "We process your personal data based on one or more of the following lawful bases:",
                    desc2: "•	Consent: Where you have given clear consent for us to process your personal data for a specific purpose.",
                    desc3: "•	Contract: Where the processing is necessary for a contract we have with you, or because you have asked us to take specific steps before entering into a contract.",
                    desc4: "•	Legal Obligation: Where the processing is necessary for us to comply with the law (not including contractual obligations).",
                    desc5: "•	Legitimate Interests: Where the processing is necessary for our legitimate interests or the legitimate interests of a third party, unless there is a good reason to protect your personal data which overrides those legitimate interests."
                },
                {
                    title: "8.	Data Sharing and Disclosure  ",
                    desc: "We may share your personal data with third-party service providers, partners, and authorities as necessary. This includes sharing for purposes of service provision, payment processing, legal compliance, or when we have your explicit consent. We ensure these parties adhere to strict data protection and confidentiality standards.",
                },
                {
                    title: "9.	International Data Transfers ",
                    desc: "Your data may be transferred to, stored, and processed in countries outside your jurisdiction, including regions not offering the same level of data protection. We implement safeguards, such as standard contractual clauses, to ensure your data is protected.",
                },
                {
                    title: "10.	Data Subject Rights ",
                    desc: "Under GDPR and other privacy laws, you have rights regarding your personal data, including access, rectification, erasure, restriction of processing, data portability, and the right to object. We provide mechanisms for you to exercise these rights.",
                },
                {
                    title: "11.	Jurisdiction ",
                    desc: "This Privacy Policy is designed to comply with the laws and regulations of the jurisdictions where Caribbeaneaze operates, including but not limited to Antigua and Barbuda, the Bahamas, Caribbean Islands, and other tropical regions. We ensure that our data processing practices are in line with the local data protection laws of each jurisdiction, providing a consistent level of protection across our operations. We are committed to adapting our policy to accommodate any changes in these laws.",
                },
                {
                    title: "12.	Compliance with PIPEDA ",
                    desc: "In Canada, we adhere to the Personal Information Protection and Electronic Documents Act (PIPEDA). This act sets out the ground rules for how businesses must handle personal information in the course of commercial activity. Our compliance with PIPEDA ensures that we meet our obligations regarding the collection, use, and disclosure of personal data in Canada, including principles of consent, limited collection, accuracy, and accountability.",
                },
                {
                    title: "13.	Consent and Withdrawal  ",
                    desc: "Where we rely on your consent to process personal data, you have the right to withdraw consent at any time. However, this will not affect the lawfulness of processing based on consent before its withdrawal.",
                }
                ,
                {
                    title: "14.	Data Protection Impact Assessments (DPIAs)  ",
                    desc: "We conduct DPIAs for processing activities likely to result in a high risk to your rights and freedoms, particularly using new technologies. These assessments help us mitigate risks involved in data processing.",
                }
                ,
                {
                    title: "15.	Data Security Measures  ",
                    desc: "We implement robust technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. This includes encryption, access controls, and secure data storage.",
                }
                ,
                {
                    title: "16.	Data Breach Notification  ",
                    desc: "In the event of a data breach, we will promptly notify you and relevant authorities, as required by law. We will provide details of the breach, its likely consequences, and the measures taken to address it.",
                }
                ,
                {
                    title: "17.	Data Retention Policy  ",
                    desc: "Personal data is retained only for as long as necessary to fulfill the purposes we collected it for, including for satisfying any legal, accounting, or reporting requirements. After this period, data is securely deleted or anonymized.",
                }
                ,
                {
                    title: "18.	Children’s Privacy  ",
                    desc: "Our services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children without parental consent. If we become aware that a child has provided us with personal data, we take steps to remove such information and terminate the child's account.",
                }
                ,
                {
                    title: "19.	Automated Decision Making and Profiling ",
                    desc: "We may use automated decision-making processes, including profiling, for service optimization. Users have the right to not be subject to decisions based solely on automated processing, including profiling, which produces legal effects or similarly significantly affects them.",
                }
                ,
                {
                    title: "20.	Third-Party Links and Services  ",
                    desc: "Our platform may contain links to third-party websites and services. We are not responsible for the privacy practices of these external sites and encourage users to read their privacy policies.",
                }
                ,
                {
                    title: "21.	Policy Updates and Contact Information  ",
                    desc: "We reserve the right to update this policy at any time. Changes will be effective immediately upon posting on our website. Users are encouraged to review the policy periodically. For any privacy-related questions or concerns, please contact us at [Contact Information].",
                }
                ,
                {
                    title: "22.	Acceptance of These Terms  ",
                    desc: "By using our services, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our services. Your continued use of the services following the posting of changes to this policy will be deemed your acceptance of those changes.",
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
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', height: '100%' }}>
        <div style={{ display: 'flex', marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
            {/*<img style={{ width: 50, height: 50, marginRight: 10 }} alt=''*/}
            {/*    src={require('../../assets/Document.png')}*/}
            {/*/>*/}
            <div style={{ flexDirection: 'row' }}>
                <label style={{ fontSize: 20, fontWeight: '700' }}>Privacy Policy</label><br />
            </div>
        </div>
        
        <div className='team' style={{ width: '100%', flex: 1, marginTop: 45, maxHeight: '70vh', overflowY: 'auto', borderTop: '1px solid #E2E8F0' }}>
            {items.map((item) => (
                <ul key={item.title} style={{ listStyleType: 'none' }}>
                    <li style={{ fontSize: 23, fontWeight: 'bold', marginTop: 15 }}>
                        {item.title}
                    </li>
                    <li style={{ fontSize: 16, textAlign: 'justify', marginRight: '3%' }}>
                        {item.desc} <br />{item.desc2}<br />{item.desc3}<br />{item.desc4}<br />{item.desc5}<br />{item.desc6}<br />{item.desc7}<br />{item.desc8}
                    </li>
                </ul>
            ))}
        </div>
    </div>
</div>

        )
    }
}