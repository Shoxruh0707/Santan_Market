'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import {
  BarChart3,
  TrendingUp,
  ShoppingCart,
  AlertCircle,
  Plus,
  Eye,
  Edit,
  Trash2,
} from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/lib/language-context'

export default function PartnerDashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const { t } = useLanguage()

  // Mock data
  const stats = {
    totalSales: '₹2,45,000',
    totalOrders: 142,
    activeProducts: 58,
    rating: 4.8,
  }

  const recentOrders = [
    {
      id: 'ORD-001',
      product: t('dashboardProductCementBag'),
      qty: 100,
      price: '₹25,000',
      status: 'delivered',
    },
    {
      id: 'ORD-002',
      product: t('dashboardProductRedBricks'),
      qty: 50,
      price: '₹1,75,000',
      status: 'inTransit',
    },
    {
      id: 'ORD-003',
      product: t('dashboardProductPaintEmulsion'),
      qty: 30,
      price: '₹63,000',
      status: 'pending',
    },
  ]

  const products = [
    {
      id: 1,
      name: t('dashboardProductCementBag'),
      price: '₹250',
      stock: 450,
      sales: 1234,
      rating: 4.8,
    },
    {
      id: 2,
      name: t('dashboardProductRedBricks'),
      price: '₹3,500',
      stock: 150,
      sales: 892,
      rating: 4.7,
    },
    {
      id: 3,
      name: t('dashboardProductInteriorPaint'),
      price: '₹2,100',
      stock: 85,
      sales: 567,
      rating: 4.9,
    },
  ]

  const getStatusColor = (status: 'delivered' | 'inTransit' | 'pending') => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800'
      case 'inTransit':
        return 'bg-blue-100 text-blue-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary to-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">{t('dashboardTitle')}</h1>
          <p className="text-gray-200 mt-2">{t('dashboardWelcome')}</p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: TrendingUp, label: t('totalSales'), value: stats.totalSales },
            { icon: ShoppingCart, label: t('totalOrders'), value: stats.totalOrders },
            { icon: BarChart3, label: t('activeProducts'), value: stats.activeProducts },
            { icon: AlertCircle, label: t('rating'), value: `${stats.rating}★` },
          ].map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div key={idx} className="bg-white border border-border rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
                    <p className="text-2xl sm:text-3xl font-bold text-foreground mt-2">
                      {stat.value}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Tabs */}
        <div className="bg-white border-b border-border mb-6 rounded-t-lg">
          <div className="flex flex-wrap">
            {[
              { id: 'overview', label: t('overview') },
              { id: 'products', label: t('myProducts') },
              { id: 'orders', label: t('myOrders') },
              { id: 'settings', label: t('settings') },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-semibold border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Sales Chart Placeholder */}
            <div className="bg-white border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-6">{t('salesPerformance')}</h3>
              <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">{t('salesChartPlaceholder')}</p>
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white border border-border rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-foreground">{t('recentOrders')}</h3>
                <a href="#" className="text-primary hover:underline text-sm font-semibold">
                  {t('viewAll')}
                </a>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-foreground">{t('orderId')}</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">{t('productName')}</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">{t('quantity')}</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">{t('amount')}</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">{t('orderStatus')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="border-b border-border hover:bg-muted">
                        <td className="py-3 px-4 text-foreground font-semibold">{order.id}</td>
                        <td className="py-3 px-4 text-foreground">{order.product}</td>
                        <td className="py-3 px-4 text-foreground">{order.qty}</td>
                        <td className="py-3 px-4 text-foreground font-semibold">{order.price}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                              order.status
                            )}`}
                          >
                            {order.status === 'delivered'
                              ? t('delivered')
                              : order.status === 'inTransit'
                              ? t('inTransit')
                              : t('pending')}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-foreground">{t('yourProducts')}</h3>
              <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2">
                <Plus className="w-5 h-5" />
                {t('addProduct')}
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white border border-border rounded-lg overflow-hidden hover:border-primary transition-colors">
                  <div className="h-40 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-5xl">📦</span>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-foreground mb-4">{product.name}</h4>
                    <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-border">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">{t('productPrice')}</p>
                        <p className="font-bold text-foreground">{product.price}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">{t('productStock')}</p>
                        <p className="font-bold text-foreground">{product.stock}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">{t('totalSalesLabel')}</p>
                        <p className="font-bold text-foreground">{product.sales}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">{t('rating')}</p>
                        <p className="font-bold text-yellow-500">{product.rating}★</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 px-4 py-2 border border-border rounded-lg hover:border-primary transition-colors flex items-center justify-center gap-2 text-sm font-semibold text-foreground">
                        <Eye className="w-4 h-4" />
                        {t('view')}
                      </button>
                      <button className="flex-1 px-4 py-2 border border-border rounded-lg hover:border-primary transition-colors flex items-center justify-center gap-2 text-sm font-semibold text-foreground">
                        <Edit className="w-4 h-4" />
                        {t('edit')}
                      </button>
                      <button className="flex-1 px-4 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors flex items-center justify-center gap-2 text-sm font-semibold">
                        <Trash2 className="w-4 h-4" />
                        {t('delete')}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">{t('allOrders')}</h3>
            <div className="bg-white border border-border rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted border-b border-border">
                    <tr>
                      <th className="text-left py-4 px-6 font-semibold text-foreground">
                        {t('orderId')}
                      </th>
                      <th className="text-left py-4 px-6 font-semibold text-foreground">
                        {t('productName')}
                      </th>
                      <th className="text-left py-4 px-6 font-semibold text-foreground">
                        {t('quantity')}
                      </th>
                      <th className="text-left py-4 px-6 font-semibold text-foreground">{t('amount')}</th>
                      <th className="text-left py-4 px-6 font-semibold text-foreground">{t('orderStatus')}</th>
                      <th className="text-left py-4 px-6 font-semibold text-foreground">{t('action')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-muted transition-colors">
                        <td className="py-4 px-6 text-foreground font-semibold">{order.id}</td>
                        <td className="py-4 px-6 text-foreground">{order.product}</td>
                        <td className="py-4 px-6 text-foreground">{order.qty}</td>
                        <td className="py-4 px-6 text-foreground font-semibold">{order.price}</td>
                        <td className="py-4 px-6">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                              order.status
                            )}`}
                          >
                            {order.status === 'delivered'
                              ? t('delivered')
                              : order.status === 'inTransit'
                              ? t('inTransit')
                              : t('pending')}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <button className="text-primary hover:underline text-sm font-semibold">
                            {t('details')}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">{t('accountSettings')}</h3>

            <div className="bg-white border border-border rounded-lg p-6">
              <h4 className="text-lg font-bold text-foreground mb-6">{t('businessInfo')}</h4>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      {t('businessName')}
                    </label>
                    <input
                      type="text"
                      value="BuildRight Co."
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      {t('registrationNumber')}
                    </label>
                    <input
                      type="text"
                      value="REG-2023-001234"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    {t('contactEmail')}
                  </label>
                  <input
                    type="email"
                    value="contact@buildright.com"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    {t('phoneNumber')}
                  </label>
                  <input
                    type="tel"
                    value="+1 (555) 234-5678"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                  {t('saveChanges')}
                </button>
              </div>
            </div>

            <div className="bg-white border border-border rounded-lg p-6">
              <h4 className="text-lg font-bold text-foreground mb-6">{t('paymentSettings')}</h4>
              <p className="text-muted-foreground mb-4">
                {t('paymentSettingsDesc')}
              </p>
              <button className="px-6 py-2 border border-border rounded-lg hover:border-primary transition-colors font-semibold text-foreground">
                {t('connectBankAccount')}
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
