# 06 - Frontend Structure

## Overview

The frontend is built using React and TypeScript and follows a feature-based architecture to improve maintainability and scalability.

The project is organized to keep related functionality grouped together while separating reusable components and shared utilities.

## Planned Structure

```text
src/
├── assets/
├── components/
├── constants/
├── context/
├── features/
├── hooks/
├── layouts/
├── lib/
├── pages/
├── routes/
├── types/
├── utils/
├── App.tsx
└── main.tsx
```

## Folder Descriptions

### assets

Stores static resources such as images, icons, fonts, and logos.

### components

Reusable UI components that can be shared across multiple features.

Examples:

* Button
* Modal
* Header
* Footer
* JobCard

### constants

Stores application-wide constant values.

Examples:

* API endpoints
* Validation limits
* Enumerations

### context

Contains React Context providers for globally shared state.

Examples:

* Authentication
* Theme

### features

Groups code by application feature instead of file type.

Examples:

* auth
* jobs
* companies
* applications
* profile

Each feature may contain its own components, pages, hooks, services, and types.

### hooks

Reusable custom React hooks.

### layouts

Defines page layouts shared across multiple routes.

Examples:

* MainLayout
* AuthLayout
* DashboardLayout

### lib

Contains wrappers around external libraries and shared services.

Examples:

* API client
* HTTP client
* Third-party integrations

### pages

Top-level route components rendered by the router.

### routes

Defines application routing and route protection.

### types

Stores shared TypeScript interfaces and type definitions.

### utils

Stores reusable helper functions that are not tied to a specific feature.

## Design Philosophy

The project favors feature-based organization over type-based organization whenever practical. Code that belongs together should remain together to improve maintainability as the application grows.
