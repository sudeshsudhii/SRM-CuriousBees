# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 0.3.x   | ✅ Active support  |
| < 0.3   | ❌ No longer supported |

## Reporting a Vulnerability

If you discover a security vulnerability in SRM Curiousbees, please report it responsibly.

**Do NOT open a public GitHub issue for security vulnerabilities.**

Instead, please send an email to:

📧 **srm-curiousbees-security@srmist.edu.in**

Include the following in your report:

1. **Description** of the vulnerability
2. **Steps to reproduce** (proof of concept if possible)
3. **Impact assessment** — what can an attacker achieve?
4. **Suggested fix** (optional but appreciated)

## Response Timeline

| Stage | Expected Time |
|-------|--------------|
| Acknowledgment | Within 48 hours |
| Initial assessment | Within 5 business days |
| Fix and disclosure | Within 30 days (critical), 90 days (non-critical) |

## Security Best Practices for Contributors

- Never commit secrets, API keys, or credentials to the repository
- Always use environment variables for sensitive configuration
- Run `npm audit` periodically to check for dependency vulnerabilities
- Follow the principle of least privilege when designing access control

## Disclosure Policy

We follow a coordinated disclosure model. Once a fix is released, we will:

1. Credit the reporter (unless they prefer anonymity)
2. Publish a security advisory on GitHub
3. Update the CHANGELOG with the security fix

Thank you for helping keep SRM Curiousbees and its users safe.
