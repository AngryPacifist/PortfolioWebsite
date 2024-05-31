import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_kt62axw',
        'template_50ast2b',
        e.target,
        'bGFRU-kbT6AeHdLn9'
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        (error) => {
          console.log(error.text);
          setFormStatus('error');
        }
      );
  };

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <motion.h2 variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit='hidden' className='h2 text-center mb-12'>
            Connect with <span className='text-accent '> Me.</span>
          </motion.h2>
          <motion.form variants={fadeIn('up', 0.4)} initial='hidden' animate='show' exit='hidden' className='flex-1 flex flex-col gap-6 w-full mx-auto' onSubmit={handleSubmit}>
            <div className='flex gap-x-6 w-full'>
              <input type='text' name='name' placeholder='Name' className='input' value={formData.name} onChange={handleChange} required />
              <input type='email' name='email' placeholder='Email' className='input' value={formData.email} onChange={handleChange} required />
            </div>
            <input type='text' name='subject' placeholder='Subject' className='input' value={formData.subject} onChange={handleChange} required />
            <textarea name='message' className='textarea' placeholder='Message' value={formData.message} onChange={handleChange} required></textarea>
            <div className='flex items-center gap-x-40'>
              <button type='submit' className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
                <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Submit</span>
                <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
              </button>
              {formStatus === 'success' && (
                <div className='text-green-500'>Message sent successfully!</div>
              )}
              {formStatus === 'error' && (
                <div className='text-red-500'>Message not sent successfully. Please try again.</div>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
