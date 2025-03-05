import { useState } from "react";
import Header from "../Utility/Header";
import { ToastContainer,toast } from "react-toastify";

const Contanct = () => {

  const [text,setText] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email.trim());
  };
  
  const Success = () => {
    const validemail = validateEmail(email);

    if (validemail.trim() === "" || text.trim() === "" || message.trim() === "") {
      toast.error("Fill all details");
      return;
    }

    toast.success("Your Details Submitted")
  }
  return (
    <>
      <Header />
      <ToastContainer/>
    <div className="bg-dark text-light min-vh-100">

      <div className="container py-5">
        <h1 className="text-center fw-bold mb-4">Contact Us 📩</h1>
        <p className="text-center fs-5">
          Have questions, feedback, or want to collaborate? We would love to hear from you!  
          Feel free to reach out through any of the channels below.
        </p>

        <div className="row mt-5 text-center text-md-start">
          <div className="col-md-6">
            <h2 className="fw-bold">📍 Our Location</h2>
            <p className="fs-5">Kurnool, Andhra Pradesh, India</p>

            <h2 className="fw-bold mt-4">📞 Phone</h2>
            <p className="fs-5">+91 XXXXXXXXXX</p>

            <h2 className="fw-bold mt-4">📧 Email</h2>
            <p className="fs-5">chenna.moviesapp@gmail.com</p>
          </div>

          <div className="col-md-6">
            <h2 className="fw-bold">💬 Connect with Us</h2>
            <p className="fs-5">Follow us on social media for the latest updates!</p>
            <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3">
              <a href="https://github.com/chenna-2512/Movies-App" 
                 className="btn btn-outline-light fs-5" 
                 target="_blank" 
                 rel="noopener noreferrer">
                GitHub 
              </a>
              <a href="#" className="btn btn-outline-light fs-5">
                Twitter 
              </a>
              <a href="#" className="btn btn-outline-light fs-5">
                Instagram 
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <h2 className="fw-bold">📨 Drop Us a Message</h2>
          <form className="mt-3">
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Your Name" required onChange={(e)=>setText(e.target.value)}/>
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Your Email" required onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="4" placeholder="Your Message" required onChange={(e)=>setMessage(e.target.value)}></textarea>
            </div>
            <button type="submit" className="btn btn-light px-4 py-2 fs-5" onClick={Success}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contanct;
