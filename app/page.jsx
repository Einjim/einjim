"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const skills = [
  { icon: "🧠", label: "Machine Learning" },
  { icon: "🤖", label: "Deep Learning" },
  { icon: "💻", label: "Python" },
  { icon: "🔷", label: "TensorFlow" },
  { icon: "🔥", label: "PyTorch" },
  { icon: "🗣️", label: "Natural Language Processing" },
  { icon: "👁️", label: "Computer Vision" },
  { icon: "🗄️", label: "Big Data Analytics" },
  { icon: "📊", label: "Data Visualization" },
  { icon: "🕸️", label: "Neural Networks" },
  { icon: "⚙️", label: "AI Model Deployment" },
  { icon: "🔬", label: "Research Methodologies" },
  { icon: "📱", label: "Robotics" },
  { icon: "🧬", label: "Bioinformatics" },
  { icon: "💬", label: "Chatbot Development" },
  { icon: "📣", label: "Digital Marketing" },
  { icon: "👥", label: "Leadership" },
  { icon: "🏫", label: "Teaching" },
];

function useTypewriter(text, speed = 50, startTyping = false) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!startTyping) return;
    setDisplayed("");
    setDone(false);
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayed(text.slice(0, index + 1));
        index++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, startTyping]);

  return { displayed, done };
}

function AnimatedText({ text, tag: Tag = "p", className = "", speed = 50 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const { displayed } = useTypewriter(text, speed, visible);

  return (
    <Tag ref={ref} className={className}>
      {displayed}
      {visible && displayed.length < text.length && (
        <span className="cursor">|</span>
      )}
    </Tag>
  );
}

function GalaxyCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width, height;
    let animId;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5,
      vx: Math.floor(Math.random() * 50) - 25,
      vy: Math.floor(Math.random() * 50) - 25,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";
      for (const star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.5 + 0.5})`;
        ctx.fill();
      }
    };

    const update = () => {
      for (const star of stars) {
        star.x += star.vx / 30;
        star.y += star.vy / 30;
        if (star.x < 0 || star.x > width) star.vx = -star.vx;
        if (star.y < 0 || star.y > height) star.vy = -star.vy;
      }
    };

    const animate = () => {
      draw();
      update();
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
}

export default function Home() {
  const [formData, setFormData] = useState({ email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted!");
    setFormData({ email: "", message: "" });
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          background-color: #121212;
          color: #e0e0e0;
        }

        .container {
          width: 80%;
          margin: auto;
          overflow: hidden;
          padding: 20px;
        }

        header {
          padding: 20px 0;
        }

        header h1 {
          font-size: 2em;
          margin-bottom: 8px;
        }

        header h2 {
          font-size: 1.5em;
          margin-bottom: 12px;
        }

        header p {
          margin-bottom: 16px;
        }

        .profile-img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin-top: 20px;
        }

        #skills {
          padding: 20px 0;
        }

        #skills h2 {
          margin-bottom: 20px;
          font-size: 1.5em;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 20px;
        }

        .skill {
          display: flex;
          align-items: center;
          background-color: #1e1e1e;
          padding: 10px;
          border-radius: 5px;
          font-size: 14px;
        }

        .skill-icon {
          margin-right: 10px;
          font-size: 20px;
          min-width: 28px;
          text-align: center;
        }

        #contact {
          padding: 20px 0;
        }

        #contact h2 {
          margin-bottom: 20px;
          font-size: 1.5em;
        }

        .contact-form input,
        .contact-form textarea,
        .contact-form button {
          background-color: #1e1e1e;
          border: 1px solid #333;
          color: #e0e0e0;
          padding: 10px;
          margin-bottom: 10px;
          width: 100%;
          font-family: Arial, sans-serif;
          font-size: 14px;
        }

        .contact-form textarea {
          min-height: 120px;
          resize: vertical;
        }

        .contact-form button {
          background-color: #007bff;
          cursor: pointer;
          border: none;
        }

        .contact-form button:hover {
          background-color: #0056b3;
        }

        .contact-links {
          text-align: center;
          margin-top: 30px;
          padding-bottom: 30px;
        }

        .contact-links a {
          display: inline-block;
          margin: 0 10px;
          font-size: 24px;
          color: #e0e0e0;
          text-decoration: none;
        }

        .email-button {
          display: inline-block;
          padding: 5px 10px;
          background-color: #007bff;
          color: white !important;
          text-decoration: none;
          border-radius: 5px;
          font-size: 14px;
          vertical-align: middle;
        }

        .cursor {
          display: inline-block;
          animation: blink 1s step-start infinite;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>

      <GalaxyCanvas />

      <header>
        <div className="container">
          <AnimatedText text="I'm Alireza Jafari" tag="h1" speed={60} />
          <AnimatedText
            text="An AI Engineer & Data Scientist"
            tag="h2"
            speed={40}
          />
          <AnimatedText
            text="Graduated from Amirkabir university, Currently working as an innovative Data Scientist with robust experience in machine learning, data analysis, NLP and image processing. Currently pursuing a Master's in AI Engineering and Robotics and serving as a Teaching Assistant at the university, focused on advanced AI techniques and real-world applications with hands-on experience in deep learning frameworks like TensorFlow and PyTorch. Eager to collaborate with startups, particularly in protein design, chatbots, medical technology, and other groundbreaking areas, to push the boundaries of what's possible. Additionally, I'm creating this website to demonstrate my web development skills."
            tag="p"
            speed={10}
          />
          <Image
            src="/profile.jpg"
            alt="Alireza Jafari"
            width={200}
            height={200}
            className="profile-img"
            style={{ borderRadius: "8px", marginTop: "20px" }}
          />
        </div>
      </header>

      <section id="skills">
        <div className="container">
          <AnimatedText text="Skills" tag="h2" speed={80} />
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill" key={skill.label}>
                <span className="skill-icon">{skill.icon}</span>
                {skill.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <AnimatedText text="Contact with me" tag="h2" speed={80} />
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your Email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData((f) => ({ ...f, email: e.target.value }))
              }
            />
            <textarea
              placeholder="Enter your message"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData((f) => ({ ...f, message: e.target.value }))
              }
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      <div className="contact-links">
        <a
          href="https://github.com/YourGitHubUsername"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            style={{ verticalAlign: "middle" }}
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
        <a href="mailto:your.email@example.com" className="email-button">
          Email Me
        </a>
      </div>
    </>
  );
}
