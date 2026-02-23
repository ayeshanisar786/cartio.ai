"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  PhoneCall,
  MessageSquare,
  Smartphone,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle2,
  Zap,
  Users,
  DollarSign,
  Activity,
  Phone,
  ShoppingCart,
  ChevronDown,
  ChevronUp,
  Calculator,
  Check,
  X,
  AlertCircle,
  Sparkles,
  Target,
  Award,
  BarChart3,
  Timer,
  UserCheck,
  Globe,
  CreditCard,
  HeadphonesIcon,
  Mail,
  Star,
  Building2,
  Briefcase,
  FileText,
  Lock,
  HelpCircle,
  ChevronRight,
  Calendar,
  Database,
  Settings,
  TrendingDown,
  MessageCircle,
  Bot
} from "lucide-react";

export default function Home() {
  const [revenue, setRevenue] = useState(1000000);
  const [cartRate, setCartRate] = useState(70);
  const [aov, setAov] = useState(150);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFeature1, setExpandedFeature1] = useState(false);
  const [expandedFeature2, setExpandedFeature2] = useState(false);
  const [expandedConversation, setExpandedConversation] = useState(false);

  // Calculations
  const abandonedValue = revenue * (cartRate / 100);
  const klaviyoRecovery = abandonedValue * 0.10; // 10% recovery rate
  const walksAway = abandonedValue - klaviyoRecovery;
  const cartioRecovery = walksAway * 0.15; // 12-18% average, using 15%
  const netProfit = cartioRecovery * 0.85; // After 15% commission

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const testimonials = [
    {
      name: "Bawar Ahmed",
      title: "Founder, Ecomma",
      revenue: "$800K/yr",
      quote: "Klaviyo recovered 11% of abandoned carts. Cartio recovered an additional <strong>$6,200/month</strong> from the carts Klaviyo missed. I pay $930, net $5,270 in pure profit I wasn't getting before.",
      proof: "$6,200/month recovered",
      avatar: "SM",
      image: "/images/bawar.jpg",
      color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    },
    {
      name: "Matt Johnson",
      title: "Founder, Fashion Brand",
      revenue: "$2.1M/yr",
      quote: "97% of customers are positive or neutral about the calls. <strong>Only 3% opt out</strong>. We're recovering $14K/month we were just leaving on the table before.",
      proof: "3% opt-out rate",
      avatar: "JD",
      image: "/images/matt.jpeg",
      color: "bg-gradient-to-br from-sky-500 to-sky-600",
    },
    {
      name: "Scott May",
      title: "Owner, Keyststation",
      revenue: "$1.4M/yr",
      quote: "Setup took literally 4 minutes. I thought it would be complicated but it's just OAuth. <strong>First recovery came in 52 hours</strong>.",
      proof: "4-minute setup",
      avatar: "LK",
      image: "/images/scott.png",
      color: "bg-gradient-to-br from-violet-500 to-violet-600",
    },
  ];

  const faqs = [
    {
      question: "How does the Shopify integration work?",
      answer: "It's a simple OAuth connection that takes about 5 minutes. Click 'Connect Your Store', authorize the app, and we'll automatically sync your abandoned carts. No technical knowledge required."
    },
    {
      question: "What data do you need access to?",
      answer: "We only access abandoned cart data, customer contact info, and order history. We never access payment information, inventory data, or modify your store in any way. All data is encrypted and GDPR/CCPA compliant."
    },
    {
      question: "Can I set limits on discount offers?",
      answer: "Yes, you have full control. Set maximum discount percentages, exclude certain products, or specify different rules for different cart value ranges. Most merchants use 10-15% max discounts."
    },
    {
      question: "How do customers opt-out?",
      answer: "Customers can opt-out with one click from any message, or by telling our AI voice agent. We maintain a global suppression list and honor all opt-outs immediately. Average opt-out rate is only 3%."
    },
    {
      question: "Do you work with Shopify Plus?",
      answer: "Yes, we work with all Shopify plans including Plus. Enterprise merchants often see even better results due to higher cart values. We also offer custom integrations for Plus merchants."
    },
    {
      question: "What countries do you support?",
      answer: "Currently US, Canada, UK, Australia, and EU countries. AI voice calls work in English, Spanish, French, and German. WhatsApp and SMS work globally where those services are available."
    },
    {
      question: "How do I track performance?",
      answer: "Your dashboard shows real-time metrics: recovery rate, revenue recovered, channel performance, and individual recovery status. Export reports anytime. We also send weekly performance emails."
    },
    {
      question: "What if I have custom checkout logic?",
      answer: "No problem. We work with all Shopify checkout configurations including custom checkout flows, subscription products, and multi-currency stores. Our team will help configure any special requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                Cartio.ai
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-slate-600 hover:text-emerald-600 transition-colors">
                How It Works
              </a>
              <a href="#pricing" className="text-slate-600 hover:text-emerald-600 transition-colors">
                Pricing
              </a>
              <a href="#faq" className="text-slate-600 hover:text-emerald-600 transition-colors">
                FAQ
              </a>
              <Link href="/dashboard" className="text-slate-600 hover:text-emerald-600 transition-colors">
                Dashboard
              </Link>
              <button className="px-6 py-2.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all hover:shadow-lg hover:-translate-y-0.5">
                Connect Your Store
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Section 1: Hero */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Trusted by 500+ Shopify stores • $12M+ recovered</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Recover the{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
              85-95%
            </span>{" "}
            of Abandoned Carts
            <span className="block">Email and SMS Miss</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Your email recovers 5-15%. We recover another 12-18% with AI voice calls,
            WhatsApp, and smart SMS. We don't replace Klaviyo—we recover what it misses.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button className="px-8 py-4 bg-emerald-600 text-white text-lg font-semibold rounded-lg hover:bg-emerald-700 transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2">
              Connect Your Shopify Store (5 Min)
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white text-slate-700 text-lg font-semibold rounded-lg border-2 border-slate-300 hover:border-emerald-600 hover:text-emerald-600 transition-all">
              See How It Works
            </button>
          </div>

          {/* Friction Reducer */}
          <p className="text-sm text-slate-500">
            No credit card required • Zero risk • Commission-only pricing
          </p>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-medium mb-6">
              <Activity className="w-4 h-4" />
              <span>See Cartio in Action</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Watch How We Recover Abandoned Carts in Real-Time
            </h2>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              See a live example of our AI voice agent recovering a $245 cart that email couldn't convert
            </p>
          </div>

          {/* Video Placeholder */}
          <div className="relative aspect-video bg-slate-950 rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl">
            {/* Video will be embedded here */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {/* Play Button Overlay */}
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
                <button className="relative w-24 h-24 bg-emerald-600 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-2xl group">
                  <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>

              <p className="mt-8 text-slate-400 text-sm">Video Demo Coming Soon</p>

              {/* Decorative elements */}
              <div className="absolute top-4 left-4 bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm font-medium">Live Demo</span>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 bg-emerald-500/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <div className="text-white font-bold text-lg">+$245 Recovered</div>
              </div>
            </div>

            {/* Placeholder gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/30 via-slate-900/50 to-blue-950/30 pointer-events-none"></div>
          </div>

          {/* Video Stats */}
          <div className="grid grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">2:34</div>
              <div className="text-slate-400 text-sm">Call Duration</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">$245</div>
              <div className="text-slate-400 text-sm">Cart Recovered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">28</div>
              <div className="text-slate-400 text-sm">Data Points Used</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section - Instantly.ai Style */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
                <Activity className="w-4 h-4" />
                <span>Real-time Dashboard</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Track Every Recovery in Real-Time
              </h2>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Watch your revenue recover live. See exactly which channel recovered each cart,
                how much you earned, and what your AI agent said. Complete transparency, zero guesswork.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Live Recovery Feed</h3>
                    <p className="text-slate-600">See recoveries happen in real-time with full conversation transcripts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Channel Performance</h3>
                    <p className="text-slate-600">Compare AI calls vs WhatsApp vs SMS performance by cart value</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Export Reports</h3>
                    <p className="text-slate-600">Download CSV reports for accounting and performance analysis</p>
                  </div>
                </div>
              </div>

              <button className="px-8 py-4 bg-emerald-600 text-white text-lg font-semibold rounded-lg hover:bg-emerald-700 transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2">
                View Live Demo
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right: Dashboard Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">Revenue Dashboard</h3>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 bg-slate-50">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-emerald-500 rounded-xl p-5 text-white">
                      <div className="text-sm opacity-90 mb-1">Recovered Today</div>
                      <div className="text-3xl font-bold mb-1">$3,240</div>
                      <div className="text-xs opacity-75 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        23% vs yesterday
                      </div>
                    </div>
                    <div className="bg-blue-500 rounded-xl p-5 text-white">
                      <div className="text-sm opacity-90 mb-1">AI Calls Made</div>
                      <div className="text-3xl font-bold mb-1">47</div>
                      <div className="text-xs opacity-75 flex items-center gap-1">
                        <Target className="w-3 h-3" />
                        38% conversion
                      </div>
                    </div>
                  </div>

                  {/* Live Recovery Feed */}
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 border border-slate-200 flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-slate-900 text-sm">AI Voice Call</div>
                        <div className="text-xs text-slate-500">Recovered • Just now</div>
                      </div>
                      <div className="text-emerald-600 font-bold">+$245</div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-slate-200 flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-slate-900 text-sm">WhatsApp</div>
                        <div className="text-xs text-slate-500">Recovered • 5m ago</div>
                      </div>
                      <div className="text-emerald-600 font-bold">+$127</div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-slate-200 flex items-center gap-3">
                      <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center">
                        <Smartphone className="w-5 h-5 text-violet-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-slate-900 text-sm">Smart SMS</div>
                        <div className="text-xs text-slate-500">Recovered • 12m ago</div>
                      </div>
                      <div className="text-emerald-600 font-bold">+$89</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating indicator */}
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                Live Updates
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Social Proof */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Trusted by 500+ Shopify Stores
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Real results from real merchants
            </p>
          </div>

          {/* 4-Stat Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
              <div className="text-slate-600">Shopify Stores</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">$12M+</div>
              <div className="text-slate-600">Revenue Recovered</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">2,000+</div>
              <div className="text-slate-600">AI Calls Made</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">38%</div>
              <div className="text-slate-600">Avg Recovery Rate</div>
            </div>
          </div>

          {/* Testimonials - Horizontal Carousel Instantly.ai Style */}
          <div className="relative">
            <div className="flex items-center gap-8">
              {/* Left Arrow */}
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors flex items-center justify-center"
                aria-label="Previous testimonial"
              >
                <ChevronRight className="w-6 h-6 rotate-180" />
              </button>

              {/* Testimonial Card */}
              <div className="flex-1 bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Left: Customer Photo */}
                  <div className="relative h-[500px] lg:h-auto bg-gradient-to-br from-slate-100 to-slate-200">
                    <Image
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      fill
                      className="object-cover object-[center_20%]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </div>

                  {/* Right: Testimonial Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-slate-50 to-white">
                    <svg className="w-12 h-12 text-blue-500 mb-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>

                    <p
                      className="text-slate-700 text-xl leading-relaxed mb-8"
                      dangerouslySetInnerHTML={{ __html: testimonials[currentTestimonial].quote }}
                    />

                    <div>
                      <div className="font-bold text-slate-900 text-2xl mb-1">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-slate-600 text-lg">
                        {testimonials[currentTestimonial].title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors flex items-center justify-center"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentTestimonial ? 'w-8 bg-blue-500' : 'w-2 bg-slate-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-emerald-600 text-white text-lg font-semibold rounded-lg hover:bg-emerald-700 transition-all hover:shadow-lg hover:-translate-y-0.5">
              Join 500+ Stores Recovering Revenue
            </button>
          </div>
        </div>
      </section>

      {/* Section 3: Gap Calculator */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50" id="calculator">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Calculate Your Revenue Gap
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See exactly how much revenue walks away after email fails
            </p>
          </div>

          {/* Calculator Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Annual Revenue
                </label>
                <input
                  type="number"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-0 transition-all text-slate-900"
                />
                <p className="mt-1 text-xs text-slate-500">Your total yearly revenue</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Cart Abandonment Rate (%)
                </label>
                <input
                  type="number"
                  value={cartRate}
                  onChange={(e) => setCartRate(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-0 transition-all text-slate-900"
                />
                <p className="mt-1 text-xs text-slate-500">Average is 65-70%</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Average Order Value
                </label>
                <input
                  type="number"
                  value={aov}
                  onChange={(e) => setAov(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-0 transition-all text-slate-900"
                />
                <p className="mt-1 text-xs text-slate-500">Average cart size</p>
              </div>
            </div>

            {/* Output */}
            <div className="border-t border-slate-200 pt-8 space-y-4">
              <div className="flex justify-between items-center text-lg">
                <span className="text-slate-600">Abandoned cart value:</span>
                <span className="font-bold text-slate-900">{formatCurrency(abandonedValue)}</span>
              </div>
              <div className="flex justify-between items-center text-lg">
                <span className="text-slate-600">Klaviyo recovers (~10%):</span>
                <span className="font-bold text-green-600">{formatCurrency(klaviyoRecovery)}</span>
              </div>

              {/* What walks away - highlighted */}
              <div className="bg-red-50 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-red-600 font-medium">What walks away:</span>
                  <span className="text-2xl font-bold text-red-600">{formatCurrency(walksAway)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-lg">
                <span className="text-slate-600">Cartio recovers (12-18%):</span>
                <span className="font-bold text-emerald-600">{formatCurrency(cartioRecovery)}</span>
              </div>

              {/* Net profit - highlighted */}
              <div className="bg-emerald-50 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-emerald-600 font-medium">You net (after 15% commission):</span>
                  <span className="text-2xl font-bold text-emerald-600">{formatCurrency(netProfit)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3-Stat Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">5-15%</div>
              <div className="text-slate-600">Email Recovery Rate</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">85-95%</div>
              <div className="text-slate-600">Currently Walks Away</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">12-18%</div>
              <div className="text-slate-600">Additional Cartio Recovery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Positioning Anchor */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              We Don't Replace Klaviyo. We Recover What It Misses.
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Your email tools work great for the first 48 hours. We activate after they're done.
            </p>
          </div>

          {/* Timeline */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 md:p-12 border border-slate-200">
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <ShoppingCart className="w-8 h-8 text-slate-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Hour 0: Cart Abandoned</h3>
                  <p className="text-slate-600">Customer leaves your site with items in cart. Clock starts ticking.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Hours 1-48: Klaviyo Runs</h3>
                  <p className="text-slate-600">Your email sequences run. SMS fires. 5-15% convert. Cartio waits patiently.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Hour 48+: Cartio Activates</h3>
                  <p className="text-slate-600">We engage the 85-95% who didn't respond to email. Different channels, different approach.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-8 h-8 text-sky-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Result: Both Revenue Streams</h3>
                  <p className="text-slate-600">Klaviyo keeps recovering 5-15%. Cartio adds 12-18% more. No channel conflict.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50" id="how-it-works">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Four simple steps to recover lost revenue
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-emerald-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Connect Shopify</h3>
              <p className="text-slate-600 mb-2">5-minute OAuth connection</p>
              <p className="text-sm text-slate-500">No code, no developers, just click and authorize</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-emerald-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">We Wait 48 Hours</h3>
              <p className="text-slate-600 mb-2">Your tools run first</p>
              <p className="text-sm text-slate-500">Email and SMS complete their sequences</p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-emerald-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI Routes Recovery</h3>
              <p className="text-slate-600 mb-2">Smart channel selection</p>
              <p className="text-sm text-slate-500">High value → voice, mid → WhatsApp, low → SMS</p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-emerald-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Track Revenue</h3>
              <p className="text-slate-600 mb-2">Real-time dashboard</p>
              <p className="text-sm text-slate-500">See every recovery, channel performance, ROI</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-emerald-600 text-white text-lg font-semibold rounded-lg hover:bg-emerald-700 transition-all hover:shadow-lg hover:-translate-y-0.5">
              Start Recovering Revenue Now
            </button>
          </div>
        </div>
      </section>

      {/* Section 6: Channel Intelligence - Instantly.ai Style with Side-by-Side Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-32">

          {/* AI Voice Calls Feature */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Visual Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100 via-green-50 to-teal-100 rounded-3xl p-12 shadow-2xl">
                {/* Phone Interface Mockup */}
                <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md mx-auto">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                      <PhoneCall className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">AI Voice Agent</div>
                      <div className="text-sm text-slate-600">Calling +1 (555) 234-5678</div>
                    </div>
                    <div className="ml-auto flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-green-700">Live</span>
                    </div>
                  </div>

                  {/* Data Points */}
                  <div className="space-y-3">
                    <div className="bg-slate-50 rounded-lg p-3 text-sm">
                      <div className="text-slate-600">Cart Value:</div>
                      <div className="font-bold text-slate-900">$245.00</div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-3 text-sm">
                      <div className="text-slate-600">Time Abandoned:</div>
                      <div className="font-bold text-slate-900">18 hours ago</div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-3 text-sm">
                      <div className="text-slate-600">Customer Segment:</div>
                      <div className="font-bold text-slate-900">VIP Shopper</div>
                    </div>
                    <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                      <div className="text-emerald-700 text-sm font-medium">✓ 28 Data Points Analyzed</div>
                    </div>
                  </div>
                </div>

                {/* Floating Stat */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-4 border border-emerald-200">
                  <div className="text-3xl font-bold text-emerald-600">38%</div>
                  <div className="text-sm text-slate-600">Recovery Rate</div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Why This Works Better Than <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">VAs or Basic SMS</span>
              </h2>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                2,000+ calls of intelligence that competitors can't replicate.
              </p>

              {/* Expandable Details Button */}
              <button
                onClick={() => setExpandedFeature1(!expandedFeature1)}
                className="mb-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
                aria-label={expandedFeature1 ? "Hide details" : "Show details"}
              >
                <span className={`text-3xl font-light transition-transform ${expandedFeature1 ? 'rotate-45' : ''}`}>+</span>
              </button>

              {/* Collapsible Content */}
              {expandedFeature1 && (
                <div className="space-y-5 mb-8 animate-slide-up">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Database className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-1">28 Data Points Per Call</h3>
                      <p className="text-slate-600">
                        Cart value, purchase history, email opens, location, device type, and 23 more signals analyzed in real-time
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-1">Cross-Merchant Learning</h3>
                      <p className="text-slate-600">
                        Fashion converts 23% better in late afternoon. Supplements respond to urgency. Home goods need reassurance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-violet-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-1">Natural Conversations</h3>
                      <p className="text-slate-600">
                        Not robotic scripts. Our AI adapts to customer objections in real-time with context-aware responses
                      </p>
                    </div>
                  </div>

                  <button className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2">
                    See How It Works
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* WhatsApp & SMS Features Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Multi-Channel <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Smart Routing</span>
              </h2>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Automatically route to the best channel based on cart value.
              </p>

              {/* Expandable Details Button */}
              <button
                onClick={() => setExpandedFeature2(!expandedFeature2)}
                className="mb-6 w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
                aria-label={expandedFeature2 ? "Hide details" : "Show details"}
              >
                <span className={`text-3xl font-light transition-transform ${expandedFeature2 ? 'rotate-45' : ''}`}>+</span>
              </button>

              {/* Collapsible Content */}
              {expandedFeature2 && (
                <div className="space-y-6 animate-slide-up">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                    <div className="flex items-center gap-3 mb-3">
                      <MessageSquare className="w-8 h-8 text-green-600" />
                      <h3 className="text-xl font-bold text-slate-900">WhatsApp Recovery</h3>
                    </div>
                    <p className="text-slate-700 mb-3">For mid-value carts ($75-200)</p>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        Product images & carousels
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        45% engagement rate
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6 border border-violet-200">
                    <div className="flex items-center gap-3 mb-3">
                      <Smartphone className="w-8 h-8 text-violet-600" />
                      <h3 className="text-xl font-bold text-slate-900">Smart SMS</h3>
                    </div>
                    <p className="text-slate-700 mb-3">For lower-value carts (under $75)</p>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-violet-600" />
                        Time-zone optimized delivery
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-violet-600" />
                        23% conversion rate
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Visual Mockup */}
            <div className="order-1 lg:order-2 relative">
              <div className="bg-gradient-to-br from-blue-100 via-indigo-50 to-violet-100 rounded-3xl p-12 shadow-2xl">
                {/* Channel Routing Mockup */}
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <div className="text-center mb-6">
                    <div className="font-bold text-slate-900 text-lg mb-2">Auto Channel Selection</div>
                    <div className="text-sm text-slate-600">Based on cart value & customer data</div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-emerald-50 border-2 border-emerald-500 rounded-xl p-4 flex items-center gap-3">
                      <PhoneCall className="w-8 h-8 text-emerald-600" />
                      <div className="flex-1">
                        <div className="font-bold text-slate-900">$245 Cart</div>
                        <div className="text-sm text-slate-600">→ AI Voice Call</div>
                      </div>
                      <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center gap-3">
                      <MessageSquare className="w-8 h-8 text-green-600" />
                      <div className="flex-1">
                        <div className="font-bold text-slate-900">$120 Cart</div>
                        <div className="text-sm text-slate-600">→ WhatsApp</div>
                      </div>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center gap-3">
                      <Smartphone className="w-8 h-8 text-violet-600" />
                      <div className="flex-1">
                        <div className="font-bold text-slate-900">$45 Cart</div>
                        <div className="text-sm text-slate-600">→ Smart SMS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stat */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 border border-blue-200">
                <div className="text-3xl font-bold text-blue-600">3x</div>
                <div className="text-sm text-slate-600">Better ROI</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 7: AI Intelligence Showcase - Instantly.ai Style */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="order-1 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Intelligence</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Natural Conversations,<br />Not Robotic Scripts
              </h2>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our AI doesn't just follow a script. It analyzes 28 data points per conversation,
                learns from 2,000+ calls, and adapts in real-time to customer objections.
              </p>

              {/* Expandable Details Button */}
              <button
                onClick={() => setExpandedConversation(!expandedConversation)}
                className="mb-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
                aria-label={expandedConversation ? "Hide conversation" : "Show conversation"}
              >
                <span className={`text-3xl font-light transition-transform ${expandedConversation ? 'rotate-45' : ''}`}>+</span>
              </button>

              {/* Collapsible Conversation Preview */}
              {expandedConversation && (
                <div className="space-y-5 mb-8 animate-slide-up">
                  <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
                    {/* Mockup Header */}
                    <div className="bg-gradient-to-r from-emerald-600 to-green-500 p-6 text-white">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                            <Bot className="w-7 h-7" />
                          </div>
                          <div>
                            <div className="font-bold text-lg">AI Voice Agent</div>
                            <div className="text-sm text-emerald-100">Live Call in Progress</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                          <span className="text-sm">2:34</span>
                        </div>
                      </div>
                    </div>

                    {/* Conversation */}
                    <div className="p-6 space-y-4 bg-slate-50">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Bot className="w-4 h-4 text-emerald-600" />
                        </div>
                        <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-sm border border-slate-200 max-w-md">
                          <p className="text-slate-700 text-sm leading-relaxed">
                            Hi Sarah, this is Alex from Cartio. I noticed you were shopping for the Memory Foam Mattress Topper earlier today. I wanted to make sure everything was okay with your order?
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3 justify-end">
                        <div className="bg-blue-500 text-white rounded-2xl rounded-tr-none p-4 shadow-sm max-w-md">
                          <p className="text-sm leading-relaxed">
                            Oh yes! I was just comparing prices. Your price seems good but I'm not sure about the shipping time.
                          </p>
                        </div>
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <UserCheck className="w-4 h-4 text-blue-600" />
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Bot className="w-4 h-4 text-emerald-600" />
                        </div>
                        <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-sm border border-slate-200 max-w-md">
                          <p className="text-slate-700 text-sm leading-relaxed">
                            I completely understand! We actually have express shipping available. I can add 2-day delivery at no extra cost for your order. Would that work for you?
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3 justify-end">
                        <div className="bg-blue-500 text-white rounded-2xl rounded-tr-none p-4 shadow-sm max-w-md">
                          <p className="text-sm leading-relaxed">
                            That would be perfect! Can you send me the checkout link?
                          </p>
                        </div>
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <UserCheck className="w-4 h-4 text-blue-600" />
                        </div>
                      </div>
                    </div>

                    {/* Recovery Indicator */}
                    <div className="bg-gradient-to-r from-emerald-500 to-green-400 p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6 text-white" />
                        <span className="text-white font-semibold">Cart Recovered</span>
                      </div>
                      <span className="text-white text-2xl font-bold">+$245</span>
                    </div>
                  </div>

                  {/* Data Points Indicator */}
                  <div className="mt-6 bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-3">
                      <Database className="w-8 h-8 text-emerald-600" />
                      <div>
                        <div className="font-semibold text-slate-900">28 Data Points Analyzed</div>
                        <div className="text-sm text-slate-600">Cart value • Time abandoned • Purchase history • Location • Device type...</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Feature List - Always Visible */}
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Context-Aware Responses</h3>
                    <p className="text-slate-600">
                      Knows what they abandoned, when they left, what emails they opened, and their purchase history
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Cross-Merchant Learning</h3>
                    <p className="text-slate-600">
                      Fashion converts 23% better in late afternoon. Supplements respond to urgency. Home goods need reassurance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Timer className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Perfect Timing</h3>
                    <p className="text-slate-600">
                      Calls within 6-48 hours based on cart value, timezone, and optimal conversion windows
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-slate-900 rounded-xl p-6 border border-slate-700">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-white mb-2">Industry-Leading Results</div>
                    <div className="text-slate-300 text-sm">
                      97% positive or neutral sentiment • 3% opt-out rate • 38% average recovery rate
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Visual Mockup */}
            <div className="order-2 lg:order-2">
              <div className="bg-gradient-to-br from-emerald-100 via-green-50 to-teal-100 rounded-3xl p-12 shadow-2xl relative">
                {/* Phone Interface Mockup */}
                <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md mx-auto">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                      <PhoneCall className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">AI Voice Agent</div>
                      <div className="text-sm text-slate-600">Live Call in Progress</div>
                    </div>
                    <div className="ml-auto flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-green-700">2:34</span>
                    </div>
                  </div>

                  {/* Data Points */}
                  <div className="space-y-3">
                    <div className="bg-slate-50 rounded-lg p-3 text-sm">
                      <div className="text-slate-600">Cart Value:</div>
                      <div className="font-bold text-slate-900">$245.00</div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-3 text-sm">
                      <div className="text-slate-600">Time Abandoned:</div>
                      <div className="font-bold text-slate-900">18 hours ago</div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-3 text-sm">
                      <div className="text-slate-600">Customer Segment:</div>
                      <div className="font-bold text-slate-900">VIP Shopper</div>
                    </div>
                    <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                      <div className="text-emerald-700 text-sm font-medium">✓ 28 Data Points Analyzed</div>
                    </div>
                  </div>
                </div>

                {/* Floating Stat */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-4 border border-emerald-200">
                  <div className="text-3xl font-bold text-emerald-600">38%</div>
                  <div className="text-sm text-slate-600">Recovery Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50" id="pricing">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Zero-Risk Pricing
            </h2>
            <p className="text-xl text-slate-600">
              Only pay when we recover revenue
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-sky-50 p-12 rounded-3xl border-2 border-emerald-200 relative">
            {/* Badge */}
            <div className="absolute top-0 right-0 bg-emerald-600 text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
              COMMISSION ONLY
            </div>

            {/* Example Box */}
            <div className="bg-white rounded-2xl p-8 mb-8">
              <p className="text-sm text-slate-600 mb-2">Example with typical results:</p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">Cartio recovers:</span>
                  <span className="font-bold text-slate-900">$4,200/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">You pay (15%):</span>
                  <span className="font-bold text-slate-900">$630/month</span>
                </div>
                <div className="border-t pt-3 flex justify-between">
                  <span className="text-lg font-semibold text-slate-900">You net:</span>
                  <span className="text-2xl font-bold text-emerald-600">$3,570/month</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-600 italic">
                Pure profit you weren't getting before
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">All channels included (voice, WhatsApp, SMS)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Real-time analytics dashboard</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">No setup fees, no monthly minimums</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Cancel anytime, no contract</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">White-glove onboarding support</span>
              </div>
            </div>

            <button className="w-full px-8 py-4 bg-emerald-600 text-white text-lg font-semibold rounded-lg hover:bg-emerald-700 transition-all hover:shadow-lg hover:-translate-y-0.5">
              Start Recovering Revenue (5 Min)
            </button>
          </div>
        </div>
      </section>

      {/* Section 9: Trust Reinforcement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Merchants Trust Cartio
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">5-Minute Setup</h3>
              <p className="text-slate-600">
                Connect via Shopify OAuth. No code, no developers, no complicated onboarding.
                500+ merchants connected in under 5 minutes.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">No Financial Risk</h3>
              <p className="text-slate-600">
                Commission-only means you never pay unless we recover revenue.
                If it doesn't work, you've lost 5 minutes and $0.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Revenue in 48 Hours</h3>
              <p className="text-slate-600">
                First recoveries typically happen within 48-72 hours of connecting.
                See real revenue impact in days, not months.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-emerald-600 text-white text-lg font-semibold rounded-lg hover:bg-emerald-700 transition-all hover:shadow-lg hover:-translate-y-0.5">
              Start Your 5-Minute Setup
            </button>
          </div>
        </div>
      </section>

      {/* Section 10: Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-sky-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Recover Lost Revenue?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join 500+ Shopify stores already recovering millions
          </p>
          <button className="px-8 py-4 bg-white text-emerald-600 text-lg font-semibold rounded-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
            Connect Your Store in 5 Minutes
          </button>
          <p className="text-sm text-emerald-100 mt-6">
            No credit card • No contract • Cancel anytime
          </p>
        </div>
      </section>

      {/* Section 11: FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50" id="faq">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Everything else you need to know
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-slate-200 p-6 cursor-pointer transition-all hover:border-emerald-200"
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-lg text-slate-900 pr-8">
                    {faq.question}
                  </h3>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </div>
                {openFaqIndex === index && (
                  <p className="mt-4 text-slate-600">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 12: Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Footer CTA */}
          <div className="border-b border-slate-800 pb-12 mb-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Start Recovering Revenue Today
              </h3>
              <button className="px-8 py-4 bg-emerald-600 text-white text-lg font-semibold rounded-lg hover:bg-emerald-700 transition-all hover:shadow-lg">
                Connect Your Shopify Store
              </button>
            </div>
          </div>

          {/* Footer Nav */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GDPR</a></li>
                <li><a href="#" className="hover:text-white transition-colors">TCPA Compliance</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-sm">
              © 2026 Cartio.ai. All rights reserved.
            </p>
            <p className="text-sm mt-2 text-slate-500">
              Recover the 85-95% of abandoned carts that email and SMS miss
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}