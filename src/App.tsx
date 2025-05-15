import { useState } from 'react';
import { motion } from 'framer-motion';
import profileImage from './pfp2.jpg';


const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      {/* Header */}
      <header>
        <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
          {darkMode ? '☀️' : '🌙'}
        </button>
        <div className="container header-content">
          <div className="logo">
            <h1>Eric Dorman</h1>
          </div>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <h1>About Me</h1>
          <p>Computer Science Senior at University of Michigan</p>
          <a href="#contact" className="btn">Get In Touch</a>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <div className="container">
          <div className="section-title">
            <h2>About Me</h2>
          </div>
          <div className="about-content">
            <div className="about-img">
              <img src={profileImage} alt="Profile" />
            </div>
            <div className="about-text">
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
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className='skills'
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <div className="container">
          <div className="section-title">
            <h2>My Skills</h2>
          </div>
          <div className="skills-content">
            <div className="skill-card">
              <i className="fas fa-code"></i>
              <h3>Programming Languages</h3>
              <p>Python, Java, C++, JavaScript</p>
            </div>
            <div className="skill-card">
              <i className="fas fa-laptop-code"></i>
              <h3>Web Development</h3>
              <p>HTML, CSS, React, Node.js</p>
            </div>
            <div className="skill-card">
              <i className="fas fa-database"></i>
              <h3>Databases</h3>
              <p>SQL, Access, Excel</p>
            </div>
            <div className="skill-card">
              <i className="fas fa-shield-alt"></i>
              <h3>Computer Security</h3>
              <p>Network Security, Ethical Hacking and Defense</p>
            </div>
            <div className="skill-card">
              <i className="fas fa-project-diagram"></i>
              <h3>Data Structures & Algorithms</h3>
              <p>Algorithm Design, Problem Solving</p>
            </div>
            <div className="skill-card">
              <i className="fas fa-robot"></i>
              <h3>Artificial Intelligence</h3>
              <p>Machine Learning, NLP Applications</p>
            </div>
          </div>
        </div>
      </motion.section>
      {/* Experience Section */}
      <motion.section
        id="experience"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <div className="container">
          <div className="section-title">
            <h2>Education & Experience</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item left">
              <div className="timeline-content">
                <h3>Computer Science Major</h3>
                <span className="date">2021 - Present, University of Michigan</span>
                <p>
                  Pursuing a Bachelor's degree in Computer Science with a focus on cybersecurity and software
                  engineering.
                </p>
                <p>
                  Completed advanced coursework in many classes such as Data Structures & Algorithms, Computer
                  Networking and Security.
                </p>
              </div>
            </div>
            <div className="timeline-item right">
              <div className="timeline-content">
                <h3>Software Engineering Intern</h3>
                <span className="date">Summer 2023, PSI</span>
                <p>
                  Developed a Python application that leveraged AI technologies to streamline the process of
                  responding to government contract proposals, significantly improving efficiency and accuracy.
                </p>
                <p>
                  Collaborated with cross-functional teams to gather requirements and implemented solutions
                  that met business needs while adhering to strict government compliance standards.
                </p>
              </div>
            </div>
            <div className="timeline-item left">
              <div className="timeline-content">
                <h3>Software Engineering Intern</h3>
                <span className="date">Summer 2025, ?</span>
                <p>Something text to act as a placeholder until I complete said internship.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      {/* Projects Section */}
      <motion.section
        id="projects"
        className='projects'
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <div className="container">
          <div className="section-title">
            <h2>My Projects</h2>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-img">
                <img src="/api/placeholder/400/200" alt="AI Proposal Generator" />
              </div>
              <div className="project-info">
                <h3>AI Proposal Generator</h3>
                <p>Python application created during my internship at PSI to automate and enhance government contract proposal responses.</p>
                <div className="tech-stack">
                  <span>Python</span>
                  <span>NLP</span>
                  <span>AI</span>
                  <span>Document Processing</span>
                </div>
                <a href="#" className="btn">View Project</a>
              </div>
            </div>
            <div className="project-card">
              <div className="project-img">
                <img src="/api/placeholder/400/200" alt="Network Security Analyzer" />
              </div>
              <div className="project-info">
                <h3>Network Security Analyzer</h3>
                <p>A comprehensive tool for analyzing network traffic and identifying potential security vulnerabilities.</p>
                <div className="tech-stack">
                  <span>Autopsy</span>
                  <span>Wireshark</span>
                  <span>Ghidra</span>
                </div>
                <a href="#" className="btn">View Project</a>
              </div>
            </div>
            <div className="project-card">
              <div className="project-img">
                <img src="/api/placeholder/400/200" alt="Algorithm Visualizer" />
              </div>
              <div className="project-info">
                <h3>Algorithm Visualizer</h3>
                <p>Interactive web application that visualizes various sorting and pathfinding algorithms.</p>
                <div className="tech-stack">
                  <span>JavaScript</span>
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>Data Structures</span>
                </div>
                <a href="#" className="btn">View Project</a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="section-title">
            <h2>Get In Touch</h2>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <p>I'm currently looking for internship and full-time opportunities in software development or anything computer science related. Feel free to reach out!</p>
              <div className="contact-details">
                <div>
                  <i className="fas fa-envelope"></i>
                  <span>esdorman@outlook.com</span>
                </div>
                <div>
                  <i className="fas fa-phone"></i>
                  <span>(703) 356-7813</span>
                </div>
                <div>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Ann Arbor, Michigan</span>
                </div>
              </div>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/eric-dorman-b10695344/"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/esdorman"><i className="fab fa-github"></i></a>
                <a href="https://www.instagram.com/door.ericc/?next=%2F"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>&copy; 2025 Eric Dorman. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;