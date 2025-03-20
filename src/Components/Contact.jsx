// import React from 'react'
// import emailjs from '@emailjs/browser';

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         import.meta.env.VITE_SERVICE_ID,
//         import.meta.env.VITE_TEMPLATE_ID,
//         e.target,
//         import.meta.env.VITE_PUBLIC_KEY
//       )
//       .then((result) => {
//         alert("Message Sent!");
//         setFormData({ name: "", email: "", message: "" });
//       })
//       .catch(() => {alert("Let Try Again ,im sure it will work now!.");
//         console.error('EmailJS Error:', error);
//       });
//   };
  

import React, { useState } from 'react'
import emailjs from '@emailjs/browser'


function Contact() {
  const SERVICE_ID = "service_q2cnn9r";
  const TEMPLATE_ID = "template_wfyabnh";
  const PUBLIC_KEY = "jXQ4TRIokqdY6M0_i";



  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => { 
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
    .then((result) => {
      alert("Message Sent!");
      setFormData({ name: "", email: "", message: "" });
    }).catch((error) => {
      alert("Let Try Again ,im sure it will work now!.");
      console.error('EmailJS Error:', error);
    });
    
  };


  return (
    <div>
      <div>
        <div id='contact' className='min-h-screen flex justify-center md:pt-20 lg:pt-30'>
          <div className=" border-2 px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              {" "}
              Get In Touch
            </h2>
            {/* .............................................. */}

            <form  className=" space-y-4" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="Name..."
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="Example@mail.com...."
                />
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}  
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="You can talk to me i wont bite. "
                />
              </div>

              <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>

            

            </form>
            
            {/* ............................................. */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
