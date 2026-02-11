'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Award, Users, TrendingUp, Target } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero */}
      <section className="relative bg-[url('/images/23.jpg')] bg-cover bg-center text-white py-16 sm:py-24">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            {t('aboutHeroTitle')}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            {t('aboutHeroSubtitle')}
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1">
        {/* Our Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                {t('aboutStoryTitle')}
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                {t('aboutStoryP1')}
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                {t('aboutStoryP2')}
              </p>
              <p className="text-lg text-muted-foreground">
                {t('aboutStoryP3')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary to-orange-600 rounded-lg h-96 flex items-center justify-center">
              <span className="text-9xl">🏗️</span>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">{t('ourMission')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('missionLongDesc')}
            </p>
            <ul className="space-y-2 text-foreground">
              <li className="flex gap-2">
                <span>✓</span>
                <span>{t('missionBullet1')}</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>{t('missionBullet2')}</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>{t('missionBullet3')}</span>
              </li>
            </ul>
          </div>
          <div className="bg-white border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">{t('ourVision')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('visionLongDesc')}
            </p>
            <ul className="space-y-2 text-foreground">
              <li className="flex gap-2">
                <span>✓</span>
                <span>{t('visionBullet1')}</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>{t('visionBullet2')}</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>{t('visionBullet3')}</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
            {t('coreValuesTitle')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: t('valueTransparencyTitle'),
                desc: t('valueTransparencyDesc'),
              },
              {
                icon: Award,
                title: t('valueQualityTitle'),
                desc: t('valueQualityDesc'),
              },
              {
                icon: Users,
                title: t('valueCustomerFirstTitle'),
                desc: t('valueCustomerFirstDesc'),
              },
              {
                icon: TrendingUp,
                title: t('valueInnovationTitle'),
                desc: t('valueInnovationDesc'),
              },
            ].map((value, idx) => {
              const Icon = value.icon
              return (
                <div key={idx} className="bg-white border border-border rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Stats */}
        <section className="bg-secondary text-white rounded-lg p-8 sm:p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">{t('impactTitle')}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { stat: '50+', label: t('impactStat1Label') },
              { stat: '2000+', label: t('impactStat2Label') },
              { stat: '5000+', label: t('impactStat3Label') },
              { stat: '15000+', label: t('impactStat4Label') },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="text-4xl font-bold text-primary mb-2">{item.stat}</div>
                <div className="text-sm text-gray-300">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
            {t('teamTitle')}
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            {t('teamDesc')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Ahmed Khan', role: t('teamRoleFounder'), exp: t('teamExpFounder') },
              { name: 'Priya Sharma', role: t('teamRoleCoo'), exp: t('teamExpCoo') },
              { name: 'Raj Patel', role: t('teamRoleCto'), exp: t('teamExpCto') },
              { name: 'Maria Lopez', role: t('teamRoleVpSales'), exp: t('teamExpVpSales') },
            ].map((member, idx) => (
              <div key={idx} className="bg-white border border-border rounded-lg overflow-hidden text-center">
                <div className="bg-gradient-to-br from-primary to-orange-600 h-24 flex items-center justify-center">
                  <span className="text-5xl">👤</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-semibold mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.exp}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Trust Us */}
        <section>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
            {t('trustTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t('trustItem1Title'),
                desc: t('trustItem1Desc'),
              },
              {
                title: t('trustItem2Title'),
                desc: t('trustItem2Desc'),
              },
              {
                title: t('trustItem3Title'),
                desc: t('trustItem3Desc'),
              },
              {
                title: t('trustItem4Title'),
                desc: t('trustItem4Desc'),
              },
              {
                title: t('trustItem5Title'),
                desc: t('trustItem5Desc'),
              },
              {
                title: t('trustItem6Title'),
                desc: t('trustItem6Desc'),
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-muted rounded-lg p-6 border border-border">
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
