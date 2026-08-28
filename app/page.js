import GalaxyBackground from './GalaxyBackground'
import AnimatedText from './AnimatedText'

const skills = [
  { icon: 'fas fa-brain', label: 'Machine Learning' },
  { icon: 'fas fa-robot', label: 'Deep Learning' },
  { icon: 'fas fa-code', label: 'Python' },
  { icon: 'fab fa-tensorflow', label: 'TensorFlow' },
  { icon: 'fas fa-fire', label: 'PyTorch' },
  { icon: 'fas fa-language', label: 'Natural Language Processing' },
  { icon: 'fas fa-image', label: 'Computer Vision' },
  { icon: 'fas fa-database', label: 'Big Data Analytics' },
  { icon: 'fas fa-chart-bar', label: 'Data Visualization' },
  { icon: 'fas fa-project-diagram', label: 'Neural Networks' },
  { icon: 'fas fa-cogs', label: 'AI Model Deployment' },
  { icon: 'fas fa-microscope', label: 'Research Methodologies' },
  { icon: 'fas fa-tablet-alt', label: 'Robotics' },
  { icon: 'fas fa-dna', label: 'Bioinformatics' },
  { icon: 'fas fa-comments', label: 'Chatbot Development' },
  { icon: 'fas fa-bullhorn', label: 'Digital Marketing' },
  { icon: 'fas fa-users', label: 'Leadership' },
  { icon: 'fas fa-chalkboard-teacher', label: 'Teaching' },
]

export default function Home() {
  return (
    <>
      <GalaxyBackground />

      <header>
        <div className="container">
          <AnimatedText as="h1">I'm Alireza Jafari</AnimatedText>
          <AnimatedText as="h2">An AI Engineer & Data Scientist</AnimatedText>
          <AnimatedText as="p">
            Graduated from Amirkabir university, Currently working as an innovative Data Scientist
            with robust experience in machine learning, data analysis, NLP and image processing.
            Currently pursuing a Master's in AI Engineering and Robotics and serving as a Teaching
            Assistant at the university, focused on advanced AI techniques and real-world
            applications with hands-on experience in deep learning frameworks like TensorFlow and
            PyTorch. Eager to collaborate with startups, particularly in protein design, chatbots,
            medical technology, and other groundbreaking areas, to push the boundaries of what's
            possible. Additionally, I'm creating this website to demonstrate my web development
            skills.
          </AnimatedText>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/your-profile-picture.jpg" alt="Alireza Jafari" />
        </div>
      </header>

      <section id="skills">
        <div className="container">
          <AnimatedText as="h2">Skills</AnimatedText>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill" key={skill.label}>
                <i className={skill.icon}></i>
                {skill.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <AnimatedText as="h2">Contact with me</AnimatedText>
          <form>
            <input type="email" placeholder="Enter your Email" required />
            <textarea placeholder="Enter your message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      <div className="contact-links">
        <a href="https://github.com/YourGitHubUsername" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="mailto:your.email@example.com" className="email-button">
          Email Me
        </a>
      </div>
    </>
  )
}
