import React, { useState } from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaPaperPlane, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaSpinner, 
  FaWhatsapp,
  FaClock,
  FaGlobe,
  FaRocket
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeMethod, setActiveMethod] = useState('whatsapp'); 

  const whatsappNumber = "9779804038669"; 

  const socialLinks = [
    { 
      platform: 'GitHub', 
      icon: <FaGithub />, 
      link: 'https://github.com/Karkisuman73', 
      color: 'hover:bg-gray-800',
      bgColor: 'bg-gray-900/20',
      iconColor: 'text-gray-300'
    },
    { 
      platform: 'LinkedIn', 
      icon: <FaLinkedin />, 
      link: 'https://www.linkedin.com/in/karki-suman-205b81373/', 
      color: 'hover:bg-blue-600',
      bgColor: 'bg-blue-900/20',
      iconColor: 'text-blue-400'
    },
    { 
      platform: 'WhatsApp', 
      icon: <FaWhatsapp />, 
      link: `https://wa.me/${whatsappNumber}`, 
      color: 'hover:bg-green-600',
      bgColor: 'bg-green-900/20',
      iconColor: 'text-green-400'
    },
  ];

  const contactMethods = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: <FaWhatsapp />,
      description: 'Instant messaging with quick response',
      color: 'from-green-500 to-emerald-600',
      iconBg: 'bg-green-500/20',
      active: activeMethod === 'whatsapp'
    },
    {
      id: 'email',
      name: 'Email',
      icon: <FaEnvelope />,
      description: 'Formal communication with attachments',
      color: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-blue-500/20',
      active: activeMethod === 'email'
    }
  ];

  const sendToWhatsApp = (data) => {
    const message = `Hello Suman Karki!

*Contact Inquiry From Portfolio*

*Name:* ${data.name}
*Email:* ${data.email}

*Message:*
${data.message}

---
Sent from your portfolio website`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      setIsSubmitting(false);
      return;
    }
    
    if (activeMethod === 'whatsapp') {
      sendToWhatsApp(formData);
    } else {
      const subject = `Contact from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:kar.suman773@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    }
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative min-h-screen py-12 md:py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-blue-900/5 via-transparent to-purple-900/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 mb-4 md:mb-6">
            <FaPaperPlane className="text-blue-400 text-sm" />
            <span className="text-sm font-medium text-blue-300">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Connect</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Choose your preferred method to reach out - I'm always open to discuss new projects
          </p>
        </div>

        <div className="mb-8 md:mb-12">
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            {contactMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => setActiveMethod(method.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                  method.active 
                    ? `bg-gradient-to-r ${method.color} shadow-lg` 
                    : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${method.active ? 'bg-white/20' : method.iconBg}`}>
                  <div className={`${method.active ? 'text-white' : method.iconBg.includes('green') ? 'text-green-400' : 'text-blue-400'}`}>
                    {method.icon}
                  </div>
                </div>
                <div className="text-left">
                  <div className={`font-semibold ${method.active ? 'text-white' : 'text-gray-300'}`}>
                    {method.name}
                  </div>
                  <div className={`text-xs ${method.active ? 'text-white/80' : 'text-gray-500'}`}>
                    {method.description}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center">
                  <FaRocket className="text-blue-400 text-lg md:text-xl" />
                </div>
                Contact Details
              </h3>
              
              <div className="space-y-6">
                <a 
                  href="mailto:kar.suman773@gmail.com"
                  className="flex items-start gap-4 group p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaEnvelope className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-xs md:text-sm mb-1">Email Address</p>
                    <p className="text-white font-medium text-base md:text-lg hover:text-blue-400 transition-colors">
                      kar.suman773@gmail.com
                    </p>
                    <p className="text-gray-500 text-xs md:text-sm mt-1">Always available</p>
                  </div>
                </a>
                <a 
                  href="tel:9779804038669"
                  className="flex items-start gap-4 group p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaPhone className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-xs md:text-sm mb-1">Phone Number</p>
                    <p className="text-white font-medium text-base md:text-lg hover:text-green-400 transition-colors">
                      +977 9804038669
                    </p>
                    <p className="text-gray-500 text-xs md:text-sm mt-1">Available 10AM - 6PM NPT</p>
                  </div>
                </a>
                <div className="flex items-start gap-4 group p-3 rounded-lg">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-xs md:text-sm mb-1">Location</p>
                    <p className="text-white font-medium text-base md:text-lg">Kathmandu, Nepal</p>
                    <p className="text-gray-500 text-xs md:text-sm mt-1">Open to remote opportunities</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group p-3 rounded-lg">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center flex-shrink-0">
                    <FaClock className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-xs md:text-sm mb-1">Response Time</p>
                    <p className="text-white font-medium text-base md:text-lg">Within 24 hours</p>
                    <p className="text-gray-500 text-xs md:text-sm mt-1">Usually much faster</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/20">
              <h4 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">Find Me Online</h4>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 md:p-4 rounded-xl bg-white/5 hover:bg-white/10 ${social.color} transition-all duration-300 group`}
                  >
                    <div className={`w-10 h-10 rounded-lg ${social.bgColor} flex items-center justify-center`}>
                      <div className={`text-lg md:text-xl ${social.iconColor}`}>
                        {social.icon}
                      </div>
                    </div>
                    <span className="text-sm md:text-base text-gray-300 font-medium">{social.platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/20">
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-r ${activeMethod === 'whatsapp' ? 'from-green-500 to-emerald-600' : 'from-blue-500 to-cyan-500'} flex items-center justify-center flex-shrink-0`}>
                  {activeMethod === 'whatsapp' ? <FaWhatsapp className="text-white text-lg md:text-xl" /> : <FaEnvelope className="text-white text-lg md:text-xl" />}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {activeMethod === 'whatsapp' ? 'Send via WhatsApp' : 'Send via Email'}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    {activeMethod === 'whatsapp' 
                      ? 'Your message will open directly in WhatsApp' 
                      : 'Your message will be sent via email'}
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="block text-gray-300 text-sm font-medium" htmlFor="name">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all text-sm md:text-base"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-gray-300 text-sm font-medium" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all text-sm md:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-300 text-sm font-medium" htmlFor="message">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all resize-none text-sm md:text-base"
                    placeholder="Tell me about your project, timeline, and requirements..."
                  />
                </div>
                <div className="pt-4 md:pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full md:w-auto px-8 py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                      isSubmitting 
                        ? 'opacity-50 cursor-not-allowed' 
                        : activeMethod === 'whatsapp'
                          ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 hover:shadow-lg hover:shadow-green-500/25'
                          : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 hover:shadow-lg hover:shadow-blue-500/25'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        <span className="text-sm md:text-base">
                          {activeMethod === 'whatsapp' ? 'Opening WhatsApp...' : 'Sending Email...'}
                        </span>
                      </>
                    ) : (
                      <>
                        {activeMethod === 'whatsapp' ? <FaWhatsapp /> : <FaEnvelope />}
                        <span className="text-sm md:text-base">
                          {activeMethod === 'whatsapp' ? 'Send via WhatsApp' : 'Send via Email'}
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </form>
              <div className={`mt-6 p-4 rounded-xl border ${activeMethod === 'whatsapp' ? 'bg-green-500/10 border-green-400/20' : 'bg-blue-500/10 border-blue-400/20'}`}>
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg ${activeMethod === 'whatsapp' ? 'bg-green-500/20' : 'bg-blue-500/20'} flex items-center justify-center flex-shrink-0`}>
                    {activeMethod === 'whatsapp' ? <FaWhatsapp className="text-green-400" /> : <FaEnvelope className="text-blue-400" />}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">
                      {activeMethod === 'whatsapp' ? 'How WhatsApp works:' : 'How Email works:'}
                    </h4>
                    <ul className={`text-sm space-y-1 ${activeMethod === 'whatsapp' ? 'text-green-300' : 'text-blue-300'}`}>
                      {activeMethod === 'whatsapp' ? (
                        <>
                          <li>• Fill the form and click send</li>
                          <li>• WhatsApp will open with your message</li>
                          <li>• Review and send directly</li>
                          <li>• Instant notification for me</li>
                        </>
                      ) : (
                        <>
                          <li>• Fill the form and click send</li>
                          <li>• Your default email client will open</li>
                          <li>• Review and send the email</li>
                          <li>• I'll reply within 24 hours</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-xl rounded-xl p-4 border border-blue-400/20">
                <div className="text-blue-300 text-xs md:text-sm mb-1">Response Time</div>
                <div className="text-white font-bold text-sm md:text-base">Under 24h</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 backdrop-blur-xl rounded-xl p-4 border border-green-400/20">
                <div className="text-green-300 text-xs md:text-sm mb-1">Availability</div>
                <div className="text-white font-bold text-sm md:text-base">Flexible</div>
              </div>
              <div className="col-span-2 md:col-span-1 bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-xl rounded-xl p-4 border border-purple-400/20">
                <div className="text-purple-300 text-xs md:text-sm mb-1">Preferred Contact</div>
                <div className="text-white font-bold text-sm md:text-base">{activeMethod === 'whatsapp' ? 'WhatsApp' : 'Email'}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-20">
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Quick Connect Options</h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Prefer to reach out directly? Use these quick links
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a
                  href="mailto:kar.suman773@gmail.com"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-sm md:text-base flex items-center justify-center gap-2"
                >
                  <FaEnvelope />
                  Email Directly
                </a>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 text-sm md:text-base flex items-center justify-center gap-2"
                >
                  <FaWhatsapp />
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Looking forward to connecting with you! 
            <span className="text-blue-400 ml-1">👋</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;