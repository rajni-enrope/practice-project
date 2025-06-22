import React from "react";

const PrivacyPolicyVMS = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            Privacy Policy for Enrope Visitor Management System
                        </h1>
                        <p className="text-gray-600">Effective Date: June 21, 2025 </p>
                    </div>
                    <div className="mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                            Enrope Solutions ("we," "us," or "our") is committed to protecting the privacy and security of data collected through our Enrope Visitor Management System (VMS).
                            This Privacy Policy explains how we collect, use, disclose, and protect personal information for both visitors and organizations utilizing our VMS.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                            We do so in accordance with applicable Indian laws, including but not limited to the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 ("SPDI Rules") under the Information Technology Act, 2000.
                        </p>
                    </div>

                    {/* Section 1: Introduction to Enrope VMS  */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction to Enrope VMS  </h2>
                        <div className="mb-4">
                            <h4 className="font-semibold text-gray-800 mb-2">The Enrope VMS is a comprehensive solution designed to streamline visitor
                                management, check-ins, check-outs, and appointment scheduling for organizations.
                                Our system includes modules for: (PII):</h4>
                            <ul className="list-disc list-inside ml-4 text-gray-700">
                                <li>Checking new visitors</li>
                                <li>Checking active visitors</li>
                                <li>Checking visitor history</li>
                                <li>Checking appointments </li>
                                <li>Slot management</li>
                                <li>Managing roles and permissions</li>
                                <li>Managing users  </li>
                                <li>Notification settings</li>
                            </ul>
                        </div>
                    </section>
                    {/* Section 2: Information We Collect */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2.Data Collected </h2>
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Information Collected from Visitors:</h3>
                            <p className="text-gray-700 mb-3 text-justify">When a visitor interacts with the Enrope VMS, the following personal information is collected through forms: </p>
                            <h4 className="font-semibold text-gray-800 mb-2"> </h4>
                            <ul className="list-disc list-inside ml-4 text-gray-700">
                                <li> <strong>Contact Information:</strong> Mobile Number </li>
                                <li><strong>Verification Information:</strong> One-Time Password (OTP) for mobile number
                                    verification </li>
                                <li><strong>Identification Information:</strong> Name, Photo</li>
                                <li><strong>Visit Details:</strong> Purpose of Visit, Whom to Meet</li>
                                <li><strong>Address Information:</strong> Address</li>
                            </ul>

                        </div>
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2  Information Accessible to Organizations (Clients of Enrope Solutions):</h3>
                            <p className="text-gray-700 mb-3 text-justify">Organizations using the Enrope VMS can access and process the following visitor data: </p>
                            <ul className="list-disc list-inside ml-4 text-gray-700 space-y-1">
                                <li><strong>Visitor Details::</strong> Mobile Number, Name, Purpose of Visit, Whom to Meet,
                                    Address, Photo. </li>
                                <li><strong>Visit Timestamps:</strong> Check-in Date and Time, Check-out Date and Time .</li>
                                <li><strong>Visit Duration: </strong> In-premises Duration.</li>
                                <li><strong>Actionability:</strong> Ability for the organization to mark check-out for visitors.</li>
                                <li><strong>Appointment Management:</strong> Ability to check appointment requests made by visitors.</li>
                            </ul>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3 Information Collected from Organizations/Users within Organizations: </h3>
                            <p className="text-gray-700 mb-3 text-justify">When an organization uses the Enrope VMS, we may collect information related to its
                                users (e.g., administrators, receptionists) for account management and system access.
                                This may include:  </p>
                            <ul className="list-disc list-inside ml-4 text-gray-700 space-y-1">
                                <li>User Name</li>
                                <li>User Contact Information (e.g., email address, phone number)</li>
                                <li>Role within the organization (for permissions management)</li>
                                <li>Login credentials (encrypted)</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 3:Purpose of Data Collection */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3.Purpose of Data Collection and Usage  </h2>
                        <p className="text-gray-700 leading-relaxed mb-4 text-justify">The data collected through the Enrope VMS is used for the following purposes: </p>
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 For Visitors:</h3>
                            <ul className="list-disc list-inside ml-4 text-gray-700">
                                <li> To facilitate smooth and secure check-in and check-out processes. </li>
                                <li>To verify visitor identity. </li>
                                <li>To connect visitors with their intended contacts within the organization.</li>
                                <li>To maintain a record of visits for security and operational purposes of the organization.</li>
                                <li>To manage and confirm appointments. Address</li>
                                <li>To send relevant notifications (e.g., appointment confirmations) if enabled.</li>
                            </ul>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 For Organizations:</h3>
                            <ul className="list-disc list-inside ml-4 text-gray-700">
                                <li>To provide a centralized system for managing and tracking visitors. </li>
                                <li>To enhance security by maintaining accurate visitor records.</li>
                                <li>To monitor visitor flow and optimize resource allocation (e.g., slot management).</li>
                                <li>To allow organizations to manage appointments and visitor schedules efficiently.</li>
                                <li> To facilitate communication with visitors (e.g., sending notifications).</li>
                                <li>To generate reports and analytics related to visitor traffic (aggregated and anonymized where possible for statistical analysis).</li>
                                <li> To manage user access and permissions within the VMS for their employees.</li>
                            </ul>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 For Enrope Solutions: </h3>
                            <ul className="list-disc list-inside ml-4 text-gray-700">
                                <li> To provide, maintain, and improve the Enrope VMS functionality. </li>
                                <li>To troubleshoot technical issues and provide customer support. </li>
                                <li> To analyze system usage and performance to enhance user experience.</li>
                                <li>To ensure the security and integrity of our system. </li>
                                <li> To comply with legal obligations. </li>
                            </ul>
                        </div>
                    </section>


                    {/* Section 4: Data Storage and Security */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Storage and Security</h2>
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Data Storage:</h3>
                            <p className="text-gray-700 mb-3 text-justify">
                                All data collected through the Enrope VMS is stored on secure servers located within
                                India, in compliance with Indian data localization requirements where applicable. We
                                implement industry-standard data storage practices.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Data Security: </h3>
                            <p className="text-gray-700 mb-3 text-justify">We employ robust security measures to protect personal information from
                                unauthorized access, disclosure, alteration, and destruction. These measures include: </p>
                            <ul className="list-disc list-inside ml-4 text-gray-700">
                                <li><strong>Encryption:</strong> Data is encrypted both in transit and at rest where appropriate.</li>
                                <li><strong>Access Controls: </strong>Strict access controls are implemented to limit who can access personal data.</li>
                                <li><strong>Firewalls and Intrusion Detection Systems:</strong> To protect our network infrastructure.</li>
                                <li><strong>Regular Security Audits:</strong> To identify and address potential vulnerabilities.</li>
                                <li> <strong>Employee Training:</strong> Our employees are trained on data privacy and security best practices.</li>
                                <li><strong>Physical Security:</strong> Our data centers adhere to high physical security standards.</li>

                            </ul>
                        </div>

                    </section>


                    {/* Section 5: Data Storage and Security */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Sharing and Disclosure</h2>
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 With Organizations: </h3>
                            <p className="text-gray-700 mb-3 text-justify">
                                As a data processor, Enrope Solutions processes visitor data on behalf of the
                                organizations that use our VMS. The organizations are the data controllers and
                                determine the purposes and means of processing personal data. Organizations will
                                have access to the visitor data as outlined in Section 2.2.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 With Third-Party Service Providers:  </h3>
                            <p className="text-gray-700 mb-3 text-justify">
                                We may engage trusted third-party service providers to assist us in operating,
                                maintaining, and improving the Enrope VMS (e.g., cloud hosting providers, SMS
                                gateway providers for OTPs). These service providers are contractually bound to
                                protect the confidentiality and security of personal information and are prohibited from
                                using it for any other purpose.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.3  Legal Compliance and Protection:   </h3>
                            <p className="text-gray-700 mb-3 text-justify">
                                We may disclose personal information if required to do so by law or in the good faith
                                belief that such action is necessary to:
                            </p>
                            <ul className="list-disc list-inside ml-4 text-gray-700">
                                <li>Comply with a legal obligation or valid governmental request.</li>
                                <li>Protect and defend the rights or property of Enrope Solutions.</li>
                                <li>Prevent or investigate possible wrongdoing in connection with the VMS.</li>
                                <li>Protect the personal safety of users of the VMS or the public.</li>
                                <li>Protect against legal liability.</li>
                            </ul>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.4 Business Transfers:</h3>
                            <p className="text-gray-700 mb-3 text-justify">
                                In the event that Enrope Solutions is involved in a merger, acquisition, or asset sale,
                                your personal information may be transferred as part of that transaction. We will
                                provide notice before your personal information is transferred and becomes subject to
                                a different privacy policy.
                            </p>
                        </div>
                    </section>

                    {/* Section 6: Data Sharing  */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Sharing and Disclosure</h2>
                        <p className="text-gray-700 leading-relaxed mb-4 text-justify">We retain personal information for as long as necessary to fulfill the purposes for which
                            it was collected, to provide the VMS services to organizations, to comply with our legal
                            obligations, resolve disputes, and enforce our agreements. Organizations determine
                            the retention periods for visitor data within their VMS instance, subject to our overall
                            system retention policies and legal compliance. </p>
                    </section>

                    {/* Section 7: Visitors and Organizational Users*/}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights (Applicable to Visitors and Organizational Users) </h2>
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">7.1 For Visitors:  </h3>
                            <p className="text-gray-700 mb-3 text-justify">
                                While Enrope Solutions acts as a data processor for visitor data, visitors can exercise
                                their data rights primarily through the organization they are visiting. This includes:
                            </p>
                            <ul className="list-disc  list-inside ml-4 text-gray-700">
                                <li><strong>Right to Access: </strong>Request access to the personal information the organization holds about them.</li>
                                <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete personal information.</li>
                                <li><strong>Right to Erasure (Right to be Forgotten):</strong> Request deletion of their personal nformation held by the organization, subject to legal and contractual obligations of the organization.</li>
                                <li><strong>Right to Object:</strong> Object to certain processing activities by the organization.
                                    Visitors should direct their requests regarding their personal data to the organization
                                    they have visited or intend to visit. Enrope Solutions will assist organizations in fulfilling
                                    these rights as per our contractual agreement with them</li>
                                <li><strong>Right to Object: Object to certain processing activities by the organization.</strong></li>
                            </ul>
                            <p className="text-gray-700 mb-3 mt-2 text-justify">
                                Visitors should direct their requests regarding their personal data to the organization
                                they have visited or intend to visit. Enrope Solutions will assist organizations in fulfilling
                                these rights as per our contractual agreement with them.
                            </p>
                        </div>


                        <div className="mb-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">7.2 For Organizational Users:</h3>
                            <p className="text-gray-700 mb-3 text-justify">
                                Organizational users (e.g., administrators) have rights concerning their personal data
                                collected by Enrope Solutions for account management. These include:
                            </p>
                            <ul className="list-disc  list-inside ml-4 text-gray-700">
                                <li><strong>Right to Access:</strong> Request access to their personal information held by Enrope Solutions.</li>
                                <li><strong> Right to Rectification:</strong>Request correction of inaccurate or incomplete personal information.</li>
                                <li><strong>Right to Erasure (Right to be Forgotten):</strong>Request deletion of their personal information, subject to legal and contractual obligations.</li>
                                <li><strong>Right to Object:</strong>Object to certain processing activities.</li>
                            </ul>
                            <p className="text-gray-700 mb-3 mt-2 text-justify">
                                To exercise these rights, organizational users can contact Enrope Solutions using the
                                contact details provided below.
                            </p>
                        </div>
                    </section>

                    {/* Section 8: Consent  */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Consent</h2>
                        <p className="text-gray-700 leading-relaxed mb-4 text-justify">By using the Enrope Visitor Management System, visitors and organizations consent to the collection, use, and disclosure of their information as described in this Privacy Policy. For sensitive personal data or information (SPDI) as defined under the SPDI Rules, consent will be explicitly obtained at the point of collection, where required. Visitors filling out forms through the VMS are deemed to have provided consent for the collection of the specified data.</p>
                    </section>

                    {/* Section 9: Children's Privacy   */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children's Privacy </h2>
                        <p className="text-gray-700 leading-relaxed mb-4 text-justify">The Enrope VMS is not intended for use by individuals under the age of 18 without parental or guardian consent. We do not knowingly collect personal information from children without such consent. If we become aware that we have collected personal information from a child without verifiable parental consent, we will take steps to remove that information from our servers.  </p>
                    </section>

                    {/* Section 10: Changes to This Privacy Policy  */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Privacy Policy </h2>
                        <p className="text-gray-700 leading-relaxed mb-4 text-justify">We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new Privacy Policy on our website or within the Enrope VMS, and updating the "Effective Date" at the top of this policy. We encourage you to review this Privacy Policy periodically for any changes. </p>
                    </section>

                    {/* Section 11: Data Sharing  */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Grievance Redressal / Contact Us  </h2>
                        <p className="text-gray-700 leading-relaxed mb-4 text-justify">If you have any questions, concerns, or grievances regarding this Privacy Policy or our data practices, please contact us at:</p>

                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="font-semibold text-gray-900 mb-2">Enrope Solutions</p>
                            <p className="mb-1">
                                <strong>Address:</strong> Unit B 002, B 91, Sector 2, Noida, Uttar Pradesh  </p>
                            <p className="mb-1">
                                <strong>Email:</strong> <a href="mailto:contact@enropesolutions.com" className="text-blue-600 hover:text-blue-800">contact@enropesolutions.com </a>
                            </p>
                            <p className="mb-1">
                                <strong>Phone:</strong> <a href="tel:+917303441550" className="text-blue-600 hover:text-blue-800">+91-73034 41550</a>
                            </p>

                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <p className="text-gray-700 mb-2"><strong>Grievance Officer:</strong> Mr Ankit Francis  </p>
                            <p className="text-gray-700 mb-2"><strong>Email:</strong> ankit@enropesolutions.com </p>

                        </div>

                    </section>

                    {/* Footer */}
                    <div className="text-center pt-8 border-t border-gray-200">
                        <p className="text-gray-600 font-medium">
                            We will endeavour to respond to your queries and resolve any concerns in a timely
                            and efficient manner.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
};
export default PrivacyPolicyVMS;