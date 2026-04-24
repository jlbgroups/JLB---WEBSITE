import { motion } from 'framer-motion'
import { fadeUp } from '../utils/animations'

export default function TermsPage() {
  const sections = [
    {
      title: 'Cookies:',
      content: 'The website uses cookies to help personalize your online experience. By accessing www.jlbgroups.com, you agreed to use the required cookies. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer.\n\nWe may use cookies to collect, store, and track information for statistical or marketing purposes to operate our website. You have the ability to accept or decline optional Cookies. There are some required Cookies that are necessary for the operation of our website. These cookies do not require your consent as they always work.'
    },
    {
      title: 'License:',
      content: 'Unless otherwise stated, JLB Groups and/or its licensors own the intellectual property rights for all material on www.jlbgroups.com. All intellectual property rights are reserved. You may access this from www.jlbgroups.com for your own personal use subjected to restrictions set in these terms and conditions.\n\nYou must not:',
      list: [
        'Copy or republish material from www.jlbgroups.com',
        'Sell, rent, or sub-license material from www.jlbgroups.com',
        'Reproduce, duplicate or copy material from www.jlbgroups.com',
        'Redistribute content from www.jlbgroups.com'
      ]
    },
    {
      title: 'Hyperlinking to our Content:',
      content: 'The following organizations may link to our Website without prior written approval:',
      list: [
        'Government agencies',
        'Search engines',
        'News organizations',
        'Online directory distributors',
        'System-wide Accredited Businesses'
      ]
    },
    {
      title: 'Content Liability:',
      content: 'We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are raised on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.'
    },
    {
      title: 'Reservation of Rights:',
      content: 'We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.'
    },
    {
      title: 'Disclaimer:',
      content: 'To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will limit or exclude our or your liability for death or personal injury, fraud, or fraudulent misrepresentation.\n\nAs long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.'
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
              Terms & Conditions
            </h1>
            <p className="text-textPrimary text-[15px] max-w-2xl leading-relaxed">
              These terms and conditions outline the rules and regulations for the use of JLB Groups's Website, located at jlbgroups.com.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} className="space-y-12">
            <div className="prose prose-forest max-w-none">
              <p className="text-textPrimary text-[15px] leading-relaxed mb-8">
                Welcome to www.jlbgroups.com! By accessing this website, we assume you accept these terms and conditions. Do not continue to use www.jlbgroups.com if you do not agree to take all of the terms and conditions stated on this page.
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
