import React from "react";
import ContactForm from "./component/ContactFrom";
import Location from "./component/Loaction";

function Contact(props) {
  return (
    <div>
      <div className="fixed top-0 right-0 left-0 h-[60px] bg-[#333] z-[100]"></div>

      <ContactForm />
      <Location />
    </div>
  );
}
Contact.propTypes = {};

export default Contact;
