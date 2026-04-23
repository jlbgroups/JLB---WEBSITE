import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp, MapPin, AlertTriangle } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import { useState } from 'react'
import { fadeUp, slideInLeft, slideInRight } from '../utils/animations'




const openings = [
  { 
    title: 'Software Engineer Trainee: Gen AI', 
    department: 'AI & Data Science', 
    location: 'Remote / WFH', 
    type: 'Internship', 
    desc: 'Work with cutting-edge Generative AI and Agentic systems. Design and develop applications using models like OpenAI, Claude, and Gemini. Build prototypes with LLM APIs, vector databases, and prompt engineering to create smart assistants and copilots for enterprise use.',
    responsibilities: [
      'Design and develop applications using Generative AI models (OpenAI, Claude, Gemini, etc.)',
      'Work on Agentic AI systems that can reason, plan, and act autonomously in enterprise workflows',
      'Build prototypes and proof-of-concepts using LLM APIs, prompt engineering, vector databases, and embeddings',
      'Stay updated with the latest in Gen AI, LLM fine-tuning, RAG pipelines, and open-source frameworks (LangChain, LlamaIndex, etc.)'
    ],
    skills: ['Python and APIs', 'AI/ML concepts & LLMs', 'LangChain, OpenAI, HuggingFace', 'Vector DBs (Pinecone/Weaviate)']
  },
  { 
    title: 'Software Engineer Trainee: SAP', 
    department: 'Enterprise Management', 
    location: 'Remote / WFH', 
    type: 'Internship', 
    desc: 'Build enterprise applications using SAP ABAP. Collaborate with functional consultants to understand business requirements and deliver effective technical solutions. Essential skills include Object-Oriented Programming (OOP) and SQL.',
    responsibilities: [
      'Design, develop, and maintain applications using SAP ABAP',
      'Collaborate with functional consultants to understand business requirements',
      'Participate in code reviews, debugging, and performance optimization activities',
      'Ensure high-quality deliverables and adherence to SAP development standards'
    ],
    skills: ['Programming Fundamentals (OOP)', 'SAP ABAP Basics', 'SQL / Database concepts', 'Exposure to SAP BTP / Fiori (Added Advantage)']
  },
  { 
    title: 'Software Engineer Trainee: Application Development', 
    department: 'Software Engineering', 
    location: 'Remote / WFH', 
    type: 'Internship', 
    desc: 'Develop scalable web applications using React/Angular (front-end) and .NET/Node.js (back-end). Contribute to API design, UI/UX discussions, and collaborate in agile sprints to deliver high-quality software solutions.',
    responsibilities: [
      'Design and develop dynamic web applications using React/Angular and .NET/Node.js',
      'Contribute to API design, UI/UX discussions, and deployment processes',
      'Collaborate with cross-functional teams in agile sprints',
      'Maintain code quality and participate in peer reviews'
    ],
    skills: ['HTML, CSS, JavaScript', 'React or Angular frameworks', 'Node.js or .NET Core', 'SQL and NoSQL database concepts']
  },
  { 
    title: 'Software Engineer Trainee: Salesforce Developer', 
    department: 'Cloud Solutions', 
    location: 'Remote / WFH', 
    type: 'Internship', 
    desc: 'Build and customize Salesforce applications using Apex, Visualforce, and Lightning Components. Configure and automate business processes through Flows and develop REST/SOAP-based integrations with external systems.',
    responsibilities: [
      'Build and customize Salesforce applications using Apex, Visualforce, and Lightning Components',
      'Configure and automate business processes through Flows and Process Builder',
      'Develop and maintain REST/SOAP-based integrations with external systems',
      'Participate in the complete software development lifecycle'
    ],
    skills: ['Object-Oriented Programming', 'Cloud Computing Basics (SaaS/PaaS)', 'Salesforce Trailhead exposure', 'Data modeling and security settings']
  },
]

const knowledgeAreas = [
  { title: 'Programming', items: ['Object-Oriented Programming (OOP) concepts', 'Java / C++ / Python proficiency', 'Inheritance, Interfaces, Exception handling'] },
  { title: 'Web Basics', items: ['HTML, CSS, JavaScript core basics', 'Client-server architecture understanding', 'Web protocols and API fundamentals'] },
  { title: 'Databases', items: ['RDBMS understanding (Tables, Joins, Keys)', 'Writing efficient SQL queries', 'Data modeling principles'] },
  { title: 'CRM & Cloud', items: ['What is CRM and business use-cases', 'Sales process: Leads, Opportunities', 'SaaS, PaaS, IaaS differences'] },
]

export default function CareersPage() {
  const [expanded, setExpanded] = useState<number | null>(null)

  const scrollToOpenings = () => {
    document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="bg-bg pt-[68px]">
      {/* Hero */}
      <section className="py-16 lg:py-20 px-6 border-b border-border">
        <div className="max-w-container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <motion.div initial="hidden" animate="visible" variants={slideInLeft} className="w-full lg:w-1/2">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-accent mb-4">Student Opportunities</span>
              <h1 className="font-heading font-bold text-forest text-[30px] md:text-[40px] tracking-tight leading-tight mb-5">
                Predict the Future by Creating It.
              </h1>
              <p className="text-textSecondary text-[15px] leading-relaxed mb-4">
                Explore exciting Student opportunities at SHNOOR. We offer structured internships and live projects with a modern approach to technology and professional growth in roles like Gen AI, SAP, App Development, and Salesforce Development.
              </p>
              <p className="text-textSecondary text-[15px] leading-relaxed mb-7 font-medium text-forest">
                Duration: 3 Months · Stipend: 10K-12K · PPO: 6 LPA · Work From Home
              </p>
              <Button onClick={scrollToOpenings} variant="primary" size="lg" withArrow>View Open Positions</Button>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={slideInRight} className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80&auto=format" alt="SHNOOR student opportunities" className="w-full h-[300px] md:h-[360px] object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Internship Details */}
      <section className="py-12 px-6">
        <div className="max-w-container mx-auto">
          <div className="bg-white border border-border rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center shadow-sm">
            {[
              { label: 'Internship Duration', value: '3 Months' },
              { label: 'Monthly Stipend', value: '10K - 12K' },
              { label: 'PPO Opportunity', value: '6 LPA' },
              { label: 'Work Mode', value: 'Remote / WFH' },
            ].map((detail) => (
              <div key={detail.label}>
                <p className="text-accent text-[11px] font-bold uppercase tracking-wider mb-2">{detail.label}</p>
                <p className="text-forest font-heading font-bold text-[18px]">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prerequisite Knowledge */}
      <section className="py-16 lg:py-20 px-6 bg-forest text-white">
        <div className="max-w-container mx-auto">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-accent text-[11px] font-semibold uppercase tracking-[0.2em] mb-4 block">Prerequisites</span>
            <h2 className="font-heading font-bold text-[28px] md:text-[36px] tracking-tight mb-4 text-white">Basic Knowledge Areas</h2>
            <p className="text-white/60 text-[14px] max-w-2xl mx-auto">Must-have or to-be-learned knowledge before joining our Software Engineer Trainee programs.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {knowledgeAreas.map((area, i) => (
              <motion.div key={area.title} initial="hidden" whileInView="visible" variants={fadeUp} custom={i} viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="font-heading font-bold text-accent text-[16px] mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {area.title}
                </h3>
                <ul className="space-y-3">
                  {area.items.map((item, j) => (
                    <li key={j} className="text-[13px] text-white/70 leading-snug flex items-start gap-2">
                      <span className="text-accent/60 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 lg:py-20 px-6 bg-cream/30">
        <div className="max-w-container mx-auto">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
            <SectionHeader label="Our Mission" title="Shnoor Aims To" subtitle="We are committed to nurturing the next generation of technology leaders through structured learning and real-world project exposure." />
          </motion.div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'IT Career Paths', desc: 'Exciting career paths in IT services and enterprise solutions.' },
              { title: 'Structured Learning', desc: 'Offer structured internships and live industry projects.' },
              { title: 'Skill Development', desc: 'Conduct skill development workshops and expert mentoring.' },
              { title: 'Campus Recruitment', desc: 'Recruit talented graduates for permanent roles via PPO.' },
            ].map((b, i) => (
              <motion.div key={b.title} initial="hidden" whileInView="visible" variants={fadeUp} custom={i} viewport={{ once: true }}
                className="bg-white border border-border rounded-xl p-6 text-center card-hover">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-4 font-bold text-xl">{i + 1}</div>
                <h3 className="font-heading font-semibold text-forest text-[15px] tracking-tight mb-2">{b.title}</h3>
                <p className="text-textSecondary text-[13px] leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="open-roles" className="py-16 lg:py-20 px-6 bg-white border-y border-border scroll-mt-20">
        <div className="max-w-container mx-auto">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
            <SectionHeader label="Open Internships" title="Latest Opportunities" subtitle="Kickstart your career with our Software Engineer Trainee programs." />
          </motion.div>
          <div className="mt-12 space-y-4">
            {openings.map((role, i) => (
              <motion.div key={role.title} initial="hidden" whileInView="visible" variants={fadeUp} custom={i} viewport={{ once: true }}
                className="bg-bg border border-border rounded-xl overflow-hidden">
                <button className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-cream/50 transition-colors"
                  onClick={() => setExpanded(expanded === i ? null : i)}>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
                    <h3 className="font-heading font-semibold text-forest text-[16px] tracking-tight">{role.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[11px] bg-accent/10 text-accent rounded-full px-2.5 py-0.5 font-medium">{role.department}</span>
                      <span className="inline-flex items-center gap-1 text-[11px] bg-cream text-textSecondary border border-border rounded-full px-2.5 py-0.5"><MapPin size={9} /> {role.location}</span>
                      <span className="text-[11px] bg-cream text-textSecondary border border-border rounded-full px-2.5 py-0.5">{role.type}</span>
                    </div>
                  </div>
                  {expanded === i ? <ChevronUp size={18} className="text-textSecondary shrink-0" /> : <ChevronDown size={18} className="text-textSecondary shrink-0" />}
                </button>
                {expanded === i && (
                  <div className="px-6 pb-6 border-t border-border pt-6 bg-white/50">
                    <p className="text-textPrimary font-medium text-[15px] mb-4">Role Overview:</p>
                    <p className="text-textPrimary text-[14px] leading-relaxed mb-6">{role.desc}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <p className="text-forest font-bold text-[13px] uppercase tracking-wider mb-3">Key Responsibilities:</p>
                        <ul className="space-y-2">
                          {role.responsibilities?.map((res, idx) => (
                            <li key={idx} className="text-[13px] text-textSecondary flex items-start gap-2 leading-relaxed">
                              <span className="text-accent font-bold">•</span> {res}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-forest font-bold text-[13px] uppercase tracking-wider mb-3">Preferred Skills:</p>
                        <div className="flex flex-wrap gap-2">
                          {role.skills?.map((skill, idx) => (
                            <span key={idx} className="text-[11px] border border-border bg-white px-2.5 py-1 rounded-lg text-textPrimary font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLSd5AvoYS_aSxm-YY0zD-Af_VdAiZr9KJsIaOYvt0s-hcHK8Ig/viewform?usp=publish-editor" target="_blank" rel="noreferrer" className="bg-forest text-white px-8 py-3 rounded-xl text-[14px] font-bold transition-transform hover:scale-105 shadow-md">
                        Apply for this Program
                      </a>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Scam Warning */}
      <section className="px-6 py-10">
        <div className="max-w-container mx-auto">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}
            className="bg-[#fff8f1] border-l-4 border-[#f59e0b] rounded-[16px] p-6 md:p-8 flex flex-col md:flex-row items-start gap-4 md:gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <div className="w-12 h-12 rounded-full bg-[#fff3e0] text-[#f59e0b] flex items-center justify-center shrink-0 shadow-sm">
              <AlertTriangle size={20} />
            </div>
            <div className="flex-1">
              <h3 className="text-[#7c2d12] font-heading font-semibold text-[18px] mb-1.5 tracking-tight">Recruitment Scam Alert</h3>
              <div className="space-y-3">
                <p className="text-[#92400e] text-[14px] leading-relaxed">
                  At SHNOOR International LLC, integrity and transparency are at the heart of our recruitment process. We want to alert all job seekers that we <strong>never charge any fees</strong>, request payments, or ask for financial information at any stage of our hiring process.
                </p>
                <p className="text-[#92400e] text-[14px] leading-relaxed">
                  To protect against spam, ensure all official communication comes from <strong>@shnoor.com</strong>. If you receive any suspicious requests—via email, social media, or messaging apps—claiming to represent SHNOOR and requesting money, please treat it as a scam.
                </p>
              </div>
              <div className="mt-5">
                <a href="/recruitment-scams" className="inline-block bg-[#f59e0b] hover:bg-[#d97706] text-white px-5 py-2.5 rounded-[8px] text-[13px] font-medium transition-all duration-200 shadow-sm">
                  Read More
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 mb-6">
        <div className="max-w-container mx-auto bg-white border border-border rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-heading font-semibold text-forest text-[18px]">SHNOOR — Get the Future You Want!</p>
            <p className="text-textSecondary text-[14px]">Send your resume to <a href="mailto:info@shnoor.com" className="text-accent font-medium">info@shnoor.com</a></p>
          </div>
          <Button href="https://docs.google.com/forms/d/e/1FAIpQLSd5AvoYS_aSxm-YY0zD-Af_VdAiZr9KJsIaOYvt0s-hcHK8Ig/viewform?usp=publish-editor" variant="accent" size="lg" withArrow>Apply Now</Button>
        </div>
      </section>
    </main>
  )
}
