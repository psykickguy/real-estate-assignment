import { useState } from "react";

function FAQ() {
  const faqData = [
    {
      question: "What makes Vighnaharta a trusted developer?",
      answer:
        "We focus on quality construction, timely delivery, and customer satisfaction.",
    },
    {
      question: "What types of residential projects are offered?",
      answer:
        "We offer 1 BHK and 2 BHK smart and premium residences with modern amenities.",
    },
    {
      question: "Why invest in this project?",
      answer:
        "Prime location, strong connectivity, and high appreciation potential.",
    },
    {
      question: "How can I schedule a site visit?",
      answer:
        "You can contact us via the enquiry form or call our sales team directly.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq-section">
      <div className="container">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqData.map((item, i) => (
            <div key={i} className="faq-item">
              <div
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <p>{item.question}</p>
                <span>{openIndex === i ? "-" : "+"}</span>
              </div>

              {openIndex === i && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
