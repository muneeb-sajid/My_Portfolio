import React, { useState } from 'react';
import './Contact.css'; // Make sure to create this CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage('Name cannot be empty.');
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage('Email cannot be empty.');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Message cannot be empty.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear previous errors
    setShowErrorToast(false); // Hide previous toast

    if (!validateForm()) {
      setShowErrorToast(true);
      return;
    }

    setIsSubmitting(true); // Disable button during submission

    // Simulate API call
    try {
      // In a real application, you would send this data to a backend service
      console.log('Submitting form data:', formData);

      // Simulate a network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate success or failure
      const success = Math.random() > 0.1; // 90% chance of success

      if (success) {
        setShowSuccessModal(true);
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        setErrorMessage('Oops! Something went wrong. Please try again.');
        setShowErrorToast(true);
      }
    } catch (error) {
      setErrorMessage('Network error. Please check your connection.');
      setShowErrorToast(true);
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false); // Re-enable button
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="form-input"
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="form-input"
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="6"
                className="form-textarea"
                disabled={isSubmitting}
              ></textarea>
            </div>
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={closeSuccessModal}>&times;</span>
            <div className="modal-icon">&#10003;</div> {/* Checkmark icon */}
            <h3>Message Sent Successfully!</h3>
            <p>Thank you for reaching out. I will get back to you soon.</p>
            <button className="modal-ok-button" onClick={closeSuccessModal}>OK</button>
          </div>
        </div>
      )}

      {/* Error Toast Notification */}
      {showErrorToast && (
        <div className="toast-notification error">
          <p>{errorMessage}</p>
          <span className="toast-close" onClick={() => setShowErrorToast(false)}>&times;</span>
        </div>
      )}
    </section>
  );
};

export default Contact;