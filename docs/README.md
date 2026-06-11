# SRM Curiousbees — Documentation Directory

Welcome to the documentation homepage for SRM Curiousbees. This index categorizes all project blueprints, onboarding guides, and architectural designs to help new developers navigate the repository.

---

## 🏛️ 1. Architecture & Blueprints

Overview of the system design, tech stack selection, and codebase structure.

* [System Architecture](file:///Users/maddy/Current%20Project/SRM_Curiousbees/docs/architecture/ARCHITECTURE.md): Structural layout of the Next.js frontend, NestJS API, and shared workspaces.
* [Project Overview](file:///Users/maddy/Current%20Project/SRM_Curiousbees/docs/architecture/PROJECT_OVERVIEW.md): Business domains, user stories, and mock workflow details.
* [Directory Layout Details](file:///Users/maddy/Current%20Project/SRM_Curiousbees/docs/architecture/file-structure.md): Granular file-tree layout details for workspaces.
* [Tech Stack Breakdown](file:///Users/maddy/Current%20Project/SRM_Curiousbees/docs/architecture/tech-stack.md): In-depth notes on chosen libraries and core frameworks.

---

## 💻 2. Local Development & Setup

Guidelines for configuring local dev instances, using bypass switches, and debugging setups.

* [Onboarding Quick Start](file:///Users/maddy/Current%20Project/SRM_Curiousbees/docs/guides/QUICK_START.md): 5-minute local startup script workflow.
* [Development Bypass Mode](file:///Users/maddy/Current%20Project/SRM_Curiousbees/docs/guides/DEVELOPMENT_MODE_GUIDE.md): Switch roles locally without Firebase Google SSO configs.
* [Local Troubleshooting Guide](file:///Users/maddy/Current%20Project/SRM_Curiousbees/docs/guides/troubleshooting.md): Resolution steps for PostgreSQL connections, Redis errors, or Prisma locks.
* [Demo User Accounts Roster](file:///Users/maddy/Current%20Project/SRM_Curiousbees/docs/guides/DEMO_USERS.md): List of pre-seeded supervisor/scholar credentials.
* **Platform Setup Guides**:
  * [macOS Installation](file:///Users/maddy/Current%20Project/SRM_Curiousbees/docs/guides/setup-macos.md)
  * [Windows Installation](file:///Users/maddy/Current%20Project/SRM_Curiousbees/docs/guides/setup-windows.md)
  * [Linux Installation](file:///Users/maddy/Current%20Project/SRM_Curiousbees/docs/guides/setup-linux.md)
* [Bypass Architecture Details](file:///Users/maddy/Current%20Project/SRM_Curiousbees/docs/development/development_mode.md): Design patterns for token-bypassing and mock user states.

---

## 🗄️ 3. Database Architecture

* [Database System Design](file:///Users/maddy/Current%20Project/SRM_Curiousbees/docs/database/DATABASE_ARCHITECTURE.md): Database schemas, tables, index definitions, and schema relationships.

---

## 🚀 4. Deployment & Infrastructure

Release checklists, CI/CD pipeline triggers, and hosting environments.

* [Release Transition Checklist](file:///Users/maddy/Current%20Project/SRM_Curiousbees/docs/guides/RELEASE_CHECKLIST.md): Steps to migrate from developer bypass mode to secured Firebase SSO.
* [Free-Tier Team Deployment Guide](file:///Users/maddy/Current%20Project/SRM_Curiousbees/docs/deployment/TEAM_TESTING_DEPLOYMENT.md): Deployment workflow for Supabase, Railway, and Vercel free tiers.
* [Cloud Production Hosting](file:///Users/maddy/Current%20Project/SRM_Curiousbees/docs/deployment/DEPLOYMENT_GUIDE.md): Production release instructions.
* [Production Build Details](file:///Users/maddy/Current%20Project/SRM_Curiousbees/docs/deployment/deployment_test_production.md): Commands for testing production bundles.
* [GitHub CI/CD Pipelines](file:///Users/maddy/Current%20Project/SRM_Curiousbees/docs/deployment/CI_CD.md): Auto-checks, lints, and build validation workflows.

---

## 🩺 5. Telemetry & Audits

Telemetry specs, security practices, and repository health audits.

* [Health Diagnostics Telemetry](file:///Users/maddy/Current%20Project/SRM_Curiousbees/docs/development/HEALTHCHECK.md): Output specs for `/api/health` and `/api/system`.
* [Intranet Security Audits](file:///Users/maddy/Current%20Project/SRM_Curiousbees/docs/audits/SECURITY_AUDIT.md): CORS setups, Helmet headers, and rate limits.
* [Engineering Audit Phase 2](file:///Users/maddy/Current%20Project/SRM_Curiousbees/docs/audits/audit_report_phase2.md): Re-architecturing and cleanup tracking records.

---

## 📊 6. System & Organization Reports

Cleanup metrics, dependency mappings, and dashboard completion checklists.

* [Dashboard Completion Report](file:///Users/maddy/Current%20Project/SRM_Curiousbees/docs/reports/DASHBOARD_COMPLETION_REPORT.md): verified subviews lists for Scholar, Supervisor, and Admin dashboards.
* [Feature Gap Audit Matrix](file:///Users/maddy/Current%20Project/SRM_Curiousbees/docs/reports/FEATURE_GAP_REPORT.md): Status logs for all frontend/backend endpoint routes.
* [Enterprise Structure Organization](file:///Users/maddy/Current%20Project/SRM_Curiousbees/docs/reports/REPOSITORY_STRUCTURE_REPORT.md): Reorganized monorepo directory layout report.
* [Orphaned/Unused Files Audit](file:///Users/maddy/Current%20Project/SRM_Curiousbees/docs/reports/UNUSED_FILES_REPORT.md): Catalog of pruned files/directories.
* [Code Duplication Logs](file:///Users/maddy/Current%20Project/SRM_Curiousbees/docs/reports/DUPLICATE_CODE_REPORT.md): Audit findings confirming zero code duplication.
* [Dependency Hygiene Audit](file:///Users/maddy/Current%20Project/SRM_Curiousbees/docs/reports/DEPENDENCY_AUDIT.md): Validations of parent/child package dependencies.
* [Clerk Migration Plan](file:///Users/maddy/Current%20Project/SRM_Curiousbees/CLERK_MIGRATION_PLAN.md): Blueprint for migrating authentication from Firebase to Clerk while keeping FCM notifications.
