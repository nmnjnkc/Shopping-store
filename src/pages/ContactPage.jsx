import React from "react";
import "../styles/ContactPage.scss";

const ContactPage = () => {
  const email = "nmnjnkc@yahoo.com";
  const phoneNumber = "+4917631251223";

  return (
    <div className="contact-page-wrapper">
      <div className="contact-page">
        <h2>Contact Information</h2>
        <div className="contact-details">
          <p>
            <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/nemanja-nikolic-48117a263/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nemanja Nikolic LinkedIn
            </a>
          </p>
        </div>
        <p>
          Thank you for visiting my portfolio! Feel free to reach out to me if
          you have any questions or if you'd like to discuss potential
          opportunities.
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
