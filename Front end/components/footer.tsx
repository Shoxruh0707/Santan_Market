'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-secondary text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-secondary font-bold text-lg">SM</span>
              </div>
              <h3 className="font-bold text-lg">Santan Market</h3>
            </div>
            <p className="text-gray-300 text-sm">
              {t('heroSubtitle')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/products" className="hover:text-accent transition-colors">
                  {t('products')}
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-accent transition-colors">
                  {t('howItWorks')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  {t('aboutUs')}
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-accent transition-colors">
                  {t('partners')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">{t('contact')}</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>{t('footerPhoneValue')}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>{t('footerEmailValue')}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>{t('footerAddressValue')}</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">{t('aboutUs')}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  {t('privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  {t('termsOfService')}
                </Link>
              </li>
              <li>
                <Link href="/showroom" className="hover:text-accent transition-colors">
                  {t('showroom')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 text-center sm:text-left">
            © 2024 Santan Market. {t('copyright')}
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-accent transition-colors">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-accent transition-colors">
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-accent transition-colors">
              Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
