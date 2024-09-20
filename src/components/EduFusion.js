import React from 'react';
import './EduFusion.css'; // Import your CSS file
import myImage from '../assests/img2.jpg'; // Example image for the Vision Section

// Expert images (these should be in your assets folder)
import expert1 from '../assests/expert1.jpg'; 
import expert2 from '../assests/expert2.jpg'; 
import expert3 from '../assests/expert3.jpg'; 
import expert4 from '../assests/expert4.jpg';

import student1 from '../assests/student.jpg'; // Example student images for testimonials
import student2 from '../assests/student.jpg'; 
import student3 from '../assests/student.jpg';

function EduFusion() {
  return (
    <div className="edu-fusion">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul className="navbar-links">
          <li><a href="#">Start Studying</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Modules</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="navbar-buttons">
          <button className="sign-in">Sign In</button>
          <button className="register">Register</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="overlay">
          <h1>Gen Z EduNet</h1>
        </div>
      </section>

      {/* Slogan Section */}
      <section className="slogan-section">
        <p>"EduFusion makes learning effortless, empowering students to achieve their best with confidence."</p>
      </section>

      {/* Buttons Row Section */}
      <section className="buttons-section">
        <button className="edu-button">ED EXCEL</button>
        <button className="edu-button">CAMBRIDGE</button>
        <button className="edu-button">O/L</button>
        <button className="edu-button">A/L</button>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="vision-content">
          <img src={myImage} alt="Graduates" className="vision-image" />
          <div className="vision-text">
            <p>
              "At EduFusion, our vision is to empower educators with a cutting-edge platform that simplifies teaching, enhances student engagement, and fosters collaboration. We strive to provide teachers with the tools and resources needed to inspire and guide their students, transforming the educational experience into one of innovation, efficiency, and excellence."
            </p>
            <input type="text" placeholder="Courses..." className="courses-search" />
          </div>
        </div>
      </section>

      {/* Meet Our Experts Section */}
      <section className="experts-section">
        <h2>Meet our Experts</h2>
        <div className="experts-container">
          <div className="expert-card">
            <img src={expert1} alt="Expert 1" />
            <p>
              "EduFusion has revolutionized my teaching approach by providing a streamlined platform for organizing lessons and tracking student progress."
            </p>
          </div>
          <div className="expert-card">
            <img src={expert2} alt="Expert 2" />
            <p>
              "With EduFusion, I can easily connect with my students through interactive features and discussion boards."
            </p>
          </div>
          <div className="expert-card">
            <img src={expert3} alt="Expert 3" />
            <p>
              "EduFusion has enhanced student engagement and fostered a collaborative learning environment."
            </p>
          </div>
          <div className="expert-card">
            <img src={expert4} alt="Expert 4" />
            <p>
              "It has made managing my classroom much more efficient."
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <h2>What Our Students Are Saying</h2>
        <div className="testimonial-container">
          <div className="testimonial-card">
            <img src={student1} alt="Student 1" />
            <p>"EduFusion has made learning so much more interactive and enjoyable. The engaging content and easy-to-use platform have helped me stay on track and succeed in my studies."</p>
            <h4>John Doe</h4>
          </div>
          <div className="testimonial-card">
            <img src={student2} alt="Student 2" />
            <p>"EduFusion has revolutionized my studying process. I feel more engaged and focused, and my results reflect it."</p>
            <h4>Jane Smith</h4>
          </div>
          <div className="testimonial-card">
            <img src={student3} alt="Student 3" />
            <p>"This platform has helped me connect with fellow students and tutors easily, making learning a more collaborative experience."</p>
            <h4>Alex Brown</h4>
          </div>
        </div>
      </section>

      {/* Footer Section */}
<footer className="footer-section">
  <div className="footer-container">
    <div className="footer-columns">
      
      {/* Column 1 - Logo and Social Links */}
      <div className="footer-column">
        <h4>EduFusion</h4>
        <p>Empowering the next generation of students and educators with innovative learning tools.</p>
        <div className="social-icons">
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
          <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>

      {/* Column 2 - Use Cases */}
      <div className="footer-column">
        <h4>Use Cases</h4>
        <ul>
          <li><a href="#">UI Design</a></li>
          <li><a href="#">UX Design</a></li>
          <li><a href="#">Wireframing</a></li>
          <li><a href="#">Brainstorming</a></li>
          <li><a href="#">Online Whiteboard</a></li>
        </ul>
      </div>

      {/* Column 3 - Explore */}
      <div className="footer-column">
        <h4>Explore</h4>
        <ul>
          <li><a href="#">Design</a></li>
          <li><a href="#">Prototyping</a></li>
          <li><a href="#">Development Features</a></li>
          <li><a href="#">Collaboration Features</a></li>
        </ul>
      </div>

      {/* Column 4 - Resources */}
      <div className="footer-column">
        <h4>Resources</h4>
        <ul>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Best Practices</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Developer Docs</a></li>
        </ul>
      </div>
    </div>
    
    {/* Footer Bottom */}
    <div className="footer-bottom">
      <p>&copy; 2024 EduFusion. All Rights Reserved.</p>
    </div>
  </div>
</footer>

    </div>
  );
}

export default EduFusion;
