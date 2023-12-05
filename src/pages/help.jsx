import React from 'react';
export default Help;
function Help() {
const Help = () => {
    // Example FAQ data - replace with your own content
    const faqs = [
        {
            question: 'How do I update my profile?',
            answer: 'Go to the settings page and click on the profile section to update your profile information.'
        },
        {
            question: 'What is this app about?',
            answer: 'This app helps you keep track of your daily activities and connect with friends.'
        },
        {
            question: 'Who can see my data?',
            answer: 'Your data is private and can only be seen by you unless you choose to share it with others.'
        }
        // Add more FAQs as needed
    ];

    return (
        <div className="help-container">
            <h2>Frequently Asked Questions</h2>
            <div className="faqs">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <h3>{faq.question}</h3>
                        <p>{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

}
