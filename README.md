<div align="center">

# SRM CuriousBees

<img src="./docs/assets/hero-banner.png" alt="SRM CuriousBees Hero Banner" width="100%" />

### Research Collaboration & Supervisor-Scholar Management Platform

> *Accelerating academic discovery through centralized research collaboration, opportunity management, and intelligent supervisor-scholar workflows.*

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Turborepo](https://img.shields.io/badge/Turborepo-EF4444?style=for-the-badge&logo=vercel&logoColor=white)](https://turbo.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Open Source](https://img.shields.io/badge/Open_Source-%E2%99%A5-red?style=flat-square)](https://github.com/sudeshsudhii/SRM-CuriousBees)
[![Monorepo](https://img.shields.io/badge/Architecture-Monorepo-8A2BE2?style=flat-square)](#)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square)](#)
[![Active Development](https://img.shields.io/badge/Status-Active_Development-orange?style=flat-square)](#)

</div>

---

## ⚡ Quick Overview

| 🎯 The Problem | 💡 The Solution |
|-------------|--------------|
| Fragmented communication channels (email, chat, cloud drives) hamper academic progress, thesis tracking, and inter-departmental collaboration. | A unified, secure digital ecosystem centralizing academic supervision, project tracking, and research discovery. |

**Target Users:**
* 🎓 **Research Scholars:** Streamlined mentorship, milestone tracking, and cross-department collaboration.
* 👨‍🏫 **Faculty Supervisors:** Granular control over research workflows, scholar recruitment, and progress monitoring.
* 🛡️ **Institutional Administrators:** Top-down visibility, department management, and security governance.

---

## 📊 Key Metrics at a Glance

<div align="center">

| Metric | Capability |
|:---:|:---|
| 👥 **3 User Roles** | Strict isolation between Scholars, Supervisors, and Institute Admins. |
| 🛡️ **RBAC Model** | Deeply enforced Role-Based Access Control protecting research data. |
| 🧩 **Monorepo** | Highly optimized Turborepo structure sharing types and UI components. |
| 🔌 **REST APIs** | NestJS backend offering strictly validated, scalable API endpoints. |
| 🗄️ **PostgreSQL** | Relational data integrity powered by Supabase and Prisma ORM. |
| 🔐 **Clerk Auth** | Enterprise-grade Identity Management and SSO integrations. |

</div>

---

## 🗺️ Architecture Navigation

Explore the system architecture in depth:

* [🏗️ High-Level System Architecture](#1-high-level-system-architecture)
* [🔄 API Request Lifecycle (Sequence)](#6-sequence-diagram-api-request-lifecycle)
* [📦 Monorepo Component Tree](#7-component-diagram)
* [🗄️ Database ER Diagram](#9-database-er-diagram)
* [🚀 CI/CD Pipeline](#10-cicd-pipeline-diagram)

---

## 💻 Tech Stack Showcase

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Zustand](https://img.shields.io/badge/Zustand-4A332D?style=for-the-badge)

### Backend
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Zod](https://img.shields.io/badge/Zod-3068B7?style=for-the-badge&logo=zod&logoColor=white)

### Database & Auth
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white) ![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)

### Infrastructure & DevOps
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) ![Railway](https://img.shields.io/badge/Railway-131415?style=for-the-badge&logo=railway&logoColor=white) ![Turborepo](https://img.shields.io/badge/Turborepo-EF4444?style=for-the-badge&logo=vercel&logoColor=white)

---

## Architecture Diagrams

Below are the comprehensive Mermaid diagrams detailing the system from various architectural perspectives.

### 1. High-Level System Architecture

```mermaid
flowchart LR
    User([University User]) --> Client[Next.js Frontend Client]
    Client -- API Requests --> Backend[NestJS Backend API]
    Client -- SSO --> Clerk[Clerk Authentication]
    Backend -- Validates Tokens --> Clerk
    Backend -- Prisma ORM --> DB[(Supabase PostgreSQL)]
```

### 2. Detailed Architecture Diagram

```mermaid
flowchart TD
    subgraph Frontend [Apps/Web - Next.js]
        UI[Tailwind Components]
        Store[Zustand State]
        Routes[App Router]
    end

    subgraph Backend [Apps/API - NestJS]
        AuthGuard[Clerk Auth Guard]
        Controllers[API Controllers]
        Services[Business Logic Services]
        Prisma[Prisma Client]
    end

    subgraph Database [Data Layer]
        PG[(PostgreSQL)]
    end

    Routes --> UI
    UI --> Store
    Store --> Controllers
    Controllers --> AuthGuard
    AuthGuard --> Services
    Services --> Prisma
    Prisma --> PG
```

### 3. Workflow Diagram (User Journey)

```mermaid
flowchart TD
    Start([User Registration]) --> SelectRole{Select Role?}
    SelectRole -->|Scholar| ChooseSup[Select Supervisor]
    SelectRole -->|Supervisor| AwaitAdmin[Await Admin Approval]
    
    ChooseSup --> SupApprove{Supervisor Approves?}
    SupApprove -->|Yes| ActiveScholar[Active Scholar Account]
    SupApprove -->|No| ChooseSup
    
    AwaitAdmin --> AdminApprove{Admin Approves?}
    AdminApprove -->|Yes| ActiveSupervisor[Active Supervisor Account]
    
    ActiveScholar --> Collaborate[Join Workspaces & Apply to Opportunities]
    ActiveSupervisor --> Create[Create Workspaces & Post Opportunities]
```

### 4. Data Flow Diagram

```mermaid
flowchart TD
    Input[User Action via UI] --> ClientValidation[Zod Schema Validation]
    ClientValidation -->|Valid Data| APIRequest[Fetch API call]
    APIRequest --> ServerMiddleware[Rate Limiting & Authentication]
    ServerMiddleware --> DTOValidation[NestJS Validation Pipe]
    DTOValidation --> BusinessLogic[Service Layer Execution]
    BusinessLogic --> ORM[Prisma SQL Generation]
    ORM --> Database[(Supabase PostgreSQL)]
    Database --> ORM
    ORM --> BusinessLogic
    BusinessLogic --> ResponseFormatter[Controller Formatting]
    ResponseFormatter --> ClientState[Update Zustand Store]
    ClientState --> Render[UI Re-render]
```

### 5. Use Case Diagram

```mermaid
flowchart LR
    Scholar([Scholar])
    Supervisor([Supervisor])
    Admin([Admin])
    
    subgraph SRM_Curiousbees
        UC1(Join Workspace)
        UC2(Apply for Opportunity)
        UC3(Create Workspace)
        UC4(Post Opportunity)
        UC5(Approve Scholar Request)
        UC6(Manage Departments)
        UC7(Review System Logs)
    end
    
    Scholar --> UC1
    Scholar --> UC2
    
    Supervisor --> UC3
    Supervisor --> UC4
    Supervisor --> UC5
    
    Admin --> UC6
    Admin --> UC7
```

### 6. Sequence Diagram (API Request Lifecycle)

```mermaid
sequenceDiagram
    participant Client as Next.js Client
    participant Auth as Clerk Guard
    participant API as NestJS Controller
    participant Service as Business Logic
    participant DB as PostgreSQL

    Client->>Auth: POST /api/v1/opportunities (Bearer JWT)
    Auth->>Auth: Validate JWT Signature
    Auth-->>API: Authentication Passed (UserID extracted)
    API->>Service: handleCreateOpportunity(DTO, UserID)
    Service->>DB: prisma.opportunity.create({...})
    DB-->>Service: Return Created Record
    Service-->>API: Map to Response Object
    API-->>Client: 201 Created (JSON payload)
```

### 7. Component Diagram

```mermaid
flowchart TD
    subgraph Web App Component Tree
    Layout --> Sidebar
    Layout --> Navbar
    Layout --> PageContent
    
    PageContent --> WorkspaceModule
    PageContent --> OpportunitiesBoard
    PageContent --> DiscussionForums
    
    WorkspaceModule --> DocumentManager
    WorkspaceModule --> MilestoneTracker
    end
```

### 8. Deployment Diagram

```mermaid
flowchart TD
    subgraph Client Environments
        Browser[Desktop Browser]
        Mobile[Mobile Browser]
    end

    subgraph Cloudflare CDN
        VercelEdge[Vercel Edge Network]
    end

    subgraph Production Hosting
        Vercel[Vercel - Next.js App]
        Railway[Railway - Node.js Container]
    end

    subgraph Cloud Services
        Supabase[(Supabase - PostgreSQL DB)]
        Clerk[Clerk Auth Tenant]
    end

    Browser --> VercelEdge
    Mobile --> VercelEdge
    VercelEdge --> Vercel
    Vercel --> Railway
    Vercel --> Clerk
    Railway --> Clerk
    Railway --> Supabase
```

### 9. Database ER Diagram

```mermaid
erDiagram
    USER ||--o{ THREAD : creates
    USER ||--o{ COMMENT : writes
    USER ||--o{ OPPORTUNITY : posts
    USER ||--o{ WORKSPACE_MEMBER : joins
    WORKSPACE ||--|{ WORKSPACE_MEMBER : contains
    WORKSPACE ||--o{ WORKSPACE_FILE : stores
    WORKSPACE ||--o{ WORKSPACE_MILESTONE : tracks
    USER ||--o{ NOTIFICATION : receives
    USER ||--o{ REPORT : submits
    FACULTY ||--|{ DEPARTMENT : has
    DEPARTMENT ||--o{ SCHOLAR_PROFILE : maps
    DEPARTMENT ||--o{ SUPERVISOR_PROFILE : maps

    USER {
        string id PK
        string email
        string role
        string status
    }
    WORKSPACE {
        string id PK
        string title
        string description
    }
    OPPORTUNITY {
        string id PK
        string title
        string researchDomain
    }
    THREAD {
        string id PK
        string title
        string content
    }
```

### 10. CI/CD Pipeline Diagram

```mermaid
flowchart LR
    Push[Code Push / PR] --> Prettier[Format Check]
    Push --> ESLint[Lint & Typecheck]
    ESLint --> Test[Unit & E2E Tests]
    Test --> Build[Monorepo Build]
    Build --> DeployAPI[Deploy Backend Container]
    Build --> DeployWeb[Deploy Frontend Static/SSR]
```

---

## Technology Stack

```text
Frontend Layer
├── Next.js (App Router)
├── React
├── TypeScript
├── Tailwind CSS
├── Zustand (State Management)
└── shadcn/ui

Backend Layer
├── NestJS
├── TypeScript
├── Prisma (ORM)
└── Zod (Validation)

Data & Auth Layer
├── PostgreSQL (Database)
├── Supabase (Hosting / Storage)
└── Clerk (Authentication)
```

---

## API Documentation

The backend exposes a structured RESTful API. Below are key modular boundaries:

| Method | Endpoint | Description | Role Required |
| ------ | -------- | ----------- | ------------- |
| `GET` | `/api/v1/users/profile` | Retrieve current user profile | Any Authenticated |
| `POST` | `/api/v1/workspaces` | Create a new research workspace | Supervisor |
| `GET` | `/api/v1/workspaces/:id` | Fetch workspace documents/milestones | Workspace Member |
| `POST` | `/api/v1/opportunities` | Post a new research listing | Supervisor |
| `POST` | `/api/v1/threads` | Create a new discussion thread | Any Authenticated |
| `POST` | `/api/v1/admin/approve` | Approve a scholar/supervisor | Institute Admin |

---

## Project Structure

```text
SRM_Curiousbees/
├── apps/
│   ├── api/                  # NestJS Backend Application
│   │   ├── prisma/           # Database schema and seeders
│   │   └── src/              # API Controllers, Services, Modules
│   └── web/                  # Next.js Frontend Application
│       ├── src/app/          # Next.js App Router Pages
│       └── src/components/   # Reusable UI Components
├── packages/
│   ├── constants/            # Shared Enums and Identifiers
│   ├── shared-utils/         # Shared Zod Schemas & Functions
│   ├── types/                # Shared TypeScript Interfaces
│   └── ui/                   # Shared UI Components (shadcn)
├── docs/                     # Architectural Documentation
├── scripts/                  # CI/CD and Maintenance Scripts
└── package.json              # Monorepo Workspace Configuration
```

---

## Getting Started

### Prerequisites
* Node.js (v18+)
* npm or pnpm
* PostgreSQL instance (or Supabase local development CLI)
* Clerk API Keys

### Installation
1. Clone the repository: `git clone https://github.com/sudeshsudhii/SRM-CuriousBees.git`
2. Install dependencies: `npm install`

### Configuration
Create `.env` files in `apps/api` and `apps/web` referencing `.env.example`.
Key variables include `DATABASE_URL`, `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, and `CLERK_SECRET_KEY`.

### Running Locally
Run the monorepo concurrently:
```bash
npm run dev
```
* Frontend starts at `http://localhost:3000`
* Backend API starts at `http://localhost:3001`

### Docker Setup
To run using Docker Compose:
```bash
docker-compose up --build
```

---

## Environment Variables

| Variable | Location | Description |
| -------- | -------- | ----------- |
| `DATABASE_URL` | `apps/api` | Connection string for PostgreSQL |
| `CLERK_SECRET_KEY` | `apps/api`, `apps/web` | Backend Clerk Secret |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`| `apps/web` | Frontend Clerk Key |
| `FRONTEND_URL` | `apps/api` | CORS allowed origin |

---

## Testing

* **Unit Tests**: Executed via Jest inside `apps/api` and `apps/web`. (`npm run test`)
* **Integration Tests**: E2E testing framework utilizing Supertest. (`npm run test:e2e`)

---

## Security

* **Authentication**: Token-based architecture offloaded to Clerk. JWTs are passed securely via headers and strictly validated at the API edge via Guards.
* **Authorization**: Granular Role-Based Access Control (RBAC) enforced via Prisma data isolation and Next.js middleware routing blocks.
* **Data Protection**: All API endpoints enforce strict CORS. Database connections use SSL. Input validation is rigorously handled by Zod.

---

## Performance Optimizations

* **Monorepo Caching**: Built utilizing Turborepo techniques, allowing cached builds and lighting-fast CI iterations.
* **Frontend Strategy**: Next.js App Router for aggressive server-side rendering (SSR) and React Server Components (RSC) to minimize client bundle sizes.
* **Database Pooling**: Prisma configured with optimized connection pooling directly linked to Supabase PgBouncer.

---

## Scalability Considerations

* **Horizontal Scaling**: The decoupled architecture (Next.js & NestJS) allows independent scaling of the frontend CDN network (Vercel) and the backend compute (Railway/AWS).
* **Vertical Scaling**: Database indexes have been optimized for high-read scenarios (such as Thread filtering and Opportunity matching).

---

## Future Enhancements

### Short-Term Enhancements
* Interactive real-time notifications for Thread replies and Opportunity approvals.
* Bulk CSV import for Institute Admins to onboard faculty.

### Medium-Term Enhancements
* Native Mobile application wrapper.
* Integration with university-specific LDAP/Active Directory instances.

### Long-Term Vision
* AI-powered semantic matching between Scholars and cross-departmental Opportunities.
* RAG-based chatbot trained on historical Workspace Milestones and University Guidelines.

---

## Open Source Contribution Guide

1. Fork the repository and run the setup scripts.
2. Adhere to the `CONTRIBUTING.md` branching strategy (`feature/`, `bugfix/`, `hotfix/`).
3. Ensure all Zod schemas and Prisma models remain in sync across packages.
4. Open a Pull Request referencing the Issue Template.

---

## License

This project is licensed under the [MIT License](LICENSE).
