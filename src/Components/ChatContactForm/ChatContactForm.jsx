import React from "react";
import { FaComments, FaPaperPlane } from "react-icons/fa";
import "./ChatContactForm.css";

export default function ChatContactForm() {
  return (
    <section className="chat-contact py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="container max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="chat-box bg-blue-100 rounded-xl p-6 sm:p-8 shadow-md text-center">
          <FaComments className="chat-icon" />
          <h3>Chat with Us!</h3>
          <p className="chat-text">Chat with us for any service, job you want and the job is done.</p>
          <button className="chat-button">
            <FaComments />
            Let's Chat
          </button>
        </div>
        <div className="form-box">
          <h3 className="form-title">
            Reach & Get <span className="text-blue-600">Touch With Us!</span>
          </h3>
          <form className="contact-form space-y-4">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Your Number" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
