'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Check, TrendingUp, Users, Zap } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export default function PartnersPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero */}
      <section className="relative bg-[url('/images/23.jpg')] bg-cover bg-center text-white py-16 sm:py-24">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            {t('partnersHeroTitle')}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            {t('partnersHeroSubtitle')}
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1">
        {/* Partnership Model */}
        <section className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
            {t('partnershipModelTitle')}
          </h2>
          <div className="bg-white border border-border rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">📦</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{t('partnerYouProvideTitle')}</h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>{t('partnerYouProvideItem1')}</li>
                  <li>{t('partnerYouProvideItem2')}</li>
                  <li>{t('partnerYouProvideItem3')}</li>
                  <li>{t('partnerYouProvideItem4')}</li>
                </ul>
              </div>
              <div className="text-center flex flex-col justify-center">
                <div className="text-3xl text-primary font-bold">↔️</div>
                <p className="text-muted-foreground mt-4">
                  {t('partnerModelMiddleText')}
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{t('partnerWeProvideTitle')}</h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>{t('partnerWeProvideItem1')}</li>
                  <li>{t('partnerWeProvideItem2')}</li>
                  <li>{t('partnerWeProvideItem3')}</li>
                  <li>{t('partnerWeProvideItem4')}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
            {t('partnerBenefitsTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Users,
                title: t('benefitReachTitle'),
                desc: t('benefitReachDesc'),
              },
              {
                icon: TrendingUp,
                title: t('benefitIncreaseTitle'),
                desc: t('benefitIncreaseDesc'),
              },
              {
                icon: Zap,
                title: t('benefitReduceTitle'),
                desc: t('benefitReduceDesc'),
              },
              {
                icon: Check,
                title: t('benefitGuaranteedTitle'),
                desc: t('benefitGuaranteedDesc'),
              },
              {
                icon: TrendingUp,
                title: t('benefitAnalyticsTitle'),
                desc: t('benefitAnalyticsDesc'),
              },
              {
                icon: Zap,
                title: t('benefitSupportTitle'),
                desc: t('benefitSupportDesc'),
              },
            ].map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <div key={idx} className="flex gap-4 bg-white border border-border rounded-lg p-6 hover:border-primary transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
            {t('gettingStartedTitle')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: 1,
                title: t('partnerStep1Title'),
                desc: t('partnerStep1Desc'),
              },
              {
                num: 2,
                title: t('partnerStep2Title'),
                desc: t('partnerStep2Desc'),
              },
              {
                num: 3,
                title: t('partnerStep3Title'),
                desc: t('partnerStep3Desc'),
              },
              {
                num: 4,
                title: t('partnerStep4Title'),
                desc: t('partnerStep4Desc'),
              },
            ].map((step) => (
              <div key={step.num} className="bg-white border border-border rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Partner Types */}
        <section className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
            {t('partnerTypesTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: t('partnerType1Title'),
                desc: t('partnerType1Desc'),
                icon: '🏭',
              },
              {
                title: t('partnerType2Title'),
                desc: t('partnerType2Desc'),
                icon: '🏪',
              },
              {
                title: t('partnerType3Title'),
                desc: t('partnerType3Desc'),
                icon: '⚙️',
              },
              {
                title: t('partnerType4Title'),
                desc: t('partnerType4Desc'),
                icon: '🚢',
              },
            ].map((partner, idx) => (
              <div key={idx} className="bg-muted rounded-lg p-8 border border-border">
                <div className="text-5xl mb-4">{partner.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{partner.title}</h3>
                <p className="text-muted-foreground">{partner.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Commission Structure */}
        <section className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
            {t('commissionTitle')}
          </h2>
          <div className="bg-white border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted border-b border-border">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-foreground">{t('commissionTableCategory')}</th>
                    <th className="px-6 py-4 text-left font-bold text-foreground">{t('commissionTableCommission')}</th>
                    <th className="px-6 py-4 text-left font-bold text-foreground">{t('commissionTableDetails')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    {
                      cat: t('commissionRow1Cat'),
                      commission: '5%',
                      details: t('commissionRow1Details'),
                    },
                    {
                      cat: t('commissionRow2Cat'),
                      commission: '5%',
                      details: t('commissionRow2Details'),
                    },
                    {
                      cat: t('commissionRow3Cat'),
                      commission: '8%',
                      details: t('commissionRow3Details'),
                    },
                    {
                      cat: t('commissionRow4Cat'),
                      commission: '10%',
                      details: t('commissionRow4Details'),
                    },
                    {
                      cat: t('commissionRow5Cat'),
                      commission: '12%',
                      details: t('commissionRow5Details'),
                    },
                  ].map((row, idx) => (
                    <tr key={idx}>
                      <td className="px-6 py-4 text-foreground font-semibold">{row.cat}</td>
                      <td className="px-6 py-4 text-primary font-bold text-lg">{row.commission}</td>
                      <td className="px-6 py-4 text-muted-foreground text-sm">{row.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-center text-muted-foreground mt-6 text-sm">
            {t('commissionNote')}
          </p>
        </section>

        {/* Support */}
        <section className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
            {t('partnerSupportTitle')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '📚', title: t('partnerSupport1Title'), desc: t('partnerSupport1Desc') },
              { icon: '👤', title: t('partnerSupport2Title'), desc: t('partnerSupport2Desc') },
              { icon: '📊', title: t('partnerSupport3Title'), desc: t('partnerSupport3Desc') },
              { icon: '💬', title: t('partnerSupport4Title'), desc: t('partnerSupport4Desc') },
              { icon: '🎯', title: t('partnerSupport5Title'), desc: t('partnerSupport5Desc') },
              { icon: '🔧', title: t('partnerSupport6Title'), desc: t('partnerSupport6Desc') },
            ].map((support, idx) => (
              <div key={idx} className="bg-white border border-border rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">{support.icon}</div>
                <h3 className="font-bold text-foreground mb-2">{support.title}</h3>
                <p className="text-muted-foreground text-sm">{support.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary text-white rounded-lg p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {t('partnerCtaTitle')}
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            {t('partnerCtaSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
              {t('partnerCtaApply')}
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-secondary transition-colors">
              {t('partnerCtaDemo')}
            </button>
          </div>
          <p className="text-gray-300 text-sm mt-6">
            {t('partnerCtaContact')}
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
