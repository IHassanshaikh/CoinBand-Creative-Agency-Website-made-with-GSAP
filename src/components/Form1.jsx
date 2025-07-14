import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const Form1 = () => {
  const [formData, setFormData] = useState({
    projectType: '',
    businessGoal: '',
    websiteLinks: '',
    marketingBudget: '',
    name: '',
    email: '',
    phoneCode: '+92',
    phoneNumber: '',
    telegram: '',
    recaptchaToken: ''
  });



  const [recaptchaVerified, setRecaptchaVerified] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRecaptcha = (token) => {
    setFormData(prev => ({
      ...prev,
      recaptchaToken: token
    }));
    setRecaptchaVerified(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recaptchaVerified) {
      alert("Please verify you're not a robot");
      return;
    }
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Describe your project<span>*</span></label>
        <select
          className="form-control custom-select"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Make your choice</option>
          <option value="DeFi">DeFi</option>
          <option value="NFT">NFT</option>
          <option value="Memecoin">Memecoin</option>
          <option value="Wallet">Wallet</option>
          <option value="Exchange">Exchange</option>
          <option value="Blockchain">Blockchain</option>
          <option value="Token">Token</option>
          <option value="Other">Other (comment)</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">What is your business goal for the marketing campaign?<span>*</span></label>
        <textarea
          className="form-control"
          rows="3"
          placeholder="Leave your comment"
          name="businessGoal"
          value={formData.businessGoal}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div className="form-group">
        <label className="form-label">Do you have a website and social networks? Please share links below</label>
        <textarea
          className="form-control"
          rows="3"
          placeholder="Leave your comment (optional)"
          name="websiteLinks"
          value={formData.websiteLinks}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="form-group">
        <label className="form-label">Marketing budget per month<span>*</span></label>
        <select
          className="form-control"
          name="marketingBudget"
          value={formData.marketingBudget}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select budget</option>
          <option value="<5000">&lt; $5,000</option>
          <option value="5000-10000">$5,000 - $10,000</option>
          <option value="10000-25000">$10,000 - $25,000</option>
          <option value="25000-50000">$25,000 - $50,000</option>
          <option value=">50000">&gt; $50,000</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">Your name<span>*</span></label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Your email<span>*</span></label>
        <input
          type="email"
          className="form-control"
          placeholder="example@gmail.com"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Your phone number</label>
        <div className="phone-input-container">
          <input
            type="tel"
            className="form-control phone-input"
            placeholder="Enter phone number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Your Telegram<span>*</span></label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your telegram name"
          name="telegram"
          value={formData.telegram}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <ReCAPTCHA
          sitekey="YOUR_RECAPTCHA_SITE_KEY" // Replace with your actual site key
          onChange={handleRecaptcha}
        />
      </div>

      <button
        type="submit"
        className="submit-btn"
        disabled={!recaptchaVerified}
      >
        Submit
      </button>

      <p className="privacy-text">Privacy - Terms</p>
    </form>
  );
};

export default Form1;