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
    .then(() => {
      alert("Message Sent!");
      setFormData({ name: "", email: "", message: "" });
    }).catch((error) => {
      alert("Let Try Again ,im sure it will work now!.");
      console.error('EmailJS Error:', error);
    });
    
  };


  return (
    <div>
        <div id='contact' className='mx-auto max-w-7xl '>
          <div className='min-h-[90vh] flex items-center justify-center '>

            <div className="rounded-xl border-white/10  border w-[90%] p-4 md:w-[80%]">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                {" "}
                Get In Touch
              </h2>

              <div>
                
              </div>
              {/* .............................................. */}

              <form  className=" space-y-4" onSubmit={handleSubmit}>
                <div className="">
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

                <div className="">
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

                <div className="">
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}  
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 min-h-35 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                    placeholder="Hello , I'm Emmanuel.you can send your message here..... "
                  />
                </div>

                <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
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
