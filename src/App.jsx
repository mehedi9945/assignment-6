import { useMemo, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import bannerImg from './assets/banner.png'
import playIcon from './assets/Play.png'
import rocketIcon from './assets/rocket.png'
import userIcon from './assets/user.png'
import writingIcon from './assets/products/writing_2327400 1.png'
import designIcon from './assets/products/design-tool.png'
import stockIcon from './assets/products/shopping-cart.png'
import automationIcon from './assets/products/operation.png'
import resumeIcon from './assets/products/portfolio.png'
import socialIcon from './assets/products/social-media.png'
import { products } from './data/products'

function App() {
  const iconMap = {
    writing: writingIcon,
    design: designIcon,
    stock: stockIcon,
    automation: automationIcon,
    resume: resumeIcon,
    social: socialIcon,
  }
  const [activeTab, setActiveTab] = useState('products')
  const [cartItems, setCartItems] = useState([])

  const totalPrice = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price, 0),
    [cartItems],
  )

  const handleAddToCart = product => {
    const alreadyAdded = cartItems.some(item => item.id === product.id)
    if (alreadyAdded) {
      toast.info(`${product.name} is already in your cart.`, { autoClose: 2000 })
      return
    }
    setCartItems(prev => [...prev, product])
    toast.success(`${product.name} added to cart!`, { autoClose: 2000 })
  }

  const handleRemoveItem = id => {
    const removedItem = cartItems.find(item => item.id === id)
    setCartItems(prev => prev.filter(item => item.id !== id))
    if (removedItem) {
      toast.warning(`${removedItem.name} removed from cart.`, { autoClose: 2000 })
    }
  }

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.info('Your cart is already empty.', { autoClose: 2000 })
      return
    }
    setCartItems([])
    toast.success('Checkout complete. Your cart is now empty!', { autoClose: 2200 })
  }

  const cartCount = cartItems.length

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <ToastContainer position="top-right" theme="colored" />

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-violet-500/10 px-4 py-2 text-xl font-semibold text-violet-700">DigiTools</div>
            <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
              <a href="#products" className="transition hover:text-slate-900">Products</a>
              <a href="#features" className="transition hover:text-slate-900">Features</a>
              <a href="#pricing" className="transition hover:text-slate-900">Pricing</a>
              <a href="#footer" className="transition hover:text-slate-900">FAQ</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden rounded-full border border-violet-500/40 bg-white px-5 py-2 text-sm font-semibold text-slate-700 transition hover:bg-violet-50 md:inline-flex">
              Login
            </button>
            <button className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/10 transition hover:opacity-95">
              Get Started
            </button>
            <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm shadow-slate-200/50">
              Cart: <span className="font-semibold text-slate-900">{cartCount}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-violet-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-violet-700">
              New AI-powered tools available
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Supercharge your digital workflow with premium creative tools.
            </h1>
            <p className="max-w-xl text-slate-600 sm:text-lg">
              DigiTools brings together website assets, marketing templates, productivity utilities, and AI-powered workflows so teams can launch content faster.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#products" className="inline-flex items-center justify-center rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.01]">
                Explore Products
              </a>
              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-violet-500/40 bg-white px-6 py-3 text-sm font-semibold text-violet-700 transition hover:border-violet-300/60">
                <img src={playIcon} alt="Play" className="h-4 w-4" />
                Watch Demo
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/80">
            <img src={bannerImg} alt="DigiTools hero" className="mx-auto h-[420px] w-full object-cover" />
            <div className="pointer-events-none absolute right-6 top-6 hidden h-16 w-16 items-center justify-center rounded-full bg-violet-50 md:flex">
              <img src={userIcon} alt="User" className="h-10 w-10" />
            </div>
          </div>
        </section>

        <section className="my-16 grid gap-4 rounded-3xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 px-6 py-8 text-center text-white shadow-xl shadow-violet-500/20 sm:grid-cols-3 sm:text-left sm:gap-6">
          <div>
            <p className="text-3xl font-semibold">50K+</p>
            <p className="mt-2 text-sm text-white/80">Active Users</p>
          </div>
          <div>
            <p className="text-3xl font-semibold">200+</p>
            <p className="mt-2 text-sm text-white/80">Premium Tools</p>
          </div>
          <div>
            <p className="text-3xl font-semibold">4.9</p>
            <p className="mt-2 text-sm text-white/80">Average Rating</p>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/60">
          <div className="flex flex-col gap-4 border-b border-slate-200 pb-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-950">Premium Digital Tools</h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">Choose from carefully curated products built for content creators, marketers, and teams.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setActiveTab('products')}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${activeTab === 'products' ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/20' : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'}`}>
                Products
              </button>
              <button
                onClick={() => setActiveTab('cart')}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${activeTab === 'cart' ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/20' : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'}`}>
                Cart ({cartCount})
              </button>
            </div>
          </div>

          {activeTab === 'products' ? (
            <div id="products" className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {products.map(product => {
                const inCart = cartItems.some(item => item.id === product.id)
                return (
                  <article key={product.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/80 transition hover:-translate-y-1 hover:border-violet-500/30">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-violet-50">
                        <img src={iconMap[product.iconKey]} alt={product.name} className="h-10 w-10 object-contain" />
                      </div>
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] ${product.tagType === 'best-seller' ? 'bg-amber-400/10 text-amber-300' : product.tagType === 'popular' ? 'bg-cyan-400/10 text-cyan-300' : 'bg-emerald-400/10 text-emerald-300'}`}>
                        {product.tag}
                      </span>
                    </div>
                    <div className="mt-6 space-y-3">
                      <h3 className="text-xl font-semibold text-slate-950">{product.name}</h3>
                      <p className="text-sm leading-6 text-slate-600">{product.description}</p>
                      <div className="rounded-3xl bg-slate-50 p-4">
                        <p className="text-2xl font-semibold text-slate-950">${product.price}</p>
                        <p className="text-sm text-slate-600">{product.period}</p>
                      </div>
                      <ul className="space-y-2 text-sm text-slate-600">
                        {product.features.map(feature => (
                          <li key={feature} className="flex items-center gap-2">
                            <span className="text-violet-400">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`mt-6 w-full rounded-full px-5 py-3 text-sm font-semibold transition ${inCart ? 'bg-slate-200 text-slate-700 hover:bg-slate-300' : 'bg-violet-500 text-white hover:bg-violet-400'}`}>
                      {inCart ? 'Added to cart' : 'Buy Now'}
                    </button>
                  </article>
                )
              })}
            </div>
          ) : (
            <div className="mt-8 space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
                <h3 className="text-xl font-semibold text-slate-950">Your Cart</h3>
                <p className="mt-2 text-sm text-slate-600">Review selected tools and proceed when you're ready.</p>
              </div>
              {cartItems.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-12 text-center text-slate-600">
                  <p className="text-lg font-semibold text-slate-950">No products in cart yet.</p>
                  <p className="mt-2 text-sm text-slate-600">Add a product from the catalog to see it here.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-violet-50">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-slate-950">{item.name}</h4>
                          <p className="text-sm text-slate-600">{item.period}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-3 sm:items-end">
                        <span className="text-lg font-semibold text-slate-950">${item.price}</span>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="rounded-full bg-rose-500/10 px-4 py-2 text-sm font-semibold text-rose-300 transition hover:bg-rose-500/20">
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-slate-600">Total items</p>
                  <p className="text-2xl font-semibold text-slate-950">{cartCount}</p>
                </div>
                <div className="mt-4 flex items-center justify-between gap-5 sm:mt-0 sm:justify-end">
                  <p className="text-xl font-semibold text-slate-950">${totalPrice}</p>
                  <button
                    onClick={handleCheckout}
                    className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:opacity-95">
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>

        <section id="features" className="my-16 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: 'Create Account',
              description: 'Sign up in seconds and start using premium tools without any commitment.',
              icon: userIcon,
            },
            {
              title: 'Choose Products',
              description: 'Browse the catalog and pick the tools that match your workflow.',
              icon: bannerImg,
            },
            {
              title: 'Start Creating',
              description: 'Download assets and begin producing content immediately.',
              icon: rocketIcon,
            },
          ].map(step => (
            <div key={step.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-violet-50">
                <img src={step.icon} alt={step.title} className="h-8 w-8 object-contain" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
            </div>
          ))}
        </section>

        <section id="pricing" className="my-16 rounded-3xl bg-slate-50 p-8 shadow-xl shadow-slate-200/70">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-violet-500">Simple, Transparent Pricing</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">Choose the plan that fits your team.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">Upgrade or downgrade anytime and get the features you need for faster execution.</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: 'Starter',
                price: '$0',
                subtitle: 'Perfect for getting started',
                benefits: ['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'],
                accent: 'bg-slate-50 text-slate-950',
              },
              {
                title: 'Pro',
                price: '$29',
                subtitle: 'Best for professionals',
                benefits: ['All premium tools', 'Unlimited templates', 'Priority support', 'Cloud sync'],
                accent: 'bg-gradient-to-b from-violet-500 to-fuchsia-500 text-white',
                badge: 'Most Popular',
              },
              {
                title: 'Enterprise',
                price: '$99',
                subtitle: 'For teams and businesses',
                benefits: ['Everything in Pro', 'Custom integrations', 'Dedicated support', 'SLA guarantee'],
                accent: 'bg-slate-50 text-slate-950',
              },
            ].map(plan => (
              <div key={plan.title} className={`rounded-3xl border border-slate-200 p-8 shadow-xl shadow-slate-200/70 ${plan.accent}`}>
                {plan.badge ? <span className="inline-flex rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">{plan.badge}</span> : null}
                <h3 className="mt-6 text-2xl font-semibold">{plan.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{plan.subtitle}</p>
                <p className="mt-8 text-5xl font-semibold">{plan.price}</p>
                <p className="text-sm text-slate-600">/month</p>
                <ul className={`mt-8 space-y-3 text-sm ${plan.accent.includes('text-white') ? 'text-white' : 'text-slate-600'}`}>
                  {plan.benefits.map(feature => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="text-violet-300">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-10 w-full rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-400">
                  {plan.title === 'Starter' ? 'Get Started Free' : plan.title === 'Pro' ? 'Start Pro Trial' : 'Contact Sales'}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="my-16 rounded-3xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 px-8 py-12 text-center text-white shadow-2xl shadow-violet-500/20">
          <h2 className="text-3xl font-semibold">Ready To Transform Your Workflow?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-violet-100/90">Join thousands of professionals already using DigiTools to work smarter and faster. Start your free trial today.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#products" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-95">Explore Products</a>
            <a href="#pricing" className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/20">View Pricing</a>
          </div>
          <p className="mt-4 text-xs text-white/70">14-day free trial · No credit card required · Cancel anytime</p>
        </section>
      </main>

      <footer id="footer" className="border-t border-slate-200 bg-slate-50 py-10 text-slate-600">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div>
            <h3 className="text-xl font-semibold text-slate-950">DigiTools</h3>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Product</h4>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Company</h4>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>About us</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Resources</h4>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl px-4 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-slate-500">© 2026 DigiTools. All rights reserved.</p>
            <div className="flex items-center justify-center gap-4 text-slate-500">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Cookies</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
