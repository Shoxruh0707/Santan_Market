'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Search, Truck, Users, Clock, Phone, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'

const categoryKeys = [
  'boilers',
  'pumps',
  'convector',
  'sewerPipes',
  'collectors',
]

const partnerNames = [
  'BuildRight Co.',
  'Premium Materials',
  'Quality Supplies',
  'Fast Logistics',
  'Expert Trading',
  'Standard Goods',
]

export default function Home() {
  const { t, language } = useLanguage()

  const categoryImages = {
    boilers: '/images/kotli.jpg',
    pumps: '/images/Nasos.jpg',
    convector: '/images/Convectors.jpg',
    sewerPipes: '/images/Kanalizatsiya.jpg',
    collectors: '/images/Collectors.jpg',
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[url('/images/23.jpg')] bg-cover bg-center text-white py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-pretty">
              {t('heroTitle')}
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8">
              {t('heroSubtitle')}
            </p>

            {/* Search Bar */}
            <div className="flex gap-2 max-w-2xl mx-auto mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={t('searchPlaceholder')}
                  className="w-full pl-12 pr-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <button className="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
                {t('search')}
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button size="lg" className="bg-accent hover:bg-orange-600">
                  {t('exploreProducts')}
                </Button>
              </Link>
              <Link href="/showroom">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary text-white border-primary hover:bg-primary/90 hover:text-white"
                >
                  {t('viewShowroom')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-foreground">
            {t('categories')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {categoryKeys.map((key) => (
              <Link
                key={key}
                href={`/products?category=${key}`}
                className="p-6 bg-white border border-border rounded-xl hover:shadow-lg hover:border-accent transition-all group"
              >
                <div className="relative w-full aspect-[4/3] mb-4 rounded-lg overflow-hidden bg-muted">
                  <Image
                    src={categoryImages[key as keyof typeof categoryImages]}
                    alt={t(key as keyof typeof t)}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain p-2 brightness-105 contrast-110 saturate-110 group-hover:scale-105 transition-transform"
                  />
                </div>
                <p className="font-semibold text-foreground text-sm sm:text-base text-center">
                  {t(key as keyof typeof t)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-[url('/images/car.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white">
            {t('howItWorksTitle')}
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { key: 'step1', desc: 'step1Desc' },
              { key: 'step2', desc: 'step2Desc' },
              { key: 'step3', desc: 'step3Desc' },
              { key: 'step4', desc: 'step4Desc' },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="font-bold text-lg mb-2 text-white">
                  {t(step.key as keyof typeof t)}
                </h3>
                <p className="text-sm text-white/80">
                  {t(step.desc as keyof typeof t)}
                </p>
                {index < 3 && (
                  <ArrowRight className="w-6 h-6 text-primary mx-auto mt-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                {t('howItWorks')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-foreground">
            {t('advantages')}
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Clock, key: 'saveTime', desc: 'saveTimeDesc' },
              { icon: Users, key: 'bestPrices', desc: 'bestPricesDesc' },
              { icon: Truck, key: 'consultation', desc: 'consultationDesc' },
              { icon: Phone, key: 'pickupPoint', desc: 'pickupPointDesc' },
            ].map((adv, index) => {
              const Icon = adv.icon
              return (
                <div key={index} className="p-6 bg-white border border-border rounded-xl hover:shadow-lg transition-shadow">
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-foreground">
                    {t(adv.key as keyof typeof t)}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t(adv.desc as keyof typeof t)}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              {t('products')}
            </h2>
            <Link href="/products" className="text-primary font-semibold hover:underline">
              {t('view')} →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-primary to-secondary" />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 text-foreground">
                    {t('cement')} #{i}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {t('price')}: 50,000 UZS
                  </p>
                  <div className="flex gap-2">
                    <button className="flex-1 px-3 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                      {t('addToCart')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-foreground">
            {t('partnersTitle')}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {t('partnershipDesc')}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {partnerNames.map((partner, i) => (
              <div
                key={i}
                className="p-4 bg-muted rounded-lg border border-border text-center hover:border-primary transition-colors"
              >
                <p className="text-sm font-semibold text-foreground">{partner}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/partners">
              <Button size="lg" className="bg-primary hover:opacity-90">
                {t('becomePartner')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
