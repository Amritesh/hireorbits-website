# Hireorbits website design

Based on `Hireorbits Solution.pages`, reviewed September 14, 2026.

## Recommended implementation

Use Astro to generate static HTML, with small reusable components and one shared stylesheet. Keep page content in a separate data file. Only the mobile navigation needs JavaScript; service details can use native HTML disclosure elements. Avoid a component library, application state framework, or server runtime.

Alternatives: plain HTML has fewer dependencies but duplicates shared navigation across fourteen pages; React adds browser JavaScript and routing without a requirement that benefits from them. Astro balances readable components with a small delivered website.

## Visual direction

White backgrounds, dark navy typography, bright blue accents, subtle gradients, generous spacing, and restrained motion. Use a text-based Hireorbits wordmark until the actual logo is supplied; the document references a logo but does not include an identifiable brand asset. The first screen introduces technology and talent solutions, with consultation and service links. A simple orbital geometric accent supports the company name without adding an image dependency.

## Pages and content

- Home: introduction, technology and staffing service groups, industry overview, differentiators, engagement models, consultation invitation.
- About Us: company story, mission, vision, values, founding year, Patna headquarters, and stated geographic presence.
- Services: all ten service groups and their detailed capabilities from the source.
- Technology Solutions: software development, AI and data, cloud and DevOps, ERP and consulting, quality and managed services.
- Staffing Solutions: IT, engineering and manufacturing, semiconductor, healthcare, non-IT staffing, and engagement models.
- Industries: current sectors from the document; public sector explicitly remains future expansion.
- Why Choose Us: source-grounded strengths, delivery models, and partnership approach.
- Career Opportunities: talent areas and an email application link; no invented open roles or application upload system.
- Case Studies: honest empty state because the source provides no publishable client projects or results.
- Blog & Insights: honest empty state because the source contains no articles.
- Resources: a concise company and capabilities overview based on the supplied material.
- Contact Us: office address, business hours, LinkedIn, and role-specific email links. Omit the placeholder phone number.
- Privacy Policy and Terms & Conditions: minimal site-specific information describing the implemented informational website; no invented regulatory, certification, security, or contractual claims.

Group desktop navigation into Company, Solutions, Industries, and Insights with clear Careers and Contact links. Include every required page in the footer. Mobile navigation must work with touch and keyboard input.

## Interactions and data handling

Consultation and project CTAs lead to the contact page. Contact and careers actions open clearly labelled email links using the supplied addresses. No false booking confirmation, inert submission form, or simulated application upload. Receiving those emails requires the company to have working mailboxes; their existence is not established by the document.

Keep future certifications and expansion plans separate from current qualifications. Do not invent customers, testimonials, outcomes, staff portraits, or statistics. The source's security wish list is not evidence that those protections are configured.

## Components

Shared layout, header, footer, section heading, service card, call-to-action section, and optional disclosure group. Generate repeated service and industry content from data. Keep page-specific markup in its page rather than adding abstractions for single uses.

## Hosting

Use the authenticated GitHub account `Amritesh` and commit author `Amritesh <thenectorgod@gmail.com>`. Proposed repository name: `hireorbits-website`, subject to availability. Exclude the original Pages document and extracted source notes from publication. Use a GitHub Actions static build and deployment, with repository-relative asset paths.

GitHub Pages can serve the static implementation without Vercel. GitHub's published terms restrict using Pages to run an online business or facilitate commercial transactions, so the company's intended production usage needs to fit those terms. A commercial hosting provider is an alternative if necessary. No custom domain DNS changes are included until ownership and DNS access are available. Contact form delivery, resume uploads, or real scheduling would require an external service or backend; the initial implementation uses email contact.

## Verification

Run the production build, check every generated route and internal link, and inspect desktop and mobile layouts. Exercise navigation, disclosures, keyboard focus, reduced-motion behavior, and email links. After deployment, verify the public URL and representative nested pages and assets. Report any hosting or account restriction explicitly rather than claiming deployment succeeded.
