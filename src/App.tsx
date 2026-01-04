import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImage from './pfp2.jpg';
import CSRFImage from './csrf-attack.png';
import AIimg from './ai-img.png';
import emailjs from 'emailjs-com';
import Euchre from './euchre.jpg';
import Delta from './delta.jpeg';
import Pipeline from './pipeline.jpg';
import Liberapay from './liberapay.png';
import { FaArrowUp, FaCode, FaLaptopCode, FaDatabase, FaShieldAlt, FaProjectDiagram, FaRobot } from 'react-icons/fa';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  details: string;
}

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "AI Proposal Response Generator",
      description: "Python application created during my internship at PSI to automate and enhance government contract proposal responses.",
      image: AIimg,
      techStack: ["Python", "NLP", "AI", "Document Processing"],
      details: "This project involved developing a natural language processing system that could analyze RFP requirements and generate tailored responses by extracting relevant information from a knowledge base of past proposals. The system reduced response time by 60% while improving consistency and compliance."
    },
    {
      id: 2,
      title: "Makeshift CSRF/XSS Attack",
      description: "A HTML file that takes advantage of XSS vulnerabilities to launch a CSRF attack on a dummy website.",
      image: CSRFImage,
      techStack: ["HTML", "JS", "XSS"],
      details: "Developed as part of my computer security coursework, this malicious, yet seemingly benign HTML file will upload an image to the website's image gallery, instantly upon being opened by a user who is logged into such website. It first takes advantage of an XSS vulnerability, then steals the user's session token to gain unauthorized access to the site."
    },
    {
      id: 3,
      title: "Euchre Card Game",
      description: "Recreated the Euchre card game. you can play with others or with bots",
      image: Euchre,
      techStack: ["C++"],
      details: "A recreation of the card game Euchre, where you can play with 3 other people, or by yourself up to four bots. Follows all the complex patterns and logic that the original game contains."
    },
    {
      id: 4,
      title: "LC2K Pipelined Implementation",
      description: "Developed a cycle-accurate behavioral simulator for a pipelined implementation of the LC-2K, complete with data forwarding and simple branch prediction.",
      image: Pipeline,
      techStack: ["C", "ARM Assembly"],
      details: "Wrote code that implements the basic LC2K instructions on a simulated basics structure of a pipeline processor (5 stages, plus all the componenets). In other words, it inputs assembly instructions, and outputs the meory states of everything afterwards."
    },
    {
      id: 5,
      title: "Debugging Automation",
      description: "Developed two debugging support tools to reduce the effort associated with software maintenance.",
      image: Delta,
      techStack: ["Python"],
      details: "Uses delta debugging to to find a minimal interesting subset of a given set."
    },
    {
      id: 6,
      title: "Contribution to Open Source Project",
      description: "I developed and locally tested fixes for two issues plauging an open source donation page (Liberapay).",
      image: Liberapay,
      techStack: ["Python", "HTML"],
      details: "Fixed incorrect error handling when inputting prices, as well as improving the html layout of the FAQ page."
    }
  ];

  const skills = [
    { name: "General Languages", icon: <FaCode />, items: ["Python", "C", "C++", "JavaScript", "Matlab"] },
    { name: "Web Development", icon: <FaLaptopCode />, items: ["HTML", "CSS", "React", "Node.js", "TypeScript"] },
    { name: "Databases", icon: <FaDatabase />, items: ["SQL", "Access", "Excel"] },
    { name: "Computer Security", icon: <FaShieldAlt />, items: ["Ghidra", "Wireshark", "Autopsy"] },
    { name: "Low Level Languages", icon: <FaProjectDiagram />, items: ["ARM (Legv8)", "x86"] },
    { name: "Artificial Intelligence", icon: <FaRobot />, items: ["PyTorch"] }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    emailjs.send(
      'service_ljx1s0p',       //
      'template_5lsb77b',      // ← Replace with your actual template ID
      formData,                // ← form values
      'SiOXkBKm5MnKFFCDP'
    )
      .then(() => {
        console.log('Email sent successfully!');
        setFormSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });

        setTimeout(() => {
          setFormSubmitted(false);
        }, 3000);
      })
      .catch((error) => {
        console.error('Email failed:', error);
        alert('Something went wrong. Please try again later.');
      });
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      {/* Header */}
      <header>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="theme-toggle"
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          )}
        </button>
        <div className="container header-content">
          <motion.div
            className="logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Eric Dorman</h1>
          </motion.div>
          <nav>
            <ul>
              {['home', 'about', 'skills', 'experience', 'projects', 'interests', 'contact'].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="scroll-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="particles"></div>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Eric Dorman
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Computer Science Senior at University of Michigan
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="#contact" className="btn">Get In Touch</a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container">
          <div className="section-title">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
          </div>
          <div className="about-content">
            <motion.div
              className="about-img"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img src={profileImage} alt="Eric Dorman" />
            </motion.div>
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Computer Science Student</h3>
              <p>
                I am a 21-year-old Computer Science senior at the University of Michigan, passionate about
                leveraging technology to solve complex problems. With a strong foundation in data structures,
                algorithms, and computer networking, I am constantly seeking opportunities to apply my knowledge
                in real-world scenarios.
              </p>
              <p>
                During my academic journey, I've developed a keen interest in AI applications and secure software
                development. My recent internship experience allowed me to create practical solutions using
                Python and AI technologies, preparing me for a career in software development and cybersecurity.
              </p>
              <p>
                I'm excited to bring my technical skills, creative problem-solving abilities, and collaborative
                mindset to innovative technology companies after graduation.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className='skills'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container">
          <div className="section-title">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              My Skills
            </motion.h2>
          </div>
          <div className="skills-content">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <h3>{skill.name}</h3>
                <p>{skill.items.join(", ")}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container">
          <div className="section-title">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Education & Experience
            </motion.h2>
          </div>
          <div className="timeline">
            <div className="timeline-item left">
              <motion.div
                className="timeline-content"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3>Computer Science BSE</h3>
                <span className="date">2022 - Present, University of Michigan</span>
                <p>
                  Pursuing a Bachelor's degree in Computer Science with a focus software
                  engineering and/or cybersecurity.
                </p>
                <p>
                  Completed advanced coursework in many classes such as Machine Learning, Software Engineering, Data Structures & Algorithms, Computer
                  Networking and Security.
                </p>
              </motion.div>
            </div>
            <div className="timeline-item right">
              <motion.div
                className="timeline-content"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3>Software Engineering Intern</h3>
                <span className="date">Summer 2023, Planned Systems International</span>
                <p>
                  Developed a Python application that leveraged AI technologies to streamline the process of
                  responding to government contract proposals, significantly improving efficiency and accuracy.
                </p>
                <p>
                  Collaborated with cross-functional teams to gather requirements and implemented solutions
                  that met business needs while adhering to strict government compliance standards.
                </p>
              </motion.div>
            </div>
            <div className="timeline-item left">
              <motion.div
                className="timeline-content"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3>Tech Intern</h3>
                <span className="date">Summer 2025, Planned Systems International</span>
                <p>Developed Powershell & PowerAutmate scripts for administrative purposes. Worked alongside the Chief Information Officer (CIO) during development.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className='projects'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container">
          <div className="section-title">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              My Projects
            </motion.h2>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-img">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-stack">
                    {project.techStack.map(tech => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <button className="btn">View Details</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="close-modal"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>
              <h3>{selectedProject.title}</h3>
              <div className="project-img">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              <p className="project-description">{selectedProject.description}</p>
              <p className="project-details">{selectedProject.details}</p>
              <div className="tech-stack">
                {selectedProject.techStack.map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.section
        id="interests"
        className='interests'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container">
          <div className="section-title">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              My Interests
            </motion.h2>
          </div>
          <div className="interests-grid">
            {/* Basketball */}
            <motion.div
              className="interest-card"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="interest-img">
                <img
                  src="https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Basketball"
                />
              </div>
              <h3>Basketball</h3>
              <p>I love shooting hoops and keeping up with the NBA, been playing casually ever since I was little.</p>
            </motion.div>

            {/* Ultimate Frisbee */}
            <motion.div
              className="interest-card"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="interest-img">
                <img
                  src="https://images.unsplash.com/photo-1585953074857-19f89c2ed52f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Ultimate Frisbee"
                />
              </div>
              <h3>Ultimate Frisbee</h3>
              <p>Competitive player from elementary school through high school. Love the teamwork and positivity of everyone involved.</p>
            </motion.div>

            {/* PC Building */}
            <motion.div
              className="interest-card"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="interest-img">
                <img
                  src="https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Custom PC Building"
                />
              </div>
              <h3>PC Building</h3>
              <p>Built 4+ custom rigs for myself, friends and family. Specialize in high-performance desktop PCs; modified countless others</p>
            </motion.div>

            {/* Documentaries */}
            <motion.div
              className="interest-card"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="interest-img">
                <img
                  src="https://images.unsplash.com/photo-1679094837433-32484a621c74?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Documentaries"
                />
              </div>
              <h3>YouTube Documentaries</h3>
              <p>Fascinated by deep-dives into tech, history, and science, and other random/goofy topics. Favorite channels: Fern, Qxir, Mustard, etc.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="section-title">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Get In Touch
            </motion.h2>
          </div>
          <div className="contact-content">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Let's Connect</h3>
              <p>I'm currently looking for internship and full-time opportunities in software development or anything computer science related. Feel free to reach out!</p>
              <div className="contact-details">
                <div>
                  <FiMail />
                  <span>esdorman@outlook.com</span>
                </div>
                <div>
                  <FiPhone />
                  <span>(703) 356-7813</span>
                </div>
                <div>
                  <FiMapPin />
                  <span>Ann Arbor, Michigan</span>
                </div>
              </div>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/eric-dorman-b10695344/" target="_blank" rel="noopener noreferrer">
                  <FiLinkedin />
                </a>
                <a href="https://github.com/esdorman" target="_blank" rel="noopener noreferrer">
                  <FiGithub />
                </a>
                <a href="https://www.instagram.com/door.ericc/?next=%2F" target="_blank" rel="noopener noreferrer">
                  <FiInstagram />
                </a>
              </div>
            </motion.div>
            <motion.div
              className="contact-form"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {formSubmitted ? (
                <div className="form-success">
                  <h3>Thank you!</h3>
                  <p>Your message has been sent successfully. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    {formErrors.name && <span className="error">{formErrors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {formErrors.email && <span className="error">{formErrors.email}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                    {formErrors.message && <span className="error">{formErrors.message}</span>}
                  </div>
                  <button type="submit" className="submit-btn">Send Message</button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            &copy; {new Date().getFullYear()} Eric Dorman. All Rights Reserved.
          </motion.p>
          <motion.div
            className="footer-links"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default App;