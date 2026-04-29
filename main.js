document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navbar Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close nav on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Sidebar Toggle for Docs
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (sidebarToggle && sidebar) {
        // Create overlay if it doesn't exist
        let overlay = document.querySelector('.sidebar-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'sidebar-overlay';
            document.body.appendChild(overlay);
        }

        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
        });

        overlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });

        // Close sidebar on link click
        sidebar.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
            });
        });
    }

    // Resource Page Interactive Logic
    if (document.getElementById('resources-page')) {
        const resourceSearch = document.getElementById('resourceSearch');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const resourceSections = document.querySelectorAll('.resource-section');
        const sectionHeaders = document.querySelectorAll('.resource-section-header');

        // Collapsible Logic
        sectionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const section = header.parentElement;
                section.classList.toggle('collapsed');
                const icon = header.querySelector('.toggle-icon');
                icon.innerHTML = section.classList.contains('collapsed') ? '&plus;' : '&minus;';
            });
        });

        // Search Logic
        if (resourceSearch) {
            resourceSearch.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                resourceSections.forEach(section => {
                    const text = section.innerText.toLowerCase();
                    if (text.includes(searchTerm)) {
                        section.style.display = 'block';
                        // If searching, auto-expand matching sections
                        if (searchTerm.length > 2) {
                            section.classList.remove('collapsed');
                            section.querySelector('.toggle-icon').innerHTML = '&minus;';
                        }
                    } else {
                        section.style.display = 'none';
                    }
                });
            });
        }

        // Filter Logic
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filterValue = btn.getAttribute('data-filter');
                resourceSections.forEach(section => {
                    const difficulty = section.getAttribute('data-difficulty');
                    if (filterValue === 'all' || difficulty === filterValue) {
                        section.style.display = 'block';
                    } else {
                        section.style.display = 'none';
                    }
                });
            });
        });
    }

    // PDF Roadmap Generation Logic
    const downloadBtn = document.getElementById('downloadRoadmap');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            
            const primaryColor = [37, 99, 235]; // #2563eb
            const accentColor = [16, 185, 129]; // #10b981
            const textColor = [15, 23, 42];    // #0f172a
            const mutedColor = [100, 116, 139]; // #64748b

            // Helper to add a new page with header
            let pageCount = 0;
            const addNewPage = (title) => {
                if (pageCount > 0) doc.addPage();
                pageCount++;
                
                // Header Bar
                doc.setFillColor(...primaryColor);
                doc.rect(0, 0, 210, 20, 'F');
                
                doc.setTextColor(255, 255, 255);
                doc.setFontSize(12);
                doc.setFont('helvetica', 'bold');
                doc.text('JAVA ENTERPRISE MASTER ROADMAP', 15, 13);
                doc.text('JavaAcademy', 170, 13);

                if (title) {
                    doc.setTextColor(...primaryColor);
                    doc.setFontSize(22);
                    doc.text(title, 15, 40);
                    doc.setDrawColor(...primaryColor);
                    doc.setLineWidth(1);
                    doc.line(15, 45, 60, 45);
                }
                
                // Footer
                const totalPages = '{total_pages}';
                doc.setTextColor(...mutedColor);
                doc.setFontSize(10);
                doc.setFont('helvetica', 'normal');
                doc.text(`Page ${pageCount}`, 100, 285);
                doc.text('© 2026 Java Enterprise Academy', 15, 285);
            };

            // Cover Page
            doc.setFillColor(...primaryColor);
            doc.rect(0, 0, 210, 297, 'F');
            
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(40);
            doc.setFont('helvetica', 'bold');
            doc.text('JAVA ENTERPRISE', 105, 100, { align: 'center' });
            doc.text('MASTER ROADMAP', 105, 120, { align: 'center' });
            
            doc.setFontSize(18);
            doc.setFont('helvetica', 'normal');
            doc.text('Beginner to Advanced Spring Boot Engineer', 105, 140, { align: 'center' });
            
            doc.setDrawColor(255, 255, 255);
            doc.setLineWidth(2);
            doc.line(70, 150, 140, 150);
            
            doc.setFontSize(14);
            doc.text('The Definitive Guide for Professional Mastery', 105, 170, { align: 'center' });
            
            // Phase Data
            const phases = [
                {
                    title: 'Phase 1: Java Fundamentals',
                    difficulty: 'Beginner',
                    timeline: '4 Weeks',
                    topics: ['Java Basics & Logic', 'Variables & Data Types', 'Operators & Control Flow', 'Loops & Methods', 'Arrays & Strings'],
                    resources: ['Oracle Java Documentation', 'Telusko Java for Beginners', 'FreeCodeCamp Full Course'],
                    tools: ['JDK 17+', 'IntelliJ IDEA / Eclipse'],
                    projects: ['CLI Calculator', 'Student Grade Manager', 'Simple ATM Console App']
                },
                {
                    title: 'Phase 2: OOP Mastery',
                    difficulty: 'Beginner',
                    timeline: '3 Weeks',
                    topics: ['Classes & Objects', 'Constructors & Inheritance', 'Polymorphism', 'Abstraction & Interfaces', 'Encapsulation', 'Exception Handling'],
                    resources: ['Java OOP Concepts Guide', 'Mooc.fi Java Course', 'Head First Java'],
                    tools: ['IntelliJ IDEA'],
                    projects: ['Library Management System', 'Employee Payroll CLI', 'School Portal Logic']
                },
                {
                    title: 'Phase 3: Advanced Java',
                    difficulty: 'Intermediate',
                    timeline: '5 Weeks',
                    topics: ['Collections Framework', 'Generics', 'Multithreading & Concurrency', 'Streams API', 'Lambda Expressions', 'Design Patterns'],
                    resources: ['Effective Java (Joshua Bloch)', 'Java Concurrency in Practice', 'Refactoring.guru Patterns'],
                    tools: ['JProfiler / VisualVM'],
                    projects: ['Multi-threaded Web Scraper', 'Generic Task Runner', 'Chat Application Logic']
                },
                {
                    title: 'Phase 4: Database Mastery',
                    difficulty: 'Intermediate',
                    timeline: '3 Weeks',
                    topics: ['SQL Basics (MySQL/PostgreSQL)', 'JDBC Integration', 'ORM Introduction', 'Hibernate Core', 'JPA Concepts'],
                    resources: ['PostgreSQL Tutorial', 'Hibernate Docs', 'Baeldung JPA Guide'],
                    tools: ['MySQL Workbench / pgAdmin', 'DBeaver'],
                    projects: ['Inventory DB Integration', 'User Auth Persistence Layer', 'SQL Query Optimizer']
                },
                {
                    title: 'Phase 5: Spring Framework',
                    difficulty: 'Advanced',
                    timeline: '4 Weeks',
                    topics: ['Spring Core (IoC/DI)', 'Bean Life Cycle', 'Spring AOP', 'Spring MVC', 'REST APIs', 'Spring Data JPA'],
                    resources: ['Spring Official Docs', 'Spring in Action', 'Amigoscode Spring Series'],
                    tools: ['Spring Initializr', 'Postman'],
                    projects: ['RESTful Task Manager', 'Spring-based E-commerce Backend', 'Secure User API']
                },
                {
                    title: 'Phase 6: Spring Boot Mastery',
                    difficulty: 'Advanced',
                    timeline: '6 Weeks',
                    topics: ['Spring Boot Auto-Config', 'Microservices Architecture', 'Spring Cloud Services', 'Docker & Kubernetes', 'JWT Authentication', 'CI/CD Pipelines'],
                    resources: ['Spring Boot Docs', 'Sam Newman Microservices', 'Udemy Masterclass'],
                    tools: ['Docker Desktop', 'Jenkins / GitHub Actions'],
                    projects: ['Full-stack Microservices App', 'Cloud-native Bookstore', 'CI/CD Automated Deployment']
                }
            ];

            phases.forEach(phase => {
                addNewPage(phase.title);
                let y = 60;

                // Meta Info
                doc.setFontSize(12);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(...textColor);
                doc.text(`Difficulty: `, 15, y);
                doc.setFont('helvetica', 'normal');
                doc.setTextColor(...accentColor);
                doc.text(phase.difficulty, 40, y);
                
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(...textColor);
                doc.text(`Estimated Timeline: `, 80, y);
                doc.setFont('helvetica', 'normal');
                doc.setTextColor(...primaryColor);
                doc.text(phase.timeline, 125, y);

                y += 15;

                // Topics (with checkboxes)
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(...textColor);
                doc.setFontSize(14);
                doc.text('Core Topics to Master:', 15, y);
                y += 10;
                
                doc.setFontSize(11);
                doc.setFont('helvetica', 'normal');
                phase.topics.forEach(topic => {
                    doc.setDrawColor(...mutedColor);
                    doc.rect(15, y - 4, 4, 4); // Checkbox
                    doc.text(topic, 25, y);
                    y += 8;
                });

                y += 5;

                // Resources
                doc.setFont('helvetica', 'bold');
                doc.setFontSize(14);
                doc.text('Recommended Resources:', 15, y);
                y += 10;
                doc.setFontSize(11);
                doc.setFont('helvetica', 'normal');
                phase.resources.forEach(res => {
                    doc.text(`• ${res}`, 15, y);
                    y += 7;
                });

                y += 5;

                // Tools & Projects
                const startX = 15;
                const colWidth = 90;
                
                doc.setFont('helvetica', 'bold');
                doc.setFontSize(14);
                doc.text('Tools Required:', startX, y);
                doc.text('Suggested Projects:', startX + colWidth, y);
                
                y += 10;
                doc.setFontSize(10);
                doc.setFont('helvetica', 'normal');
                
                const maxLen = Math.max(phase.tools.length, phase.projects.length);
                for (let i = 0; i < maxLen; i++) {
                    if (phase.tools[i]) doc.text(`- ${phase.tools[i]}`, startX, y + (i * 6));
                    if (phase.projects[i]) doc.text(`- ${phase.projects[i]}`, startX + colWidth, y + (i * 6));
                }
            });

            // Final Summary Page
            addNewPage('Final Career Roadmap');
            let finalY = 60;
            
            doc.setFontSize(12);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(...textColor);
            const summary = "Congratulations on starting your journey to becoming a Java Enterprise Architect. This roadmap is designed to take you from the very basics of programming to architecting cloud-native microservices using Spring Boot.";
            const splitSummary = doc.splitTextToSize(summary, 180);
            doc.text(splitSummary, 15, finalY);
            finalY += (splitSummary.length * 7) + 10;

            doc.setFont('helvetica', 'bold');
            doc.text('Recommended Next Steps:', 15, finalY);
            finalY += 10;
            doc.setFont('helvetica', 'normal');
            const steps = [
                '1. Build a public GitHub portfolio with all phase projects.',
                '2. Contribute to Open Source Spring-based projects.',
                '3. Prepare for Oracle Java SE and Spring Professional Certifications.',
                '4. Practice System Design and Microservices architecture patterns.'
            ];
            steps.forEach(step => {
                doc.text(step, 15, finalY);
                finalY += 8;
            });

            doc.save('Java_SpringBoot_Master_Roadmap.pdf');
        });
    }
});