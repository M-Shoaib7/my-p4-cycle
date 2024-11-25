import React from "react";

const Contact = () => {
    return (
        <div>
            <section className="contact">
                <h1 className="fade-in">Contact Us</h1>
                <form>
                <div className="field-box">
                    <input type="text" placeholder="Full Name" required /> 
                    <input type="email" placeholder="Email Address" required />
                    <input type="text" placeholder="Phone Number" required />
                    <textarea name="" id="" placeholder="Your Message" rows={5} required></textarea>
                    <button type="submit">Submit</button>
                  </div>
                </form>
            </section>
        </div>
    );
};

export default Contact;