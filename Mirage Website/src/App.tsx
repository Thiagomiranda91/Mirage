import { motion } from "motion/react";
import { ArrowRight, BarChart3, CheckCircle2, ChevronRight, Globe, Layout, Mail, MessageSquare, MonitorSmartphone, PenTool, Search, Smartphone, Star, TrendingUp, Users, Menu, X, Instagram, Facebook } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

// Components
const Navbar = ({ currentPage, setCurrentPage }: { currentPage: string, setCurrentPage: (page: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
          <img src="https://i.ibb.co/chRtDLcN/Mirage-Logo-White.png" alt="Mirage Logo" className="h-10 w-auto object-contain" referrerPolicy="no-referrer" />
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <a href="#services" onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors">Services</a>
          <a href="#about" onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors">About</a>
          <a href="#work" onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors">Work</a>
          <a href="#testimonials" onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors">Testimonials</a>
          <button onClick={() => setCurrentPage('contact')} className={`${currentPage === 'contact' ? 'text-brand' : 'hover:text-white'} transition-colors`}>Contact</button>
        </div>

        <div className="hidden md:block">
          <button onClick={() => setCurrentPage('contact')} className="bg-brand hover:bg-brand-hover text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
            Let's Talk
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 flex flex-col gap-4">
          <a href="#services" className="text-lg font-medium" onClick={() => { setIsMobileMenuOpen(false); setCurrentPage('home'); }}>Services</a>
          <a href="#about" className="text-lg font-medium" onClick={() => { setIsMobileMenuOpen(false); setCurrentPage('home'); }}>About</a>
          <a href="#work" className="text-lg font-medium" onClick={() => { setIsMobileMenuOpen(false); setCurrentPage('home'); }}>Work</a>
          <a href="#testimonials" className="text-lg font-medium" onClick={() => { setIsMobileMenuOpen(false); setCurrentPage('home'); }}>Testimonials</a>
          <button className="text-lg font-medium text-left" onClick={() => { setIsMobileMenuOpen(false); setCurrentPage('contact'); }}>Contact</button>
          <button onClick={() => { setIsMobileMenuOpen(false); setCurrentPage('contact'); }} className="bg-brand text-white px-6 py-3 rounded-full text-base font-medium mt-4">
            Let's Talk
          </button>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-brand mb-6">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            Award-Winning Digital Agency
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
            We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-300">Mirages</span> That Become Reality.
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-xl leading-relaxed">
            Transform your brand's online presence with data-driven marketing, stunning design, and cutting-edge technology.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button onClick={() => setCurrentPage('contact')} className="bg-brand hover:bg-brand-hover text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-all hover:gap-4">
              Start Your Project <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 rounded-full font-medium border border-white/20 hover:bg-white/5 transition-colors">
              <a href="#work">View Our Work</a>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="aspect-square rounded-full border border-white/10 relative flex items-center justify-center p-8">
            <div className="absolute inset-0 border border-brand/30 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-8 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
              alt="Digital Marketing" 
              className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  const services = [
    {
      id: 'web-design',
      icon: <Layout size={24} />,
      title: "Web Design",
      description: "Beautiful, fast, and high-converting websites built with modern technologies."
    },
    {
      id: 'ppc-advertising',
      icon: <BarChart3 size={24} />,
      title: "PPC Advertising",
      description: "Maximize your ROI with targeted PPC campaigns across Google, Meta, and LinkedIn."
    },
    {
      id: 'seo-optimization',
      icon: <Search size={24} />,
      title: "SEO Optimization",
      description: "Dominate search results and drive organic traffic with our data-driven SEO strategies."
    },
    {
      id: 'content-creation',
      icon: <PenTool size={24} />,
      title: "Content Creation",
      description: "Tell your brand's story through engaging blog posts, videos, and copywriting."
    }
  ];

  return (
    <section id="services" className="py-32 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-brand font-semibold tracking-wider uppercase mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Everything you need to dominate your market.</h3>
          <p className="text-lg text-zinc-600">We provide end-to-end digital solutions tailored to your specific business goals and target audience.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-zinc-50 border border-zinc-200 hover:border-brand hover:shadow-2xl hover:shadow-brand/10 transition-all duration-300 cursor-pointer"
              onClick={() => {
                setCurrentPage(service.id);
                window.scrollTo(0, 0);
              }}
            >
              <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center mb-6 group-hover:bg-brand group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{service.title}</h4>
              <p className="text-zinc-600 leading-relaxed mb-6">{service.description}</p>
              <button className="inline-flex items-center gap-2 font-medium text-brand group-hover:gap-3 transition-all">
                Learn more <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  return (
    <section id="about" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-brand/20 blur-3xl rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
              alt="Team working" 
              className="relative rounded-3xl object-cover aspect-[4/5] w-full grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute -bottom-8 -right-8 bg-brand text-white p-8 rounded-3xl shadow-xl hidden md:block">
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="font-medium">Years of<br/>Experience</div>
            </div>
          </div>

          <div>
            <h2 className="text-brand font-semibold tracking-wider uppercase mb-4">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">We don't just execute. We strategize and innovate.</h3>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              At Mirage, we believe that every brand has a unique story. Our mission is to amplify that story through data-driven strategies and creative brilliance. We partner with you to understand your goals and deliver measurable results.
            </p>

            <div className="space-y-6">
              {[
                "Custom solutions tailored to your brand",
                "Data-driven approach to every campaign",
                "Dedicated team of industry experts",
                "Transparent reporting and analytics"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 text-brand">
                    <CheckCircle2 size={24} />
                  </div>
                  <p className="text-lg font-medium text-zinc-200">{item}</p>
                </div>
              ))}
            </div>

            <button onClick={() => { setCurrentPage('contact'); window.scrollTo(0, 0); }} className="mt-12 bg-white text-black hover:bg-zinc-200 px-8 py-4 rounded-full font-medium transition-colors">
              Discover Our Process
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Work = () => {
  const projects = [
    {
      title: "UVCtech",
      category: "Web Design",
      image: "https://i.ibb.co/0vd8cBb/Thumb1-1.png?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Formula",
      category: "Web Design",
      image: "https://i.ibb.co/zWzZC67M/Thumb2-1.png?q=80&w=2064&auto=format&fit=crop"
    },
    {
      title: "Feltrin",
      category: "Web Design",
      image: "https://i.ibb.co/m53CscJr/Thumb-1.png?q=80&w=2015&auto=format&fit=crop"
    },
    {
      title: "Trinity",
      category: "Web Design",
      image: "https://i.ibb.co/20H08BqV/Thumb3-1.png?q=80&w=2194&auto=format&fit=crop"
    }
  ];

  return (
    <section id="work" className="py-32 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-brand font-semibold tracking-wider uppercase mb-4">Selected Work</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Projects that speak for themselves.</h3>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[4/3]">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex justify-between items-center">
                <h4 className="text-2xl font-bold">{project.title}</h4>
                <span className="text-zinc-400">{project.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 bg-brand text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-black font-semibold tracking-wider uppercase mb-4">Client Stories</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Don't just take our word for it.</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote: "Mirage transformed our online presence completely. Our leads increased by 150% in just three months.",
              author: "Sarah Jenkins",
              role: "CMO, TechFlow",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
            },
            {
              quote: "The team's attention to detail and strategic approach to our SEO campaign was exactly what we needed.",
              author: "David Chen",
              role: "Founder, EcoStore",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
            },
            {
              quote: "Best agency we've ever worked with. They don't just deliver; they partner with you for long-term success.",
              author: "Emily Rodriguez",
              role: "Marketing Director, Nexus",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
            }
          ].map((testimonial, i) => (
            <div key={i} className="bg-black/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <div className="flex gap-1 text-black mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} size={20} fill="currentColor" />)}
              </div>
              <p className="text-xl font-medium mb-8 leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-sm text-white/70">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-zinc-900" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Ready to dominate your market?</h2>
        <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
          Let's discuss how we can help your brand achieve its full potential with our tailored digital strategies.
        </p>
        <button onClick={() => setCurrentPage('contact')} className="bg-brand hover:bg-brand-hover text-white px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,87,34,0.4)]">
          Get Your Free Proposal
        </button>
      </div>
    </section>
  );
};

const Footer = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <img src="https://i.ibb.co/chRtDLcN/Mirage-Logo-White.png" alt="Mirage Logo" className="h-12 w-auto object-contain" referrerPolicy="no-referrer" />
            </div>
            <p className="text-zinc-400 max-w-sm mb-8">
              A full-service digital marketing agency dedicated to building brands and driving measurable growth.
            </p>
            <div className="flex gap-4">
              {[
                { name: 'Instagram', icon: <Instagram size={20} /> },
                { name: 'Facebook', icon: <Facebook size={20} /> },
                { name: 'WhatsApp', icon: <WhatsAppIcon size={20} /> }
              ].map((social) => (
                <a key={social.name} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-brand hover:text-white transition-colors">
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><button onClick={() => { setCurrentPage('web-design'); window.scrollTo(0, 0); }} className="hover:text-brand transition-colors">Web Design</button></li>
              <li><button onClick={() => { setCurrentPage('ppc-advertising'); window.scrollTo(0, 0); }} className="hover:text-brand transition-colors">PPC Advertising</button></li>
              <li><button onClick={() => { setCurrentPage('seo-optimization'); window.scrollTo(0, 0); }} className="hover:text-brand transition-colors">SEO Optimization</button></li>
              <li><button onClick={() => { setCurrentPage('content-creation'); window.scrollTo(0, 0); }} className="hover:text-brand transition-colors">Content Creation</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#about" onClick={() => setCurrentPage('home')} className="hover:text-brand transition-colors">About Us</a></li>
              <li><a href="#work" onClick={() => setCurrentPage('home')} className="hover:text-brand transition-colors">Our Work</a></li>
              <li><a href="#services" onClick={() => setCurrentPage('home')} className="hover:text-brand transition-colors">Services</a></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-brand transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-zinc-400">
              <li>hello@miragedigital.com</li>
              <li>+353 83 847 0796</li>
              <li>Dublin, Ireland</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Mirage Digital Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ContactPage = () => {
  return (
    <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-300">extraordinary</span>.</h1>
        <p className="text-xl text-zinc-400">Ready to take your digital presence to the next level? Get in touch with our team today.</p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 border border-white/10 p-8 rounded-2xl"
        >
          <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">Name</label>
              <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
              <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
              <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors" placeholder="Tell us about your project..."></textarea>
            </div>
            <button type="button" className="w-full bg-brand hover:bg-brand-hover text-white font-bold py-4 rounded-lg transition-colors">Send Message</button>
          </form>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <p className="text-zinc-400 mb-2">hello@miragedigital.com</p>
            <p className="text-zinc-400 mb-2">+353 83 847 0796</p>
            <p className="text-zinc-400">Dublin, Ireland</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {[
                { name: 'Instagram', icon: <Instagram size={20} /> },
                { name: 'Facebook', icon: <Facebook size={20} /> },
                { name: 'WhatsApp', icon: <WhatsAppIcon size={20} /> }
              ].map((social) => (
                <a key={social.name} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-brand hover:text-white transition-colors">
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const WebDesignPage = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-brand mb-6">
              <Layout size={16} />
              Web Design & Development
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Digital Experiences That <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-300">Convert</span>.
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-10">
              We build beautiful, fast, and high-converting websites using modern technologies. Your website is your digital storefront; let's make it unforgettable.
            </p>
            <button onClick={() => setCurrentPage('contact')} className="bg-brand hover:bg-brand-hover text-white px-8 py-4 rounded-full font-medium transition-colors">
              Start Your Project
            </button>
          </motion.div>
        </div>
      </section>

      {/* Website Development Overview */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Website Development</h2>
              <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
                We craft custom, responsive websites designed specifically to meet the unique needs, goals, and industry requirements of your business.
              </p>
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                Each project is carefully developed to combine modern design, intuitive user experience, and strong performance across all devices, helping your brand stand out and grow online.
              </p>
              <div className="bg-black/50 p-6 rounded-2xl border border-white/10">
                <p className="text-brand font-medium mb-2">Additional Services</p>
                <p className="text-zinc-300">We also offer domain registration and hosting if the client does not already have them.</p>
              </div>
            </div>
            <div className="bg-zinc-800 p-10 rounded-3xl border border-white/5">
              <h3 className="text-2xl font-bold mb-6">Our Websites Include:</h3>
              <ul className="space-y-4">
                {[
                  "SEO optimized",
                  "Mobile responsive",
                  "Antivirus protection",
                  "Daily backups",
                  "Social Media links",
                  "WhatsApp integration"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg text-zinc-300">
                    <CheckCircle2 className="text-brand" size={24} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Website Types */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Choose Your Solution</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Find the perfect website structure for your business goals.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* One-Page */}
            <div className="bg-zinc-900 p-8 rounded-3xl border border-white/10 hover:border-brand/50 transition-colors">
              <h3 className="text-2xl font-bold mb-2">One-Page Website</h3>
              <p className="text-brand font-medium mb-6">Simple, fast, lead-focused</p>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                A one-page website is a simple and fast navigation website. With a lighter, more dynamic and functional design, it summarizes all content into a single page, giving greater visibility to the most important information. Its main objective is lead generation.
              </p>
              <p className="text-sm text-zinc-500 font-medium">Includes: 1 page, responsive design, SEO</p>
            </div>

            {/* Multi-Page */}
            <div className="bg-zinc-900 p-8 rounded-3xl border border-white/10 hover:border-brand/50 transition-colors">
              <h3 className="text-2xl font-bold mb-2">Multi-Page Website</h3>
              <p className="text-brand font-medium mb-6">Scalable and professional</p>
              <p className="text-zinc-400 leading-relaxed mb-6">
                A multi-page website is a site with multiple pages, providing greater ease of navigation, accessibility, and scalability for a wide variety of content. Its main objective is to present the company and its services.
              </p>
              <p className="text-sm text-zinc-500 font-medium">Includes: 5 pages max, responsive design, SEO</p>
            </div>

            {/* E-Commerce */}
            <div className="bg-zinc-900 p-8 rounded-3xl border border-white/10 hover:border-brand/50 transition-colors">
              <h3 className="text-2xl font-bold mb-2">E-Commerce Website</h3>
              <p className="text-brand font-medium mb-6">Online store with payments methods connected</p>
              <p className="text-zinc-400 leading-relaxed mb-6">
                A multi-page website is a site with multiple pages, providing greater ease of navigation, accessibility, and scalability for a wide variety of content. Its main objective is to present the company and its services.
              </p>
              <p className="text-sm text-zinc-500 font-medium">Includes: Online store without products, Payment methods connected, responsive design, SEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MonitorSmartphone size={32} />,
                title: "Responsive Design",
                description: "Flawless experiences across all devices, from desktop to mobile."
              },
              {
                icon: <TrendingUp size={32} />,
                title: "Conversion Optimized",
                description: "Strategic layouts and clear CTAs designed to turn visitors into customers."
              },
              {
                icon: <Globe size={32} />,
                title: "Modern Tech Stack",
                description: "Built with React, Next.js, and Tailwind CSS for ultimate performance."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200"
              >
                <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Process</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">A streamlined approach to bringing your vision to life.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your brand, goals, and audience." },
              { step: "02", title: "Design", desc: "Creating wireframes and high-fidelity mockups." },
              { step: "03", title: "Development", desc: "Building the site with clean, modern code." },
              { step: "04", title: "Launch", desc: "Testing, optimization, and going live." }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-bold text-white/40 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2 text-brand">{item.title}</h3>
                <p className="text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const PpcAdvertisingPage = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-brand mb-6">
              <BarChart3 size={16} />
              PPC Advertising
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Data-Driven Campaigns That <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-300">Deliver</span>.
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-10">
              Maximize your ROI with targeted PPC campaigns across Google, Meta, and LinkedIn. We turn ad spend into measurable revenue.
            </p>
            <button onClick={() => setCurrentPage('contact')} className="bg-brand hover:bg-brand-hover text-white px-8 py-4 rounded-full font-medium transition-colors">
              Start Your Project
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp size={32} />,
                title: "ROI Focused",
                description: "Every campaign is optimized for maximum return on ad spend."
              },
              {
                icon: <Users size={32} />,
                title: "Audience Targeting",
                description: "Reach the exact people who are most likely to convert."
              },
              {
                icon: <BarChart3 size={32} />,
                title: "Real-Time Analytics",
                description: "Transparent reporting so you always know how your campaigns are performing."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200"
              >
                <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Process</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">A streamlined approach to bringing your vision to life.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Audit", desc: "Analyzing your current ad accounts and historical data." },
              { step: "02", title: "Strategy", desc: "Developing a custom multi-channel approach." },
              { step: "03", title: "Execution", desc: "Launching highly targeted campaigns." },
              { step: "04", title: "Optimization", desc: "Continuous testing and scaling of winning ads." }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-bold text-white/40 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2 text-brand">{item.title}</h3>
                <p className="text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const SeoOptimizationPage = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-brand mb-6">
              <Search size={16} />
              SEO Optimization
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Dominate Search Results & Drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-300">Traffic</span>.
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-10">
              Increase your organic visibility and attract high-intent visitors with our comprehensive, white-hat SEO strategies.
            </p>
            <button onClick={() => setCurrentPage('contact')} className="bg-brand hover:bg-brand-hover text-white px-8 py-4 rounded-full font-medium transition-colors">
              Start Your Project
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search size={32} />,
                title: "Keyword Strategy",
                description: "Identifying high-value search terms your customers are actually using."
              },
              {
                icon: <Globe size={32} />,
                title: "Technical SEO",
                description: "Ensuring your website is perfectly structured for search engine crawlers."
              },
              {
                icon: <TrendingUp size={32} />,
                title: "Sustainable Growth",
                description: "Long-term strategies that build lasting authority in your industry."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200"
              >
                <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Process</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">A streamlined approach to bringing your vision to life.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Audit", desc: "Comprehensive technical and content site analysis." },
              { step: "02", title: "Research", desc: "In-depth keyword and competitor research." },
              { step: "03", title: "On-Page", desc: "Optimizing content, meta tags, and internal linking." },
              { step: "04", title: "Off-Page", desc: "Building high-quality backlinks and authority." }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-bold text-white/40 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2 text-brand">{item.title}</h3>
                <p className="text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ContentCreationPage = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-brand mb-6">
              <PenTool size={16} />
              Content Creation
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Compelling Content That <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-300">Connects</span>.
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-10">
              Tell your brand's story through engaging blog posts, videos, and copywriting that resonates with your audience and drives action.
            </p>
            <button onClick={() => setCurrentPage('contact')} className="bg-brand hover:bg-brand-hover text-white px-8 py-4 rounded-full font-medium transition-colors">
              Start Your Project
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare size={32} />,
                title: "Brand Voice",
                description: "Developing a consistent and authentic tone that speaks to your target market."
              },
              {
                icon: <Star size={32} />,
                title: "High-Quality Production",
                description: "Professional copywriting, graphic design, and video production."
              },
              {
                icon: <Users size={32} />,
                title: "Audience Engagement",
                description: "Creating content specifically designed to spark conversation and sharing."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200"
              >
                <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Process</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">A streamlined approach to bringing your vision to life.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Ideation", desc: "Brainstorming topics that align with your brand goals." },
              { step: "02", title: "Creation", desc: "Drafting, designing, and producing the content assets." },
              { step: "03", title: "Review", desc: "Collaborative feedback to ensure it hits the mark." },
              { step: "04", title: "Distribution", desc: "Publishing across the right channels for maximum reach." }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-bold text-white/40 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2 text-brand">{item.title}</h3>
                <p className="text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand selection:text-white">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <Services setCurrentPage={setCurrentPage} />
            <About setCurrentPage={setCurrentPage} />
            <Work />
            <Testimonials />
            <CTA setCurrentPage={setCurrentPage} />
          </>
        ) : currentPage === 'web-design' ? (
          <WebDesignPage setCurrentPage={setCurrentPage} />
        ) : currentPage === 'ppc-advertising' ? (
          <PpcAdvertisingPage setCurrentPage={setCurrentPage} />
        ) : currentPage === 'seo-optimization' ? (
          <SeoOptimizationPage setCurrentPage={setCurrentPage} />
        ) : currentPage === 'content-creation' ? (
          <ContentCreationPage setCurrentPage={setCurrentPage} />
        ) : (
          <ContactPage />
        )}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
