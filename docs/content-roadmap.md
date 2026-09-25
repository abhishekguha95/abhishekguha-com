# Content and portfolio roadmap

The visual redesign is the current implementation task. The work below is planned separately. Suggested titles and project directions are proposals; they do not imply that Abhishek has completed this work.

## 1. Collect the source material

Gather the real career timeline, roles and responsibilities, public repository links, project screenshots, contact/social URLs, and any existing resume. For each potential case study, record the problem, constraints, individual contribution, alternatives considered, outcome, and what can be shared publicly.

Deliverable: a verified content inventory with two strongest case studies selected. Avoid blocking design work on this information; do not fill gaps with invented details.

## 2. Projects and case studies

Prioritize existing work. Publish two detailed case studies before expanding the portfolio into a larger catalogue.

Each case study should include:

1. One-sentence problem and outcome.
2. Scope, status, dates, and Abhishek's contribution.
3. Constraints and architecture diagram.
4. Key decisions and alternatives.
5. Demo, screenshots, or a runnable public repository when available.
6. Verified results, limitations, and lessons.

Possible public experiments if existing work cannot be shared:

| Direction | Small useful scope | Evidence to produce |
| --- | --- | --- |
| Durable job scheduler | Leases, retries, and worker crash recovery | Runnable example and failure timeline |
| Event-processing reliability lab | Duplicate delivery and idempotent side effects | Repeatable failure scenarios and traces |
| RAG evaluation workbench | Compare retrieval changes against a fixed question set | Evaluation dataset, methodology, and measured results |

Choose one experiment based on actual interest and time; these are alternatives, not three required builds. Add an Astro projects collection and detail routes when real case-study content is ready. Link projects to relevant articles.

Acceptance: every published claim is grounded, every visible link works, and each case study explains a decision rather than merely listing technologies.

## 3. Experience and resume

Use the verified career timeline to create a concise experience page: company, role, dates, scope, and two or three contributions per role. Expand two useful experiences into deeper stories such as a migration, incident, performance investigation, or architectural decision.

Prepare a printable/downloadable resume only after the underlying information is verified. Keep its dates and achievements consistent with the website. Add contact links using user-provided destinations.

Acceptance: no invented numbers; qualitative outcomes are welcome when metrics are unavailable. The resume must be an actual readable artifact before showing a download button.

## 4. Three flagship articles

Use this editorial structure: problem, constraints, alternatives, decision, implementation, evidence, limitations.

| Proposed article | Work required before publication |
| --- | --- |
| What happens when the same event arrives twice? | Runnable reproduction, idempotency example, and failure diagram |
| Designing a scheduler that survives worker crashes | Small implementation, recovery experiments, and explicit guarantees |
| How I evaluate a RAG system before changing its prompts | Documented question set, evaluation method, failure categories, and comparisons |

An experience-based article about an architecture decision reconsidered later is an equally strong alternative when source material exists.

Improve existing writing in a later editorial pass:

- **Building Backends That Age Well:** ground principles in a specific system or experience; explain when the advice applies and its tradeoffs.
- **Hosting This Site on Cloudflare Pages:** verify current deployment instructions against primary documentation; add relevant configuration, screenshots, and firsthand troubleshooting details.

Acceptance: each flagship article contributes original evidence, a reusable example, or a carefully explained firsthand lesson. Review technical claims against primary sources. Clearly distinguish synthetic demonstrations from production experience.

## 5. Reading and discovery improvements

The visual redesign includes reading-time estimates, generated article contents navigation, and visible RSS links. After content expands, add article metadata for updated dates, featured entries, and related work, plus sharing images and semantic article metadata.

Add topic filters or search only when the collection is large enough to benefit. Keep a short dated “Currently” update if there is a sustainable maintenance habit. A newsletter is optional and should follow a decision about publishing cadence and service.

## Suggested release sequence

1. Visual redesign, responsive navigation, and consistent reading layouts.
2. Two verified project case studies and a substantive experience/resume page.
3. One flagship article with original diagrams and a runnable example.
4. Two further articles, connected to the relevant projects.
5. Discovery and sharing improvements based on the resulting content library.

There are no assumed deadlines. Content availability and quality determine the pace.
