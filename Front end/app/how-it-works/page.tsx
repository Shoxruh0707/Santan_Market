'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Check, MapPin, Clock, Package } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export default function HowItWorksPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero */}
      <section className="relative bg-[url('/images/car.jpg')] bg-cover bg-center text-white py-16 sm:py-24">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            {t('howHeroTitle')}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            {t('howHeroSubtitle')}
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1">
        {/* The Process */}
        <section className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-foreground">
            {t('howStepsTitle')}
          </h2>

          <div className="space-y-12">
            {[
              {
                num: 1,
                title: t('howStep1Title'),
                desc: t('howStep1Desc'),
                details: [
                  t('howStep1Detail1'),
                  t('howStep1Detail2'),
                  t('howStep1Detail3'),
                  t('howStep1Detail4'),
                ],
                icon: '🔍',
              },
              {
                num: 2,
                title: t('howStep2Title'),
                desc: t('howStep2Desc'),
                details: [
                  t('howStep2Detail1'),
                  t('howStep2Detail2'),
                  t('howStep2Detail3'),
                  t('howStep2Detail4'),
                ],
                icon: '🛒',
              },
              {
                num: 3,
                title: t('howStep3Title'),
                desc: t('howStep3Desc'),
                details: [
                  t('howStep3Detail1'),
                  t('howStep3Detail2'),
                  t('howStep3Detail3'),
                  t('howStep3Detail4'),
                ],
                icon: '📦',
              },
              {
                num: 4,
                title: t('howStep4Title'),
                desc: t('howStep4Desc'),
                details: [
                  t('howStep4Detail1'),
                  t('howStep4Detail2'),
                  t('howStep4Detail3'),
                  t('howStep4Detail4'),
                ],
                icon: '🚚',
              },
            ].map((step) => (
              <div key={step.num} className="bg-white border border-border rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
                  <div className="p-8 md:p-12 flex flex-col justify-center bg-muted order-2 md:order-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-3xl">
                        {step.icon}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                        {t('stepLabel')} {step.num}: {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-6 text-lg">{step.desc}</p>
                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative p-8 md:p-12 bg-[url('/images/car.jpg')] bg-cover bg-center flex items-center justify-center order-1 md:order-2">
                    <div className="relative z-10 text-6xl sm:text-7xl">{step.icon}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Unique Concept */}
        <section className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
            {t('uniqueConceptTitle')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🏢',
                title: t('uniqueConcept1Title'),
                desc: t('uniqueConcept1Desc'),
              },
              {
                icon: '💬',
                title: t('uniqueConcept2Title'),
                desc: t('uniqueConcept2Desc'),
              },
              {
                icon: '📍',
                title: t('uniqueConcept3Title'),
                desc: t('uniqueConcept3Desc'),
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why This Works */}
        <section className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
            {t('whyWorksTitle')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: t('whyBuildersTitle'),
                points: [
                  t('whyBuildersPoint1'),
                  t('whyBuildersPoint2'),
                  t('whyBuildersPoint3'),
                  t('whyBuildersPoint4'),
                  t('whyBuildersPoint5'),
                ],
              },
              {
                title: t('whyHomeownersTitle'),
                points: [
                  t('whyHomeownersPoint1'),
                  t('whyHomeownersPoint2'),
                  t('whyHomeownersPoint3'),
                  t('whyHomeownersPoint4'),
                  t('whyHomeownersPoint5'),
                ],
              },
              {
                title: t('whyWarehouseTitle'),
                points: [
                  t('whyWarehousePoint1'),
                  t('whyWarehousePoint2'),
                  t('whyWarehousePoint3'),
                  t('whyWarehousePoint4'),
                  t('whyWarehousePoint5'),
                ],
              },
              {
                title: t('whyPlatformTitle'),
                points: [
                  t('whyPlatformPoint1'),
                  t('whyPlatformPoint2'),
                  t('whyPlatformPoint3'),
                  t('whyPlatformPoint4'),
                  t('whyPlatformPoint5'),
                ],
              },
            ].map((section, idx) => (
              <div key={idx} className="bg-muted rounded-lg p-8 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.points.map((point, pidx) => (
                    <li key={pidx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-gradient-to-r from-primary to-orange-600 rounded-lg p-8 sm:p-12 text-white text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('timelineTitle')}
          </h2>
          <p className="text-lg text-orange-50 mb-8">
            {t('timelineSubtitle')}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <div className="text-3xl font-bold mb-2">{t('timelineDay1Label')}</div>
              <div className="text-sm">{t('timelineDay1Text')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{t('timelineDay1to2Label')}</div>
              <div className="text-sm">{t('timelineDay1to2Text')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{t('timelineDay2to3Label')}</div>
              <div className="text-sm">{t('timelineDay2to3Text')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{t('timelineDay3Label')}</div>
              <div className="text-sm">{t('timelineDay3Text')}</div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
            {t('faqTitle')}
          </h2>

          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              {
                q: t('faq1Q'),
                a: t('faq1A'),
              },
              {
                q: t('faq2Q'),
                a: t('faq2A'),
              },
              {
                q: t('faq3Q'),
                a: t('faq3A'),
              },
              {
                q: t('faq4Q'),
                a: t('faq4A'),
              },
              {
                q: t('faq5Q'),
                a: t('faq5A'),
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="bg-white border border-border rounded-lg p-6 hover:border-primary transition-colors group cursor-pointer"
              >
                <summary className="font-bold text-foreground flex justify-between items-center">
                  {faq.q}
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
