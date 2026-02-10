# AIWA CRM Template

> A production-ready Next.js template designed for the AIWA Agent to build custom CRMs for agencies. Built with TypeScript, Tailwind CSS v4, shadcn/ui, and modern React patterns.

## 🎯 Purpose

This template serves as the foundation for AIWA Agent to create, customize, and build beautiful, accessible CRMs for agencies. It provides a complete design system, pre-built components, and a scalable architecture that can be extended for any CRM use case.

## 📋 Table of Contents

- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Design System](#-design-system)
- [Components](#-components)
- [Providers](#-providers)
- [Hooks](#-hooks)
- [Database](#-database)
- [Styling](#-styling)
- [Configuration](#-configuration)
- [Development Guidelines](#-development-guidelines)
- [Building for Production](#-building-for-production)

## 🛠 Tech Stack

### Core Framework

- **Next.js 16.1.6** - React framework with App Router
- **React 19.2.3** - UI library with latest features
- **TypeScript 5.x** - Type-safe development

### Styling & Design

- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Accessible component library (New York style)
- **Radix UI** - Unstyled, accessible UI primitives
- **class-variance-authority** - Component variant management
- **tailwind-merge** - Merge Tailwind classes without conflicts

### UI & Animation

- **Framer Motion 12.34.0** - Animation library
- **Lucide React** - Icon library
- **Tabler Icons** - Additional icon set
- **next-themes** - Dark mode support

### Data & Forms

- **Drizzle ORM 0.45.1** - TypeScript ORM
- **@libsql/client 0.17.0** - LibSQL/Turso database client
- **Drizzle Kit 0.31.9** - Schema management and migrations
- **date-fns** - Date manipulation
- **react-day-picker** - Calendar component

### Additional Libraries

- **Recharts** - Chart components
- **Embla Carousel** - Carousel functionality
- **Sonner** - Toast notifications
- **Vaul** - Drawer component

### Development Tools

- **Biome 2.2.0** - Fast linter and formatter
- **pnpm** - Fast, disk space efficient package manager
- **tsx** - TypeScript execution

## 📁 Project Structure

```
aiwa-crm-template/
├── .next/                      # Next.js build output
├── node_modules/               # Dependencies
├── public/                     # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── favicon.ico
│   │   ├── globals.css         # Global styles & design tokens
│   │   ├── layout.tsx          # Root layout with providers
│   │   └── page.tsx            # Home page
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components (40+ components)
│   │   └── uitripled/          # Custom glassmorphism components
│   │       ├── glass-forgot-password-card.tsx
│   │       ├── glass-sign-up-card.tsx
│   │       └── glassmorphism-statistics-card.tsx
│   ├── hooks/                  # Custom React hooks
│   │   └── use-mobile.ts
│   ├── lib/                    # Utility functions
│   │   ├── db/                 # Database layer
│   │   │   ├── client.ts       # LibSQL client & Drizzle instance
│   │   │   ├── index.ts        # Database exports
│   │   │   ├── migrations/     # Database migrations
│   │   │   └── schema.ts       # Database schema definitions
│   │   └── utils.ts            # cn() helper for class merging
│   └── providers/              # React context providers
│       ├── index.ts
│       └── theme.tsx           # Theme provider for dark mode
├── .gitignore
├── biome.json                  # Biome configuration
├── components.json             # shadcn/ui configuration
├── drizzle.config.ts           # Drizzle Kit configuration
├── next.config.ts              # Next.js configuration
├── next-env.d.ts               # Next.js TypeScript declarations
├── package.json                # Dependencies and scripts
├── pnpm-lock.yaml              # Lock file
├── pnpm-workspace.yaml         # pnpm workspace config
├── postcss.config.mjs          # PostCSS configuration
├── README.md                   # This file
├── shadcn-llms.txt             # shadcn/ui documentation for AI
└── tsconfig.json               # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: >= 22.21.0
- **pnpm**: 10.18.0 (recommended package manager)

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint

# Format code
pnpm format
```

### Development Server

Open [http://localhost:3000](http://localhost:3000) to see your application.

## 🎨 Design System

### Brand Colors

The template uses a custom brand color system with OKLCH color space for better perceptual uniformity:

```css
--brand-primary: oklch(72.348% 0.17235 53.784) /* Main brand color */
  --brand-dim: oklch(72.348% 0.17235 53.784 / 0.12) /* Dimmed version */
  --brand-glow: oklch(72.348% 0.17235 53.784 / 0.35) /* Glow effect */;
```

### Color Tokens

#### Light Mode

- `--background`: oklch(0.99 0 0) - Pure white background
- `--foreground`: oklch(0.18 0 0) - Near black text
- `--card`: oklch(1 0 0) - White cards
- `--primary`: Brand primary color
- `--secondary`: oklch(0.96 0 0) - Light gray
- `--muted`: oklch(0.96 0 0) - Muted backgrounds
- `--accent`: oklch(0.94 0 0) - Accent backgrounds
- `--destructive`: oklch(0.577 0.245 27.325) - Error/danger color
- `--border`: oklch(0.92 0 0) - Border color
- `--ring`: Brand primary - Focus ring color

#### Dark Mode (Aura Style)

- `--background`: oklch(0.12 0 0) - Deep zinc background
- `--foreground`: oklch(0.98 0 0) - Near white text
- `--card`: oklch(0.18 0 0) - Elevated panels
- `--primary`: Brand primary color
- `--secondary`: oklch(0.24 0 0) - Dark gray
- `--muted`: oklch(0.24 0 0) - Muted backgrounds
- `--accent`: oklch(0.24 0 0) - Accent backgrounds
- `--destructive`: oklch(0.704 0.191 22.216) - Error/danger color
- `--border`: oklch(1 0 0 / 10%) - Subtle borders
- `--ring`: Brand primary - Focus ring color

### Typography

Three font families are configured:

```typescript
--font-heading: Host Grotesk    // For headings (h1-h6, labels)
--font-body: Inter              // For body text (p, span, small)
--font-mono: Geist Mono         // For code and monospace
```

### Border Radius

Consistent border radius system:

```css
--radius: 0.625rem (10px) // Base radius
  --radius-sm: 6px // Small
  --radius-md: 8px // Medium
  --radius-lg: 10px // Large (base)
  --radius-xl: 14px // Extra large
  --radius-2xl: 18px // 2X large
  --radius-3xl: 22px // 3X large
  --radius-4xl: 26px; // 4X large
```

### Chart Colors

Pre-configured chart color palette:

```css
--chart-1 through --chart-5     // Five distinct colors for data visualization
```

## 🧩 Components

### shadcn/ui Components (40+ Components)

All components are located in `src/components/ui/` and follow the shadcn/ui patterns.

#### Form & Input Components

- **Button** (`button.tsx`) - Multiple variants (default, destructive, outline, secondary, ghost, link) and sizes (xs, sm, default, lg, icon variants)
- **Input** (`input.tsx`) - Text input with focus states and validation
- **Textarea** (`textarea.tsx`) - Multi-line text input
- **Label** (`label.tsx`) - Form labels
- **Checkbox** (`checkbox.tsx`) - Checkbox input
- **Switch** (`switch.tsx`) - Toggle switch
- **Select** (`select.tsx`) - Dropdown select
- **Slider** (`slider.tsx`) - Range slider
- **Calendar** (`calendar.tsx`) - Date picker calendar

#### Layout Components

- **Card** (`card.tsx`) - Container with header, content, footer, title, description, and action slots
- **Separator** (`separator.tsx`) - Visual divider
- **Scroll Area** (`scroll-area.tsx`) - Custom scrollable area
- **Resizable** (`resizable.tsx`) - Resizable panels
- **Sidebar** (`sidebar.tsx`) - Full-featured collapsible sidebar with mobile support
- **Tabs** (`tabs.tsx`) - Tabbed interface
- **Accordion** (`accordion.tsx`) - Collapsible sections
- **Breadcrumb** (`breadcrumb.tsx`) - Navigation breadcrumbs
- **Collapsible** (`collapsible.tsx`) - Collapsible container

#### Overlay Components

- **Dialog** (`dialog.tsx`) - Modal dialogs
- **Alert Dialog** (`alert-dialog.tsx`) - Confirmation dialogs
- **Sheet** (`sheet.tsx`) - Slide-out panels
- **Drawer** (`drawer.tsx`) - Mobile-friendly drawer
- **Popover** (`popover.tsx`) - Floating popovers
- **Tooltip** (`tooltip.tsx`) - Contextual tooltips
- **Dropdown Menu** (`dropdown-menu.tsx`) - Dropdown menus
- **Context Menu** (`context-menu.tsx`) - Right-click menus
- **Menubar** (`menubar.tsx`) - Horizontal menu bar

#### Feedback Components

- **Alert** (`alert.tsx`) - Alert messages
- **Sonner** (`sonner.tsx`) - Toast notifications
- **Progress** (`progress.tsx`) - Progress bars
- **Skeleton** (`skeleton.tsx`) - Loading placeholders
- **Badge** (`badge.tsx`) - Status badges
- **Empty** (`empty.tsx`) - Empty states

#### Display Components

- **Avatar** (`avatar.tsx`) - User avatars
- **Table** (`table.tsx`) - Data tables
- **Chart** (`chart.tsx`) - Chart components (Recharts)
- **Carousel** (`carousel.tsx`) - Image/content carousel
- **Aspect Ratio** (`aspect-ratio.tsx`) - Maintain aspect ratios
- **Pagination** (`pagination.tsx`) - Page navigation

#### Direction Component

- **Direction** (`direction.tsx`) - RTL/LTR support

### Custom Components (uitripled/)

Premium components from UI TripleD library featuring glassmorphism effects, smooth animations, and modern design patterns. All components are built with Framer Motion, shadcn/ui primitives, and Tailwind CSS.

#### Authentication & Forms

##### GlassForgotPasswordCard

**File**: `src/components/uitripled/glass-forgot-password-card.tsx`

Reset-password screen with glassmorphic styling and status messaging.

**Features**:

- Glassmorphism backdrop blur effect
- Smooth animations with Framer Motion
- Respects reduced motion preferences
- Form submission handling with status feedback
- Accessible with ARIA labels
- Responsive design

**Dependencies**: `framer-motion`, `react`
**UI Components**: button, input, label

**Usage**:

```tsx
import { GlassForgotPasswordCard } from "@/components/uitripled/glass-forgot-password-card";

<GlassForgotPasswordCard />;
```

**Use Cases**: Password reset flows, authentication pages, user account recovery

##### GlassSignInCard

**File**: `src/components/uitripled/glass-sign-in-card.tsx`

Glassmorphic sign-in panel with social auth buttons and email form.

**Features**:

- Social authentication buttons (Google, GitHub, etc.)
- Email/password form with validation
- "Remember me" checkbox
- Glassmorphism effects
- Smooth transitions

**Dependencies**: `framer-motion`, `lucide-react`, `react`
**UI Components**: button, checkbox, input, label

**Usage**:

```tsx
import { GlassSignInCard } from "@/components/uitripled/glass-sign-in-card";

<GlassSignInCard />;
```

**Use Cases**: Login pages, authentication flows, user sign-in

##### GlassSignUpCard

**File**: `src/components/uitripled/glass-sign-up-card.tsx`

Glassmorphic sign-up flow with social providers, email fields, and terms checkbox.

**Features**:

- Social provider buttons
- Email and password fields
- Terms and conditions checkbox
- Glassmorphism styling
- Form validation ready

**Dependencies**: `framer-motion`, `lucide-react`, `react`
**UI Components**: button, checkbox, input, label

**Usage**:

```tsx
import { GlassSignUpCard } from "@/components/uitripled/glass-sign-up-card";

<GlassSignUpCard />;
```

**Use Cases**: User registration, sign-up flows, account creation pages

#### Cards & Display Components

##### GlassmorphismStatisticsCard

**File**: `src/components/uitripled/glassmorphism-statistics-card.tsx`

Interactive statistics card with hover reveal and smooth transitions.

**Features**:

- Image background with gradient overlay
- Hover-triggered statistics reveal
- Smooth scale animations
- Icon-based stat display (Trophy, Target, Award icons)
- Responsive grid layout
- Loading state handling

**Dependencies**: `framer-motion`, `lucide-react`, `react`
**UI Components**: card

**Usage**:

```tsx
import { GlassmorphismStatisticsCard } from "@/components/uitripled/glassmorphism-statistics-card";

<GlassmorphismStatisticsCard />;
```

**Use Cases**: Dashboard statistics, user profile cards, performance metrics, team member showcases, achievement displays

**Customization**:
Modify the athlete/user object to customize content:

```typescript
const athlete = {
  name: "Your Name",
  title: "Your Title",
  description: "Your Description",
  image: "image-url",
  stats: [
    { label: "Metric 1", value: "Value 1", icon: IconComponent },
    { label: "Metric 2", value: "Value 2", icon: IconComponent },
    { label: "Metric 3", value: "Value 3", icon: IconComponent },
  ],
};
```

##### GlassWalletCard

**File**: `src/components/uitripled/glass-wallet-card.tsx`

Glassmorphism crypto wallet card with balance, trend, and action buttons.

**Features**:

- Balance display with currency
- Trend indicators
- Action buttons (Send, Receive, etc.)
- Glassmorphism effects
- Smooth animations

**Dependencies**: `framer-motion`, `react`

**Usage**:

```tsx
import { GlassWalletCard } from "@/components/uitripled/glass-wallet-card";

<GlassWalletCard />;
```

**Use Cases**: Crypto wallets, financial dashboards, balance displays, payment interfaces

##### GlassBlockCard

**File**: `src/components/uitripled/glass-block-card.tsx`

Glassmorphism card component with customizable content blocks.

**Features**:

- Flexible content layout
- Glassmorphism styling
- Reusable block structure
- Smooth animations

**Dependencies**: `framer-motion`, `react`

**Usage**:

```tsx
import { GlassBlockCard } from "@/components/uitripled/glass-block-card";

<GlassBlockCard />;
```

**Use Cases**: Content cards, feature highlights, information blocks

##### DetailTaskCard

**File**: `src/components/uitripled/detail-task-card.tsx`

Task management detail panel with animated assignee chips and editor controls.

**Features**:

- Task title and description editing
- Assignee management with avatar chips
- Priority and status dropdowns
- Due date picker
- Rich text editor controls
- Animated interactions

**Dependencies**: `framer-motion`, `lucide-react`, `react`
**UI Components**: badge, button, card, dropdown-menu, input, textarea

**Usage**:

```tsx
import { DetailTaskCard } from "@/components/uitripled/detail-task-card";

<DetailTaskCard />;
```

**Use Cases**: Task management, project tracking, CRM activities, todo applications

##### EcommerceHighlightCard

**File**: `src/components/uitripled/ecommerce-highlight-card.tsx`

Product spotlight card with blurred border, bundle selector, and fulfillment details.

**Features**:

- Product image display
- Bundle/variant selector
- Price display
- Fulfillment information
- Add to cart button
- Blurred border effects

**Dependencies**: `framer-motion`, `lucide-react`, `react`
**UI Components**: badge, button, card, separator

**Usage**:

```tsx
import { EcommerceHighlightCard } from "@/components/uitripled/ecommerce-highlight-card";

<EcommerceHighlightCard />;
```

**Use Cases**: Product pages, e-commerce highlights, featured items, shopping carts

##### ProjectCard

**File**: `src/components/uitripled/project-card.tsx`

Glassmorphism project card with links, tags, and hover effects.

**Features**:

- Project title and description
- Technology tags
- External links (GitHub, demo, etc.)
- Hover animations
- Glassmorphism styling

**Dependencies**: `framer-motion`, `react`

**Usage**:

```tsx
import { ProjectCard } from "@/components/uitripled/project-card";

<ProjectCard />;
```

**Use Cases**: Portfolio pages, project showcases, case studies, work galleries

##### PreviewCardDetails

**File**: `src/components/uitripled/preview-card-details.tsx`

Card component for previewing detailed information with smooth transitions.

**Features**:

- Preview/detail view toggle
- Smooth expand/collapse animations
- Content preview with "read more"
- Responsive layout

**Dependencies**: `framer-motion`, `react`

**Usage**:

```tsx
import { PreviewCardDetails } from "@/components/uitripled/preview-card-details";

<PreviewCardDetails />;
```

**Use Cases**: Article previews, content cards, expandable information panels

#### Tickets & Event Components

##### CinemaTicket

**File**: `src/components/uitripled/cinema-ticket.tsx`

Cinematic theater ticket with rip effect and barcode.

**Features**:

- Realistic ticket design
- Rip/tear effect
- Barcode display
- Movie details (title, time, seat, etc.)
- Animated interactions

**Dependencies**: `framer-motion`, `react`

**Usage**:

```tsx
import { CinemaTicket } from "@/components/uitripled/cinema-ticket";

<CinemaTicket />;
```

**Use Cases**: Movie booking, cinema apps, event tickets, entertainment platforms

##### TheaterTicket

**File**: `src/components/uitripled/theater-ticket.tsx`

Theater ticket with rip effect and barcode (similar to cinema ticket).

**Features**:

- Theater-specific styling
- Rip effect animation
- Barcode/QR code
- Event details
- Print-ready design

**Dependencies**: `framer-motion`, `react`

**Usage**:

```tsx
import { TheaterTicket } from "@/components/uitripled/theater-ticket";

<TheaterTicket />;
```

**Use Cases**: Theater bookings, live events, concert tickets, show reservations

##### ConferenceTicket

**File**: `src/components/uitripled/conference-ticket.tsx`

Animated conference ticket with glassmorphism effects and holographic details.

**Features**:

- Holographic/3D effects
- Glassmorphism styling
- Conference details (name, date, venue)
- Attendee information
- QR code integration
- Premium animations

**Dependencies**: `framer-motion`, `react`

**Usage**:

```tsx
import { ConferenceTicket } from "@/components/uitripled/conference-ticket";

<ConferenceTicket />;
```

**Use Cases**: Conference registration, event passes, tech meetups, professional events

#### Dashboard & Data Components

##### Dashboard

**File**: `src/components/uitripled/dashboard.tsx`

Interactive stock portfolio dashboard with status cards, data table, and detailed stock information modal.

**Features**:

- Portfolio overview cards
- Stock data table
- Real-time price updates
- Detailed stock modal
- Performance charts
- Status badges

**Dependencies**: `framer-motion`, `lucide-react`, `react`
**UI Components**: badge, button

**Usage**:

```tsx
import { Dashboard } from "@/components/uitripled/dashboard";

<Dashboard />;
```

**Use Cases**: Stock portfolios, financial dashboards, investment tracking, analytics platforms

##### WeatherDashboard

**File**: `src/components/uitripled/weather-dashboard.tsx`

Immersive weather dashboard with hourly charting, weekly outlook, and live air-quality alerts.

**Features**:

- Current weather display
- Hourly forecast chart
- Weekly outlook
- Air quality indicators
- Temperature trends
- Weather alerts
- Location-based data

**Dependencies**: `framer-motion`, `lucide-react`, `react`
**UI Components**: badge, button

**Usage**:

```tsx
import { WeatherDashboard } from "@/components/uitripled/weather-dashboard";

<WeatherDashboard />;
```

**Use Cases**: Weather apps, environmental monitoring, travel planning, outdoor activity apps

##### AccessibleCashFlowChart

**File**: `src/components/uitripled/accessible-cash-flow-chart.tsx`

Accessible cash flow chart with keyboard navigation and screen reader support.

**Features**:

- Cash flow visualization
- Accessible data representation
- Keyboard navigation
- Screen reader compatible
- Interactive tooltips
- Responsive design

**Dependencies**: `framer-motion`, `react`

**Usage**:

```tsx
import { AccessibleCashFlowChart } from "@/components/uitripled/accessible-cash-flow-chart";

<AccessibleCashFlowChart />;
```

**Use Cases**: Financial reports, accounting dashboards, business analytics, budget tracking

#### Lists & Interactive Components

##### AnimatedList

**File**: `src/components/uitripled/animated-list.tsx`

List with staggered item animations and checkmarks.

**Features**:

- Staggered entrance animations
- Checkmark indicators
- Smooth transitions
- Customizable items
- Responsive layout

**Dependencies**: `framer-motion`, `lucide-react`
**UI Components**: card

**Usage**:

```tsx
import { AnimatedList } from "@/components/uitripled/animated-list";

<AnimatedList />;
```

**Use Cases**: Feature lists, checklist displays, onboarding steps, progress indicators

##### DraggableList

**File**: `src/components/uitripled/draggable-list.tsx`

Reorderable list with drag and drop spring physics.

**Features**:

- Drag and drop reordering
- Spring physics animations
- Touch support
- Visual feedback during drag
- Persistent order state

**Dependencies**: `framer-motion`, `lucide-react`, `react`
**UI Components**: button

**Usage**:

```tsx
import { DraggableList } from "@/components/uitripled/draggable-list";

<DraggableList />;
```

**Use Cases**: Task prioritization, playlist management, sortable tables, customizable dashboards

#### Navigation & Interaction Components

##### AnimatedProfileMenu

**File**: `src/components/uitripled/animated-profile-menu.tsx`

Floating profile avatar that reveals quick action cards with smooth motion.

**Features**:

- Profile avatar display
- Expandable action menu
- Smooth animations
- Quick actions (profile, settings, logout)
- Hover/click interactions

**Dependencies**: `framer-motion`, `lucide-react`, `react`
**UI Components**: avatar

**Usage**:

```tsx
import { AnimatedProfileMenu } from "@/components/uitripled/animated-profile-menu";

<AnimatedProfileMenu />;
```

**Use Cases**: User menus, profile dropdowns, navigation headers, account management

##### ExpandingSearchDock

**File**: `src/components/uitripled/expanding-search-dock.tsx`

Minimal search icon that expands into full input with blur effects.

**Features**:

- Compact icon state
- Expands to full search input
- Backdrop blur effect
- Smooth transitions
- Auto-focus on expand
- Keyboard shortcuts

**Dependencies**: `framer-motion`, `lucide-react`, `react`
**UI Components**: button

**Usage**:

```tsx
import { ExpandingSearchDock } from "@/components/uitripled/expanding-search-dock";

<ExpandingSearchDock />;
```

**Use Cases**: Navigation bars, toolbars, mobile interfaces, space-constrained layouts

##### NotificationCenter

**File**: `src/components/uitripled/notification-center.tsx`

Multi-variant notification stack with accessible announcements, actions, and motion states.

**Features**:

- Multiple notification types (success, error, info, warning)
- Action buttons
- Dismiss functionality
- Stack management
- Accessible announcements
- Auto-dismiss timers
- Motion states

**Dependencies**: `framer-motion`, `lucide-react`, `react`
**UI Components**: button, card

**Usage**:

```tsx
import { NotificationCenter } from "@/components/uitripled/notification-center";

<NotificationCenter />;
```

**Use Cases**: Toast notifications, alert systems, user feedback, status updates

#### Sliders & Carousels

##### CardsSlider

**File**: `src/components/uitripled/cards-slider.tsx`

Liquid smooth draggable cards slider with shadcn/ui styling and framer-motion animations.

**Features**:

- Smooth drag interactions
- Momentum scrolling
- Snap to card
- Touch support
- Responsive design
- Navigation indicators

**Dependencies**: `framer-motion`, `react`

**Usage**:

```tsx
import { CardsSlider } from "@/components/uitripled/cards-slider";

<CardsSlider />;
```

**Use Cases**: Image galleries, product showcases, testimonials, portfolio displays

##### AccessibleImageSliderCard

**File**: `src/components/uitripled/accessible-image-slider-card.tsx`

Accessible image slider with keyboard navigation and screen reader support.

**Features**:

- Keyboard navigation (arrow keys)
- Screen reader announcements
- Focus management
- Image captions
- Navigation controls
- Accessible indicators

**Dependencies**: `framer-motion`, `react`

**Usage**:

```tsx
import { AccessibleImageSliderCard } from "@/components/uitripled/accessible-image-slider-card";

<AccessibleImageSliderCard />;
```

**Use Cases**: Image galleries, product photos, before/after comparisons, portfolio showcases

#### Page Sections & Layouts

##### CTABannerSection

**File**: `src/components/uitripled/cta-banner-section.tsx`

Animated call-to-action banner with gradient background and button animations.

**Features**:

- Gradient background effects
- Animated CTA buttons
- Headline and subheadline
- Multiple button variants
- Responsive layout
- Eye-catching animations

**Dependencies**: `framer-motion`, `lucide-react`, `react`
**UI Components**: button, card

**Usage**:

```tsx
import { CTABannerSection } from "@/components/uitripled/cta-banner-section";

<CTABannerSection />;
```

**Use Cases**: Landing pages, marketing sections, conversion banners, promotional content

##### FAQSection

**File**: `src/components/uitripled/faq-section.tsx`

Animated FAQ section with expandable questions and smooth transitions.

**Features**:

- Expandable/collapsible questions
- Smooth accordion animations
- Search/filter capability
- Organized categories
- Accessible keyboard navigation

**Dependencies**: `framer-motion`, `lucide-react`, `react`
**UI Components**: card

**Usage**:

```tsx
import { FAQSection } from "@/components/uitripled/faq-section";

<FAQSection />;
```

**Use Cases**: Help pages, support sections, documentation, product information

##### PricingSection

**File**: `src/components/uitripled/pricing-section.tsx`

Animated pricing cards with hover effects and feature lists.

**Features**:

- Multiple pricing tiers
- Feature comparison lists
- Hover animations
- Popular/recommended badges
- CTA buttons
- Responsive grid layout

**Dependencies**: `framer-motion`, `lucide-react`, `react`
**UI Components**: badge, button, card

**Usage**:

```tsx
import { PricingSection } from "@/components/uitripled/pricing-section";

<PricingSection />;
```

**Use Cases**: Pricing pages, subscription plans, product tiers, SaaS pricing

##### DynamicSpotlightCTA

**File**: `src/components/uitripled/dynamic-spotlight-cta.tsx`

Floating spotlight follows cursor to reveal gradient CTA text with premium effects.

**Features**:

- Cursor-following spotlight
- Gradient text reveal
- Premium visual effects
- Smooth cursor tracking
- Responsive to mouse movement
- Paywall/premium feel

**Dependencies**: `framer-motion`, `react`

**Usage**:

```tsx
import { DynamicSpotlightCTA } from "@/components/uitripled/dynamic-spotlight-cta";

<DynamicSpotlightCTA />;
```

**Use Cases**: Premium content teasers, paywall banners, hero sections, interactive CTAs

#### Content & Typography

##### BlogTypography

**File**: `src/components/uitripled/blog-typography.tsx`

Beautiful blog post typography with text, links, images, blockquotes, and code examples.

**Features**:

- Optimized typography styles
- Styled headings (h1-h6)
- Formatted paragraphs
- Styled links
- Blockquote styling
- Code block formatting
- Image captions
- List styling

**Dependencies**: `framer-motion`, `react`
**UI Components**: button

**Usage**:

```tsx
import { BlogTypography } from "@/components/uitripled/blog-typography";

<BlogTypography />;
```

**Use Cases**: Blog posts, articles, documentation, content pages, markdown rendering

#### Chat & Communication

##### AIChatInterface

**File**: `src/components/uitripled/ai-chat-interface.tsx`

Chat input with attachments, model selector, and accessible controls.

**Features**:

- Message input with auto-resize
- File attachment support
- AI model selector
- Send button with loading state
- Keyboard shortcuts (Enter to send)
- Accessible controls
- Character/token counter

**Dependencies**: `framer-motion`, `lucide-react`, `react`
**UI Components**: button, textarea

**Usage**:

```tsx
import { AIChatInterface } from "@/components/uitripled/ai-chat-interface";

<AIChatInterface />;
```

**Use Cases**: AI chat applications, customer support, messaging interfaces, chatbots

---

### Component Categories Summary

**Authentication (3)**: GlassForgotPasswordCard, GlassSignInCard, GlassSignUpCard
**Cards (7)**: GlassmorphismStatisticsCard, GlassWalletCard, GlassBlockCard, DetailTaskCard, EcommerceHighlightCard, ProjectCard, PreviewCardDetails
**Tickets (3)**: CinemaTicket, TheaterTicket, ConferenceTicket
**Dashboards (3)**: Dashboard, WeatherDashboard, AccessibleCashFlowChart
**Lists (2)**: AnimatedList, DraggableList
**Navigation (3)**: AnimatedProfileMenu, ExpandingSearchDock, NotificationCenter
**Sliders (2)**: CardsSlider, AccessibleImageSliderCard
**Sections (4)**: CTABannerSection, FAQSection, PricingSection, DynamicSpotlightCTA
**Content (1)**: BlogTypography
**Chat (1)**: AIChatInterface

**Total: 29 Premium Components**

### Component Usage Patterns

#### Button Variants

```tsx
<Button variant="default">Default</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
```

#### Button Sizes

```tsx
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Icon /></Button>
```

#### Card Structure

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
    <CardAction>
      <Button>Action</Button>
    </CardAction>
  </CardHeader>
  <CardContent>Content goes here</CardContent>
  <CardFooter>Footer content</CardFooter>
</Card>
```

#### Sidebar Implementation

```tsx
<SidebarProvider>
  <Sidebar>
    <SidebarHeader>Header</SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Group</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>Item</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>Footer</SidebarFooter>
  </Sidebar>
  <SidebarInset>Main content</SidebarInset>
</SidebarProvider>
```

## 🔌 Providers

### Theme Provider

**File**: `src/providers/theme.tsx`

Wraps `next-themes` for dark mode support.

**Features**:

- System theme detection
- Manual theme switching
- Persistent theme preference
- No flash on page load

**Configuration** (in `layout.tsx`):

```tsx
<ThemeProvider
  attribute="class" // Uses class-based dark mode
  defaultTheme="dark" // Default to dark theme
  enableSystem // Allow system preference
  disableTransitionOnChange // Prevent transition flicker
>
  {children}
</ThemeProvider>
```

**Usage in Components**:

```tsx
import { useTheme } from "next-themes";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle Theme
    </button>
  );
}
```

### Tooltip Provider

**File**: `@/components/ui/tooltip`

Provides tooltip context for the entire app.

**Configuration**:

```tsx
<TooltipProvider>{children}</TooltipProvider>
```

### Toast Provider

**File**: `@/components/ui/sonner`

Sonner toast notifications are automatically available via the `<Toaster />` component in the root layout.

**Usage**:

```tsx
import { toast } from "sonner";

toast.success("Success message");
toast.error("Error message");
toast.info("Info message");
toast.warning("Warning message");
```

## 🪝 Hooks

### useIsMobile

**File**: `src/hooks/use-mobile.ts`

Detects if the viewport is mobile-sized (< 768px).

**Usage**:

```tsx
import { useIsMobile } from "@/hooks/use-mobile";

function Component() {
  const isMobile = useIsMobile();

  return <div>{isMobile ? <MobileView /> : <DesktopView />}</div>;
}
```

**Features**:

- Reactive to window resize
- SSR-safe (returns undefined initially)
- Uses matchMedia API
- Breakpoint: 768px

### useSidebar

**File**: `@/components/ui/sidebar`

Manages sidebar state (from SidebarProvider).

**Usage**:

```tsx
import { useSidebar } from "@/components/ui/sidebar";

function Component() {
  const {
    state, // "expanded" | "collapsed"
    open, // boolean
    setOpen, // (open: boolean) => void
    openMobile, // boolean
    setOpenMobile, // (open: boolean) => void
    isMobile, // boolean
    toggleSidebar, // () => void
  } = useSidebar();

  return <button onClick={toggleSidebar}>Toggle</button>;
}
```

## 🗄️ Database

### Overview

The template uses **Drizzle ORM** with **Turso** (LibSQL) for a fully type-safe, edge-ready database solution. Turso provides a SQLite-compatible database that can be deployed globally with low latency.

### Database Stack

- **Drizzle ORM 0.45.1** - Type-safe ORM with excellent TypeScript support
- **@libsql/client 0.17.0** - Official Turso/LibSQL client
- **Drizzle Kit 0.31.9** - CLI for schema management and migrations
- **SQLite dialect** - Using Turso's SQLite-compatible engine

### Configuration

**File**: `drizzle.config.ts`

```typescript
import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

config({ path: ".env.local" });

export default defineConfig({
  schema: "./src/lib/db/schema.ts",
  out: "./src/lib/db/migrations",
  dialect: "turso",
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  },
  verbose: true,
  strict: true,
});
```

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
TURSO_DATABASE_URL=libsql://your-database.turso.io
TURSO_AUTH_TOKEN=your-auth-token
```

**Getting Turso Credentials**:

1. Install Turso CLI: `curl -sSfL https://get.tur.so/install.sh | bash`
2. Sign up: `turso auth signup`
3. Create database: `turso db create your-database-name`
4. Get URL: `turso db show your-database-name --url`
5. Create token: `turso db tokens create your-database-name`

### Database Client

**File**: `src/lib/db/client.ts`

```typescript
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";

const client = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

export const db = drizzle(client, { schema });
export type DB = typeof db;
```

### Database Schema

**File**: `src/lib/db/schema.ts`

The schema file defines your database tables using Drizzle's schema builder. It includes:

- **UUID Primary Keys** - All IDs are UUIDs stored as TEXT
- **Timestamps** - Automatic `createdAt` and `updatedAt` fields
- **Type Safety** - Full TypeScript inference for queries
- **SQLite Compatibility** - Uses SQLite data types (TEXT, INTEGER, REAL)

**Example Schema**:

```typescript
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

const timestamps = {
  createdAt: text("created_at")
    .notNull()
    .default(sql`(datetime('now'))`),
  updatedAt: text("updated_at")
    .notNull()
    .default(sql`(datetime('now'))`),
};

export const users = sqliteTable("users", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  email: text("email").notNull().unique(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  role: text("role", { enum: ["admin", "member", "viewer"] })
    .notNull()
    .default("member"),
  avatarUrl: text("avatar_url"),
  isActive: integer("is_active", { mode: "boolean" }).notNull().default(true),
  ...timestamps,
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
```

### Database Exports

**File**: `src/lib/db/index.ts`

```typescript
export { db } from "./client";
export type { DB } from "./client";
export * from "./schema";
```

### Usage in Your App

#### Querying Data

```typescript
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

// Select all users
const allUsers = await db.select().from(users);

// Select with conditions
const activeUsers = await db
  .select()
  .from(users)
  .where(eq(users.isActive, true));

// Select specific user
const user = await db.select().from(users).where(eq(users.id, userId));
```

#### Inserting Data

```typescript
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";

// Insert single user
const newUser = await db
  .insert(users)
  .values({
    email: "user@example.com",
    firstName: "John",
    lastName: "Doe",
    role: "member",
  })
  .returning();

// Insert multiple users
const newUsers = await db
  .insert(users)
  .values([
    { email: "user1@example.com", firstName: "John", lastName: "Doe" },
    { email: "user2@example.com", firstName: "Jane", lastName: "Smith" },
  ])
  .returning();
```

#### Updating Data

```typescript
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

// Update user
const updated = await db
  .update(users)
  .set({
    firstName: "Jane",
    updatedAt: new Date().toISOString(),
  })
  .where(eq(users.id, userId))
  .returning();
```

#### Deleting Data

```typescript
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

// Delete user
await db.delete(users).where(eq(users.id, userId));
```

#### Using in Server Components

```typescript
// app/users/page.tsx
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";

export default async function UsersPage() {
  const allUsers = await db.select().from(users);

  return (
    <div>
      {allUsers.map((user) => (
        <div key={user.id}>
          {user.firstName} {user.lastName}
        </div>
      ))}
    </div>
  );
}
```

#### Using in API Routes

```typescript
// app/api/users/route.ts
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { NextResponse } from "next/server";

export async function GET() {
  const allUsers = await db.select().from(users);
  return NextResponse.json(allUsers);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newUser = await db.insert(users).values(body).returning();
  return NextResponse.json(newUser[0]);
}
```

### Migrations

#### Generate Migration

After modifying your schema, generate a migration:

```bash
pnpm drizzle-kit generate
```

This creates SQL migration files in `src/lib/db/migrations/`.

#### Push Schema to Database

Push your schema changes directly to the database (useful for development):

```bash
pnpm drizzle-kit push
```

#### Apply Migrations

Apply pending migrations:

```bash
pnpm drizzle-kit migrate
```

#### Drizzle Studio

Launch Drizzle Studio to visually browse and edit your database:

```bash
pnpm drizzle-kit studio
```

Opens at `https://local.drizzle.studio`

### SQLite Data Type Guidelines

When working with Turso/LibSQL (SQLite dialect):

- **IDs**: Use `text("id")` for UUIDs
- **Strings**: Use `text("column_name")`
- **Numbers**: Use `integer("column_name")` for whole numbers
- **Decimals**: Use `real("column_name")` for floating point
- **Currency**: Use `integer("amount_cents")` for cents or `text("amount")` for precision
- **Booleans**: Use `integer("is_active", { mode: "boolean" })`
- **Dates**: Use `text("created_at")` with ISO strings
- **JSON**: Use `text("data", { mode: "json" })`
- **Enums**: Use `text("role", { enum: ["admin", "user"] })`

### Best Practices

1. **Always use transactions** for multiple related operations
2. **Use prepared statements** for repeated queries
3. **Index frequently queried columns** for better performance
4. **Use relations** for type-safe joins
5. **Validate data** before inserting into the database
6. **Use `.returning()`** to get inserted/updated data
7. **Handle errors** gracefully with try-catch blocks
8. **Use environment variables** for database credentials
9. **Never commit** `.env.local` to version control
10. **Run migrations** in a CI/CD pipeline before deployment

### Type Safety

Drizzle provides full TypeScript inference:

```typescript
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";

// TypeScript knows the exact shape of the result
const result = await db.select().from(users);
// result: { id: string; email: string; firstName: string; ... }[]

// TypeScript validates insert data
await db.insert(users).values({
  email: "test@example.com",
  firstName: "John",
  lastName: "Doe",
  // TypeScript error if required fields are missing
});
```

### Resources

- [Drizzle ORM Documentation](https://orm.drizzle.team/)
- [Turso Documentation](https://docs.turso.tech/)
- [Drizzle Kit CLI](https://orm.drizzle.team/kit-docs/overview)
- [LibSQL Client](https://github.com/tursodatabase/libsql-client-ts)

## 🎨 Styling

### Utility Function: cn()

**File**: `src/lib/utils.ts`

Combines `clsx` and `tailwind-merge` for conflict-free class merging.

**Usage**:

```tsx
import { cn } from "@/lib/utils";

<div
  className={cn(
    "base-classes",
    condition && "conditional-classes",
    "override-classes",
  )}
/>;
```

### Global Styles

**File**: `src/app/globals.css`

Contains:

- Tailwind CSS imports
- Design tokens (CSS variables)
- Base layer styles
- Custom animations
- Theme definitions

### Tailwind Configuration

The project uses **Tailwind CSS v4** with inline theme configuration in `globals.css`.

**Key Features**:

- CSS variable-based theming
- Custom color palette
- Font family tokens
- Border radius system
- Dark mode support via `@custom-variant dark`

### Adding Custom Styles

1. **Use Tailwind utilities** (preferred):

```tsx
<div className="bg-primary text-primary-foreground rounded-lg p-4" />
```

2. **Use CSS variables**:

```tsx
<div style={{ backgroundColor: "var(--brand-primary)" }} />
```

3. **Extend in globals.css**:

```css
@layer base {
  .custom-class {
    @apply bg-primary text-white;
  }
}
```

## ⚙️ Configuration

### package.json

**Key Scripts**:

- `dev`: Start development server
- `build`: Build for production
- `start`: Start production server
- `lint`: Run Biome linter
- `format`: Format code with Biome

**Package Manager**: pnpm 10.18.0
**Node Version**: >= 22.21.0

### components.json

shadcn/ui configuration:

```json
{
  "style": "new-york", // Component style variant
  "rsc": true, // React Server Components
  "tsx": true, // TypeScript
  "tailwind": {
    "config": "",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide", // Icon library
  "rtl": false, // Right-to-left support
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

### tsconfig.json

TypeScript configuration with path aliases:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "strict": true,
    "paths": {
      "@/*": ["./src/*"] // Import alias
    }
  }
}
```

### biome.json

Biome linter and formatter configuration:

```json
{
  "formatter": {
    "indentStyle": "space",
    "indentWidth": 2
  },
  "linter": {
    "rules": {
      "recommended": true
    },
    "domains": {
      "next": "recommended",
      "react": "recommended"
    }
  }
}
```

### next.config.ts

Next.js configuration (currently minimal, ready for customization).

## 📚 Development Guidelines

### For AIWA Agent

When building CRMs with this template:

1. **Use Existing Components**: Leverage the 40+ shadcn/ui components before creating custom ones
2. **Follow Naming Conventions**: Use kebab-case for files, PascalCase for components
3. **Maintain Type Safety**: Always use TypeScript, avoid `any` types
4. **Respect Design Tokens**: Use CSS variables and Tailwind utilities
5. **Keep Accessibility**: All components are accessible by default, maintain ARIA labels
6. **Mobile-First**: Design for mobile, enhance for desktop
7. **Dark Mode**: Test both light and dark themes
8. **Use Path Aliases**: Import with `@/` prefix (e.g., `@/components/ui/button`)

### Component Creation Pattern

```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

interface ComponentProps extends React.ComponentProps<"div"> {
  variant?: "default" | "custom";
}

export function Component({
  className,
  variant = "default",
  ...props
}: ComponentProps) {
  return (
    <div
      className={cn(
        "base-classes",
        variant === "custom" && "custom-classes",
        className,
      )}
      {...props}
    />
  );
}
```

### Adding New shadcn/ui Components

```bash
# Install a new component
pnpm dlx shadcn@latest add [component-name]

# Example: Add the command component
pnpm dlx shadcn@latest add command
```

### Database Setup (Drizzle ORM)

The template includes Drizzle ORM. To set up:

1. Create schema in `src/db/schema.ts`
2. Configure database connection
3. Run migrations with `drizzle-kit`

```bash
# Generate migrations
pnpm drizzle-kit generate

# Run migrations
pnpm drizzle-kit migrate
```

## 🏗 Building for Production

### Build Process

```bash
# Create production build
pnpm build

# Start production server
pnpm start
```

### Optimization Features

- **Automatic Code Splitting**: Next.js splits code by route
- **Image Optimization**: Use `next/image` for optimized images
- **Font Optimization**: Google Fonts are automatically optimized
- **CSS Optimization**: Tailwind purges unused styles
- **Tree Shaking**: Unused code is removed

### Environment Variables

Create `.env.local` for environment-specific variables:

```env
# Database
DATABASE_URL=

# API Keys
NEXT_PUBLIC_API_URL=

# Add your variables here
```

**Note**: `.env*` files are gitignored by default.

## 📖 Additional Resources

### shadcn/ui Documentation

- Official Docs: https://ui.shadcn.com
- Component Examples: https://ui.shadcn.com/docs/components
- Theming Guide: https://ui.shadcn.com/docs/theming
- CLI Reference: https://ui.shadcn.com/docs/cli

### Next.js Documentation

- Next.js Docs: https://nextjs.org/docs
- App Router: https://nextjs.org/docs/app
- API Reference: https://nextjs.org/docs/app/api-reference

### Tailwind CSS

- Tailwind Docs: https://tailwindcss.com/docs
- Tailwind v4: https://tailwindcss.com/blog/tailwindcss-v4-alpha

### Other Libraries

- Framer Motion: https://www.framer.com/motion
- Radix UI: https://www.radix-ui.com
- Drizzle ORM: https://orm.drizzle.team
- Lucide Icons: https://lucide.dev

## 🤝 Contributing

This template is maintained for AIWA Agent usage. When extending:

1. Maintain existing patterns and conventions
2. Document new components thoroughly
3. Test in both light and dark modes
4. Ensure mobile responsiveness
5. Keep accessibility standards

## 📝 License

Private template for AIWA Agent usage.

**Author**: usmanunfolds@alabura.com

---

**Version**: 1.0.0  
**Last Updated**: 2026-02-09  
**Template Status**: Production Ready ✅
