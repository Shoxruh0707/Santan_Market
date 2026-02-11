'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Star, Truck, Phone, Check } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/lib/language-context'

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const { t } = useLanguage()

  // Mock product data
  const product = {
    id: params.id,
    name: t('productDetailName'),
    category: t('productDetailCategory'),
    price: 250,
    originalPrice: 300,
    rating: 4.8,
    reviews: 342,
    warehouse: 'BuildRight Co.',
    stock: 45,
    deliveryDays: 3,
    description: t('productDetailDescription'),
    specifications: [
      { label: t('specWeightLabel'), value: t('specWeightValue') },
      { label: t('specTypeLabel'), value: t('specTypeValue') },
      { label: t('specPackingLabel'), value: t('specPackingValue') },
      { label: t('specStandardsLabel'), value: t('specStandardsValue') },
      { label: t('specColorLabel'), value: t('specColorValue') },
    ],
    benefits: [
      t('benefit1'),
      t('benefit2'),
      t('benefit3'),
      t('benefit4'),
      t('benefit5'),
    ],
    tips: [t('tip1'), t('tip2'), t('tip3')],
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-muted border-b border-border py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              {t('home')}
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary">
              {t('products')}
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div>
            <div className="bg-white rounded-lg border border-border overflow-hidden sticky top-24">
              <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-8xl">📦</span>
              </div>
              <div className="p-4 flex gap-2">
                <button className="flex-1 px-4 py-2 border border-border rounded-lg hover:border-primary transition-colors text-xs font-semibold">
                  {t('galleryButton')}
                </button>
                <button className="flex-1 px-4 py-2 border border-border rounded-lg hover:border-primary transition-colors text-xs font-semibold">
                  {t('downloadSpecsButton')}
                </button>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-3">
                {product.category}
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                {product.name}
              </h1>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-foreground">{product.rating}</span>
                <span className="text-muted-foreground text-sm">
                  ({product.reviews} {t('reviews')})
                </span>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-muted rounded-lg p-6 mb-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-bold text-primary">
                  {product.price.toLocaleString()} {t('currency')}
                </span>
                <span className="text-xl text-muted-foreground line-through">
                  {product.originalPrice.toLocaleString()} {t('currency')}
                </span>
                <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-sm font-semibold">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  {' '}
                  {t('discountOff')}
                </span>
              </div>
              <p className="text-sm text-green-600 font-semibold">{t('bestPriceGuarantee')}</p>
            </div>

            {/* Warehouse Info */}
            <div className="bg-white border border-border rounded-lg p-4 mb-6">
              <p className="text-sm text-muted-foreground mb-2">{t('availableFrom')}</p>
              <p className="font-semibold text-foreground text-lg mb-3">{product.warehouse}</p>
              <p className="text-sm text-green-600 font-semibold mb-4">
                ✓ {product.stock} {t('unitsInStock')}
              </p>
              <div className="flex items-center gap-2 text-sm text-foreground mb-2">
                <Truck className="w-5 h-5 text-primary" />
                <span>
                  {t('deliveryIn')} {product.deliveryDays} {t('days')}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Check className="w-5 h-5 text-green-600" />
                <span>
                  {t('verifiedSeller')} {product.rating}★
                </span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-foreground mb-3">
                {t('quantity')}
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-border rounded-lg hover:border-primary transition-colors font-bold"
                >
                  −
                </button>
                <span className="text-2xl font-bold text-foreground w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="w-10 h-10 border border-border rounded-lg hover:border-primary transition-colors font-bold"
                >
                  +
                </button>
                <span className="text-sm text-muted-foreground ml-auto">
                  {t('max')}: {product.stock} {t('unitsAvailable')}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors w-full">
                {t('addToCart')}
              </button>
              <button className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors">
                {t('buyNow')}
              </button>
            </div>

            <button className="w-full px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:border-primary transition-colors flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              {t('bookFreeConsultation')}
            </button>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {/* Specifications */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-border rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">{t('productSpecifications')}</h2>
              <div className="divide-y divide-border">
                {product.specifications.map((spec, idx) => (
                  <div key={idx} className="py-4 flex justify-between items-center first:pt-0 last:pb-0">
                    <span className="font-semibold text-foreground">{spec.label}</span>
                    <span className="text-muted-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">{t('whyChooseProduct')}</h2>
              <ul className="space-y-3">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Related Info */}
          <div>
            <div className="bg-primary bg-opacity-10 rounded-lg p-6 border border-primary border-opacity-30">
              <h3 className="font-bold text-foreground mb-4">{t('helpfulTips')}</h3>
              <ul className="space-y-3 text-sm text-foreground">
                {product.tips.map((tip, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span>•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-muted rounded-lg p-6 mt-4">
              <h3 className="font-bold text-foreground mb-4">{t('needHelp')}</h3>
              <div className="space-y-3">
                <button className="w-full px-4 py-2 border border-border rounded-lg hover:border-primary transition-colors text-sm font-semibold text-foreground">
                  {t('callExpertFree')}
                </button>
                <button className="w-full px-4 py-2 border border-border rounded-lg hover:border-primary transition-colors text-sm font-semibold text-foreground">
                  {t('chatSupport')}
                </button>
                <button className="w-full px-4 py-2 border border-border rounded-lg hover:border-primary transition-colors text-sm font-semibold text-foreground">
                  {t('faqShort')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
