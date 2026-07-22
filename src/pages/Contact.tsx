import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { useLocation, useNavigationType } from 'react-router-dom';
import { SEO } from '../components/common/SEO';


import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Shield,
  Clock3,
  Send,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { CTA } from '../components/sections/CTA';

// ----------------------------------------------------
// Section 3 Why Work with Creoviz Benefit Card Component
// ----------------------------------------------------
interface BenefitData {
  title: string;
  desc: string;
  icon: React.ReactElement;
}

const BenefitCard: React.FC<{ card: BenefitData; idx: number }> = ({ card, idx }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: idx * 0.15 }}
      className="group p-8 rounded-2xl bg-white border border-[#1B2450]/6 hover:border-[#FF5A1F] hover:shadow-[0_20px_45px_rgba(255,90,31,0.08)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-start gap-5 cursor-pointer"
    >
      <div className="w-10 h-10 rounded-lg bg-[#FF5A1F]/5 border border-[#FF5A1F]/10 flex items-center justify-center text-[#FF5A1F] transition-all duration-500 group-hover:rotate-6 group-hover:bg-[#FF5A1F]/15">
        {React.cloneElement(card.icon, {
          className: 'w-5 h-5 transition-transform duration-500 group-hover:scale-110'
        } as any)}
      </div>
      <div>
        <h3 className="font-display font-bold text-base uppercase text-[#1B2450] group-hover:text-[#FF5A1F] transition-colors duration-300 tracking-wider mb-2">
          {card.title}
        </h3>
        <p className="text-[#555555] font-sans font-light text-xs md:text-sm leading-relaxed">
          {card.desc}
        </p>
      </div>
    </motion.div>
  );
};

// ----------------------------------------------------
// Section 4 Hero — Premium Contact & Briefing Illustration
// ----------------------------------------------------
interface ContactHeroVisualProps {
  mouseX: any;
  mouseY: any;
}

const ContactHeroVisual: React.FC<ContactHeroVisualProps> = ({ mouseX, mouseY }) => {
  const springConfig = { damping: 55, stiffness: 140, mass: 0.7 };
  return (
    <div className="relative w-full max-w-[480px] aspect-square mx-auto flex items-center justify-center pointer-events-auto">
      {/* Soft orange ambient radial glow spot */}
      <div className="absolute w-[300px] h-[300px] bg-[#FF5A1F]/10 rounded-full blur-[110px] pointer-events-none" />

      {/* Orbiting circular strokes in the background */}
      <motion.div
        style={{
          x: useTransform(mouseX, (v: number) => v * 0.4),
          y: useTransform(mouseY, (v: number) => v * 0.4),
          rotate: 35
        }}
        className="absolute w-[360px] h-[360px] rounded-full border border-white/5 flex items-center justify-center"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#FF5A1F] rounded-full shadow-[0_0_10px_#FF5A1F]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white/20 rounded-full" />
      </motion.div>

      <motion.div
        style={{
          x: useTransform(mouseX, (v: number) => -v * 0.5),
          y: useTransform(mouseY, (v: number) => -v * 0.5),
          rotate: -25
        }}
        className="absolute w-[290px] h-[290px] rounded-full border border-dashed border-white/10 flex items-center justify-center"
      >
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#FF5A1F] rounded-full opacity-50" />
      </motion.div>

      {/* Main Core Showcase Panel: A stylized project inquiry / meeting card */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        className="absolute w-60 h-60 bg-[#141B3B]/60 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_24px_48px_rgba(0,0,0,0.4)] p-6 z-10 flex flex-col justify-between"
      >
        {/* Abstract blueprint grid layout inside */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-[0.08] p-3">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-white" />
          ))}
        </div>

        {/* Title / Meeting Header */}
        <div className="flex justify-between items-start relative z-10">
          <div className="flex flex-col gap-1 text-left">
            <span className="text-[7px] font-mono text-[#FF5A1F] font-bold tracking-widest uppercase">PROJECT BRIEFING</span>
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">CREATIVE ALIGNMENT</h4>
          </div>
          <div className="px-2 py-0.5 rounded bg-[#FF5A1F]/15 border border-[#FF5A1F]/30 text-[#FF5A1F] font-mono text-[7px] font-bold uppercase tracking-wider">
            CONFIRMED
          </div>
        </div>

        {/* Meeting details */}
        <div className="flex flex-col gap-2 relative z-10 text-left my-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[9px] font-sans font-light text-white/70">Today at 2:00 PM (IST)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center font-display font-bold text-[7px] text-white">C</div>
            <span className="text-[9px] font-sans font-light text-white/50">With Creoviz Design Director</span>
          </div>
        </div>

        {/* Studio watermark tag */}
        <span className="font-mono text-[8px] text-white/40 relative z-10 self-center tracking-widest uppercase">
          CALENDAR.MEET.V1
        </span>
      </motion.div>

      {/* Floating Card 1: Chat Bubble (Top Left) */}
      <motion.div
        style={{
          x: useSpring(useTransform(mouseX, (v: number) => v * 1.2), springConfig),
          y: useSpring(useTransform(mouseY, (v: number) => v * 1.2), springConfig)
        }}
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
        className="absolute -top-[5%] -left-[5%] p-3.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl shadow-lg z-20 flex flex-col gap-1.5 pointer-events-none min-w-[150px] text-left"
      >
        <span className="font-mono text-[7px] text-white/40 tracking-widest uppercase">CLIENT MESSAGES</span>
        <div className="p-2 rounded bg-white/5 border border-white/5">
          <p className="text-[9px] font-sans font-light text-white/90 leading-normal">
            "Let's review the brand concepts today!"
          </p>
        </div>
      </motion.div>

      {/* Floating Card 2: Contact Form Fields (Right Side) */}
      <motion.div
        style={{
          x: useSpring(useTransform(mouseX, (v: number) => -v * 1.1), springConfig),
          y: useSpring(useTransform(mouseY, (v: number) => -v * 1.1), springConfig)
        }}
        animate={{ y: [-12, 12, -12] }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, delay: 0.4 }}
        className="absolute top-[28%] -right-[8%] p-3.5 bg-[#141B3B]/80 border border-white/10 backdrop-blur-md rounded-xl shadow-lg z-20 flex flex-col gap-2 pointer-events-none min-w-[145px] text-left"
      >
        <span className="font-mono text-[7px] text-[#FF5A1F] font-bold tracking-widest uppercase">INQUIRY INBOX</span>
        <div className="flex flex-col gap-1">
          <div className="w-full h-3 rounded bg-white/5 flex items-center px-1.5 font-sans text-[7px] text-white/40 justify-between">
            <span>Name *</span>
            <div className="w-1 h-1 rounded-full bg-white/30" />
          </div>
          <div className="w-full h-3 rounded bg-white/5 flex items-center px-1.5 font-sans text-[7px] text-white/40 justify-between">
            <span>Interest: Logo ...</span>
            <div className="w-1 h-1 rounded-full bg-[#FF5A1F]" />
          </div>
        </div>
      </motion.div>

      {/* Floating Card 3: Floating Message Sent Indicator (Bottom Left) */}
      <motion.div
        style={{
          x: useSpring(useTransform(mouseX, (v: number) => v * 0.8), springConfig),
          y: useSpring(useTransform(mouseY, (v: number) => v * 0.8), springConfig)
        }}
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 6.5, ease: "easeInOut", repeat: Infinity, delay: 0.2 }}
        className="absolute -bottom-[5%] left-[2%] p-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl shadow-lg z-20 flex items-center gap-3.5 pointer-events-none"
      >
        <div className="w-6 h-6 rounded bg-[#FF5A1F] flex items-center justify-center text-white">
          <Send className="w-3.5 h-3.5" />
        </div>
        <div className="flex flex-col text-left">
          <span className="font-display font-bold text-[9px] text-white tracking-wide uppercase">Brief Sent</span>
          <span className="font-sans text-[7px] text-white/40">Responding in 24 hours</span>
        </div>
      </motion.div>
    </div>
  );
};

// ----------------------------------------------------
// Main Page Component
// ----------------------------------------------------
export const Contact: React.FC = () => {
  const location = useLocation();
  const navType = useNavigationType();
  const formSectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Coordinates for Hero
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 55, stiffness: 140, mass: 0.7 };
  const parallaxX = useSpring(mouseX, springConfig);
  const parallaxY = useSpring(mouseY, springConfig);

  const handleMouseMoveHero = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xNormalized = (e.clientX - rect.left) / rect.width - 0.5;
    const yNormalized = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xNormalized * 35); // max 35px translation
    mouseY.set(yNormalized * 35);
  };

  const [formValues, setFormValues] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    details: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const validateField = (name: string, value: string) => {
    let error = '';
    if (!value.trim()) {
      if (name === 'name') error = 'Full Name is required';
      else if (name === 'company') error = 'Business / Company Name is required';
      else if (name === 'email') error = 'Email Address is required';
      else if (name === 'phone') error = 'Phone Number is required';
      else if (name === 'service') error = 'Please select a service';
      else if (name === 'details') error = 'Project details are required';
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value.trim())) {
        error = 'Please enter a valid email address';
      }
    }
    return error;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setFormErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const error = validateField(name, value);
      setFormErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    // Touch all fields
    const newTouched = {
      name: true,
      company: true,
      email: true,
      phone: true,
      service: true,
      details: true
    };
    setTouched(newTouched);

    // Validate all fields
    const newErrors: Record<string, string> = {};
    Object.keys(formValues).forEach(key => {
      const val = formValues[key as keyof typeof formValues];
      const error = validateField(key, val);
      if (error) {
        newErrors[key] = error;
      }
    });

    setFormErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setSubmitStatus('error');
      setErrorMessage('Please fill in all required fields correctly before sending.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const apiKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (!apiKey) {
        throw new Error('Web3Forms Access Key is missing. Please set VITE_WEB3FORMS_ACCESS_KEY in environment.');
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: apiKey,
          name: formValues.name,
          company: formValues.company,
          email: formValues.email,
          phone: formValues.phone,
          service: formValues.service,
          details: formValues.details,
          subject: `New Project Inquiry: ${formValues.service || 'General'} - from ${formValues.name}`,
          from_name: formValues.name,
          replyto: formValues.email
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormValues({
          name: '',
          company: '',
          email: '',
          phone: '',
          service: '',
          details: ''
        });
        setTouched({});
        setFormErrors({});
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.message || 'Failed to send inquiry. Please try again.');
      }
    } catch (err: any) {
      console.error('Web3Forms submission error:', err);
      setSubmitStatus('error');
      setErrorMessage(err.message || 'An unexpected error occurred while sending. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Scroll to section and pre-fill service on query load
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const val = params.get('service') || params.get('package') || params.get('project') || params.get('interest') || '';
    if (val) {
      const normalized = val.toLowerCase();
      let service = '';

      if (normalized.includes('linkedin')) {
        service = 'LinkedIn Branding';
      } else if (normalized.includes('logo') || normalized.includes('identity') || normalized.includes('branding')) {
        service = 'Logo & Brand Identity';
      } else if (normalized.includes('content') || normalized.includes('creative')) {
        service = 'Creative Content';
      } else if (normalized.includes('essential')) {
        service = 'Business Essentials';
      } else if (normalized.includes('web') || normalized.includes('design') || normalized.includes('ui')) {
        service = 'Website Design';
      } else {
        service = 'Other';
      }

      setFormValues(prev => ({ ...prev, service }));

      // Smooth scroll to form section on query load
      setTimeout(() => {
        formSectionRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 300);
    } else {
      if (navType !== 'POP') {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }
  }, [location, navType]);

  const whyWorkCards: BenefitData[] = [
    {
      title: 'Quick Response',
      desc: 'We respect your timelines. Our creative directors review proposals and follow up within 24 hours.',
      icon: <Clock3 />
    },
    {
      title: 'Custom Solutions',
      desc: 'No templates or boilerplate guides. Every layout grid and packaging box is crafted bespoke for your audience.',
      icon: <Sparkles />
    },
    {
      title: 'Transparent Communication',
      desc: 'Stay informed at every step of design exploration, revision iterations, print prep, and source code transfer.',
      icon: <Shield />
    }
  ];

  return (
    <div className="relative overflow-x-hidden bg-white">
      <SEO
        title="Get a Custom Design Quote & Consultation | Creoviz"
        description="Ready to elevate your brand? Contact Creoviz Graphics Studio today to request a free quote, consult on your design needs, or chat on WhatsApp."
        path="/contact"
      />
      {/* =================================================
          SECTION 1: HERO (Dark Theme)
          ================================================= */}
      <section
        ref={containerRef}
        onMouseMove={handleMouseMoveHero}
        className="relative py-36 bg-[#1B2450] bg-gradient-to-b from-[#1B2450] to-[#141B3B] overflow-hidden border-b border-white/5 z-20 flex items-center min-h-[95vh]"
      >
        {/* Noise overlay */}
        <div className="noise-overlay opacity-[0.035]" />

        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-1">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="contact-hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-hero-grid)" className="text-white" />
          </svg>
        </div>

        {/* Ambient radial glow spot */}
        <div className="absolute w-[400px] h-[400px] bg-[#FF5A1F]/8 rounded-full blur-[130px] top-[20%] left-[10%] animate-pulse pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-sans text-[10px] uppercase tracking-widest text-[#FF5A1F] font-bold mb-3 block"
              >
                CONTACT CREOVIZ
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, filter: 'blur(8px)', y: 20 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase tracking-[0.015em] text-white leading-[1.1] mb-6"
              >
                Let's Build Something<br />Extraordinary Together<span className="text-[#FF5A1F]">.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white/70 font-sans font-light text-base md:text-lg leading-relaxed max-w-xl mb-10"
              >
                Have a project in mind? We'd love to hear about your ideas and help transform them into impactful creative solutions tailored to your business.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto"
              >
                <Button
                  variant="accent"
                  size="md"
                  onClick={() => {
                    formSectionRef.current?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                  className="w-full sm:w-auto text-center justify-center"
                >
                  Start Your Project
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  href="https://wa.me/919409073599?text=Hello%20Creoviz!%20I%20would%20like%20to%20discuss%20a%20new%20project."
                  external={true}
                  icon={<MessageSquare className="w-3.5 h-3.5 text-[#FF5A1F]" />}
                  className="w-full sm:w-auto border-white/20 text-white hover:border-white hover:bg-white/5 text-center justify-center"
                >
                  Chat on WhatsApp
                </Button>
              </motion.div>
            </div>

            {/* Right Column Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <ContactHeroVisual mouseX={parallaxX} mouseY={parallaxY} />
            </div>
          </div>
        </Container>
      </section>

      {/* =================================================
          SECTION 2: CONTACT DETAILS & FORM (Light Gray Theme)
          ================================================= */}
      <section
        ref={formSectionRef}
        className="relative py-32 bg-[#F7F7F8] border-b border-[#1B2450]/6 overflow-hidden z-20"
      >
        <div className="noise-overlay opacity-[0.02]" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left side details */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Visit Us */}
              <div className="p-6 rounded-2xl bg-white border border-[#1B2450]/6 shadow-premium-glass hover:border-[#FF5A1F] hover:shadow-[0_15px_35px_rgba(255,90,31,0.06)] hover:-translate-y-1 transition-all duration-500 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FF5A1F]/5 flex items-center justify-center text-[#FF5A1F] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-sans font-bold text-[#888888] tracking-widest uppercase block mb-1">
                    Visit Us
                  </span>
                  <span className="font-display font-semibold text-sm md:text-base text-[#1B2450] uppercase tracking-wide">
                    Bharuch, Gujarat, India
                  </span>
                </div>
              </div>

              {/* Call Us */}
              <div className="p-6 rounded-2xl bg-white border border-[#1B2450]/6 shadow-premium-glass hover:border-[#FF5A1F] hover:shadow-[0_15px_35px_rgba(255,90,31,0.06)] hover:-translate-y-1 transition-all duration-500 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FF5A1F]/5 flex items-center justify-center text-[#FF5A1F] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-sans font-bold text-[#888888] tracking-widest uppercase block mb-1">
                    Call Us
                  </span>
                  <a
                    href="tel:+919409073599"
                    className="font-display font-semibold text-sm md:text-base text-[#1B2450] hover:text-[#FF5A1F] transition-colors duration-300 uppercase tracking-wide"
                  >
                    +91 94090 73599
                  </a>
                </div>
              </div>

              {/* Email Us */}
              <a
                href="mailto:creovizgraphic30@gmail.com"
                className="p-6 rounded-2xl bg-white border border-[#1B2450]/6 shadow-premium-glass hover:border-[#FF5A1F] hover:shadow-[0_15px_35px_rgba(255,90,31,0.06)] hover:-translate-y-1 transition-all duration-500 flex items-start gap-4 cursor-pointer block text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FF5A1F]/5 flex items-center justify-center text-[#FF5A1F] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-sans font-bold text-[#888888] tracking-widest uppercase block mb-1">
                    Email Us
                  </span>
                  <span className="font-display font-semibold text-sm md:text-base text-[#1B2450] hover:text-[#FF5A1F] transition-colors duration-300 uppercase tracking-wide">
                    creovizgraphic30@gmail.com
                  </span>
                </div>
              </a>

              {/* Working Hours */}
              <div className="p-6 rounded-2xl bg-white border border-[#1B2450]/6 shadow-premium-glass hover:border-[#FF5A1F] hover:shadow-[0_15px_35px_rgba(255,90,31,0.06)] hover:-translate-y-1 transition-all duration-500 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FF5A1F]/5 flex items-center justify-center text-[#FF5A1F] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-sans font-bold text-[#888888] tracking-widest uppercase block mb-1">
                    Working Hours
                  </span>
                  <span className="font-display font-semibold text-sm md:text-base text-[#1B2450] uppercase tracking-wide block">
                    Monday – Saturday
                  </span>
                  <span className="font-sans font-medium text-xs text-[#555555] block mt-0.5">
                    10:00 AM – 7:00 PM
                  </span>
                </div>
              </div>

              {/* WhatsApp Call to Action */}
              <a
                href="https://wa.me/919409073599?text=Hello%20Creoviz!%20I%20would%20like%20to%20discuss%20a%20new%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3.5 py-4.5 rounded-full bg-[#1B2450] hover:bg-[#FF5A1F] text-white font-sans font-bold text-xs uppercase tracking-widest transition-all duration-500 hover:shadow-[0_8px_25px_rgba(255,90,31,0.25)] hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Right side form */}
            <div className="lg:col-span-7 p-8 md:p-10 rounded-3xl bg-white border border-[#1B2450]/6 shadow-premium relative overflow-hidden">
              {/* Decorative background glow */}
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#FF5A1F]/5 rounded-full blur-[50px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-[#1B2450]/5 rounded-full blur-[50px] pointer-events-none" />

              <div className="mb-8 relative z-10">
                <h3 className="font-display font-extrabold text-xl md:text-2xl text-[#1B2450] uppercase tracking-wider mb-2">
                  Start Your Project
                </h3>
                <p className="font-sans text-xs md:text-sm text-[#555555] font-light leading-relaxed">
                  Fill out the form below to receive a custom design quote.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 relative z-10">
                {/* Grid for Name & Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="font-display font-semibold text-[9px] uppercase text-[#1B2450]/60 tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formValues.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full bg-[#F7F7F8] border rounded-xl px-4 py-3.5 text-sm text-[#1B2450] focus:outline-none focus:ring-4 transition-all duration-300 ${
                        touched.name && formErrors.name
                          ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/10'
                          : touched.name && !formErrors.name
                          ? 'border-green-500/30 focus:border-green-500 focus:ring-green-500/5'
                          : 'border-[#1B2450]/6 focus:border-[#FF5A1F] focus:ring-[#FF5A1F]/10'
                      }`}
                      placeholder="E.g., Alexander Wright"
                    />
                    {touched.name && formErrors.name && (
                      <span className="text-[10px] font-sans text-red-500 mt-1.5 font-medium ml-1">
                        {formErrors.name}
                      </span>
                    )}
                  </div>

                  {/* Business / Company Name */}
                  <div className="flex flex-col">
                    <label htmlFor="company" className="font-display font-semibold text-[9px] uppercase text-[#1B2450]/60 tracking-wider mb-2">
                      Business / Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formValues.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full bg-[#F7F7F8] border rounded-xl px-4 py-3.5 text-sm text-[#1B2450] focus:outline-none focus:ring-4 transition-all duration-300 ${
                        touched.company && formErrors.company
                          ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/10'
                          : touched.company && !formErrors.company
                          ? 'border-green-500/30 focus:border-green-500 focus:ring-green-500/5'
                          : 'border-[#1B2450]/6 focus:border-[#FF5A1F] focus:ring-[#FF5A1F]/10'
                      }`}
                      placeholder="E.g., Wright Industries"
                    />
                    {touched.company && formErrors.company && (
                      <span className="text-[10px] font-sans text-red-500 mt-1.5 font-medium ml-1">
                        {formErrors.company}
                      </span>
                    )}
                  </div>
                </div>

                {/* Grid for Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email Address */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className="font-display font-semibold text-[9px] uppercase text-[#1B2450]/60 tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formValues.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full bg-[#F7F7F8] border rounded-xl px-4 py-3.5 text-sm text-[#1B2450] focus:outline-none focus:ring-4 transition-all duration-300 ${
                        touched.email && formErrors.email
                          ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/10'
                          : touched.email && !formErrors.email
                          ? 'border-green-500/30 focus:border-green-500 focus:ring-green-500/5'
                          : 'border-[#1B2450]/6 focus:border-[#FF5A1F] focus:ring-[#FF5A1F]/10'
                      }`}
                      placeholder="alex@domain.com"
                    />
                    {touched.email && formErrors.email && (
                      <span className="text-[10px] font-sans text-red-500 mt-1.5 font-medium ml-1">
                        {formErrors.email}
                      </span>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="font-display font-semibold text-[9px] uppercase text-[#1B2450]/60 tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formValues.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full bg-[#F7F7F8] border rounded-xl px-4 py-3.5 text-sm text-[#1B2450] focus:outline-none focus:ring-4 transition-all duration-300 ${
                        touched.phone && formErrors.phone
                          ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/10'
                          : touched.phone && !formErrors.phone
                          ? 'border-green-500/30 focus:border-green-500 focus:ring-green-500/5'
                          : 'border-[#1B2450]/6 focus:border-[#FF5A1F] focus:ring-[#FF5A1F]/10'
                      }`}
                      placeholder="E.g., +91 94090 73599"
                    />
                    {touched.phone && formErrors.phone && (
                      <span className="text-[10px] font-sans text-red-500 mt-1.5 font-medium ml-1">
                        {formErrors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* Service Dropdown */}
                <div className="flex flex-col">
                  <label htmlFor="service" className="font-display font-semibold text-[9px] uppercase text-[#1B2450]/60 tracking-wider mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formValues.service}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-[#F7F7F8] border rounded-xl px-4 py-3.5 text-sm text-[#1B2450] focus:outline-none focus:ring-4 transition-all duration-300 ${
                      touched.service && formErrors.service
                        ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/10'
                        : touched.service && !formErrors.service
                        ? 'border-green-500/30 focus:border-green-500 focus:ring-green-500/5'
                        : 'border-[#1B2450]/6 focus:border-[#FF5A1F] focus:ring-[#FF5A1F]/10'
                    }`}
                  >
                    <option value="" disabled>Select a service...</option>
                    <option value="Logo & Brand Identity">Logo &amp; Brand Identity</option>
                    <option value="Creative Content">Creative Content</option>
                    <option value="LinkedIn Branding">LinkedIn Branding</option>
                    <option value="Business Essentials">Business Essentials</option>
                    <option value="Website Design">Website Design</option>
                    <option value="Other">Other</option>
                  </select>
                  {touched.service && formErrors.service && (
                    <span className="text-[10px] font-sans text-red-500 mt-1.5 font-medium ml-1">
                      {formErrors.service}
                    </span>
                  )}
                </div>

                {/* Project Details */}
                <div className="flex flex-col">
                  <label htmlFor="details" className="font-display font-semibold text-[9px] uppercase text-[#1B2450]/60 tracking-wider mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    value={formValues.details}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-[#F7F7F8] border rounded-xl px-4 py-3.5 text-sm text-[#1B2450] focus:outline-none focus:ring-4 transition-all duration-300 resize-none ${
                      touched.details && formErrors.details
                        ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/10'
                        : touched.details && !formErrors.details
                        ? 'border-green-500/30 focus:border-green-500 focus:ring-green-500/5'
                        : 'border-[#1B2450]/6 focus:border-[#FF5A1F] focus:ring-[#FF5A1F]/10'
                    }`}
                    placeholder="Tell us about your brand goals, target timeline, key requirements, etc."
                  />
                  {touched.details && formErrors.details && (
                    <span className="text-[10px] font-sans text-red-500 mt-1.5 font-medium ml-1">
                      {formErrors.details}
                    </span>
                  )}
                </div>

                {/* Submit & Status Messages */}
                <div className="flex flex-col gap-4 mt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative py-4 px-6 rounded-full font-sans font-bold tracking-widest text-xs uppercase overflow-hidden text-white bg-gradient-to-r from-[#FF5A1F] to-[#FF8C39] hover:shadow-[0_12px_30px_rgba(255,90,31,0.3)] transition-all duration-500 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none cursor-pointer flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
                        <Send className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                      </>
                    )}
                  </button>

                  {/* UI-only Success Message Placeholder */}
                  {submitStatus === 'success' && (
                    <div className="p-3.5 rounded-xl bg-green-500/10 border border-green-500/30 text-green-700 text-xs font-sans font-medium text-center flex items-center justify-center gap-2 animate-fadeIn">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Thank you! Your inquiry has been sent successfully.
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-700 text-xs font-sans font-medium text-center flex items-center justify-center gap-2 animate-fadeIn">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      {errorMessage || 'Please fix the errors above before sending.'}
                    </div>
                  )}

                  {/* Privacy note */}
                  <span className="text-[10px] text-[#888888] font-sans font-light text-center">
                    Your information is secure and remains completely confidential.
                  </span>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* =================================================
          SECTION 3: WHY WORK WITH CREOVIZ (Light Theme)
          ================================================= */}
      <section
        className="relative py-32 bg-white border-b border-[#1B2450]/6 overflow-hidden z-20"
      >
        <div className="noise-overlay opacity-[0.015]" />

        <Container>
          {/* Section Header */}
          <div className="mb-20 text-center">
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#FF5A1F] font-bold mb-2 block">
              COLLABORATION
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl uppercase tracking-[0.015em] text-[#1B2450]">
              Why Work With Creoviz?
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyWorkCards.map((card, idx) => (
              <BenefitCard key={idx} card={card} idx={idx} />
            ))}
          </div>
        </Container>
      </section>

      <CTA
        badge="LET'S TALK"
        heading={
          <>
            Ready To Start Your Next Project?
          </>
        }
        description="Whether you're launching a new brand or growing an existing one, we're here to help you create something exceptional."
        primaryButtonText="Request a Free Quote"
        primaryButtonHref="/contact"
        secondaryButtonText="Chat on WhatsApp"
        secondaryButtonHref="https://wa.me/919409073599?text=Hello%20Creoviz!%20I%20would%20like%20to%20discuss%20a%20new%20project."
      />
    </div>
  );
};

export default Contact;
