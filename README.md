# Cartio.ai

**AI-Powered Revenue Recovery for Shopify Stores**

Recover the 85-95% of abandoned carts that email and SMS miss.

---

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open **http://localhost:3001** in your browser.

---

## What's Inside

### Landing Page (/)
Complete conversion-optimized landing page with:
- Interactive revenue calculator
- 8 strategically placed CTAs
- Social proof and testimonials
- Objection handling
- Commission-only pricing section
- Mobile-responsive design

### Dashboard (/dashboard)
Merchant analytics dashboard with:
- Revenue overview metrics
- Channel performance breakdown
- Recent recoveries feed
- Upcoming AI calls schedule

---

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS 3**
- **Lucide React** (icons)

---

## Project Structure

```
app/
├── layout.tsx          # Root layout + SEO metadata
├── page.tsx            # Landing page
├── globals.css         # Tailwind styles
└── dashboard/
    └── page.tsx        # Analytics dashboard

tailwind.config.ts      # Custom color system
tsconfig.json           # TypeScript config
package.json            # Dependencies
```

---

## Key Features

✅ **Conversion-Optimized Copy** - Every word earns its place
✅ **Strategic Architecture** - 12 sections, each with a psychological purpose
✅ **Interactive Calculator** - Shows exact revenue loss in real-time
✅ **Social Proof Throughout** - 500+ stores, $12M+ recovered, 38% avg rate
✅ **Mobile-First Design** - Fully responsive across all devices
✅ **SEO Ready** - Meta tags, Open Graph, semantic HTML
✅ **Dark Mode Support** - Complete dark theme
✅ **Zero Dependencies** - No external APIs needed for frontend

---

## Brand Positioning

**Category:** Post-Email Revenue Recovery
**For:** Shopify stores doing $300K–$50M annually
**Problem:** Email/SMS only recover 5–15% of abandoned carts
**Solution:** AI voice calls + WhatsApp + SMS recover the other 85–95%
**Pricing:** Commission-only (15% of recovered revenue)
**Moat:** Cross-merchant intelligence (2,000+ calls, 28 data points)

---

## Next Steps (Backend Integration)

When ready to connect your backend:

1. **Shopify OAuth Flow** → `/api/shopify/connect`
2. **Dashboard Data** → `/api/dashboard/stats`
3. **Recoveries Feed** → `/api/recoveries`
4. **Authentication** → Implement NextAuth.js or similar

See `IMPLEMENTATION_SUMMARY.md` for detailed API specs.

---

## Scripts

```bash
npm run dev      # Development server (Turbopack)
npm run build    # Production build
npm start        # Production server
npm run lint     # ESLint
```

---

## Documentation

- **IMPLEMENTATION_SUMMARY.md** - Complete implementation details
- **Brand Brief** - In conversation history (strategic positioning)
- **Page Architecture** - In conversation history (conversion strategy)
- **Copy Document** - In conversation history (final copy)

---

## Live Preview

**Development:** http://localhost:3001

**Pages:**
- `/` - Landing page
- `/dashboard` - Analytics dashboard
- `/signup` - (needs implementation)

---

## Design System

**Colors:**
- Primary: `#0284c7` (blue-600)
- Success: `#10b981` (green-500)
- Warning: `#f59e0b` (amber-500)
- Danger: `#ef4444` (red-500)

**Typography:**
- Font: Inter (Google Fonts)
- Scale: Tailwind default

**Components:**
- Buttons: `rounded-lg` with hover states
- Cards: `rounded-2xl` with shadows
- Inputs: `rounded-lg` with focus rings

---

## Performance

- Turbopack for fast dev builds
- App Router for automatic code splitting
- Tailwind CSS purging
- Responsive images ready (when images added)

---

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

---

## Contributing

This is a production codebase for Cartio.ai. For changes:
1. Reference the Brand Brief for voice/tone
2. Follow the Page Architecture for structure
3. Use the Copy Document for messaging

---

## License

Proprietary - Cartio.ai
© 2026 All rights reserved

---

## Support

**Email:** support@cartio.ai
**Documentation:** See `IMPLEMENTATION_SUMMARY.md`

---

Built with ❤️ using Claude Code
