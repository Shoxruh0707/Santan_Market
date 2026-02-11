'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MapPin, Phone, Clock, Users, FileText } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export default function ShowroomPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary to-gray-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            {t('showroomTitle')}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            {t('showroomHeroSubtitle')}
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1">
        {/* Location & Details */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
              {t('showroomLocationTitle')}
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">{t('address')}</h3>
                  <p className="text-muted-foreground">
                    {t('showroomAddressValue').split('\n').map((line, idx) => (
                      <span key={idx}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">{t('contact')}</h3>
                  <p className="text-muted-foreground">
                    {t('showroomContactValue').split('\n').map((line, idx) => (
                      <span key={idx}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">{t('showroomHoursTitle')}</h3>
                  <p className="text-muted-foreground">
                    {t('showroomHoursValue').split('\n').map((line, idx) => (
                      <span key={idx}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>

            <button className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors mb-4">
              {t('showroomGetDirections')}
            </button>

            <button className="w-full px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors">
              {t('showroomScheduleVisit')}
            </button>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg h-96 flex items-center justify-center border border-border">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-foreground font-semibold">{t('showroomMapTitle')}</p>
              <p className="text-muted-foreground text-sm">{t('showroomMapSubtitle')}</p>
            </div>
          </div>
        </section>

        {/* Showroom Features */}
        <section className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
            {t('showroomFeaturesTitle')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏗️', title: t('showroomFeature1Title'), desc: t('showroomFeature1Desc') },
              { icon: '🧱', title: t('showroomFeature2Title'), desc: t('showroomFeature2Desc') },
              { icon: '🎨', title: t('showroomFeature3Title'), desc: t('showroomFeature3Desc') },
              { icon: '🚰', title: t('showroomFeature4Title'), desc: t('showroomFeature4Desc') },
              { icon: '⚡', title: t('showroomFeature5Title'), desc: t('showroomFeature5Desc') },
              { icon: '🔧', title: t('showroomFeature6Title'), desc: t('showroomFeature6Desc') },
              { icon: '✨', title: t('showroomFeature7Title'), desc: t('showroomFeature7Desc') },
              { icon: '📦', title: t('showroomFeature8Title'), desc: t('showroomFeature8Desc') },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
            {t('showroomServicesTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Users,
                title: t('showroomService1Title'),
                desc: t('showroomService1Desc'),
              },
              {
                icon: FileText,
                title: t('showroomService2Title'),
                desc: t('showroomService2Desc'),
              },
              {
                icon: Phone,
                title: t('showroomService3Title'),
                desc: t('showroomService3Desc'),
              },
              {
                icon: MapPin,
                title: t('showroomService4Title'),
                desc: t('showroomService4Desc'),
              },
            ].map((service, idx) => {
              const Icon = service.icon
              return (
                <div key={idx} className="flex gap-6 bg-white border border-border rounded-lg p-6 hover:border-primary transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Photos */}
        <section className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
            {t('showroomGalleryTitle')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg h-64 flex items-center justify-center border border-border hover:border-primary transition-colors"
              >
                <div className="text-center">
                  <span className="text-5xl">📸</span>
                  <p className="text-muted-foreground text-sm mt-2">
                    {t('galleryImageLabel')} {idx}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
            {t('showroomReviewsTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Rajesh Kumar',
                role: t('reviewRoleContractor'),
                rating: 5,
                text: t('review1Text'),
              },
              {
                name: 'Priya Singh',
                role: t('reviewRoleHomeowner'),
                rating: 5,
                text: t('review2Text'),
              },
              {
                name: 'Ahmed Khan',
                role: t('reviewRoleBuilder'),
                rating: 4.5,
                text: t('review3Text'),
              },
            ].map((review, idx) => (
              <div key={idx} className="bg-white border border-border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < Math.floor(review.rating) ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Nearby Features */}
        <section className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
            {t('nearbyTitle')}
          </h2>
          <div className="bg-muted rounded-lg p-8 border border-border">
            <p className="text-foreground mb-4">
              {t('nearbyIntro')}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                t('nearbyFeature1'),
                t('nearbyFeature2'),
                t('nearbyFeature3'),
                t('nearbyFeature4'),
                t('nearbyFeature5'),
                t('nearbyFeature6'),
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary text-white rounded-lg p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {t('showroomCtaTitle')}
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            {t('showroomCtaSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
              {t('showroomCtaSchedule')}
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-secondary transition-colors">
              {t('showroomCtaDirections')}
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
