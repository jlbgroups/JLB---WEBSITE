import { motion } from 'framer-motion'
import { fadeUp } from '../utils/animations'

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: 'Personal information we collect:',
      content: 'When you visit the www.jlbgroups.com, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the installed cookies on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products you view, what websites or search terms referred you to the Site, and how you interact with the Site. We refer to this automatically-collected information as "Device Information." Moreover, we might collect the personal data you provide to us (including but not limited to Name, Surname, Address, payment information, etc.) during registration to be able to fulfill the agreement.'
    },
    {
      title: 'Why do we process your data?',
      content: 'Our top priority is customer data security, and, as such, we may process only minimal user data, only as much as it is absolutely necessary to maintain the website. Information collected automatically is used only to identify potential cases of abuse and establish statistical information regarding website usage. This statistical information is not otherwise aggregated in such a way that it would identify any particular user of the system.\n\nYou can visit the website without telling us who you are or revealing any information, by which someone could identify you as a specific, identifiable individual. If, however, you wish to use some of the website’s features, or you wish to receive our newsletter or provide other details by filling a form, you may provide personal data to us, such as your email, first name, last name, city of residence, organization, telephone number. You can choose not to provide us with your personal data, but then you may not be able to take advantage of some of the website’s features.'
    },
    {
      title: 'Your rights:',
      content: 'If you are a European resident, you have the following rights related to your personal data:',
      list: [
        'The right to be informed.',
        'The right of access.',
        'The right to rectification.',
        'The right to erasure.',
        'The right to restrict processing.',
        'The right to data portability.',
        'The right to object.',
        'Rights in relation to automated decision-making and profiling.'
      ]
    },
    {
      title: 'Links to other websites:',
      content: 'Our website may contain links to other websites that are not owned or controlled by us. Please be aware that we are not responsible for such other websites or third parties\' privacy practices. We encourage you to be aware when you leave our website and read the privacy statements of each website that may collect personal information.'
    },
    {
      title: 'Information security:',
      content: 'We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We keep reasonable administrative, technical, and physical safeguards to protect against unauthorized access, use, modification, and personal data disclosure in its control and custody. However, no data transmission over the Internet or wireless network can be guaranteed.'
    },
    {
      title: 'Legal disclosure:',
      content: 'We will disclose any information we collect, use or receive if required or permitted by law, such as to comply with a subpoena or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.'
    },
    {
      title: 'Contact information:',
      content: 'If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter relating to individual rights and your Personal Information, you may send an email to JLB@jlbgroups.com.'
    }
  ]

  return (
    <main className="bg-bg pt-[68px]">
      {/* Header */}
      <section className="py-16 lg:py-20 px-6 border-b border-border bg-white text-center">
        <div className="max-w-container mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col items-center">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-accent mb-4">Legal</span>
            <h1 className="font-heading font-bold text-forest text-[32px] md:text-[42px] tracking-tight leading-tight max-w-2xl mb-4">
              Privacy Policy
            </h1>
            <p className="text-textPrimary text-[15px] max-w-2xl leading-relaxed">
              At JLB Groups, we take care of your personal data and undertake to guarantee its confidentiality and security. This policy outlines how we process the information collected by jlbgroups.com.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} className="space-y-12">
            <div className="prose prose-forest max-w-none">
              <p className="text-textSecondary text-[14px]">
                www.jlbgroups.com website is owned by JLB Groups, which is a data controller of your personal data. We have adopted this Privacy Policy, which determines how we are processing the information collected by www.jlbgroups.com, which also provides the reasons why we must collect certain personal data about you. Therefore, you must read this Privacy Policy before using www.jlbgroups.com website.
              </p>

              {sections.map((section, idx) => (
                <div key={idx} className="mb-10">
                  <h2 className="font-heading font-bold text-forest text-[20px] mb-4 flex items-center gap-3">
                    <span className="text-accent text-[14px]">0{idx + 1}</span>
                    {section.title}
                  </h2>
                  <div className="text-textPrimary text-[15px] leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                  {section.list && (
                    <ul className="mt-4 space-y-2">
                      {section.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-[14px] text-textPrimary">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
