'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Github, Award, Linkedin, Mail, ChevronDown, Phone, ExternalLink, Moon, Sun } from "lucide-react"
import Image from 'next/image'

export function AntonioHusPortfolio() {
  const [activeSection, setActiveSection] = useState('')
  const [darkMode, setDarkMode] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'courses', 'awards', 'contact']
      const scrollPosition = window.scrollY

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop - 100) {
          setActiveSection(section)
        }
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    const cursor = cursorRef.current
    if (cursor) {
      cursor.style.left = `${mousePosition.x}px`
      cursor.style.top = `${mousePosition.y}px`
    }
  }, [mousePosition])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <div
          ref={cursorRef}
          className="fixed w-8 h-8 rounded-full border-2 border-gray-400 dark:border-gray-500 pointer-events-none transition-all duration-100 ease-out z-50"
          style={{ transform: 'translate(-50%, -50%)' }}
        />

        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Antonio Hus</h1>
            <nav className="flex items-center space-x-6">
              {['about', 'skills', 'projects', 'education', 'courses', 'awards', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollTo(section)}
                  className={`capitalize hover:text-gray-600 dark:hover:text-gray-300 transition-colors ${activeSection === section ? 'text-gray-900 dark:text-white font-semibold' : 'text-gray-500 dark:text-gray-400'}`}
                >
                  {section}
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-16">
          {/* Hero Section */}
          <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
            <div className="text-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-8 shadow-lg relative">
              <Image
                src="/images/antonio_preview.jpg"
                alt="Antonio Hus"
                width={200}
                height={200}
                className="object-cover absolute"
                style={{ transform: 'translate(0%, -10%)' }}
              />
            </div>
              <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300">Antonio Hus</h1>
              <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">Full-Stack Software Engineer</p>
              <Button onClick={() => scrollTo('about')} size="lg" className="bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-900">
                Learn More <ChevronDown className="ml-2" />
              </Button>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
                    Hi, I'm Antonio Hus, an aspiring Software Engineer with a strong interest in computers, programming, and artificial intelligence. I enjoy the challenge of transforming ideas into interactive and visually appealing applications and websites. My education, both in college and through online resources, continually fuels my growth and skills in this field.
                  </p>
                  <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
                    I am keen to learn from experienced professionals and am open to collaborating on projects that push the boundaries of my knowledge. I welcome any advice, guidance, or opportunities for hands-on experience.
                  </p>
                  <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
                    Let's connect and explore potential opportunities to work together.
                  </p>
                  <a
                    href="/files/Resume_Antonio_Hus.pdf"
                    download
                    className="inline-block"
                  >
                    <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-900">
                      Download Resume
                    </Button>
                  </a>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/images/antonio_work.png"
                    alt="Antonio working"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    category: "Programming Languages",
                    skills: ["C/C++", "Python", "JavaScript"]
                  },
                  {
                    category: "Version Control",
                    skills: ["Git", "Github"]
                  },
                  {
                    category: "Databases",
                    skills: ["PostgreSQL", "SQLite3", "MS SQL"]
                  },
                  {
                    category: "AI Development",
                    skills: ["TensorFlow", "Keras API", "Comet ML"]
                  },
                  {
                    category: "Web Development",
                    skills: ["Django", "React.js", "HTML", "CSS", "Bootstrap"]
                  },
                  {
                    category: "Desktop Development",
                    skills: ["Qt Framework"]
                  },
                  {
                    category: "DevOps",
                    skills: ["Docker"]
                  },
                  {
                    category: "Languages",
                    skills: ["Romanian (Native)", "English (C2)", "German (Elementary)"]
                  },
                  {
                    category: "Soft Skills",
                    skills: ["Leadership", "Teamwork", "Communication", "Problem Solving"]
                  }
                ].map((skillGroup, index) => (
                  <Card key={index} className="bg-white dark:bg-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle>{skillGroup.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "News Aggregator",
                    image: "/images/newsaggregator_preview.png",
                    technologies: "Django, React.js, PostgreSQL, Celery, Python, Javascript, Docker",
                    repo: "https://github.com/antonio-hus/news-aggregator"
                  },
                  {
                    title: "AI Customer Support Dispatcher",
                    image: "/images/customersupport_preview.png",
                    technologies: "Qt Framework, C++, LLMs, Docker",
                    repo: "https://github.com/antonio-hus/Customer-Support-Assistant"
                  }
                ].map((project, index) => (
                  <Card key={index} className="overflow-hidden bg-white dark:bg-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{project.technologies}</p>
                      <Button variant="outline" asChild className="w-full">
                        <a href={project.repo} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> View Repository
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
                      <p className="text-gray-600 dark:text-gray-300">Babes,-Bolyai University Cluj-Napoca | Oct 2023 - Jul 2026</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-900 font-semibold dark:text-gray-300">Average Grade: 9.54 / 10.00</p>
                    <br/>
                    <p className="text-gray-600 dark:text-gray-300">Following a Bachelor of Science Degree in Computer Science, in English.
                    Active participation in extracurricular activities such as Hackathons ( Innovation Labs Hackathon, Code4 Hackday ) and software developement related events ( Google Developer Student's Club ), but also in multiple coding contests ( Cloudflight Coding Contest, Bitdefender Coding Contest ), achieving impressive results as a Solo Team - top 30% of all worldwide participants.</p>
                    <br/>
                    <p className="text-gray-600 dark:text-gray-300">Relevant Coursework: 
                      - Data Structures and Algorithms ( C/C++)
                      - Object Oriented Programming ( C/C++ )
                      - Fundamentals of Programming ( Python )
                      - Operating Systems ( Linux, Shell, C )
                      - Computer System Architecture ( x86 NASM )
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold">Highschool Graduate in Mathematics and Computer Science</h3>
                      <p className="text-gray-600 dark:text-gray-300">Emanuil Gojdu National College Oradea | Sep 2019 - Jul 2023</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-900 font-semibold dark:text-gray-300">Baccalaureate Grade: Computer Programming (9.75/10.00), Mathematics (9.95/10.00)</p>
                    <br/>
                    <p className="text-gray-600 dark:text-gray-300">Followed a Mathematics and Computer Programming oriented class. Learned the basics of programming and algorithmic, which allowed me to participate in various informatics contests such as the County Olympiad or IIOT International Programming Contest in Teams, achieving the first place in county.</p>
                    <br/>
                    <p className="text-gray-600 dark:text-gray-300">During my studies, I have also actively contributed to the school's council, as part of the IT department, where I collaborated with fellow students to enhance the technological infrastructure of the school's website.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          {/* Courses Section */}
          <section id="courses" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-12 text-center">Additional Courses</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold">Introduction to Deep Learning</h3>
                      <p className="text-gray-600 dark:text-gray-300">MIT 6.S191 | Jun 2024 – Jul 2024</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-900 font-semibold dark:text-gray-300">Endorsed Skills: Neural Networks (RNNs, CNNs), Generative AI (GANs, VAEs), Reinforcement Learning, LLMs</p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">Projects:</p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                      <li><a href="https://github.com/antonio-hus/Deep-Learning/tree/main/Project%200%20-%20Music%20Generation" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Music Generation</a></li>
                      <li><a href="https://github.com/antonio-hus/Deep-Learning/tree/main/Project%201%20-%20Digit%20Classification" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Digit Classification</a></li>
                      <li><a href="https://github.com/antonio-hus/Deep-Learning/tree/main/Project%202%20-%20Facial%20Recognition" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Unbiased Facial Detection</a></li>
                      <li><a href="https://github.com/antonio-hus/Deep-Learning/tree/main/Project%203%20-%20Cartpole%20Balancing" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">CartPole Balancing Agent</a></li>
                      <li><a href="https://github.com/antonio-hus/Deep-Learning/tree/main/Project%204%20-%20Autonomous%20Driving" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Autonomous Driving</a></li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold">Web Programming with Python & Javascript</h3>
                      <p className="text-gray-600 dark:text-gray-300">Harvard CS50W | Feb 2024 – Mar 2024</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-900 font-semibold dark:text-gray-300">Endorsed Skills: Django, React.js, Python, Javascript, SQLite3, HTML, CSS, Bootstrap, Docker</p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">Projects:</p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                      <li><a href="https://github.com/antonio-hus/Web-Programming/tree/main/Project%200%20-%20Search" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Search</a></li>
                      <li><a href="https://github.com/antonio-hus/Web-Programming/tree/main/Project%201%20-%20Wiki" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Wiki</a></li>
                      <li><a href="https://github.com/antonio-hus/Web-Programming/tree/main/Project%202%20-%20Commerce" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Auctions</a></li>
                      <li><a href="https://github.com/antonio-hus/Web-Programming/tree/main/Project%203%20-%20Mail" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">MailBox</a></li>
                      <li><a href="https://github.com/antonio-hus/Web-Programming/tree/main/Project%204%20-%20Network" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Social Network</a></li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          {/* Awards Section */}
          <section id="awards" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-12 text-center">Awards & Honors</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  "Awarded with Performance II distinction and scholarship in recognition of outstanding academic achievements.",
                  "Ranked top 30% of all worldwide participants in Cloudflight and Bitdefender Coding Contests.",
                  "Ranked first of all teams in IIOT International Programming Contest in Bihor County.",
                  "Successfully competed in multiple Hackathons: Innovation Labs Hackathon, HackDay by Code4"
                ].map((award, index) => (
                  <Card key={index} className="bg-white dark:bg-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="pt-6 flex items-start gap-4">
                      <Award className="h-6 w-6 text-gray-500 dark:text-gray-300" />
                      <p className="text-gray-600 dark:text-gray-300">{award}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-12 text-center">Contact Me</h2>
              <div className="flex flex-col items-center space-y-4">
                <p className="text-lg mb-4 text-center max-w-2xl text-gray-600 dark:text-gray-300">
                  I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to connect!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="outline" size="lg" asChild className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <a href="mailto:antonio.hus@icloud.com"><Mail className="mr-2 h-5 w-5" /> Email</a>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <a href="https://github.com/antonio-hus" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-5 w-5" /> GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <a href="https://linkedin.com/in/antonio-hus" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <a href="tel:+400773758938"><Phone className="mr-2 h-5 w-5" /> (+40) 0773-758-938</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 dark:bg-gray-800 py-8 border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
            <p>&copy; {new Date().getFullYear()} Antonio Hus. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}