import "../scss/Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact--socials">
        <div className="icons">
          <a className="my-github" href="https://github.com/kacperwitkowski">
            <i className="fab fa-github"></i>
            <span>Github</span>
          </a>
          <a href="mailto:witkowskik46@gmail.com">
            <i className="far fa-envelope"></i>
            <span>witkowskik46@gmail.com</span>
          </a>
          <a href="https://instagram.com">
            <i className="fab fa-instagram"></i> <span>Instagram</span>
          </a>
        </div>
      </div>
      <div className="contact--slogan">
        <p>Got a question?</p>
        <h2>Contact us!</h2>
      </div>
      <div className="contact--us">
        <form className="contact--form">
          Name:
          <input required type="text" size="19" name="Contact-Name" />
          Email:
          <input required type="email" name="Contact-Email" />
          Message:
          <textarea required name="Contact-Message" rows="6" cols="20" />
          <button className="btn--dark" type="submit">
            Send
          </button>
        </form>
        <div className="contact--us-text">
          <h2>
            Get in touch <span>(It's just a template)</span>
          </h2>
          <p>
            Please fill out the quick form and we will be in touch with
            lightening speed!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
