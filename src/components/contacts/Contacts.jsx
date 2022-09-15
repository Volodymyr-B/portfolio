import React from "react";
import { myContacts } from "../../data";
import Link from "./contact/Link";
import "./contacts.css";

const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <div className="contacts-container">
        <div className="contacts-left">
          <div className="section-title">Contact</div>
          <div className="contacts-mail">
            Feel free to contact me. I will be glad to answer you!
            <a href="mailto:vladimir.babich87@gmail.com">
              vladimir.babich87@gmail.com
            </a>
          </div>
        </div>
        <div className="contacts-right">
          <div className="section-title">Links</div>
          <div className="links-container">
            {myContacts.map((el) => (
              <Link key={el.id} name={el.name} img={el.img} link={el.link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
