import { motion } from 'framer-motion'
import { AlertTriangle, ShieldCheck, Eye, ShieldAlert, Mail } from 'lucide-react'
import { fadeUp } from '../utils/animations'

const sections = [
  {
    title: 'What Are Recruitment Scams?',
    icon: <AlertTriangle className="text-amber-500" size={24} />,
    content: 'Recruitment scams involve fraudulent job advertisements, fake offer letters, or demands for money under the guise of employment opportunities. Scammers may use emails, fake websites, social media platforms, or messaging apps to target job seekers by pretending to represent SHNOOR International.'
  },
  {
    title: 'How to Identify a Recruitment Scam?',
    icon: <Eye className="text-blue-500" size={24} />,
    content: 'Be alert if you notice any of the following red flags:',
    list: [
      'Requests for money, deposits, or processing fees in exchange for a job.',
      'Unofficial communication from personal email accounts (e.g., Gmail, Yahoo, Hotmail) instead of our verified @shnoor.com domain.',
      'Poorly written offer letters with suspicious formatting or spelling errors.',
      'Promises of guaranteed jobs without formal interviews.',
      'Fake websites or social media pages claiming to be SHNOOR International.'
    ]
  },
  {
    title: 'How We Protect Job Seekers',
    icon: <ShieldCheck className="text-accent" size={24} />,
    content: 'At SHNOOR International, we take your security seriously:',
    list: [
      'We conduct all recruitment through our official website and verified communication channels.',
      'Offer letters are issued only on our official letterhead and signed by authorized personnel.',
      'All job-related communication is shared from our official @shnoor.com domain email IDs.',
      'We encourage applicants to verify the authenticity of any job offer by contacting us directly.'
    ]
  },
  {
    title: 'How to Stay Safe',
    icon: <ShieldAlert className="text-red-500" size={24} />,
    content: 'Follow these steps to ensure a safe job search experience:',
    list: [
      'Never share personal or financial details with unknown recruiters.',
      'Verify email addresses and websites before responding.',
      'Report suspicious activity to SHNOOR International’s official contact channels.',
      'Always check with our HR Department before accepting any offer.'
    ]
  }
]

export default function RecruitmentScamsPage() {
  return (
    <main className="bg-bg pt-[68px]">
      {/* Header */}
      <section className="py-16 lg:py-24 px-6 border-b border-border bg-white">
        <div className="max-w-container mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-accent mb-4">Security Alert</span>
            <h1 className="font-heading font-bold text-forest text-[32px] md:text-[42px] tracking-tight leading-tight mb-6">
              Recruitment Scams & Fraud Prevention
            </h1>
            <p className="text-textSecondary text-[15px] md:text-[16px] max-w-3xl mx-auto leading-relaxed">
              At SHNOOR International, we are committed to maintaining the highest standards of transparency, trust, and ethical practices. We want to protect you from fraudulent individuals misusing our name to mislead job seekers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20 px-6">
        <div className="max-w-container mx-auto">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Warning Box */}
            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}
              className="bg-red-50 border border-red-100 rounded-2xl p-6 md:p-8 text-center shadow-sm">
              <p className="text-red-800 font-heading font-bold text-[18px] mb-2">Important Notice</p>
              <p className="text-red-700 text-[15px] leading-relaxed">
                SHNOOR International <strong>never charges job seekers any money</strong> for interviews, job applications, or placements.
              </p>
            </motion.div>

            {/* Sections */}
            <div className="grid grid-cols-1 gap-8">
              {sections.map((section, i) => (
                <motion.div key={section.title} initial="hidden" whileInView="visible" variants={fadeUp} custom={i} viewport={{ once: true }}
                  className="bg-white border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-bg flex items-center justify-center">
                      {section.icon}
                    </div>
                    <h2 className="font-heading font-bold text-forest text-[20px] tracking-tight">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-textSecondary text-[15px] leading-relaxed mb-4">
                    {section.content}
                  </p>
                  {section.list && (
                    <ul className="space-y-3">
                      {section.list.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-[14px] text-textPrimary leading-relaxed">
                          <span className="text-accent font-bold mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Report Fraud CTA */}
            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}
              className="bg-forest rounded-2xl p-8 md:p-10 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -mr-16 -mt-16" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                  <Mail className="text-accent" size={28} />
                </div>
                <h2 className="font-heading font-bold text-[24px] md:text-[28px] mb-4">Report Fraud</h2>
                <p className="text-white/70 text-[15px] max-w-xl mx-auto mb-8">
                  If you suspect a recruitment scam using the name of SHNOOR International, please contact us immediately. Together, we can fight recruitment fraud and ensure a safe experience.
                </p>
                <a href="mailto:hr@shnoor.com" className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded-xl font-bold transition-transform hover:scale-105 shadow-lg">
                  hr@shnoor.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
