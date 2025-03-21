import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contactform.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        to_name: "Venukanth",
        from_name: `${formData.firstName} ${formData.lastName}`,
        message: formData.description,
        email: formData.email,
        telephone: formData.telephone
      };

      await emailjs.send(
        "service_kp0wwrx",
        "template_Sun_Shine",
        templateParams,
        "lWR9tpyUjvCEX_VeG"
      );

      setMessage({
        type: "success",
        text: "Thank you! Your message has been sent successfully.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        telephone: "",
        description: "",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      setMessage({
        type: "error",
        text: "Sorry, there was an error sending your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="cf-wrapper">
      <div className="paddings innerWidth flexCenter cf-container">
        <div className="cf-left">
          <div className="image-container">
            <img src="./villa.jpg" alt="Contact Us" />
          </div>
        </div>
        <div className="flexColStart cf-right">
          <form onSubmit={handleSubmit} className="contact-form">
            <h2 className=" primaryText form-title">Contact Us</h2>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="telephone">Telephone</label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter your message"
                required
              />
            </div>
            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
            {message.text && (
              <p className={`message ${message.type}`}>{message.text}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
