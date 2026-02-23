"use client";

import Link from "next/link";
import { ArrowRight, PhoneCall, MessageSquare, Smartphone, TrendingUp, Shield, Calculator, CheckCircle2, XCircle, Clock, HelpCircle } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [revenue, setRevenue] = useState(1000000);
  const [cartRate, setCartRate] = useState(68);
  const [aov, setAov] = useState(150);

  // Calculations
  const abandonedValue = (revenue * (cartRate / 100));
  const klaviyoRecovery = abandonedValue * 0.10; // 10% recovery rate
  const remaining = abandonedValue - klaviyoRecovery;
  const cartioRecovery = remaining * 0.235; // 23.5% average recovery rate
  const netProfit = cartioRecovery * 0.85; // 85% to merchant

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary-600">
                Cartio.ai
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-slate-600 hover:text-primary-600 transition">How It Works</a>
              <a href="#pricing" className="text-slate-600 hover:text-primary-600 transition">Pricing</a>
              <a href="#faq" className="text-slate-600 hover:text-primary-600 transition">FAQ</a>
              <Link href="/dashboard" className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition">
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Recover the 85-95% of Abandoned Carts
            <span className="block text-primary-600">Email and SMS Miss</span>
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            After email and SMS fail, our AI voice calls and WhatsApp messages recover an additional 22-25% of abandoned revenue. Commission-only pricing means you only pay when we succeed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition font-semibold">
              Start Free Trial
            </Link>
            <a href="#calculator" className="px-8 py-3 border border-slate-300 rounded-lg hover:border-primary-600 transition font-semibold">
              Calculate Your Recovery
            </a>
          </div>

          <p className="text-sm text-slate-500 mt-4">
            No credit card required • 5-minute setup • Cancel anytime
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-600">500+</p>
              <p className="text-slate-600 mt-2">Active Stores</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-600">$12M+</p>
              <p className="text-slate-600 mt-2">Revenue Recovered</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-600">23.5%</p>
              <p className="text-slate-600 mt-2">Avg Recovery Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-600">15%</p>
              <p className="text-slate-600 mt-2">Commission Only</p>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Calculator */}
      <section id="calculator" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Calculate Your Lost Revenue
            </h2>
            <p className="text-xl text-slate-600">
              See how much revenue you're leaving on the table
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Annual Revenue
                </label>
                <input
                  type="number"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Cart Abandonment Rate (%)
                </label>
                <input
                  type="number"
                  value={cartRate}
                  onChange={(e) => setCartRate(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Average Order Value
                </label>
                <input
                  type="number"
                  value={aov}
                  onChange={(e) => setAov(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-slate-200">
              <div className="flex justify-between text-lg">
                <span className="text-slate-600">Abandoned cart value:</span>
                <span className="font-semibold">${abandonedValue.toLocaleString()}/year</span>
              </div>
              <div className="flex justify-between text-lg">
                <span className="text-slate-600">Email/SMS recovery (10%):</span>
                <span className="font-semibold text-green-600">${klaviyoRecovery.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span className="text-slate-600">Lost revenue:</span>
                <span className="font-semibold text-red-600">${remaining.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-lg pt-4 border-t">
                <span className="text-slate-700 font-semibold">Cartio could recover:</span>
                <span className="font-bold text-primary-600 text-2xl">+${Math.floor(netProfit).toLocaleString()}/year</span>
              </div>
              <p className="text-center text-sm text-slate-500 pt-4">
                That's ${Math.floor(netProfit/12).toLocaleString()}/month in pure profit after our 15% commission
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              How Cartio Works
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Simple integration with your existing tools
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Connect Shopify</h3>
              <p className="text-slate-600 text-sm">
                One-click OAuth connection takes 30 seconds
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Set Your Rules</h3>
              <p className="text-slate-600 text-sm">
                Choose minimum cart value and timing preferences
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">AI Starts Working</h3>
              <p className="text-slate-600 text-sm">
                Intelligent routing via voice, WhatsApp, or SMS
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">4</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Track Results</h3>
              <p className="text-slate-600 text-sm">
                Real-time dashboard shows every recovery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Channels */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Multi-Channel Recovery
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The right message on the right channel at the right time
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <PhoneCall className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">AI Voice Calls</h3>
              <p className="text-slate-600 mb-4">
                Natural conversations that handle objections in real-time. 38% answer rate, 31% conversion.
              </p>
              <p className="text-sm text-primary-600 font-semibold">
                Best for: High-value carts
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <MessageSquare className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">WhatsApp Messages</h3>
              <p className="text-slate-600 mb-4">
                Rich media messages with one-click checkout. 67% open rate, works internationally.
              </p>
              <p className="text-sm text-green-600 font-semibold">
                Best for: International customers
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <Smartphone className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Smart SMS</h3>
              <p className="text-slate-600 mb-4">
                Personalized texts sent at optimal times. 98% delivery rate, fully TCPA compliant.
              </p>
              <p className="text-sm text-purple-600 font-semibold">
                Best for: Mobile shoppers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              What Merchants Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl">
              <p className="text-slate-700 mb-4">
                "We were skeptical about AI calls, but the results speak for themselves. $47K recovered in the first month alone."
              </p>
              <div>
                <p className="font-semibold">Sarah M.</p>
                <p className="text-sm text-slate-600">CEO, Fashion Brand</p>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <p className="text-slate-700 mb-4">
                "The commission-only model made it a no-brainer. Now it's our second-best recovery channel after email."
              </p>
              <div>
                <p className="font-semibold">John D.</p>
                <p className="text-sm text-slate-600">Founder, Electronics Store</p>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <p className="text-slate-700 mb-4">
                "Zero setup hassle. It works perfectly alongside our Klaviyo flows. Pure extra revenue."
              </p>
              <div>
                <p className="font-semibold">Emma L.</p>
                <p className="text-sm text-slate-600">CMO, Beauty Brand</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-600">
              No setup fees. No monthly fees. Just results.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
            <div className="mb-8">
              <p className="text-5xl font-bold text-slate-900">15%</p>
              <p className="text-xl text-slate-600 mt-2">Commission on recovered revenue</p>
              <p className="text-slate-500">You keep 85% of everything we recover</p>
            </div>

            <div className="space-y-4 text-left max-w-sm mx-auto">
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-green-600 mr-3" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-green-600 mr-3" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-green-600 mr-3" />
                <span>Weekly payouts</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-green-600 mr-3" />
                <span>Full transparency</span>
              </div>
            </div>

            <Link href="/signup" className="inline-block mt-8 px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition font-semibold">
              Start Your Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg mb-2">Won't customers find calls annoying?</h3>
              <p className="text-slate-600">
                Our AI is conversational and helpful, not pushy. We call at optimal times and 31% of people we reach end up buying. The rest politely decline.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">How does this work with Klaviyo?</h3>
              <p className="text-slate-600">
                Perfectly. We wait until after your email sequence completes (usually 24-48 hours). No conflicts, no duplicate messages.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Is this compliant with regulations?</h3>
              <p className="text-slate-600">
                100% TCPA and GDPR compliant. We only contact customers who provided their number and consented to marketing at checkout.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">What if it doesn't work for my store?</h3>
              <p className="text-slate-600">
                Cancel anytime. No contracts, no minimums. Since you only pay commission on recovered revenue, there's literally zero risk.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">How quickly will I see results?</h3>
              <p className="text-slate-600">
                Most stores see their first recovery within 48 hours. Full optimization takes about a week as our AI learns your customer patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Built for Shopify Merchants
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Shield className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">SOC 2 Compliant</h3>
              <p className="text-slate-600">
                Bank-level security for your data
              </p>
            </div>

            <div>
              <Clock className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">5-Minute Setup</h3>
              <p className="text-slate-600">
                Connect and start recovering today
              </p>
            </div>

            <div>
              <TrendingUp className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Proven Results</h3>
              <p className="text-slate-600">
                $12M+ recovered across 500+ stores
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Recovering Revenue Today
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join 500+ stores already recovering the 90% that email misses
          </p>
          <Link href="/signup" className="inline-block px-8 py-3 bg-white text-primary-600 rounded-lg hover:bg-primary-50 transition font-semibold">
            Start Your Free Trial
          </Link>
          <p className="text-sm text-primary-100 mt-4">
            5-minute setup • No credit card • Commission-only
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Dashboard</a></li>
                <li><a href="#" className="hover:text-white transition">API Docs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Integration Guide</a></li>
                <li><a href="#" className="hover:text-white transition">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition">ROI Calculator</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">GDPR</a></li>
                <li><a href="#" className="hover:text-white transition">TCPA Compliance</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
            <p>© 2024 Cartio.ai - AI-powered revenue recovery for Shopify</p>
          </div>
        </div>
      </footer>
    </div>
  );
}