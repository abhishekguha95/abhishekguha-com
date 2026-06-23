---

title: "Hosting This Site on Cloudflare Pages"
description: "How I bought a domain on Cloudflare, connected a GitHub repo to Cloudflare Pages, and shipped a static site without touching a server."
pubDate: 2026-06-23
tags:

* Cloudflare
* Domain
* Static Sites

---

When I decided to build a personal site, I wanted three things: a domain I controlled, a deployment story that did not involve babysitting a server, and a workflow that let me push to GitHub and call it done. After a weekend of wiring things together, that is exactly what I have — and the entire stack is Cloudflare for infrastructure and GitHub for source control.

There is no production VM, no NGINX config, and no cron job quietly rotting in `/etc`. The site you are reading is built by Cloudflare Pages from a GitHub repository, served from Cloudflare's edge network, and reached through a domain I bought from Cloudflare Registrar in about three minutes.

This post walks through how that is set up, why each piece earned its place, and the small details that are easy to miss the first time around.

### The Architecture

The deployment pipeline is intentionally simple:

```text
GitHub Repository
        │
        ▼
Cloudflare Pages Build
        │
        ▼
Static Assets
        │
        ▼
Cloudflare Edge Network
        │
        ▼
Visitors
```

Every push to the repository triggers a build. Cloudflare generates the static output, distributes it across its edge network, and serves it directly to visitors. There is no application server sitting behind a load balancer and no operating system to maintain.

### Why Cloudflare for Everything

The first decision was consolidation.

The site is static. There is no API to run, no database to host, and no background worker that needs a home. Any deployment story that introduces a server I have to patch is more infrastructure than the workload justifies.

Cloudflare lets one account handle three jobs that would otherwise involve multiple vendors:

* **Registrar** for the domain.
* **Pages** for build, deployment, and hosting.
* **DNS**, which is automatically managed once the domain is on Cloudflare.

That consolidation is the real win. It is not the free tier, although that helps. It is having one dashboard where the domain, DNS records, builds, and deployments all live.

The biggest advantage turned out not to be cost but eliminating an entire category of DNS configuration mistakes. When something breaks, there is exactly one place to look.

### Buying the Domain on Cloudflare Registrar

Cloudflare Registrar sells domains at cost, with no markup. For a `.com`, that is roughly the wholesale registry price plus the ICANN fee. There is no first-year discount that doubles on renewal and no upsell to a "privacy protection" add-on that should be free by default.

The process is straightforward:

1. Search for the domain in the Cloudflare dashboard.
2. Add it to the cart, enter the registration details, and pay.
3. Cloudflare becomes the registrar of record.

Once the purchase completes, the domain appears in the account with nameservers already pointing to Cloudflare. There is no separate "connect your domain to Cloudflare" step.

This is one of the details that makes the rest of the setup feel frictionless. Many tutorials still begin with manually moving nameservers, but if the domain was purchased directly through Cloudflare, that work is already done.

If you are transferring an existing domain instead, the destination is the same but the process takes longer: unlock the domain at the current registrar, request the transfer, approve the verification email, and wait for the registry transfer to complete.

### Connecting the GitHub Repository

The deployment workflow I wanted was simple:

> Push to `main`, and the site updates.

That is exactly what Cloudflare Pages provides.

The setup is:

1. Create a new Pages project.
2. Connect a GitHub account.
3. Authorize Cloudflare to access the repository.
4. Select the repository and production branch.
5. Configure the build settings.
6. Deploy.

For this site, which uses Astro, the configuration is:

* **Framework preset**: Astro
* **Build command**: `npm run build`
* **Output directory**: `dist`

That is the entire build configuration.

Every push to the production branch triggers a fresh deployment. Every pull request receives its own preview deployment URL.

This turned out to be one of the most useful features. Being able to review a change as a fully rendered site before merging significantly improves the feedback loop.

Even better, each preview deployment is tied to a specific commit, making it easy to reproduce issues against the exact version that was reviewed and approved.

### Custom Domains and DNS

Once the first deployment is live, attaching a custom domain is a matter of opening the Pages project settings, selecting **Custom Domains**, and adding the root domain.

Because the DNS zone is already hosted on Cloudflare, the required records are created automatically.

Cloudflare handles the routing using a feature called **CNAME flattening**. Standard DNS does not allow a true `CNAME` record at the apex of a domain (`example.com`), but Cloudflare resolves the target internally and returns the appropriate records to clients.

The two DNS records worth understanding are:

* **The apex domain** (`example.com`) which points to the Pages project through Cloudflare's flattening mechanism.
* **The `www` subdomain**, typically configured as a `CNAME` pointing to the same Pages deployment.

Once both exist, redirecting `www` to the apex domain (or the other way around) is a simple redirect rule.

### HTTPS Without Thinking About It

Cloudflare automatically provisions and manages TLS certificates for Pages projects.

In most cases, certificates become available within minutes of attaching the domain. After that, visitors receive a valid HTTPS certificate from Cloudflare's edge network.

There is no `certbot`, no certificate renewal automation to maintain, and no ACME challenges to troubleshoot.

HTTPS simply becomes another problem that disappears from the operational checklist.

### What I Push, and What Cloudflare Builds

The repository itself is plain Astro.

The components, content collections, and configuration all live in GitHub. Cloudflare clones the repository, runs the build, and serves the generated output.

What matters is that the application remains host-agnostic.

There is no Cloudflare-specific code in the project. If I decided to move tomorrow, the same repository could be deployed elsewhere with little or no modification.

That separation is valuable. Infrastructure choices should not leak deeply into application code unless there is a compelling reason.

The build itself is fast because Astro generates static HTML ahead of time. Pages is effectively serving pre-rendered assets from edge locations around the world.

There is no server-side rendering, no request-time application execution, and no cold-start penalty.

### What Goes Wrong

A few things I learned along the way:

* **Branch selection is per environment.** If pushes are not triggering deployments, verify the correct production branch is configured.
* **The output directory must match the framework.** Astro uses `dist`, Hugo uses `public`, and Next.js uses `.next`. If the framework configuration changes, update Pages accordingly.
* **Preview URLs are public by default.** The URLs are difficult to guess but are not private. Teams should consider whether preview deployments expose anything sensitive.
* **DNS propagation is mostly a non-event.** If domain changes appear to take an unusually long time, the first thing to verify is that the domain is actually using Cloudflare nameservers.

### The Bill

The bill for this site is the cost of the domain, plus zero.

Cloudflare Pages offers a generous free tier that is more than sufficient for a personal blog. DNS hosting is included, HTTPS is included, and there are no servers running in the background generating monthly surprises.

For a hobby project, that matters.

### Where This Approach Stops Working

This architecture works because the site is static.

If the application required a relational database, server-side business logic, long-running background jobs, scheduled processing, or stateful services, additional infrastructure would be necessary.

The lesson is not that every application should be deployed this way.

The lesson is that infrastructure should match the workload.

### Closing Thoughts

The entire setup — domain, repository, build pipeline, deployment, hosting, DNS, and HTTPS — took a weekend to configure and has required very little attention since.

The site is fast, deployments are predictable, and GitHub remains the source of truth.

More importantly, the infrastructure matches the problem.

A static site does not need a virtual machine, a reverse proxy, certificate automation, or an operating system to maintain. Removing those moving parts resulted in a simpler, cheaper, and more reliable system.

If you are starting a personal site today, I would begin with a setup like this before reaching for a VPS. Spend your time writing content and building things people can use rather than maintaining infrastructure that the project does not actually need.
