import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_x415ykw'; // You'll get this from EmailJS dashboard
const EMAILJS_TEMPLATE_ID = 'template_glqaajr'; // You'll get this from EmailJS dashboard
const EMAILJS_PUBLIC_KEY = '_HIJv8naxpln-WN2r'; // You'll get this from EmailJS dashboard

export interface DemoRequestData {
  name: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  employees: string;
  currentSystems: string;
  challenges: string;
  solutions: string[];
  timeline: string;
  budget: string;
  message: string;
}

export const sendDemoRequestEmail = async (data: DemoRequestData): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: 'support@veekdays.com',
      from_name: data.name,
      from_email: data.email,
      company: data.company,
      phone: data.phone,
      industry: data.industry,
      employees: data.employees,
      current_systems: data.currentSystems,
      challenges: data.challenges,
      solutions: data.solutions.join(', '),
      timeline: data.timeline,
      budget: data.budget,
      message: data.message,
      subject: `New Demo Request from ${data.name} - ${data.company}`,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}; 