import React from "react";
const RefundPolicyVMS = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        Refund and Cancellation Policy
                    </h1>
                    <p className="text-lg text-gray-600 mb-2">
                        Enrope Visitor Management System
                    </p>
                    <p className="text-sm text-gray-500 mb-2">
                        (A Quality Product of Enrope Solutions)
                    </p>
                    <p className="text-sm font-medium text-gray-700">
                        Effective Date: June 21, 2025
                    </p>
                </div>

                <div className="prose prose-gray max-w-none">
                    <p className="text-justify mb-6">
                        This Refund and Cancellation Policy ("Policy") outlines the terms and conditions for refunds and cancellations related to the Enrope Visitor Management System ("System"), a quality product of Enrope Solutions. This Policy applies to both organizations ("Organizations") subscribing to the System and individual visitors ("Visitors") interacting with the System. This Policy is in accordance with applicable Indian laws and regulations.
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Definitions </h2>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li className="text-justify">
                                <strong>Enrope Solutions:</strong> The provider of the Enrope Visitor Management System.
                            </li>
                            <li className="text-justify">
                                <strong>Enrope Visitor Management System (System): </strong> The software solution designed for managing visitors, check-ins, check-outs, and appointments, including modules for new visitors, active visitors, visitor history, appointments, slot management, roles and permissions, user management, and notification settings.
                            </li>
                            <li className="text-justify">
                                <strong>Organization(s):</strong> Any entity, business, or individual subscribing to and utilizing the Enrope Visitor Management System for their visitor management needs.
                            </li>
                            <li className="text-justify">
                                <strong>Visitor(s):</strong>  Individuals who interact with the Enrope Visitor Management System by providing their data (mobile number, OTP, name, purpose of visit, whom to meet, address, photo) for check-in, check-out, or appointment purposes.
                            </li>
                            <li className="text-justify">
                                <strong>Subscription :</strong>  The agreement between Enrope Solutions and an Organization for the use of the Enrope Visitor Management System, typically for a defined period (e.g., monthly, annually).
                            </li>
                            <li className="text-justify">
                                <strong>Effective Date:</strong> The date on which the Organization's subscription to the System commences.
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2.  Policy for Organizations</h2>

                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1. Free Trial/Demo:</h3>
                            <p className="text-justify mb-3">
                                Enrope Solutions may offer a free trial or demo period for the Enrope Visitor Management System. During this period, Organizations can evaluate the System's features and functionalities. No charges will be incurred during the free trial, and therefore, no refunds are applicable for the free trial period.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2.  Subscription Cancellation by Organization: </h3>
                            <ul className="list-disc pl-6 mb-4 space-y-3">
                                <li>
                                    <strong>Monthly Subscriptions: </strong> <span className="text-justify">Organizations on a monthly subscription plan may cancel their subscription at any time. The cancellation will be effective at the end of the current billing cycle. No refunds (pro-rata or otherwise) will be issued for the remaining days of the current billing cycle after cancellation. Access to the System will continue until the end of the current billing period. </span>
                                </li>
                                <li><strong>Annual Subscriptions: </strong> <span className="text-justify">Organizations on an annual subscription plan may cancel their subscription.  </span>
                                    <ul className="list-[circle] pl-6 mt-2 space-y-2">
                                        <li className="leading-relaxed"> <strong>Cancellation within 30 days of the Effective Date:</strong>{" "}
                                            <span className="text-justify">
                                                If an Organization cancels an annual subscription within thirty (30) days of the Effective Date, Enrope Solutions may offer a pro-rata refund for the unused portion of the subscription, less any applicable setup fees, processing charges, or discounts applied.
                                            </span>
                                        </li>
                                        <li className="leading-relaxed"> <strong>Cancellation after 30 days of the Effective Date: </strong>{" "}
                                            <span className="text-justify">
                                                If an Organization cancels an annual subscription after thirty (30) days from the Effective Date, no refunds (pro-rata or otherwise) will be issued for the remaining unused portion of the subscription term. Access to the System will continue until the end of the paid annual subscription period.
                                            </span>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Notice of Cancellation:  </strong> <span className="text-justify"> Organizations must provide written notice of cancellation to Enrope Solutions through the designated support channels or email address provided by Enrope Solutions.  </span>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3.  Refunds for Organizations:</h3>
                            <ul className="list-disc pl-6 mb-4 space-y-3">
                                <li>
                                    <strong>No Refunds for Partial Use:</strong> <span className="text-justify"> Enrope Solutions does not provide refunds for partial use of the System, regardless of the subscription term (monthly or annual), except as explicitly stated in Section 2.2 for annual subscriptions within the initial 30 days. </span>
                                </li>
                                <li>
                                    <strong>Refund Eligibility:</strong> <span className="text-justify"> Refunds, if applicable, will be processed only in accordance with the terms outlined in Section 2.2. </span>
                                </li>
                                <li>
                                    <strong>Processing of Refunds:</strong> <span className="text-justify"> : Approved refunds will be processed within 15-30 business days from the date of approval. The refund will be issued to the original payment method used for the subscription. Enrope Solutions is not responsible for any delays caused by the payment gateway or banking institutions.  </span>
                                </li>
                                <li>
                                    <strong>Disputes:</strong> <span className="text-justify">  Any disputes regarding refunds must be raised with Enrope Solutions in writing within 7 days of the billing date or cancellation request, as applicable. </span>
                                </li>

                            </ul>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.4. Termination by Enrope Solutions:</h3>
                            <p className="text-justify mb-3">
                                Enrope Solutions reserves the right to terminate an Organization's subscription to the System at its sole discretion, without prior notice, if the Organization breaches any terms of service, engages in fraudulent activity, or uses the System in a manner that violates applicable laws or harms the integrity of the System. In such cases, no refunds will be provided.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Policy for Visitors</h2>
                        <p className="text-justify mb-3">
                            The Enrope Visitor Management System is primarily a tool for Organizations to manage their visitors. Visitors interact with the system by providing their data for check-in, check-out, and appointment purposes.
                        </p>
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1.  Data Accuracy and Responsibility:</h3>
                            <ul className="list-disc pl-6 mb-4 space-y-3">
                                <li>
                                    <span className="text-justify">Visitors are solely responsible for the accuracy and completeness of the data they provide through the System (mobile number, OTP, name, purpose of visit, whom to meet, address, photo).  </span>
                                </li>
                                <li>
                                    <span className="text-justify"> Enrope Solutions is not responsible for any issues arising from inaccurate or incomplete data provided by visitors.  </span>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2.  Cancellation of Appointments by Visitors:</h3>
                            <ul className="list-disc pl-6 mb-4 space-y-3">
                                <li>
                                    <span className="text-justify">The ability to cancel or reschedule appointments is solely at the discretion of the Organization that set up the appointment.  </span>
                                </li>
                                <li>
                                    <span className="text-justify"> Visitors should directly contact the Organization with whom they have an appointment to inquire about cancellation or rescheduling policies. Enrope Solutions does not facilitate direct appointment cancellations or refunds for visitors, as it is an operational matter between the Visitor and the Organization. </span>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3. Data Privacy and Deletion:</h3>
                            <ul className="list-disc pl-6 mb-4 space-y-3">
                                <li>
                                    <span className="text-justify"> Visitors' data is collected and stored by the Organization using the Enrope Visitor Management System.   </span>
                                </li>
                                <li>
                                    <span className="text-justify">Visitors should refer to the privacy policy of the specific Organization they are visiting for details on data retention, usage, and deletion requests.  </span>
                                </li>
                                <li>
                                    <span className="text-justify">While Enrope Solutions provides the technical infrastructure, the Organization is the data controller and is responsible for complying with data privacy regulations concerning visitor data. Visitors wishing to request deletion of their data should contact the Organization directly.   </span>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.4.  Cancellation of Appointments by Visitors:</h3>
                            <p className="text-justify mb-3">
                                The Enrope Visitor Management System does not involve direct financial transactions by Visitors for its use. Therefore, no refunds are applicable to Visitors.
                            </p>
                        </div>

                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. General Provisions</h2>

                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1. Changes to the Policy: </h3>
                            <p className="text-justify mb-3">
                                Enrope Solutions reserves the right to modify or update this Refund and Cancellation Policy at any time. Any changes will be effective immediately upon posting the revised Policy on the Enrope Solutions website or notifying Organizations via email. It is the responsibility of both Organizations and Visitors to review this Policy periodically for any updates.
                            </p>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2. Governing Law and Jurisdiction: </h3>
                            <p className="text-justify mb-3">
                                This Policy shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with this Policy shall be subject to the exclusive jurisdiction of the courts in Gautam Budh Nagar, Uttar Pradesh, India.
                            </p>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.3. Contact Information: </h3>
                            <p className="text-justify mb-3">
                                For any questions or concerns regarding this Refund and Cancellation Policy, please contact Enrope Solutions through the official support channels or the contact information provided on the Enrope Solutions website.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Acceptance of Policy</h2>
                        <p className="text-justify mb-3">
                            By subscribing to and using the Enrope Visitor Management System, Organizations acknowledge that they have read, understood, and agreed to be bound by the terms and conditions of this Refund and Cancellation Policy.
                        </p>
                        <p className="text-justify mb-3">
                            Visitors, by providing their information through the Enrope Visitor Management System, acknowledge that they have understood their rights and responsibilities as outlined in this Policy, particularly concerning data accuracy and contacting the Organization for appointment-related matters.
                        </p>
                    </section>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-justify mb-3"><strong>Enrope Solutions</strong> (A Quality Product of Enrope Solutions)
                    </p>
                     <p className="text-justify mb-3"><strong>Date of Last Revision: </strong>
                     June 21, 2025
                    </p>
                    <button
                        onClick={() => window.history.back()}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    )
};
export default RefundPolicyVMS;
