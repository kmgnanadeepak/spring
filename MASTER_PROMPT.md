# Master Java + Spring Boot Roadmap Content Generation Prompt

**Role:** You are a Senior Java Architect and Lead Educator at a world-class engineering academy. Your goal is to generate the most comprehensive, theory-heavy, and enterprise-focused curriculum page for a specific phase of the Java + Spring Boot Roadmap.

**Target Audience:** Aspiring Software Engineers who want to move from beginner to Senior Architect level over 12-18 months.

**Output Format:** A complete, production-ready HTML file using the existing website's CSS classes (`premium-title`, `module-card`, `timeline`, `checklist-item`, `badge`, etc.).

---

## CORE REQUIREMENTS FOR EVERY PHASE PAGE

### 1. Depth & Complexity
- **NO surface-level content.** Every topic must be explored to its theoretical and architectural core.
- **Explain the "Why":** Don't just show syntax; explain the problem it solves, the history (e.g., why Spring replaced Java EE), and the internal mechanics (e.g., how the JVM manages memory, how Proxies work in AOP).
- **Enterprise Grade:** Connect every concept to how it's used in Fortune 500 companies.

### 2. The "Enterprise Bookstore" Thread
- Every phase MUST include a section titled **"Enterprise Bookstore Implementation"**.
- Map the concepts of the current phase directly to the development of a master project: **"Global Bookstore Management System"**.
- *Example:* In Java Basics, talk about `Book` and `Author` classes. In Security, talk about Role-Based Access for `Librarians` vs `Customers`.

### 3. Page Structure (Mandatory 25 Sections)
Every page must follow this exact sequence:

1.  **Full Phase Overview:** High-level summary of the journey.
2.  **Why This Phase Matters:** The business and technical justification.
3.  **Complete Theoretical Roadmap:** A high-level visual/textual map of the concepts.
4.  **Deep Topic-by-Topic Breakdown:** The "Meat" of the curriculum.
5.  **Subtopic-by-Subtopic Curriculum:** Granular detail for every major topic.
6.  **Chronological Progression:** A week-by-week breakdown of learning.
7.  **Weekly Mastery Roadmap:** Specific goals for each week.
8.  **Practice Tasks:** Daily/Weekly coding challenges.
9.  **Exercises:** Theoretical quizzes or mental models.
10. **Theory Checkpoints:** "Do you understand X before moving to Y?"
11. **Mini Projects:** Small standalone implementations.
12. **Major Phase Project:** The main project for this specific phase.
13. **Enterprise Bookstore Implementation:** How this phase integrates into the master project.
14. **Architecture Mapping:** How these concepts fit into a N-tier or Hexagonal architecture.
15. **Interview Prep (3 Levels):**
    - **Beginner:** Basic syntax/concepts.
    - **Intermediate:** Internal workings/edge cases.
    - **Advanced:** System design/architectural trade-offs.
16. **Common Mistakes:** "Gotchas" and anti-patterns to avoid.
17. **Best Practices:** Industry standards (Clean Code, SOLID, etc.).
18. **Tools:** IDE plugins, CLI tools, profilers, etc.
19. **Certifications:** Relevant Oracle or Spring certifications.
20. **Free Resources:** Links to high-quality documentation and courses.
21. **Documentation:** Official docs to read.
22. **GitHub Roadmap:** What should be in their portfolio by the end of this phase.
23. **Resume Projects:** How to describe this phase on a CV.
24. **Career Outcomes:** What jobs they are now qualified for.
25. **Next Phase Readiness:** A checklist to ensure they are ready for the next level.

---

## TOPIC DEPTH EXAMPLES (Use as Benchmarks)

### Java OOP Benchmark:
- Procedural vs OOP (The "Why")
- Memory: Heap vs Stack, GC Roots, Metaspace.
- Lifecycle: Class loading, Initialization, Instantiation, Finalization.
- Principles: SOLID (SRP, OCP, LSP, ISP, DIP) in depth with code examples.
- Design Patterns: Singleton, Factory, Strategy, Observer.

### Spring Core Benchmark:
- IoC/DI Theory: Dependency Inversion vs Dependency Injection.
- Container Mechanics: BeanFactory vs ApplicationContext, Refresh cycle.
- Bean Scopes: Detailed lifecycle of Singleton vs Prototype.
- Proxies: JDK Dynamic Proxies vs CGLIB (Internal workings of @Transactional/@AOP).
- Circular Dependencies: How Spring handles them and why they are bad.

---

## UI STYLE INSTRUCTIONS
- Use `docs-layout` with a `sidebar` for navigation.
- Use `animate-fade-in` for page entry.
- Use `has-tooltip` for technical terms to provide "on-hover" definitions.
- Ensure high density of information without sacrificing readability.
- Use code snippets (using `<pre><code>`) liberally to illustrate theoretical concepts.
