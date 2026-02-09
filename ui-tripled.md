---
title: Dashboard
description: Interactive stock portfolio dashboard with status cards, data table, and detailed stock information modal
component: true
---

```tsx
"use client";

import * as React from "react";

import { Dashboard } from "@/components/components/stocks-dashboard/dashboard.tsx";

export function DashboardDemo() {
  return <Dashboard />;
}
```

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add @uitripled/dashboard
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Add the required components to your project.</Step>

The `Dashboard` component uses the following components. Make sure you have them installed in your project.

- badge
- button

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="dashboard" title="@/components/components/stocks-dashboard/dashboard.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { Dashboard } from "@/components/components/stocks-dashboard/dashboard.tsx";
```

```tsx showLineNumbers
<Dashboard />
```

## Component Details

- **Category**: blocks
- **Tags**: dashboard, stocks, table, portfolio, data, modal, shadcn

### Technical Specifications

**Dependencies**:

- `framer-motion`
- `lucide-react`
- `react`

**UI Components**:

- badge
- button

This component uses **Framer Motion** for animations and motion effects.

This component is built on top of **shadcn/ui** component primitives.

## Customization

This component can be customized by modifying the following:

- **Styling**: The component uses Tailwind CSS for styling. Customize colors, spacing, and other design tokens through Tailwind classes.
- **Props**: Pass custom props to configure the component's behavior and appearance.
- **Variants**: Create custom variants by extending the component's base styles.

## Accessibility

The component follows accessibility best practices:

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Examples

### Basic Example

```tsx
"use client";

import * as React from "react";

import { Dashboard } from "@/components/components/stocks-dashboard/dashboard.tsx";

export function BasicExample() {
  return <Dashboard />;
}
```

## API Reference

This component is part of the UI TripleD component library, a collection of production-ready components built with Framer Motion, shadcn/ui, and Tailwind CSS.

## Best Practices

1. **Performance**: Consider lazy loading if used in large lists or below-the-fold content.
2. **Theming**: Ensure your theme configuration includes the necessary CSS variables.
3. **Testing**: Test keyboard navigation and screen reader compatibility.
4. **Customization**: Use props for configuration rather than modifying source code.

## Related Components

- [badge](/docs/components/badge)
- [button](/docs/components/button)

---

---

title: Notification Center
description: Multi-variant notification stack with accessible announcements, actions, and motion states
component: true

---

```tsx
"use client";

import * as React from "react";

import { NotificationCenter } from "@/components/components/notifications/notification-center.tsx";

export function NotificationCenterDemo() {
  return <NotificationCenter />;
}
```

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add @uitripled/notification-center
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Add the required components to your project.</Step>

The `Notification Center` component uses the following components. Make sure you have them installed in your project.

- button
- card

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="notification-center" title="@/components/components/notifications/notification-center.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { NotificationCenter } from "@/components/components/notifications/notification-center.tsx";
```

```tsx showLineNumbers
<NotificationCenter />
```

## Component Details

- **Category**: components
- **Tags**: notification, alerts, toast, stack, accessible, shadcn

### Technical Specifications

**Dependencies**:

- `framer-motion`
- `lucide-react`
- `react`

**UI Components**:

- button
- card

This component uses **Framer Motion** for animations and motion effects.

This component is built on top of **shadcn/ui** component primitives.

## Customization

This component can be customized by modifying the following:

- **Styling**: The component uses Tailwind CSS for styling. Customize colors, spacing, and other design tokens through Tailwind classes.
- **Props**: Pass custom props to configure the component's behavior and appearance.
- **Variants**: Create custom variants by extending the component's base styles.

## Accessibility

The component follows accessibility best practices:

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Examples

### Basic Example

```tsx
"use client";

import * as React from "react";

import { NotificationCenter } from "@/components/components/notifications/notification-center.tsx";

export function BasicExample() {
  return <NotificationCenter />;
}
```

## API Reference

This component is part of the UI TripleD component library, a collection of production-ready components built with Framer Motion, shadcn/ui, and Tailwind CSS.

## Best Practices

1. **Performance**: Consider lazy loading if used in large lists or below-the-fold content.
2. **Theming**: Ensure your theme configuration includes the necessary CSS variables.
3. **Testing**: Test keyboard navigation and screen reader compatibility.
4. **Customization**: Use props for configuration rather than modifying source code.

## Related Components

- [button](/docs/components/button)
- [card](/docs/components/card)

---

---

title: Weather Dashboard
description: Immersive weather dashboard with hourly charting, weekly outlook, and live air-quality alerts
component: true

---

```tsx
"use client";

import * as React from "react";

import { WeatherDashboard } from "@/components/components/weather/weather-dashboard.tsx";

export function WeatherDashboardDemo() {
  return <WeatherDashboard />;
}
```

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add @uitripled/weather-dashboard
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Add the required components to your project.</Step>

The `Weather Dashboard` component uses the following components. Make sure you have them installed in your project.

- badge
- button

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="weather-dashboard" title="@/components/components/weather/weather-dashboard.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { WeatherDashboard } from "@/components/components/weather/weather-dashboard.tsx";
```

```tsx showLineNumbers
<WeatherDashboard />
```

## Component Details

- **Category**: components
- **Tags**: weather, dashboard, forecast, charts, environment, data

### Technical Specifications

**Dependencies**:

- `framer-motion`
- `lucide-react`
- `react`

**UI Components**:

- badge
- button

This component uses **Framer Motion** for animations and motion effects.

This component is built on top of **shadcn/ui** component primitives.

## Customization

This component can be customized by modifying the following:

- **Styling**: The component uses Tailwind CSS for styling. Customize colors, spacing, and other design tokens through Tailwind classes.
- **Props**: Pass custom props to configure the component's behavior and appearance.
- **Variants**: Create custom variants by extending the component's base styles.

## Accessibility

The component follows accessibility best practices:

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Examples

### Basic Example

```tsx
"use client";

import * as React from "react";

import { WeatherDashboard } from "@/components/components/weather/weather-dashboard.tsx";

export function BasicExample() {
  return <WeatherDashboard />;
}
```

## API Reference

This component is part of the UI TripleD component library, a collection of production-ready components built with Framer Motion, shadcn/ui, and Tailwind CSS.

## Best Practices

1. **Performance**: Consider lazy loading if used in large lists or below-the-fold content.
2. **Theming**: Ensure your theme configuration includes the necessary CSS variables.
3. **Testing**: Test keyboard navigation and screen reader compatibility.
4. **Customization**: Use props for configuration rather than modifying source code.

## Related Components

- [badge](/docs/components/badge)
- [button](/docs/components/button)

---

---

title: Animated List
description: List with staggered item animations
component: true

---

```tsx
"use client";

import * as React from "react";

import { AnimatedList } from "@/components/components/lists/animated-list.tsx";

export function AnimatedListDemo() {
  return <AnimatedList />;
}
```

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add @uitripled/animated-list
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Add the required components to your project.</Step>

The `Animated List` component uses the following components. Make sure you have them installed in your project.

- card

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="animated-list" title="@/components/components/lists/animated-list.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { AnimatedList } from "@/components/components/lists/animated-list.tsx";
```

```tsx showLineNumbers
<AnimatedList />
```

## Component Details

- **Category**: components
- **Tags**: list, stagger, checkmarks, shadcn

### Technical Specifications

**Dependencies**:

- `framer-motion`
- `lucide-react`

**UI Components**:

- card

This component uses **Framer Motion** for animations and motion effects.

This component is built on top of **shadcn/ui** component primitives.

## Customization

This component can be customized by modifying the following:

- **Styling**: The component uses Tailwind CSS for styling. Customize colors, spacing, and other design tokens through Tailwind classes.
- **Props**: Pass custom props to configure the component's behavior and appearance.
- **Variants**: Create custom variants by extending the component's base styles.

## Accessibility

The component follows accessibility best practices:

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Examples

### Basic Example

```tsx
"use client";

import * as React from "react";

import { AnimatedList } from "@/components/components/lists/animated-list.tsx";

export function BasicExample() {
  return <AnimatedList />;
}
```

## API Reference

This component is part of the UI TripleD component library, a collection of production-ready components built with Framer Motion, shadcn/ui, and Tailwind CSS.

## Best Practices

1. **Performance**: Consider lazy loading if used in large lists or below-the-fold content.
2. **Theming**: Ensure your theme configuration includes the necessary CSS variables.
3. **Testing**: Test keyboard navigation and screen reader compatibility.
4. **Customization**: Use props for configuration rather than modifying source code.

## Related Components

- [card](/docs/components/card)

---

---

title: Animated Profile Menu
description: Floating profile avatar that reveals quick action cards with smooth motion
component: true

---

```tsx
"use client";

import * as React from "react";

import { AnimatedProfileMenu } from "@/components/navigation/animated-profile-menu.tsx";

export function AnimatedProfileMenuDemo() {
  return <AnimatedProfileMenu />;
}
```

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add @uitripled/animated-profile-menu
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Add the required components to your project.</Step>

The `Animated Profile Menu` component uses the following components. Make sure you have them installed in your project.

- avatar

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="animated-profile-menu" title="@/components/navigation/animated-profile-menu.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { AnimatedProfileMenu } from "@/components/navigation/animated-profile-menu.tsx";
```

```tsx showLineNumbers
<AnimatedProfileMenu />
```

## Component Details

- **Category**: components
- **Tags**: profile, menu, navigation, avatar, shadcn

### Technical Specifications

**Dependencies**:

- `framer-motion`
- `lucide-react`
- `react`

**UI Components**:

- avatar

This component uses **Framer Motion** for animations and motion effects.

This component is built on top of **shadcn/ui** component primitives.

## Customization

This component can be customized by modifying the following:

- **Styling**: The component uses Tailwind CSS for styling. Customize colors, spacing, and other design tokens through Tailwind classes.
- **Props**: Pass custom props to configure the component's behavior and appearance.
- **Variants**: Create custom variants by extending the component's base styles.

## Accessibility

The component follows accessibility best practices:

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Examples

### Basic Example

```tsx
"use client";

import * as React from "react";

import { AnimatedProfileMenu } from "@/components/navigation/animated-profile-menu.tsx";

export function BasicExample() {
  return <AnimatedProfileMenu />;
}
```

## API Reference

This component is part of the UI TripleD component library, a collection of production-ready components built with Framer Motion, shadcn/ui, and Tailwind CSS.

## Best Practices

1. **Performance**: Consider lazy loading if used in large lists or below-the-fold content.
2. **Theming**: Ensure your theme configuration includes the necessary CSS variables.
3. **Testing**: Test keyboard navigation and screen reader compatibility.
4. **Customization**: Use props for configuration rather than modifying source code.

## Related Components

- [avatar](/docs/components/avatar)

---

---

title: AI Chat Interface
description: Chat input with attachments, model selector, and accessible controls
component: true

---

```tsx
"use client";

import * as React from "react";

import { AIChatInterface } from "@/components/components/chat/ai-chat-interface.tsx";

export function AIChatInterfaceDemo() {
  return <AIChatInterface />;
}
```

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add @uitripled/ai-chat-interface
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Add the required components to your project.</Step>

The `AI Chat Interface` component uses the following components. Make sure you have them installed in your project.

- button
- textarea

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="ai-chat-interface" title="@/components/components/chat/ai-chat-interface.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { AIChatInterface } from "@/components/components/chat/ai-chat-interface.tsx";
```

```tsx showLineNumbers
<AIChatInterface />
```

## Component Details

- **Category**: components
- **Tags**: chat, ai, input, attachments, shadcn

### Technical Specifications

**Dependencies**:

- `framer-motion`
- `lucide-react`
- `react`

**UI Components**:

- button
- textarea

This component uses **Framer Motion** for animations and motion effects.

This component is built on top of **shadcn/ui** component primitives.

## Customization

This component can be customized by modifying the following:

- **Styling**: The component uses Tailwind CSS for styling. Customize colors, spacing, and other design tokens through Tailwind classes.
- **Props**: Pass custom props to configure the component's behavior and appearance.
- **Variants**: Create custom variants by extending the component's base styles.

## Accessibility

The component follows accessibility best practices:

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Examples

### Basic Example

```tsx
"use client";

import * as React from "react";

import { AIChatInterface } from "@/components/components/chat/ai-chat-interface.tsx";

export function BasicExample() {
  return <AIChatInterface />;
}
```

## API Reference

This component is part of the UI TripleD component library, a collection of production-ready components built with Framer Motion, shadcn/ui, and Tailwind CSS.

## Best Practices

1. **Performance**: Consider lazy loading if used in large lists or below-the-fold content.
2. **Theming**: Ensure your theme configuration includes the necessary CSS variables.
3. **Testing**: Test keyboard navigation and screen reader compatibility.
4. **Customization**: Use props for configuration rather than modifying source code.

## Related Components

- [button](/docs/components/button)
- [textarea](/docs/components/textarea)

---

---

title: Blog Typography
description: Beautiful blog post typography with text, links, images, blockquotes, and code examples
component: true

---

```tsx
"use client";

import * as React from "react";

import { BlogTypography } from "@/components/components/blog/blog-typography.tsx";

export function BlogTypographyDemo() {
  return <BlogTypography />;
}
```

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add @uitripled/blog-typography
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Add the required components to your project.</Step>

The `Blog Typography` component uses the following components. Make sure you have them installed in your project.

- button

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="blog-typography" title="@/components/components/blog/blog-typography.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { BlogTypography } from "@/components/components/blog/blog-typography.tsx";
```

```tsx showLineNumbers
<BlogTypography />
```

## Component Details

- **Category**: components
- **Tags**: blog, typography, text, article, content, links, images

### Technical Specifications

**Dependencies**:

- `framer-motion`
- `react`

**UI Components**:

- button

This component uses **Framer Motion** for animations and motion effects.

This component is built on top of **shadcn/ui** component primitives.

## Customization

This component can be customized by modifying the following:

- **Styling**: The component uses Tailwind CSS for styling. Customize colors, spacing, and other design tokens through Tailwind classes.
- **Props**: Pass custom props to configure the component's behavior and appearance.
- **Variants**: Create custom variants by extending the component's base styles.

## Accessibility

The component follows accessibility best practices:

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Examples

### Basic Example

```tsx
"use client";

import * as React from "react";

import { BlogTypography } from "@/components/components/blog/blog-typography.tsx";

export function BasicExample() {
  return <BlogTypography />;
}
```

## API Reference

This component is part of the UI TripleD component library, a collection of production-ready components built with Framer Motion, shadcn/ui, and Tailwind CSS.

## Best Practices

1. **Performance**: Consider lazy loading if used in large lists or below-the-fold content.
2. **Theming**: Ensure your theme configuration includes the necessary CSS variables.
3. **Testing**: Test keyboard navigation and screen reader compatibility.
4. **Customization**: Use props for configuration rather than modifying source code.

## Related Components

- [button](/docs/components/button)

---

---

title: Cards Slider
description: Liquid smooth draggable cards slider with shadcn/ui styling and framer-motion animations
component: true

---

```tsx
"use client";

import * as React from "react";

import { CardsSlider } from "@/components/components/sliders/cards-slider.tsx";

export function CardsSliderDemo() {
  return <CardsSlider />;
}
```

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add @uitripled/cards-slider
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="cards-slider" title="@/components/components/sliders/cards-slider.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { CardsSlider } from "@/components/components/sliders/cards-slider.tsx";
```

```tsx showLineNumbers
<CardsSlider />
```

## Component Details

- **Category**: cards
- **Tags**: slider, cards, carousel, framer-motion, shadcn, draggable

### Technical Specifications

**Dependencies**:

- `framer-motion`
- `react`

This component uses **Framer Motion** for animations and motion effects.

This component is built on top of **shadcn/ui** component primitives.

## Customization

This component can be customized by modifying the following:

- **Styling**: The component uses Tailwind CSS for styling. Customize colors, spacing, and other design tokens through Tailwind classes.
- **Props**: Pass custom props to configure the component's behavior and appearance.
- **Variants**: Create custom variants by extending the component's base styles.

## Accessibility

The component follows accessibility best practices:

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Examples

### Basic Example

```tsx
"use client";

import * as React from "react";

import { CardsSlider } from "@/components/components/sliders/cards-slider.tsx";

export function BasicExample() {
  return <CardsSlider />;
}
```

## API Reference

This component is part of the UI TripleD component library, a collection of production-ready components built with Framer Motion, shadcn/ui, and Tailwind CSS.

## Best Practices

1. **Performance**: Consider lazy loading if used in large lists or below-the-fold content.
2. **Theming**: Ensure your theme configuration includes the necessary CSS variables.
3. **Testing**: Test keyboard navigation and screen reader compatibility.
4. **Customization**: Use props for configuration rather than modifying source code.

## Related Components

No related components.

---

---

title: Cinema Ticket
description: Cinematic theater ticket with rip effect and barcode
component: true

---

```tsx
"use client";

import * as React from "react";

import { CinemaTicket } from "@/components/sections/shadcnui/cinema-ticket.tsx";

export function CinemaTicketDemo() {
  return <CinemaTicket />;
}
```

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add @uitripled/cinema-ticket
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="cinema-ticket" title="@/components/sections/shadcnui/cinema-ticket.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { CinemaTicket } from "@/components/sections/shadcnui/cinema-ticket.tsx";
```

```tsx showLineNumbers
<CinemaTicket />
```

## Component Details

- **Category**: cards
- **Tags**: ticket, theater, cinema, movie, event

### Technical Specifications

**Dependencies**:

- `framer-motion`
- `react`

This component uses **Framer Motion** for animations and motion effects.

This component is built on top of **shadcn/ui** component primitives.

## Customization

This component can be customized by modifying the following:

- **Styling**: The component uses Tailwind CSS for styling. Customize colors, spacing, and other design tokens through Tailwind classes.
- **Props**: Pass custom props to configure the component's behavior and appearance.
- **Variants**: Create custom variants by extending the component's base styles.

## Accessibility

The component follows accessibility best practices:

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Examples

### Basic Example

```tsx
"use client";

import * as React from "react";

import { CinemaTicket } from "@/components/sections/shadcnui/cinema-ticket.tsx";

export function BasicExample() {
  return <CinemaTicket />;
}
```

## API Reference

This component is part of the UI TripleD component library, a collection of production-ready components built with Framer Motion, shadcn/ui, and Tailwind CSS.

## Best Practices

1. **Performance**: Consider lazy loading if used in large lists or below-the-fold content.
2. **Theming**: Ensure your theme configuration includes the necessary CSS variables.
3. **Testing**: Test keyboard navigation and screen reader compatibility.
4. **Customization**: Use props for configuration rather than modifying source code.

## Related Components

No related components.

---

---

title: Theater Ticket
description: Cinematic theater ticket with rip effect and barcode
component: true

---

```tsx
"use client";

import * as React from "react";

import { TheaterTicket } from "@/components/sections/shadcnui/theater-ticket.tsx";

export function TheaterTicketDemo() {
  return <TheaterTicket />;
}
```

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add @uitripled/theater-ticket
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="theater-ticket" title="@/components/sections/shadcnui/theater-ticket.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { TheaterTicket } from "@/components/sections/shadcnui/theater-ticket.tsx";
```

```tsx showLineNumbers
<TheaterTicket />
```

## Component Details

- **Category**: cards
- **Tags**: ticket, theater, cinema, movie, event

### Technical Specifications

**Dependencies**:

- `framer-motion`
- `react`

This component uses **Framer Motion** for animations and motion effects.

This component is built on top of **shadcn/ui** component primitives.

## Customization

This component can be customized by modifying the following:

- **Styling**: The component uses Tailwind CSS for styling. Customize colors, spacing, and other design tokens through Tailwind classes.
- **Props**: Pass custom props to configure the component's behavior and appearance.
- **Variants**: Create custom variants by extending the component's base styles.

## Accessibility

The component follows accessibility best practices:

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Examples

### Basic Example

```tsx
"use client";

import * as React from "react";

import { TheaterTicket } from "@/components/sections/shadcnui/theater-ticket.tsx";

export function BasicExample() {
  return <TheaterTicket />;
}
```

## API Reference

This component is part of the UI TripleD component library, a collection of production-ready components built with Framer Motion, shadcn/ui, and Tailwind CSS.

## Best Practices

1. **Performance**: Consider lazy loading if used in large lists or below-the-fold content.
2. **Theming**: Ensure your theme configuration includes the necessary CSS variables.
3. **Testing**: Test keyboard navigation and screen reader compatibility.
4. **Customization**: Use props for configuration rather than modifying source code.

## Related Components

No related components.

---

---

title: Conference Ticket
description: Animated conference ticket with glassmorphism effects and holographic details
component: true

---

```tsx
"use client";

import * as React from "react";

import { ConferenceTicket } from "@/components/sections/shadcnui/conference-ticket.tsx";

export function ConferenceTicketDemo() {
  return <ConferenceTicket />;
}
```

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add @uitripled/conference-ticket
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="conference-ticket" title="@/components/sections/shadcnui/conference-ticket.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { ConferenceTicket } from "@/components/sections/shadcnui/conference-ticket.tsx";
```

```tsx showLineNumbers
<ConferenceTicket />
```

## Component Details

- **Category**: cards
- **Tags**: ticket, glassmorphism, animation, 3d, event

### Technical Specifications

**Dependencies**:

- `framer-motion`
- `react`

This component uses **Framer Motion** for animations and motion effects.

This component is built on top of **shadcn/ui** component primitives.

## Customization

This component can be customized by modifying the following:

- **Styling**: The component uses Tailwind CSS for styling. Customize colors, spacing, and other design tokens through Tailwind classes.
- **Props**: Pass custom props to configure the component's behavior and appearance.
- **Variants**: Create custom variants by extending the component's base styles.

## Accessibility

The component follows accessibility best practices:

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Examples

### Basic Example

```tsx
"use client";

import * as React from "react";

import { ConferenceTicket } from "@/components/sections/shadcnui/conference-ticket.tsx";

export function BasicExample() {
  return <ConferenceTicket />;
}
```

## API Reference

This component is part of the UI TripleD component library, a collection of production-ready components built with Framer Motion, shadcn/ui, and Tailwind CSS.

## Best Practices

1. **Performance**: Consider lazy loading if used in large lists or below-the-fold content.
2. **Theming**: Ensure your theme configuration includes the necessary CSS variables.
3. **Testing**: Test keyboard navigation and screen reader compatibility.
4. **Customization**: Use props for configuration rather than modifying source code.

## Related Components

No related components.

---

---

title: CTA Banner Section
description: Animated call-to-action banner with gradient background and button animations
component: true

---

```tsx
"use client";

import * as React from "react";

import { CTABannerSection } from "@/components/sections/shadcnui/cta-banner-section.tsx";

export function CTABannerSectionDemo() {
  return <CTABannerSection />;
}
```

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add @uitripled/cta-banner-section
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Add the required components to your project.</Step>

The `CTA Banner Section` component uses the following components. Make sure you have them installed in your project.

- button
- card

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="cta-banner-section" title="@/components/sections/shadcnui/cta-banner-section.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { CTABannerSection } from "@/components/sections/shadcnui/cta-banner-section.tsx";
```

```tsx showLineNumbers
<CTABannerSection />
```

## Component Details

- **Category**: page
- **Tags**: cta, banner, call-to-action, buttons, gradient, shadcn

### Technical Specifications

**Dependencies**:

- `framer-motion`
- `lucide-react`
- `react`

**UI Components**:

- button
- card

This component uses **Framer Motion** for animations and motion effects.

This component is built on top of **shadcn/ui** component primitives.

## Customization

This component can be customized by modifying the following:

- **Styling**: The component uses Tailwind CSS for styling. Customize colors, spacing, and other design tokens through Tailwind classes.
- **Props**: Pass custom props to configure the component's behavior and appearance.
- **Variants**: Create custom variants by extending the component's base styles.

## Accessibility

The component follows accessibility best practices:

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Examples

### Basic Example

```tsx
"use client";

import * as React from "react";

import { CTABannerSection } from "@/components/sections/shadcnui/cta-banner-section.tsx";

export function BasicExample() {
  return <CTABannerSection />;
}
```

## API Reference

This component is part of the UI TripleD component library, a collection of production-ready components built with Framer Motion, shadcn/ui, and Tailwind CSS.

## Best Practices

1. **Performance**: Consider lazy loading if used in large lists or below-the-fold content.
2. **Theming**: Ensure your theme configuration includes the necessary CSS variables.
3. **Testing**: Test keyboard navigation and screen reader compatibility.
4. **Customization**: Use props for configuration rather than modifying source code.

## Related Components

- [button](/docs/components/button)
- [card](/docs/components/card)

---

---

title: Detail Task Card
description: Task management detail panel with animated assignee chips and editor controls
component: true

---

```tsx
"use client";

import * as React from "react";

import { DetailTaskCard } from "@/components/components/cards/shadcnui/detail-task.tsx";

export function DetailTaskCardDemo() {
  return <DetailTaskCard />;
}
```

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add @uitripled/detail-task-card
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Add the required components to your project.</Step>

The `Detail Task Card` component uses the following components. Make sure you have them installed in your project.

- badge
- button
- card
- dropdown-menu
- input
- textarea

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="detail-task-card" title="@/components/components/cards/shadcnui/detail-task.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { DetailTaskCard } from "@/components/components/cards/shadcnui/detail-task.tsx";
```

```tsx showLineNumbers
<DetailTaskCard />
```

## Component Details

- **Category**: cards
- **Tags**: task, management, form, card, dashboard

### Technical Specifications

**Dependencies**:

- `framer-motion`
- `lucide-react`
- `react`

**UI Components**:

- badge
- button
- card
- dropdown-menu
- input
- textarea

This component uses **Framer Motion** for animations and motion effects.

This component is built on top of **shadcn/ui** component primitives.

## Customization

This component can be customized by modifying the following:

- **Styling**: The component uses Tailwind CSS for styling. Customize colors, spacing, and other design tokens through Tailwind classes.
- **Props**: Pass custom props to configure the component's behavior and appearance.
- **Variants**: Create custom variants by extending the component's base styles.

## Accessibility

The component follows accessibility best practices:

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Examples

### Basic Example

```tsx
"use client";

import * as React from "react";

import { DetailTaskCard } from "@/components/components/cards/shadcnui/detail-task.tsx";

export function BasicExample() {
  return <DetailTaskCard />;
}
```

## API Reference

This component is part of the UI TripleD component library, a collection of production-ready components built with Framer Motion, shadcn/ui, and Tailwind CSS.

## Best Practices

1. **Performance**: Consider lazy loading if used in large lists or below-the-fold content.
2. **Theming**: Ensure your theme configuration includes the necessary CSS variables.
3. **Testing**: Test keyboard navigation and screen reader compatibility.
4. **Customization**: Use props for configuration rather than modifying source code.

## Related Components

- [badge](/docs/components/badge)
- [button](/docs/components/button)
- [card](/docs/components/card)
- [dropdown-menu](/docs/components/dropdown-menu)
- [input](/docs/components/input)
- [textarea](/docs/components/textarea)

---

---

title: Draggable List
description: Reorderable list with drag and drop spring physics
component: true

---

```tsx
"use client";

import * as React from "react";

import { DraggableList } from "@/components/components/lists/draggable-list.tsx";

export function DraggableListDemo() {
  return <DraggableList />;
}
```

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add @uitripled/draggable-list
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Add the required components to your project.</Step>

The `Draggable List` component uses the following components. Make sure you have them installed in your project.

- button

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="draggable-list" title="@/components/components/lists/draggable-list.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { DraggableList } from "@/components/components/lists/draggable-list.tsx";
```

```tsx showLineNumbers
<DraggableList />
```

## Component Details

- **Category**: components
- **Tags**: list, drag, reorder, sortable

### Technical Specifications

**Dependencies**:

- `framer-motion`
- `lucide-react`
- `react`

**UI Components**:

- button

This component uses **Framer Motion** for animations and motion effects.

This component is built on top of **shadcn/ui** component primitives.

## Customization

This component can be customized by modifying the following:

- **Styling**: The component uses Tailwind CSS for styling. Customize colors, spacing, and other design tokens through Tailwind classes.
- **Props**: Pass custom props to configure the component's behavior and appearance.
- **Variants**: Create custom variants by extending the component's base styles.

## Accessibility

The component follows accessibility best practices:

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Examples

### Basic Example

```tsx
"use client";

import * as React from "react";

import { DraggableList } from "@/components/components/lists/draggable-list.tsx";

export function BasicExample() {
  return <DraggableList />;
}
```

## API Reference

This component is part of the UI TripleD component library, a collection of production-ready components built with Framer Motion, shadcn/ui, and Tailwind CSS.

## Best Practices

1. **Performance**: Consider lazy loading if used in large lists or below-the-fold content.
2. **Theming**: Ensure your theme configuration includes the necessary CSS variables.
3. **Testing**: Test keyboard navigation and screen reader compatibility.
4. **Customization**: Use props for configuration rather than modifying source code.

## Related Components

- [button](/docs/components/button)

---

---

title: Dynamic Spotlight CTA
description: Floating spotlight follows cursor to reveal gradient CTA text with premium effects
component: true

---

```tsx
"use client";

import * as React from "react";

import { DynamicSpotlightCTA } from "@/components/motion-core/dynamic-spotlight-cta.tsx";

export function DynamicSpotlightCTADemo() {
  return <DynamicSpotlightCTA />;
}
```

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add @uitripled/dynamic-spotlight-cta
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="dynamic-spotlight-cta" title="@/components/motion-core/dynamic-spotlight-cta.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { DynamicSpotlightCTA } from "@/components/motion-core/dynamic-spotlight-cta.tsx";
```

```tsx showLineNumbers
<DynamicSpotlightCTA />
```

## Component Details

- **Category**: page
- **Tags**: cta, spotlight, cursor, gradient, banner, premium, paywall

### Technical Specifications

**Dependencies**:

- `framer-motion`
- `react`

This component uses **Framer Motion** for animations and motion effects.

## Customization

This component can be customized by modifying the following:

- **Styling**: The component uses Tailwind CSS for styling. Customize colors, spacing, and other design tokens through Tailwind classes.
- **Props**: Pass custom props to configure the component's behavior and appearance.
- **Variants**: Create custom variants by extending the component's base styles.

## Accessibility

The component follows accessibility best practices:

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Examples

### Basic Example

```tsx
"use client";

import * as React from "react";

import { DynamicSpotlightCTA } from "@/components/motion-core/dynamic-spotlight-cta.tsx";

export function BasicExample() {
  return <DynamicSpotlightCTA />;
}
```

## API Reference

This component is part of the UI TripleD component library, a collection of production-ready components built with Framer Motion, shadcn/ui, and Tailwind CSS.

## Best Practices

1. **Performance**: Consider lazy loading if used in large lists or below-the-fold content.
2. **Theming**: Ensure your theme configuration includes the necessary CSS variables.
3. **Testing**: Test keyboard navigation and screen reader compatibility.
4. **Customization**: Use props for configuration rather than modifying source code.

## Related Components

No related components.

---

---

title: Ecommerce Highlight Card
description: Product spotlight card with blurred border, bundle selector, and fulfillment details
component: true

---

```tsx
"use client";

import * as React from "react";

import { EcommerceHighlightCard } from "@/components/components/cards/shadcnui/ecommerce-highlight-card.tsx";

export function EcommerceHighlightCardDemo() {
  return <EcommerceHighlightCard />;
}
```

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add @uitripled/ecommerce-highlight-card
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Add the required components to your project.</Step>

The `Ecommerce Highlight Card` component uses the following components. Make sure you have them installed in your project.

- badge
- button
- card
- separator

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="ecommerce-highlight-card" title="@/components/components/cards/shadcnui/ecommerce-highlight-card.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { EcommerceHighlightCard } from "@/components/components/cards/shadcnui/ecommerce-highlight-card.tsx";
```

```tsx showLineNumbers
<EcommerceHighlightCard />
```

## Component Details

- **Category**: cards
- **Tags**: card, product, ecommerce, bundle

### Technical Specifications

**Dependencies**:

- `framer-motion`
- `lucide-react`
- `react`

**UI Components**:

- badge
- button
- card
- separator

This component uses **Framer Motion** for animations and motion effects.

This component is built on top of **shadcn/ui** component primitives.

## Customization

This component can be customized by modifying the following:

- **Styling**: The component uses Tailwind CSS for styling. Customize colors, spacing, and other design tokens through Tailwind classes.
- **Props**: Pass custom props to configure the component's behavior and appearance.
- **Variants**: Create custom variants by extending the component's base styles.

## Accessibility

The component follows accessibility best practices:

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Examples

### Basic Example

```tsx
"use client";

import * as React from "react";

import { EcommerceHighlightCard } from "@/components/components/cards/shadcnui/ecommerce-highlight-card.tsx";

export function BasicExample() {
  return <EcommerceHighlightCard />;
}
```

## API Reference

This component is part of the UI TripleD component library, a collection of production-ready components built with Framer Motion, shadcn/ui, and Tailwind CSS.

## Best Practices

1. **Performance**: Consider lazy loading if used in large lists or below-the-fold content.
2. **Theming**: Ensure your theme configuration includes the necessary CSS variables.
3. **Testing**: Test keyboard navigation and screen reader compatibility.
4. **Customization**: Use props for configuration rather than modifying source code.

## Related Components

- [badge](/docs/components/badge)
- [button](/docs/components/button)
- [card](/docs/components/card)
- [separator](/docs/components/separator)

---

---

title: Expanding Search Dock
description: Minimal search icon that expands into full input with blur
component: true

---

```tsx
"use client";

import * as React from "react";

import { ExpandingSearchDock } from "@/components/motion-core/expanding-search-dock.tsx";

export function ExpandingSearchDockDemo() {
  return <ExpandingSearchDock />;
}
```

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add @uitripled/expanding-search-dock
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Add the required components to your project.</Step>

The `Expanding Search Dock` component uses the following components. Make sure you have them installed in your project.

- button

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="expanding-search-dock" title="@/components/motion-core/expanding-search-dock.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { ExpandingSearchDock } from "@/components/motion-core/expanding-search-dock.tsx";
```

```tsx showLineNumbers
<ExpandingSearchDock />
```

## Component Details

- **Category**: components
- **Tags**: search, expand, dock, input, blur

### Technical Specifications

**Dependencies**:

- `framer-motion`
- `lucide-react`
- `react`

**UI Components**:

- button

This component uses **Framer Motion** for animations and motion effects.

This component is built on top of **shadcn/ui** component primitives.

## Customization

This component can be customized by modifying the following:

- **Styling**: The component uses Tailwind CSS for styling. Customize colors, spacing, and other design tokens through Tailwind classes.
- **Props**: Pass custom props to configure the component's behavior and appearance.
- **Variants**: Create custom variants by extending the component's base styles.

## Accessibility

The component follows accessibility best practices:

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Examples

### Basic Example

```tsx
"use client";

import * as React from "react";

import { ExpandingSearchDock } from "@/components/motion-core/expanding-search-dock.tsx";

export function BasicExample() {
  return <ExpandingSearchDock />;
}
```

## API Reference

This component is part of the UI TripleD component library, a collection of production-ready components built with Framer Motion, shadcn/ui, and Tailwind CSS.

## Best Practices

1. **Performance**: Consider lazy loading if used in large lists or below-the-fold content.
2. **Theming**: Ensure your theme configuration includes the necessary CSS variables.
3. **Testing**: Test keyboard navigation and screen reader compatibility.
4. **Customization**: Use props for configuration rather than modifying source code.

## Related Components

- [button](/docs/components/button)

---

---

title: FAQ Section
description: Animated FAQ section with expandable questions and smooth transitions
component: true

---

```tsx
"use client";

import * as React from "react";

import { FAQSection } from "@/components/sections/shadcnui/faq-section.tsx";

export function FAQSectionDemo() {
  return <FAQSection />;
}
```

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add @uitripled/faq-section
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Add the required components to your project.</Step>

The `FAQ Section` component uses the following components. Make sure you have them installed in your project.

- card

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="faq-section" title="@/components/sections/shadcnui/faq-section.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { FAQSection } from "@/components/sections/shadcnui/faq-section.tsx";
```

```tsx showLineNumbers
<FAQSection />
```

## Component Details

- **Category**: page
- **Tags**: faq, accordion, questions, expand, shadcn

### Technical Specifications

**Dependencies**:

- `framer-motion`
- `lucide-react`
- `react`

**UI Components**:

- card

This component uses **Framer Motion** for animations and motion effects.

This component is built on top of **shadcn/ui** component primitives.

## Customization

This component can be customized by modifying the following:

- **Styling**: The component uses Tailwind CSS for styling. Customize colors, spacing, and other design tokens through Tailwind classes.
- **Props**: Pass custom props to configure the component's behavior and appearance.
- **Variants**: Create custom variants by extending the component's base styles.

## Accessibility

The component follows accessibility best practices:

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Examples

### Basic Example

```tsx
"use client";

import * as React from "react";

import { FAQSection } from "@/components/sections/shadcnui/faq-section.tsx";

export function BasicExample() {
  return <FAQSection />;
}
```

## API Reference

This component is part of the UI TripleD component library, a collection of production-ready components built with Framer Motion, shadcn/ui, and Tailwind CSS.

## Best Practices

1. **Performance**: Consider lazy loading if used in large lists or below-the-fold content.
2. **Theming**: Ensure your theme configuration includes the necessary CSS variables.
3. **Testing**: Test keyboard navigation and screen reader compatibility.
4. **Customization**: Use props for configuration rather than modifying source code.

## Related Components

- [card](/docs/components/card)

---

---

title: Glass Blog Card
description: Glassmorphism blog card with image zoom, author info, and read action
component: true

---

```tsx
"use client";

import * as React from "react";

import { GlassBlogCard } from "@/components/components/cards/shadcnui/glass-blog-card.tsx";

export function GlassBlogCardDemo() {
  return <GlassBlogCard />;
}
```

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add @uitripled/glass-blog-card
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="glass-blog-card" title="@/components/components/cards/shadcnui/glass-blog-card.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { GlassBlogCard } from "@/components/components/cards/shadcnui/glass-blog-card.tsx";
```

```tsx showLineNumbers
<GlassBlogCard />
```

## Component Details

- **Category**: cards
- **Tags**: blog, card, content, glassmorphism, article, shadcn

### Technical Specifications

**Dependencies**:

- `framer-motion`
- `react`

This component uses **Framer Motion** for animations and motion effects.

This component is built on top of **shadcn/ui** component primitives.

## Customization

This component can be customized by modifying the following:

- **Styling**: The component uses Tailwind CSS for styling. Customize colors, spacing, and other design tokens through Tailwind classes.
- **Props**: Pass custom props to configure the component's behavior and appearance.
- **Variants**: Create custom variants by extending the component's base styles.

## Accessibility

The component follows accessibility best practices:

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Examples

### Basic Example

```tsx
"use client";

import * as React from "react";

import { GlassBlogCard } from "@/components/components/cards/shadcnui/glass-blog-card.tsx";

export function BasicExample() {
  return <GlassBlogCard />;
}
```

## API Reference

This component is part of the UI TripleD component library, a collection of production-ready components built with Framer Motion, shadcn/ui, and Tailwind CSS.

## Best Practices

1. **Performance**: Consider lazy loading if used in large lists or below-the-fold content.
2. **Theming**: Ensure your theme configuration includes the necessary CSS variables.
3. **Testing**: Test keyboard navigation and screen reader compatibility.
4. **Customization**: Use props for configuration rather than modifying source code.

## Related Components

No related components.

---

---

title: Glass Forgot Password Card
description: Reset-password screen with glassmorphic styling and status messaging
component: true

---

```tsx
"use client";

import * as React from "react";

import { GlassForgotPasswordCard } from "@/components/components/forms/glass-forgot-password.tsx";

export function GlassForgotPasswordCardDemo() {
  return <GlassForgotPasswordCard />;
}
```

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add @uitripled/glass-forgot-password-card
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Add the required components to your project.</Step>

The `Glass Forgot Password Card` component uses the following components. Make sure you have them installed in your project.

- button
- input
- label

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="glass-forgot-password-card" title="@/components/components/forms/glass-forgot-password.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { GlassForgotPasswordCard } from "@/components/components/forms/glass-forgot-password.tsx";
```

```tsx showLineNumbers
<GlassForgotPasswordCard />
```

## Component Details

- **Category**: components
- **Tags**: auth, form, reset, password, glassmorphism

### Technical Specifications

**Dependencies**:

- `framer-motion`
- `react`

**UI Components**:

- button
- input
- label

This component uses **Framer Motion** for animations and motion effects.

This component is built on top of **shadcn/ui** component primitives.

## Customization

This component can be customized by modifying the following:

- **Styling**: The component uses Tailwind CSS for styling. Customize colors, spacing, and other design tokens through Tailwind classes.
- **Props**: Pass custom props to configure the component's behavior and appearance.
- **Variants**: Create custom variants by extending the component's base styles.

## Accessibility

The component follows accessibility best practices:

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Examples

### Basic Example

```tsx
"use client";

import * as React from "react";

import { GlassForgotPasswordCard } from "@/components/components/forms/glass-forgot-password.tsx";

export function BasicExample() {
  return <GlassForgotPasswordCard />;
}
```

## API Reference

This component is part of the UI TripleD component library, a collection of production-ready components built with Framer Motion, shadcn/ui, and Tailwind CSS.

## Best Practices

1. **Performance**: Consider lazy loading if used in large lists or below-the-fold content.
2. **Theming**: Ensure your theme configuration includes the necessary CSS variables.
3. **Testing**: Test keyboard navigation and screen reader compatibility.
4. **Customization**: Use props for configuration rather than modifying source code.

## Related Components

- [button](/docs/components/button)
- [input](/docs/components/input)
- [label](/docs/components/label)

---

---

title: Glass Sign-In Card
description: Glassmorphic sign-in panel with social auth buttons and email form
component: true

---

```tsx
"use client"

import * as React from "react"

import { GlassSign-InCard } from "@/components/components/forms/glass-sign-in.tsx"

export function GlassSign-InCardDemo() {
  return (
    <GlassSign-InCard />
  )
}
```

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add @uitripled/glass-sign-in-card
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Add the required components to your project.</Step>

The `Glass Sign-In Card` component uses the following components. Make sure you have them installed in your project.

- button
- checkbox
- input
- label

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="glass-sign-in-card" title="@/components/components/forms/glass-sign-in.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { GlassSign-InCard } from "@/components/components/forms/glass-sign-in.tsx"
```

```tsx showLineNumbers
<GlassSign-InCard />
```

## Component Details

- **Category**: components
- **Tags**: auth, form, sign-in, glassmorphism, shadcn

### Technical Specifications

**Dependencies**:

- `framer-motion`
- `lucide-react`
- `react`

**UI Components**:

- button
- checkbox
- input
- label

This component uses **Framer Motion** for animations and motion effects.

This component is built on top of **shadcn/ui** component primitives.

## Customization

This component can be customized by modifying the following:

- **Styling**: The component uses Tailwind CSS for styling. Customize colors, spacing, and other design tokens through Tailwind classes.
- **Props**: Pass custom props to configure the component's behavior and appearance.
- **Variants**: Create custom variants by extending the component's base styles.

## Accessibility

The component follows accessibility best practices:

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Examples

### Basic Example

```tsx
"use client"

import * as React from "react"

import { GlassSign-InCard } from "@/components/components/forms/glass-sign-in.tsx"

export function BasicExample() {
  return (
    <GlassSign-InCard />
  )
}
```

## API Reference

This component is part of the UI TripleD component library, a collection of production-ready components built with Framer Motion, shadcn/ui, and Tailwind CSS.

## Best Practices

1. **Performance**: Consider lazy loading if used in large lists or below-the-fold content.
2. **Theming**: Ensure your theme configuration includes the necessary CSS variables.
3. **Testing**: Test keyboard navigation and screen reader compatibility.
4. **Customization**: Use props for configuration rather than modifying source code.

## Related Components

- [button](/docs/components/button)
- [checkbox](/docs/components/checkbox)
- [input](/docs/components/input)
- [label](/docs/components/label)

---

---

title: Glass Sign-Up Card
description: Glassmorphic sign-up flow with social providers, email fields, and terms checkbox
component: true

---

```tsx
"use client"

import * as React from "react"

import { GlassSign-UpCard } from "@/components/components/forms/glass-sign-up.tsx"

export function GlassSign-UpCardDemo() {
  return (
    <GlassSign-UpCard />
  )
}
```

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add @uitripled/glass-sign-up-card
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Add the required components to your project.</Step>

The `Glass Sign-Up Card` component uses the following components. Make sure you have them installed in your project.

- button
- checkbox
- input
- label

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="glass-sign-up-card" title="@/components/components/forms/glass-sign-up.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { GlassSign-UpCard } from "@/components/components/forms/glass-sign-up.tsx"
```

```tsx showLineNumbers
<GlassSign-UpCard />
```

## Component Details

- **Category**: components
- **Tags**: auth, form, sign-up, glassmorphism, shadcn

### Technical Specifications

**Dependencies**:

- `framer-motion`
- `lucide-react`
- `react`

**UI Components**:

- button
- checkbox
- input
- label

This component uses **Framer Motion** for animations and motion effects.

This component is built on top of **shadcn/ui** component primitives.

## Customization

This component can be customized by modifying the following:

- **Styling**: The component uses Tailwind CSS for styling. Customize colors, spacing, and other design tokens through Tailwind classes.
- **Props**: Pass custom props to configure the component's behavior and appearance.
- **Variants**: Create custom variants by extending the component's base styles.

## Accessibility

The component follows accessibility best practices:

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Examples

### Basic Example

```tsx
"use client"

import * as React from "react"

import { GlassSign-UpCard } from "@/components/components/forms/glass-sign-up.tsx"

export function BasicExample() {
  return (
    <GlassSign-UpCard />
  )
}
```

## API Reference

This component is part of the UI TripleD component library, a collection of production-ready components built with Framer Motion, shadcn/ui, and Tailwind CSS.

## Best Practices

1. **Performance**: Consider lazy loading if used in large lists or below-the-fold content.
2. **Theming**: Ensure your theme configuration includes the necessary CSS variables.
3. **Testing**: Test keyboard navigation and screen reader compatibility.
4. **Customization**: Use props for configuration rather than modifying source code.

## Related Components

- [button](/docs/components/button)
- [checkbox](/docs/components/checkbox)
- [input](/docs/components/input)
- [label](/docs/components/label)

---

---

title: Glass Wallet Card
description: Glassmorphism crypto wallet card with balance, trend, and action buttons
component: true

---

```tsx
"use client";

import * as React from "react";

import { GlassWalletCard } from "@/components/components/cards/shadcnui/glass-wallet-card.tsx";

export function GlassWalletCardDemo() {
  return <GlassWalletCard />;
}
```

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add @uitripled/glass-wallet-card
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="glass-wallet-card" title="@/components/components/cards/shadcnui/glass-wallet-card.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { GlassWalletCard } from "@/components/components/cards/shadcnui/glass-wallet-card.tsx";
```

```tsx showLineNumbers
<GlassWalletCard />
```

## Component Details

- **Category**: cards
- **Tags**: wallet, card, finance, glassmorphism, crypto, shadcn

### Technical Specifications

**Dependencies**:

- `framer-motion`
- `react`

This component uses **Framer Motion** for animations and motion effects.

This component is built on top of **shadcn/ui** component primitives.

## Customization

This component can be customized by modifying the following:

- **Styling**: The component uses Tailwind CSS for styling. Customize colors, spacing, and other design tokens through Tailwind classes.
- **Props**: Pass custom props to configure the component's behavior and appearance.
- **Variants**: Create custom variants by extending the component's base styles.

## Accessibility

The component follows accessibility best practices:

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Examples

### Basic Example

```tsx
"use client";

import * as React from "react";

import { GlassWalletCard } from "@/components/components/cards/shadcnui/glass-wallet-card.tsx";

export function BasicExample() {
  return <GlassWalletCard />;
}
```

## API Reference

This component is part of the UI TripleD component library, a collection of production-ready components built with Framer Motion, shadcn/ui, and Tailwind CSS.

## Best Practices

1. **Performance**: Consider lazy loading if used in large lists or below-the-fold content.
2. **Theming**: Ensure your theme configuration includes the necessary CSS variables.
3. **Testing**: Test keyboard navigation and screen reader compatibility.
4. **Customization**: Use props for configuration rather than modifying source code.

## Related Components

No related components.

---

---

title: Glassmorphism Statistics Card
description: Interactive statistics card with hover reveal and smooth transitions
component: true

---

```tsx
"use client";

import * as React from "react";

import { GlassmorphismStatisticsCard } from "@/components/sections/shadcnui/glassmorphism-statistics-card.tsx";

export function GlassmorphismStatisticsCardDemo() {
  return <GlassmorphismStatisticsCard />;
}
```

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add @uitripled/glassmorphism-statistics-card
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Add the required components to your project.</Step>

The `Glassmorphism Statistics Card` component uses the following components. Make sure you have them installed in your project.

- card

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="glassmorphism-statistics-card" title="@/components/sections/shadcnui/glassmorphism-statistics-card.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { GlassmorphismStatisticsCard } from "@/components/sections/shadcnui/glassmorphism-statistics-card.tsx";
```

```tsx showLineNumbers
<GlassmorphismStatisticsCard />
```

## Component Details

- **Category**: components
- **Tags**: card, statistics, stats, hover, shadcn, glassmorphism

### Technical Specifications

**Dependencies**:

- `framer-motion`
- `lucide-react`
- `react`

**UI Components**:

- card

This component uses **Framer Motion** for animations and motion effects.

This component is built on top of **shadcn/ui** component primitives.

## Customization

This component can be customized by modifying the following:

- **Styling**: The component uses Tailwind CSS for styling. Customize colors, spacing, and other design tokens through Tailwind classes.
- **Props**: Pass custom props to configure the component's behavior and appearance.
- **Variants**: Create custom variants by extending the component's base styles.

## Accessibility

The component follows accessibility best practices:

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Examples

### Basic Example

```tsx
"use client";

import * as React from "react";

import { GlassmorphismStatisticsCard } from "@/components/sections/shadcnui/glassmorphism-statistics-card.tsx";

export function BasicExample() {
  return <GlassmorphismStatisticsCard />;
}
```

## API Reference

This component is part of the UI TripleD component library, a collection of production-ready components built with Framer Motion, shadcn/ui, and Tailwind CSS.

## Best Practices

1. **Performance**: Consider lazy loading if used in large lists or below-the-fold content.
2. **Theming**: Ensure your theme configuration includes the necessary CSS variables.
3. **Testing**: Test keyboard navigation and screen reader compatibility.
4. **Customization**: Use props for configuration rather than modifying source code.

## Related Components

- [card](/docs/components/card)

---

---

title: Notification Center
description: Multi-variant notification stack with accessible announcements, actions, and motion states
component: true

---

```tsx
"use client";

import * as React from "react";

import { NotificationCenter } from "@/components/components/notifications/notification-center.tsx";

export function NotificationCenterDemo() {
  return <NotificationCenter />;
}
```

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add @uitripled/notification-center
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Add the required components to your project.</Step>

The `Notification Center` component uses the following components. Make sure you have them installed in your project.

- button
- card

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="notification-center" title="@/components/components/notifications/notification-center.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { NotificationCenter } from "@/components/components/notifications/notification-center.tsx";
```

```tsx showLineNumbers
<NotificationCenter />
```

## Component Details

- **Category**: components
- **Tags**: notification, alerts, toast, stack, accessible, shadcn

### Technical Specifications

**Dependencies**:

- `framer-motion`
- `lucide-react`
- `react`

**UI Components**:

- button
- card

This component uses **Framer Motion** for animations and motion effects.

This component is built on top of **shadcn/ui** component primitives.

## Customization

This component can be customized by modifying the following:

- **Styling**: The component uses Tailwind CSS for styling. Customize colors, spacing, and other design tokens through Tailwind classes.
- **Props**: Pass custom props to configure the component's behavior and appearance.
- **Variants**: Create custom variants by extending the component's base styles.

## Accessibility

The component follows accessibility best practices:

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Examples

### Basic Example

```tsx
"use client";

import * as React from "react";

import { NotificationCenter } from "@/components/components/notifications/notification-center.tsx";

export function BasicExample() {
  return <NotificationCenter />;
}
```

## API Reference

This component is part of the UI TripleD component library, a collection of production-ready components built with Framer Motion, shadcn/ui, and Tailwind CSS.

## Best Practices

1. **Performance**: Consider lazy loading if used in large lists or below-the-fold content.
2. **Theming**: Ensure your theme configuration includes the necessary CSS variables.
3. **Testing**: Test keyboard navigation and screen reader compatibility.
4. **Customization**: Use props for configuration rather than modifying source code.

## Related Components

- [button](/docs/components/button)
- [card](/docs/components/card)

---

---

title: Pricing Section
description: Animated pricing cards with hover effects and feature lists
component: true

---

```tsx
"use client";

import * as React from "react";

import { PricingSection } from "@/components/sections/shadcnui/pricing-section.tsx";

export function PricingSectionDemo() {
  return <PricingSection />;
}
```

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add @uitripled/pricing-section
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Add the required components to your project.</Step>

The `Pricing Section` component uses the following components. Make sure you have them installed in your project.

- badge
- button
- card

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="pricing-section" title="@/components/sections/shadcnui/pricing-section.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { PricingSection } from "@/components/sections/shadcnui/pricing-section.tsx";
```

```tsx showLineNumbers
<PricingSection />
```

## Component Details

- **Category**: page
- **Tags**: pricing, plans, cards, hover, shadcn

### Technical Specifications

**Dependencies**:

- `framer-motion`
- `lucide-react`
- `react`

**UI Components**:

- badge
- button
- card

This component uses **Framer Motion** for animations and motion effects.

This component is built on top of **shadcn/ui** component primitives.

## Customization

This component can be customized by modifying the following:

- **Styling**: The component uses Tailwind CSS for styling. Customize colors, spacing, and other design tokens through Tailwind classes.
- **Props**: Pass custom props to configure the component's behavior and appearance.
- **Variants**: Create custom variants by extending the component's base styles.

## Accessibility

The component follows accessibility best practices:

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Examples

### Basic Example

```tsx
"use client";

import * as React from "react";

import { PricingSection } from "@/components/sections/shadcnui/pricing-section.tsx";

export function BasicExample() {
  return <PricingSection />;
}
```

## API Reference

This component is part of the UI TripleD component library, a collection of production-ready components built with Framer Motion, shadcn/ui, and Tailwind CSS.

## Best Practices

1. **Performance**: Consider lazy loading if used in large lists or below-the-fold content.
2. **Theming**: Ensure your theme configuration includes the necessary CSS variables.
3. **Testing**: Test keyboard navigation and screen reader compatibility.
4. **Customization**: Use props for configuration rather than modifying source code.

## Related Components

- [badge](/docs/components/badge)
- [button](/docs/components/button)
- [card](/docs/components/card)

---

---

title: Project Card
description: Glassmorphism project card with links, tags, and hover effects
component: true

---

```tsx
"use client";

import * as React from "react";

import { ProjectCard } from "@/components/components/cards/shadcnui/project-card.tsx";

export function ProjectCardDemo() {
  return <ProjectCard />;
}
```

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add @uitripled/project-card
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="project-card" title="@/components/components/cards/shadcnui/project-card.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { ProjectCard } from "@/components/components/cards/shadcnui/project-card.tsx";
```

```tsx showLineNumbers
<ProjectCard />
```

## Component Details

- **Category**: cards
- **Tags**: project, card, portfolio, glassmorphism, links

### Technical Specifications

**Dependencies**:

- `framer-motion`
- `react`

This component uses **Framer Motion** for animations and motion effects.

This component is built on top of **shadcn/ui** component primitives.

## Customization

This component can be customized by modifying the following:

- **Styling**: The component uses Tailwind CSS for styling. Customize colors, spacing, and other design tokens through Tailwind classes.
- **Props**: Pass custom props to configure the component's behavior and appearance.
- **Variants**: Create custom variants by extending the component's base styles.

## Accessibility

The component follows accessibility best practices:

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Examples

### Basic Example

```tsx
"use client";

import * as React from "react";

import { ProjectCard } from "@/components/components/cards/shadcnui/project-card.tsx";

export function BasicExample() {
  return <ProjectCard />;
}
```

## API Reference

This component is part of the UI TripleD component library, a collection of production-ready components built with Framer Motion, shadcn/ui, and Tailwind CSS.

## Best Practices

1. **Performance**: Consider lazy loading if used in large lists or below-the-fold content.
2. **Theming**: Ensure your theme configuration includes the necessary CSS variables.
3. **Testing**: Test keyboard navigation and screen reader compatibility.
4. **Customization**: Use props for configuration rather than modifying source code.

## Related Components

No related components.
