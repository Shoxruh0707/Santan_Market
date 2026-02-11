'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Filter } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/lib/language-context'
import type { TranslationKeys } from '@/lib/translations'

const products: Array<{
  id: number
  nameKey: TranslationKeys
  category: string
  price: number
  warehouse: string
  rating: number
  stock: string
}> = [
  { id: 1, nameKey: 'productListCement50', category: 'cement', price: 45000, warehouse: 'BuildRight Co.', rating: 4.8, stock: 'inStock' },
  { id: 2, nameKey: 'productListCementPremium', category: 'cement', price: 50000, warehouse: 'Quality Supplies', rating: 4.9, stock: 'inStock' },
  { id: 3, nameKey: 'productListBricks1000', category: 'bricks', price: 350000, warehouse: 'Premium Materials', rating: 4.7, stock: 'inStock' },
  { id: 4, nameKey: 'productListBricksBlock', category: 'bricks', price: 55000, warehouse: 'Standard Goods', rating: 4.6, stock: 'inStock' },
  { id: 5, nameKey: 'productListPaintInterior', category: 'paint', price: 120000, warehouse: 'Quality Supplies', rating: 4.8, stock: 'inStock' },
  { id: 6, nameKey: 'productListPaintExterior', category: 'paint', price: 100000, warehouse: 'BuildRight Co.', rating: 4.7, stock: 'limited' },
  { id: 7, nameKey: 'productListPipeMetal', category: 'plumbing', price: 85000, warehouse: 'Fast Logistics', rating: 4.9, stock: 'inStock' },
  { id: 8, nameKey: 'productListToiletBase', category: 'plumbing', price: 150000, warehouse: 'Expert Trading', rating: 4.5, stock: 'inStock' },
  { id: 9, nameKey: 'productListWire25', category: 'electrical', price: 35000, warehouse: 'Premium Materials', rating: 4.8, stock: 'inStock' },
  { id: 10, nameKey: 'productListLedLamps', category: 'electrical', price: 75000, warehouse: 'Quality Supplies', rating: 4.9, stock: 'inStock' },
  { id: 11, nameKey: 'productListSteelRod', category: 'tools', price: 250000, warehouse: 'Fast Logistics', rating: 4.7, stock: 'inStock' },
  { id: 12, nameKey: 'productListNails', category: 'tools', price: 35000, warehouse: 'BuildRight Co.', rating: 4.6, stock: 'inStock' },
]

const categories = ['boilers', 'pumps', 'convector', 'sewerPipes', 'collectors'];

export default function ProductsPage() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState('')
  const [priceRange, setPriceRange] = useState([0, 500000])
  const [sortBy, setSortBy] = useState('popular')
  const categoryKeys = categories; // Declare categoryKeys variable

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === '' || product.category === selectedCategory
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1]
    return categoryMatch && priceMatch
  })

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Page Header */}
      <section className="bg-muted border-b border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('products')}
          </h1>
          <p className="text-muted-foreground">
            {filteredProducts.length} {t('products')}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg border border-border p-6 sticky top-20">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-foreground">
                <Filter className="w-5 h-5" />
                {t('filters')}
              </h3>

              {/* Category Filter */}
              <div className="mb-6 pb-6 border-b border-border">
                <h4 className="font-semibold mb-3 text-foreground">{t('categories')}</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === ''}
                      onChange={() => setSelectedCategory('')}
                      className="w-4 h-4 text-primary cursor-pointer"
                    />
                    <span className="text-sm text-foreground">{t('all')}</span>
                  </label>
                  {categoryKeys.map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                        className="w-4 h-4 text-primary cursor-pointer"
                      />
                      <span className="text-sm text-foreground">{t(cat as keyof typeof t)}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="pb-6 border-b border-border">
                <h4 className="font-semibold mb-4 text-foreground">{t('priceRange')}</h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="500000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full"
                  />
                  <div className="text-sm text-muted-foreground">
                    {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} UZS
                  </div>
                </div>
              </div>

              {/* Sort By */}
              <div>
                <h4 className="font-semibold mb-3 text-foreground">{t('sortBy')}</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="popular">{t('popular')}</option>
                  <option value="price-low">{t('priceLowest')}</option>
                  <option value="price-high">{t('priceHighest')}</option>
                  <option value="rating">{t('rating')}</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="md:col-span-3">
            <div className="mb-6">
              <p className="text-muted-foreground">
                {filteredProducts.length} {t('products')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`}>
                  <div className="bg-white rounded-lg border border-border overflow-hidden hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
                    <div className="w-full h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative">
                      <span className="text-6xl">📦</span>
                      <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {t('inStock')}
                      </div>
                    </div>

                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="font-semibold text-foreground mb-2 text-sm line-clamp-2">
                        {t(product.nameKey)}
                      </h3>

                      <p className="text-xs text-muted-foreground mb-3">
                        {t(product.category as keyof typeof t)}
                      </p>

                      <div className="flex items-center gap-1 mb-3">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm font-semibold text-foreground">{product.rating}</span>
                      </div>

                      <p className="text-xs text-muted-foreground mb-4">
                        {product.warehouse}
                      </p>

                      <div className="mt-auto">
                        <p className="text-xl font-bold text-accent mb-2">{product.price.toLocaleString()} UZS</p>
                        <p className="text-xs text-green-600 mb-3">✓ 3 {t('days')}</p>
                        <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm">
                          {t('view')}
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">{t('noProductsFound')}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
