import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Globe, 
  GraduationCap, 
  Laptop, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Users, 
  BookOpen, 
  ChevronRight,
  Monitor,
  Menu,
  X
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Who Can Join', href: '#about' },
    { name: 'How We Work', href: '#how-it-works' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-brand-dark p-1.5 rounded-lg">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-brand-dark">CODE SMART</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="px-4 py-2 bg-brand-dark text-white text-sm font-semibold rounded-full hover:bg-brand-primary transition-all">
              Join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-600 hover:text-brand-primary hover:bg-slate-50 rounded-xl transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a 
                  href="#contact" 
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-4 py-4 bg-brand-dark text-white text-center font-bold rounded-xl hover:bg-brand-primary transition-all"
                >
                  Join Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-brand-dark/5 rounded-l-[100px] transform translate-x-20" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6 mx-auto">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
            </span>
            Enrollment Open for 2026
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-brand-dark leading-[1.1] mb-6">
            PROGRAMMING & <br />
            <span className="text-brand-primary italic">DIGITAL SKILLS</span> <br />
            TRAINING
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed mx-auto max-w-2xl">
            Simple, practical coding lessons for kids, students & beginners. 
            Professional website development services for businesses.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://wa.me/27605358694" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-brand-dark text-white font-bold rounded-2xl hover:bg-brand-primary hover:shadow-xl hover:shadow-brand-primary/20 transition-all flex items-center gap-2 group"
            >
              Chat on WhatsApp
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services"
              className="px-8 py-4 bg-white text-brand-dark border-2 border-slate-200 font-bold rounded-2xl hover:border-brand-primary transition-all"
            >
              View Services
            </a>
          </div>
          <div className="mt-10 flex flex-col items-center gap-2 text-sm text-slate-500 font-medium">
            <div className="w-12 h-1 bg-brand-primary/20 rounded-full mb-2"></div>
            <span>Joined by 500+ students this year</span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      title: "Coding for Kids & Beginners",
      desc: "Fun and interactive introduction to logic and problem solving.",
      icon: <Laptop className="w-6 h-6" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Java Programming",
      desc: "Deep dive into one of the world's most popular programming languages.",
      icon: <Code2 className="w-6 h-6" />,
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "Website Development",
      desc: "Master HTML, CSS, and JavaScript to build modern web apps.",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Website Design",
      desc: "Custom designs for individuals and small businesses.",
      icon: <Monitor className="w-6 h-6" />,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Exam & Test Preparation",
      desc: "Specialized coaching for school and university IT exams, including CAT and IT subjects.",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "bg-rose-50 text-rose-600"
    },
    {
      title: "Personal Tutoring",
      desc: "One-on-one personal tutors available for CAT and all IT related subjects.",
      icon: <Users className="w-6 h-6" />,
      color: "bg-amber-50 text-amber-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.2em] mb-4">Our Services</h2>
          <h3 className="text-4xl font-bold text-brand-dark">What We Offer</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
            >
              <div className={`w-14 h-14 ${s.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {s.icon}
              </div>
              <h4 className="text-xl font-bold text-brand-dark mb-3">{s.title}</h4>
              <p className="text-slate-600 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhoCanJoin = () => {
  const groups = [
    "Kids (Beginner Level)",
    "Grade 10-12 Students",
    "Individuals & Small Businesses",
    "College & University Beginners",
    "Personal Tutors for CAT & IT Subjects"
  ];

  return (
    <section id="about" className="py-24 bg-brand-dark text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rounded-full" />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-sm font-bold text-brand-light/60 uppercase tracking-[0.2em] mb-4">Who Can Join</h2>
        <h3 className="text-4xl font-bold mb-12">Open to All Aspiring Tech Leaders</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {groups.map((group, i) => (
            <div key={i} className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 text-left">
              <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-lg font-medium">{group}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowWeWork = () => {
  const steps = [
    {
      title: "Online Lessons",
      desc: "Flexible learning from the comfort of your home.",
      icon: <Monitor className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Step-by-Step Teaching",
      desc: "We break down complex concepts into simple parts.",
      icon: <ChevronRight className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Practical Projects",
      desc: "Apply what you learn with real-world coding projects.",
      icon: <BookOpen className="w-6 h-6 text-brand-primary" />
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.2em] mb-4">How We Work</h2>
          <h3 className="text-4xl font-bold text-brand-dark">Our Learning Process</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-6 border border-slate-100">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold text-brand-dark mb-3">{step.title}</h4>
              <p className="text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-brand-dark rounded-[40px] p-8 lg:p-16 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/20 skew-x-12 transform translate-x-20" />
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Join Code Smart Today</h2>
            <p className="text-brand-light/80 text-lg mb-10">
              Smart Learning. Real Skills. Real Results. <br />
              Start your journey into the world of technology with us.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-brand-light/60 font-bold uppercase tracking-wider">Call Us</div>
                  <a href="tel:+27818168689" className="text-xl font-bold hover:text-brand-primary transition-colors">081 816 8689</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="text-sm text-brand-light/60 font-bold uppercase tracking-wider">WhatsApp</div>
                  <a href="https://wa.me/27605358694" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-green-400 transition-colors">060 535 8694</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-brand-light/60 font-bold uppercase tracking-wider">Email Us</div>
                  <a href="mailto:codesmart25@gmail.com" className="text-xl font-bold hover:text-brand-primary transition-colors">codesmart25@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 text-slate-900">
            <h3 className="text-2xl font-bold mb-6">Start Learning Now</h3>
            <div className="space-y-4">
              <p className="text-slate-600 mb-6">Click below to chat with us directly on WhatsApp and get started with your coding journey.</p>
              <a 
                href="https://wa.me/27605358694" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all flex items-center justify-center gap-2"
              >
                Chat on WhatsApp
              </a>
              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-slate-500">Or call for inquiries</span>
                </div>
              </div>
              <a 
                href="tel:+27818168689" 
                className="w-full py-4 bg-brand-dark text-white font-bold rounded-xl hover:bg-brand-primary transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call 081 816 8689
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 bg-slate-50 border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="bg-brand-dark p-1.5 rounded-lg">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-brand-dark">CODE SMART</span>
        </div>
        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Code Smart Training. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="https://wa.me/27605358694" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-primary transition-colors">WhatsApp</a>
          <a href="#" className="text-slate-400 hover:text-brand-primary transition-colors">TikTok</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhoCanJoin />
        <HowWeWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
