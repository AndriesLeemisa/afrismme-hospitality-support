# AfriSMME Hub — Restaurant & Hospitality Support Services

> **Turnkey Architectural Enhancement, Dining Acoustics, Overnight Furniture Restoration & Preventative Facility Maintenance.**  
> Built with zero daytime disruption for Africa's leading dining rooms, luxury bistros, and boutique hospitality spaces.

---

## 🏛️ Brand & Technical Philosophy

This digital platform was architected specifically for **AfriSMME Hub Restaurant & Hospitality Support Services** in alignment with Scinovalities engineering standards:

* **Authentic Hospitality Visual Assets**: Strictly uses real photographic assets and high-end physical mockups representing our tangible physical craftsmanship (etched brass signage, acoustic dining privacy booths, hand-rubbed timber restoration, mobile fleet dispatch, and kitchen telemetry).
* **Cinematic, Controlled Animation**: GSAP 3 & ScrollTrigger timelines engineered for a premium, fast, and intentional experience with full `prefers-reduced-motion` compliance.
* **Luxury Hospitality Design System**:
  * **Primary Palette**: Deep Charcoal / Near Black (`#08090B`, `#0E1014`, `#1B1F27`)
  * **Secondary Palette**: Warm Ivory / Off-White (`#FCFBF9`, `#F7F4EE`, `#DDD4C4`)
  * **Accent Palette**: Champagne Bronze / Muted Gold (`#C5A880`, `#D4B886`, `#A98754`)
  * **Secondary Accent**: Deep Natural Green (`#0F1D15`, `#1A3023`)
* **Editorial Typographic Scale**: Cormorant Garamond display serif paired with Plus Jakarta Sans and technical monospace markers.
* **The 07:00 Ready-for-Service Guarantee**: Dark-hours overnight execution protocol (23:00 to 07:00) with zero lost daytime covers or customer disruption.

---

## 📦 The 6 Strategic Support Pillars

1. **01 ATTRACT — Exterior Architectural Presence & Terrace Optimization**
   * Bespoke etched brass signage, heavy-duty cantilever terrace systems, and facade illumination.
   * **Specialist Division Websites**: [Afrishades](https://afrishades.co.za/) & [Cane Africa](https://www.caneafrica.co.za/)
2. **02 ENHANCE — Acoustic Architecture, Spatial Intimacy & Banquettes**
   * Concealed sound-absorption panels (NRC-certified), custom ergonomic leather banquettes, and zoned dining intimacy.
3. **03 RESTORE — Artisanal Wood, Leather & Rapid Overnight Turnaround**
   * Hand-rubbed zero-VOC food-safe oils, table de-staining, fine leather pigment revival, and brass polishing.
   * **Specialist Division Website**: [The Wood Doctor](https://wooddoctor.co.za/)
4. **04 MAINTAIN — Preventative Facility Care & Rapid Response Fleet**
   * Sub-60 minute dispatch mobile workshops, commercial kitchen extraction hoods, cold-chain refrigeration checks.
5. **05 PROTECT — Compliance, Hygiene Protocols & Brand Shield**
   * SANS 10400 & NFPA 96 alignment, HACCP food hygiene audit readiness, automatic fire suppression checks.
6. **06 GROW — Operational Telemetry, Smart Kitchens & Capacity Lift**
   * Floorplan cover density modeling, KDS expeditor line balancing, and AI table turnover forecasting.

---

## 📚 Corporate Publication System (Print & Digital Masters)

AfriSMME Hub features a world-class corporate publication suite comprising three distinct documents engineered for hospitality owners, executives, and facility directors:

| Document | Format & Extent | Target Audience | Master PDF | Standalone Print HTML | Digital Web Route |
|:---|:---:|:---|:---|:---|:---:|
| **Document A: Corporate Company Profile** | **22 Pages A4** | Hotel Groups, General Managers, Investors, Procurement | [`AfriSMME_Corporate_Profile_Master.pdf`](file:///public/PDFs/AfriSMME_Corporate_Profile_Master.pdf) | [`corporate_profile_print.html`](file:///public/PDFs/corporate_profile_print.html) | [`/corporate-profile`](http://localhost:3000/corporate-profile) |
| **Document B: Premium Sales Brochure** | **12 Pages A4** | Restaurant Owners, F&B Directors, General Managers | [`AfriSMME_Premium_Sales_Brochure.pdf`](file:///public/PDFs/AfriSMME_Premium_Sales_Brochure.pdf) | [`brochure_print.html`](file:///public/PDFs/brochure_print.html) | [`/brochure`](http://localhost:3000/brochure) |
| **Document C: Hospitality Support Booklet** | **36 Pages A4** | Operations Directors, Facility Engineers, Tender Boards | [`AfriSMME_Hospitality_Support_Booklet.pdf`](file:///public/PDFs/AfriSMME_Hospitality_Support_Booklet.pdf) | [`booklet_print.html`](file:///public/PDFs/booklet_print.html) | [`/booklet`](http://localhost:3000/booklet) |

### 📖 Design & Asset Documentation
- **[Brand & Design System Manual](file:///BRAND_DESIGN_SYSTEM.md)**: Corporate visual identity, typography (Cormorant Garamond, Plus Jakarta Sans, JetBrains Mono), exact color metrics (HEX, RGB, CMYK, Pantone), and A4 grid rules.
- **[Image Asset Library Catalogue](file:///IMAGE_LIBRARY.md)**: 10 photorealistic commercial visuals and 4 architectural vector diagrams with prompt metadata, aspect ratios, lighting specs, and pre-press standards.

---

## ⚡ Tech Stack & Architecture

* **Framework**: Next.js 14 (App Router)
* **Language**: TypeScript 5 (Strict Mode)
* **Styling**: Tailwind CSS with custom brand tokens and glassmorphism
* **Animation**: GSAP 3 + ScrollTrigger (`@gsap/react`)
* **Icons**: Lucide React
* **Image Optimization**: Sharp, next/image with AVIF/WebP, and fetchpriority for LCP compliance
* **PDF Pre-Press Compilation**: Node.js + Puppeteer Core with headless Chromium, base64 self-contained asset bundling, and CSS Paged Media `@page { size: A4 portrait; margin: 0; }`.

---

## 🚀 Getting Started

```bash
# Install dependencies
npm.cmd install

# Start local development server
npm.cmd run dev

# Run optimized production build
npm.cmd run build

# Start production server
npm.cmd run start
```

