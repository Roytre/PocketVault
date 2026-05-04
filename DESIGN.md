# PocketVault Design System

This document outlines the core design tokens and components used throughout the PocketVault application.

## 1. Color Palette

Our application uses a sleek, modern dark mode aesthetic with vibrant accent colors for different categories. 
Colors are defined using HSL values for better programmatic control.

**Base Theme (Dark):**
- `Background`: hsl(220 25% 8%)
- `Foreground (Text)`: hsl(220 10% 98%)
- `Card Background`: hsl(220 25% 10%)
- `Card Border`: hsl(220 20% 16%)
- `Muted Text`: hsl(220 10% 60%)

**Brand Colors:**
- `Primary (Brand Blue)`: hsl(220 70% 50%) - Used for primary actions, active states.
- `Accent (Purple)`: hsl(270 60% 55%)
- `Destructive (Red)`: hsl(0 72% 51%)

**Category Colors:**
- Passwords: `hsl(0 72% 51%)` (Red)
- Tickets: `hsl(280 65% 55%)` (Purple)
- Events: `hsl(38 92% 50%)` (Orange)
- Notes: `hsl(220 70% 50%)` (Blue)
- Links: `hsl(160 60% 45%)` (Green)
- Ideas: `hsl(45 93% 47%)` (Yellow)
- Reminders: `hsl(330 65% 55%)` (Pink)

## 2. Typography

We use the **Inter** font family (Google Fonts) for clean, highly legible interfaces.

- `Font Family`: 'Inter', sans-serif
- `Headings`: Font weights 600 (Semibold) and 700 (Bold)
- `Body Text`: Font weight 400 (Regular)
- `Base Font Size`: 16px (1rem)

## 3. Spacing & Layout

- `Radius`: 0.75rem (12px) for cards, 0.5rem (8px) for buttons/inputs.
- `Page Padding`: 1rem on mobile, up to 2rem on desktop.
- `Grid Gap`: Typically 1rem to 1.5rem between cards.

## 4. Shared Components

- **Sidebar / BottomNav**: Primary navigation holding links to Dashboard, All Items, Settings, Analytics.
- **Topbar**: Sticky header containing Search and Add actions.
- **VaultCard**: Reusable component to display any item (password, note, ticket) with consistent styling.
- **StatCard**: Reusable component for displaying analytical metrics.
