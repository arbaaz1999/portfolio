"use client";

import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  Send,
  Code,
  Database,
  Server,
  Briefcase,
  Download,
  Loader2,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";

type FormDataType = {
  name: string;
  email: string;
  message: string;
};

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [formStatus, setFormStatus] = useState<"success" | "error" | "">("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleFormSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("error");
      setMessage("Please fill all the required fields!");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/message", {
        method: "POST",
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      await res.json();
      setFormStatus("success");
      setMessage("Message sent successfully, I'll get back to you soon!");
    } catch (error) {
      console.log("Error Sending Message : ", error);
      setFormStatus("error");
      setMessage("Error Sending Message, Please Try Again!");
    } finally {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setLoading(false);
    }
  };

  const skills = [
    "HTML5",
    "CSS3",
    "Javascript",
    "React",
    "Next.js",
    "TailwindCSS",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
  ];

  const experiences = [
    {
      company: "CapxAI",
      role: "Associate Software Engineer",
      duration: "August-2023 - Dec-2024",
      responsibilities: [
        "Developed a Telegram Mini-App from scratch using Next.js, taking full ownership of UI development. Utilized TailwindCSS and NextUI to build a responsive and interactive user interface, and integrated backend APIs seamlessly using Axios for dynamic data handling.",
        "Optimized application load performance by leveraging IndexedDB to cache user data locally. Fetched user data from IndexedDB on initial load to minimize latency, while asynchronously retrieving and updating fresh data from the API in the background. This strategy significantly enhanced perceived load time and overall user experience.",
        "Implemented a seamless token refresh mechanism in a Next.js application using Axios interceptors, enabling automatic retrieval of new access tokens in the background. This approach ensures uninterrupted user sessions and significantly enhances the overall user experience by eliminating visible authentication errors.",
        "Implemented advanced web optimization techniques, including lazy loading, code splitting, preloading/prefetching, dynamic image serving, and dead code elimination, enhancing performance and user experience.",
        "Integrated Google Analytics to track user activities.",
        "Collaborated with a team of skilled engineers to develop and deliver high-quality, scalable web applications and POCs using modern technologies like HTML, CSS, JavaScript, TypeScript, ReactJS, and Next.js.",
      ],
    },
    {
      company: "Codiotic Technologies Pvt. Ltd.",
      role: "Junior Software Engineer",
      duration: "Nov-2022 - Apr-2022",
      responsibilities: [
        "Acquired hands-on experience with the MERN stack – Gained practical knowledge in ReactJS, NodeJS, ExpressJS, and MongoDB, building full-stack applications from scratch.",
        "Developed RESTful APIs using NodeJS, ExpressJS, and MongoDB, and built responsive, interactive user interfaces with ReactJS and TailwindCSS for seamless front-end experiences.",
      ],
    },
  ];

  const projects = [
    {
      id: "portfolio",
      title: "Personal Portfolio",
      description:
        "A stunning, futuristic personal portfolio showcasing full-stack development expertise with a cyberpunk-inspired dark theme. Built with React, Vite, TailwindCSS, and shadcn/ui components, this fully responsive website features neon-glow aesthetics, smooth animations, and interactive elements.",
      tech: ["Next.js", "TailwindCSS", "ShadcnUI", "Typescript"],
      demo: "#",
      github: "https://github.com/arbaaz1999/portfolio",
    },
    {
      id: "ai_image_editor",
      title: "AI Image Editor",
      description:
        "Pixxel is a subscription-based SaaS AI Image Editor built with Next.js (App Router). It provides a modern, browser-based canvas editor with AI-powered transformations and traditional image-editing features so users can crop, resize, add text, adjust colors, replace or remove backgrounds, extend canvases, perform AI edits and enhancements, and export final assets.",
      tech: [
        "NextJS",
        "Javascript / React",
        "FabricJS",
        "Imagekit.io",
        "Clerk Auth",
        "CovexDB",
        "TailwindCSS",
        "ShadcnUI",
        "Context API",
      ],
      demo: "https://pixxel-teal.vercel.app/",
      github: "https://github.com/arbaaz1999/pixxel",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-cyan-50 overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-cyan-950/20 via-slate-950 to-purple-950/20"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AM
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "experience", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-all duration-300 ${
                      activeSection === item
                        ? "text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                        : "text-cyan-100 hover:text-cyan-400"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-cyan-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20">
            <div className="px-4 py-4 space-y-3">
              {["home", "about", "experience", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left capitalize py-2 text-cyan-100 hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-16 px-4"
      >
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="mb-6 animate-pulse">
            <div className="inline-block p-4 border-2 border-cyan-500/50 rounded-lg bg-cyan-500/5 backdrop-blur-sm">
              <Code className="w-16 h-16 text-cyan-400" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              Arbaaz Mansuri
            </span>
          </h1>

          <p className="text-xl md:text-3xl text-cyan-200 mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
            Frontend Engineer
          </p>

          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            Building the future with code. Specializing in modern web
            technologies and scalable solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-450">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-linear-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300"
            >
              View My Work
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300"
            >
              <a href="/Arbaaz_SE_2YoE_Next.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Resume
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300"
            >
              <a
                href="https://github.com/arbaaz1999"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all duration-300"
            >
              <a
                href="https://www.linkedin.com/in/arbaaz1999/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>

          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <Card className="bg-slate-900/50 border-cyan-500/30 backdrop-blur-sm shadow-[0_0_30px_rgba(6,182,212,0.1)] hover:shadow-[0_0_40px_rgba(6,182,212,0.2)] transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-cyan-400 flex items-center gap-2">
                <Database className="w-6 h-6" />
                Developer & Problem Solver
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-slate-300 leading-relaxed">
                I&apos;m a passionate full-stack developer with expertise in
                building modern, scalable web applications. With a strong
                foundation in both frontend and backend technologies, I love
                creating seamless user experiences backed by robust server
                architecture.
              </p>

              <p className="text-slate-300 leading-relaxed">
                My journey in software development has equipped me with a
                diverse skill set and the ability to adapt to new technologies
                quickly. I thrive in collaborative environments and am always
                eager to tackle challenging projects that push the boundaries of
                what&apos;s possible.
              </p>

              <div className="pt-4">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-linear-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full text-cyan-300 text-sm hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-cyan-500 via-purple-500 to-cyan-500 opacity-30"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.5)] transform -translate-x-1/2"></div>

                  <div className="w-full md:w-5/12"></div>

                  <Card className="w-full md:w-5/12 bg-slate-900/50 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl text-cyan-400">
                            {exp.role}
                          </CardTitle>
                          <CardDescription className="text-purple-400 font-semibold mt-1">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <Briefcase className="w-6 h-6 text-cyan-500/50" />
                      </div>
                      <p className="text-sm text-slate-400">{exp.duration}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-slate-300 text-sm flex items-start gap-2"
                          >
                            <span className="text-cyan-400 mt-1">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="bg-slate-900/50 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.2)] transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="h-40 bg-linear-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                    <Server className="w-16 h-16 text-cyan-400/30 group-hover:text-cyan-400/50 transition-colors" />
                    <div className="absolute inset-0 bg-linear-to-tr from-cyan-500/0 via-transparent to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
                  </div>
                  <CardTitle className="text-xl text-cyan-400">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-300 mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded text-purple-300 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 bg-linear-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/50 text-cyan-400 hover:from-cyan-500/30 hover:to-purple-500/30 hover:border-cyan-400 transition-all duration-300"
                    >
                      <a
                        href={project.demo}
                        target={project.id === "portfolio" ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="flex-1 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 mb-20">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>

          <Card className="bg-slate-900/50 border-cyan-500/30 backdrop-blur-sm shadow-[0_0_30px_rgba(6,182,212,0.1)]">
            <CardHeader>
              <CardTitle className="text-2xl text-cyan-400">
                Send Me a Message
              </CardTitle>
              <CardDescription className="text-slate-300">
                I&apos;m always open to discussing new projects and
                opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm text-cyan-400">Name</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-slate-950/50 border-cyan-500/30 text-cyan-50 focus:border-cyan-400 focus:ring-cyan-400/20"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-cyan-400">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-slate-950/50 border-cyan-500/30 text-cyan-50 focus:border-cyan-400 focus:ring-cyan-400/20"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-cyan-400">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className="bg-slate-950/50 border-cyan-500/30 text-cyan-50 focus:border-cyan-400 focus:ring-cyan-400/20 resize-none"
                  />
                </div>

                {formStatus === "success" && (
                  <Alert className="bg-cyan-500/10 border-cyan-500/30 text-cyan-400">
                    <AlertDescription>
                      Message sent successfully! I&apos;ll get back to you soon.
                    </AlertDescription>
                  </Alert>
                )}
                {formStatus === "error" && (
                  <Alert className="bg-red-500/10 border-red-500/30 text-red-400">
                    <AlertDescription>{message}</AlertDescription>
                  </Alert>
                )}

                <Button
                  disabled={loading}
                  onClick={handleFormSubmit}
                  className="w-full bg-linear-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 cursor-pointer"
                >
                  {loading ? (
                    <Loader2 />
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>

              <div className="mt-8 pt-8 border-t border-cyan-500/20">
                <p className="text-center text-slate-400 mb-4">
                  Or reach out via:
                </p>
                <div className="flex justify-center gap-6">
                  <a
                    href="mailto:arbaaz@example.com"
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>arbaazmansuri09@gmail.com</span>
                  </a>
                </div>
                <div className="flex justify-center gap-4 mt-6">
                  <a
                    href="https://github.com/arbaaz1999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-cyan-500/30 rounded-lg hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300"
                  >
                    <Github className="w-6 h-6 text-cyan-400" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/arbaaz1999/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-purple-500/30 rounded-lg hover:border-purple-400 hover:bg-purple-500/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all duration-300"
                  >
                    <Linkedin className="w-6 h-6 text-purple-400" />
                  </a>
                </div>
                <div className="mt-6 flex justify-center">
                  <Button
                    asChild
                    variant="outline"
                    className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:text-cyan-500 transition-all duration-300"
                  >
                    <a href="/Arbaaz_SE_2YoE_Next.pdf" download>
                      <Download className="mr-2 h-5 w-5" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-cyan-500/20 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">
            © 2024 Arbaaz Mansuri. Crafted with{" "}
            <span className="text-cyan-400">React</span> and{" "}
            <span className="text-purple-400">TailwindCSS</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
