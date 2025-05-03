import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
// import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        // icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__info">
            <div className="contact__content__info__item">
              <strong>Phone:</strong> <span>7679101800</span>
            </div>
            <div className="contact__content__info__item">
              <strong>Email:</strong>{" "}
              <span>
                <a href="mailto:debajyoti.maity29@gmail.com">debajyoti.maity29@gmail.com</a>
              </span>
            </div>
            <div className="contact__content__info__item">
              <strong>LinkedIn:</strong>{" "}
              <span>
                <a href="https://www.linkedin.com/in/debajyoti-maity" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/debajyoti-maity
                </a>
              </span>
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
