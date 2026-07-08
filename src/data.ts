/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Program, EventItem, ResourceArticle, Chapter, TeamMember, Testimonial } from './types';

export const programsData: Program[] = [
  {
    id: 'prog-1',
    title: 'Applied Machine Learning Foundation',
    description: 'Master the rigorous mathematical underpinnings and empirical implementations of classical and modern statistical learning.',
    category: 'beginner',
    duration: '10 Weeks',
    hours: 40,
    lessons: 16,
    difficulty: 'Beginner',
    instructor: 'Dr. Priya Nair',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80',
    syllabus: [
      'Linear Systems, Matrix Factorization, and Optimizers',
      'Supervised Learning: Support Vector Machines & Decision Forests',
      'Unsupervised Learning: Manifold Learning & Clustering',
      'Model Evaluation, Cross-Validation, and Regularization'
    ]
  },
  {
    id: 'prog-2',
    title: 'Generative AI Systems & LLMOps',
    description: 'Learn to design, orchestrate, fine-tune, and deploy production-grade Large Language Models and multi-agent frameworks.',
    category: 'advanced',
    duration: '12 Weeks',
    hours: 48,
    lessons: 20,
    difficulty: 'Advanced',
    instructor: 'Dr. Kabir Sen',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
    syllabus: [
      'Transformer Architecture & Self-Attention Mechanics',
      'Instruction Tuning, LoRA, and Quantization Methods',
      'Retrieval-Augmented Generation (RAG) Architecture',
      'Deployment Pipelines, Guardrails, and LLM Evaluation'
    ]
  },
  {
    id: 'prog-3',
    title: 'Deep Learning for Computer Vision',
    description: 'An advanced exploration of convolutional, transformer, and diffusion architectures for visual synthesis and analysis.',
    category: 'advanced',
    duration: '8 Weeks',
    hours: 32,
    lessons: 14,
    difficulty: 'Advanced',
    instructor: 'Dr. Aris Thorne',
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=800&q=80',
    syllabus: [
      'Deep Residual Networks and Attention in Vision',
      'Object Detection, Instance Segmentation (YOLO, SAM)',
      'Generative Adversarial Networks & Diffusion Models',
      'Real-time Vision Systems & Edge Acceleration'
    ]
  },
  {
    id: 'prog-4',
    title: 'Professional AI/ML Architect Certification',
    description: 'The definitive executive credential establishing comprehensive mastery of enterprise ML systems, data engineering, and ethics.',
    category: 'certification',
    duration: '16 Weeks',
    hours: 80,
    lessons: 32,
    difficulty: 'Advanced',
    instructor: 'AICAIML Certification Board',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    syllabus: [
      'Enterprise Data Lakes & Distributed Feature Stores',
      'Continuous Training (CT) and MLOps Infrastructure',
      'Ethics, Explainability (SHAP, LIME), and Bias Mitigation',
      'Capstone Architecture Defense & Peer Review Panel'
    ]
  }
];

export const eventsData: EventItem[] = [
  {
    id: 'evt-1',
    title: 'AICAIML Annual Summit 2026',
    description: 'The flagship conference uniting top researchers, corporate innovators, and practitioners to chart the frontier of physical AI and agentic systems.',
    date: 'August 14, 2026',
    time: '09:00 AM - 05:00 PM IST',
    location: 'Leela Palace, Bengaluru & Livestreamed',
    type: 'upcoming',
    category: 'Conference',
    speaker: 'Dr. Aris Thorne & Guests',
    speakerTitle: 'AICAIML President & Chief AI Officer',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'evt-2',
    title: 'The Future of Multi-Agentic Systems',
    description: 'An in-depth scientific webinar exploring self-orchestrating, multi-layered agent frameworks that learn in real-time.',
    date: 'July 24, 2026',
    time: '04:00 PM - 05:30 PM IST',
    location: 'Virtual Event (AICAIML Portal)',
    type: 'upcoming',
    category: 'Webinar',
    speaker: 'Dr. Kabir Sen',
    speakerTitle: 'Head of GenAI Research, AICAIML Labs',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'evt-3',
    title: 'MLOps Pipeline Optimization Sandbox',
    description: 'A hands-on, live code clinic on tuning distributed training runs, debugging CUDA memory bottlenecks, and setting up automated model testing.',
    date: 'July 12, 2026',
    time: '10:00 AM - 01:00 PM IST',
    location: 'AICAIML Bengaluru Labs & Virtual',
    type: 'upcoming',
    category: 'Workshop',
    speaker: 'AICAIML Engineering Team',
    speakerTitle: 'Specialist Instructors',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'evt-4',
    title: 'International Web Summit on Explainable AI (XAI)',
    description: 'Refining statistical methodologies for deep network interpretability, feature attribution, and trust metrics in high-risk automated decisions.',
    date: 'June 05, 2026',
    time: '03:00 PM - 07:00 PM IST',
    location: 'Recorded Archive',
    type: 'past',
    category: 'Symposium',
    speaker: 'Prof. Priya Nair',
    speakerTitle: 'VP Academic, AICAIML',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'evt-5',
    title: 'Neural Architecture Search (NAS) masterclass',
    description: 'A mathematical lecture exploring automated optimization of hyperparameters and topology design for light-weight edge execution.',
    date: 'May 18, 2026',
    time: '11:00 AM - 01:00 PM IST',
    location: 'Recorded Archive',
    type: 'past',
    category: 'Lecture',
    speaker: 'Dr. Aris Thorne',
    speakerTitle: 'Founder, Neural Core Group',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80'
  }
];

export const articlesData: ResourceArticle[] = [
  {
    id: 'art-1',
    title: 'The Shift to Small Language Models (SLMs)',
    description: 'Why localized, domain-specific deep models with under 7B parameters are rapidly outpacing gargantuan models in real-world deployment efficiency.',
    content: `Historically, the race in artificial intelligence has been defined by size: larger parameters, wider neural connections, and staggering training cluster hardware requirements. However, 2026 represents a watershed moment where the engineering narrative has shifted decisively toward **Small Language Models (SLMs)**.

### The Efficiency Paradox
While a 1-trillion parameter model excels at synthesizing broad human knowledge, its computational footprint makes real-time, high-throughput enterprise deployment financially and physically impossible for many use cases. 

Domain-specific SLMs (models under 8 billion parameters, fine-tuned on curated, high-quality corpuses) are achieving performance parity with generalized giants at a fraction of the cost.

### Key Advantages of SLMs:
1. **Edge Deployment**: Small models can run locally on mobile phones, autonomous edge devices, and workspace laptops without server round-trips.
2. **Data Sovereignty**: Organizations can host and serve SLMs internally, completely bypassing external API layers and eliminating data leaks.
3. **Optimized Token Usage**: Custom models trained on precise corporate vocabulary operate with significantly lower latency.

### The Role of Distillation
We are seeing immense success with **Knowledge Distillation**, where a highly capable "Teacher" model (such as a multi-modal frontier model) supervises the learning of a "Student" model. The student absorbs the core logical structures and reasoning patterns while shedding parameters. At AICAIML Labs, we predict that 80% of actual industrial AI workflows by 2027 will be run exclusively on edge-optimized SLMs.`,
    category: 'Research Deep-dive',
    readTime: '6 Min Read',
    date: 'July 01, 2026',
    author: 'Dr. Kabir Sen',
    authorTitle: 'Head of GenAI Research',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    tags: ['SLM', 'Edge AI', 'Distillation', 'LLM']
  },
  {
    id: 'art-2',
    title: 'Optimizing Attention in Transformer Architectures',
    description: 'A structural exploration of Sparse Attention, FlashAttention-3, and linear complexity models targeting extremely long-context retrieval.',
    content: `Quadratic complexity of standard self-attention has remained the single greatest architectural bottleneck for processing long documents, high-fidelity video, and large codebases. This research review highlights how modern optimizations are resolving this constraints.

### The quadratic constraint ($O(N^2)$)
Standard self-attention computes dot-products between all tokens in a sequence, creating a spatial complexity that scales quadratically with sequence length.

### Technical Resolutions:
* **FlashAttention-3**: Leverages asynchronous GPU memory reads/writes to optimize kernel scheduling. By restructuring computation to work on SRAM blocks, it achieves a 2.3x speedup over standard CUDA kernels without any loss in mathematical accuracy.
* **State Space Models (SSMs)**: Architectures like Mamba use linear recurrent equations to handle infinite context windows, maintaining linear complexity ($O(N)$) while matching attention accuracy.
* **Sparse Attention**: Rather than attending to all tokens, sparse kernels attend to localized blocks and key sliding-window anchors.

By combining FlashAttention-3 with custom sparse memory masks, AICAIML researchers have demonstrated robust 500k-token processing loops running smoothly on standard commercial accelerator hardware.`,
    category: 'Architecture Review',
    readTime: '8 Min Read',
    date: 'June 18, 2026',
    author: 'Prof. Priya Nair',
    authorTitle: 'VP Academic, AICAIML',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
    tags: ['Attention', 'FlashAttention', 'Transformers', 'Mamba']
  },
  {
    id: 'art-3',
    title: 'A Guide to Data-Centric AI Practices',
    description: 'Unlocking model potential not through hyperparameter tweaking, but through systematic, programmatic curation and pruning of dataset quality.',
    content: `For decades, machine learning engineers spent 90% of their effort tuning model configurations while treating datasets as static, external items. Led by pioneers like Andrew Ng, the **Data-Centric AI** movement has completely inverted this focus.

Instead of trying to force a neural network to learn from noisy, mislabeled, or unbalanced data, practitioners use structured program loops to audit, sanitize, and curate the inputs.

### Core Data-Centric Workflows:
1. **Linguistic Clustering**: Finding semantic duplicates in training data and removing redundant tokens to accelerate training.
2. **Automated Mislabel Detection**: Training auxiliary models to identify labels that contradict expected statistical clusters.
3. **Synthesized Amplification**: Using customized generative models to enrich under-represented classes rather than flat over-sampling.

High-quality, curated datasets produce robust models with dramatically smaller parameter sizes, validating the famous computing adage: "Garbage in, garbage out."`,
    category: 'Best Practices',
    readTime: '5 Min Read',
    date: 'May 24, 2026',
    author: 'AICAIML Technical Board',
    authorTitle: 'Engineering Standards',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    tags: ['Data-Centric AI', 'Data Quality', 'Data Engineering']
  }
];

export const chaptersData: Chapter[] = [
  {
    id: 'ch-1',
    name: 'Bengaluru Chapter',
    city: 'Bengaluru',
    state: 'Karnataka',
    members: 1420,
    eventsCount: 42,
    lead: 'Rohan Deshmukh, Lead ML Engineer',
    lat: 38, // percentages on custom responsive interactive map
    lng: 40
  },
  {
    id: 'ch-2',
    name: 'Mumbai Chapter',
    city: 'Mumbai',
    state: 'Maharashtra',
    members: 980,
    eventsCount: 28,
    lead: 'Dr. Shruti Patil, AI Lead at Jio',
    lat: 44,
    lng: 26
  },
  {
    id: 'ch-3',
    name: 'Delhi NCR Chapter',
    city: 'New Delhi',
    state: 'Delhi',
    members: 1150,
    eventsCount: 34,
    lead: 'Amit Sharma, Principal Researcher',
    lat: 22,
    lng: 32
  },
  {
    id: 'ch-4',
    name: 'Hyderabad Chapter',
    city: 'Hyderabad',
    state: 'Telangana',
    members: 840,
    eventsCount: 22,
    lead: 'Priyanka Reddy, Director of Data Science',
    lat: 48,
    lng: 42
  },
  {
    id: 'ch-5',
    name: 'Chennai Chapter',
    city: 'Chennai',
    state: 'Tamil Nadu',
    members: 760,
    eventsCount: 19,
    lead: 'Dr. V. Ramanathan, Professor of CS',
    lat: 64,
    lng: 46
  },
  {
    id: 'ch-6',
    name: 'Pune Chapter',
    city: 'Pune',
    state: 'Maharashtra',
    members: 650,
    eventsCount: 15,
    lead: 'Karan Mehra, Founder of AutoML Lab',
    lat: 48,
    lng: 28
  }
];

export const teamData: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Dr. Aris Thorne',
    role: 'President & Research Director',
    bio: 'Former principal AI researcher at leading tech entities, author of 40+ publications on automated deep architectures, dedicated to building open, ethical AI pipelines.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80',
    linkedin: 'https://linkedin.com/in/aris-thorne',
    category: 'leadership'
  },
  {
    id: 'team-2',
    name: 'Prof. Priya Nair',
    role: 'Vice President (Academic & Standards)',
    bio: 'Academic expert specializing in linear systems, mathematical modeling, and structural ethics. Designed the nationwide curriculum standard for Applied Machine Learning.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80',
    linkedin: 'https://linkedin.com/in/priya-nair',
    category: 'leadership'
  },
  {
    id: 'team-3',
    name: 'Dr. Kabir Sen',
    role: 'Head of GenAI Initiatives & Labs',
    bio: 'Specialist in compiler optimizations and fine-tuning mechanics. Leads the open sandbox environment at AICAIML Labs.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80',
    linkedin: 'https://linkedin.com/in/kabir-sen',
    category: 'labs'
  },
  {
    id: 'team-4',
    name: 'Sarah Jenkins',
    role: 'Advisory Panel (Ethics & AI Policy)',
    bio: 'International lawyer focusing on algorithmic bias, data privacy, and transnational regulatory standards for automated systems.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80',
    category: 'advisory'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    quote: "Moving from traditional IT systems to professional AI architecture felt incredibly daunting. AICAIML's structured, mathematically rigorous certifications gave our entire engineering department a unified vocabulary and direct engineering path. It is leagues ahead of stale text-based portals.",
    author: "Nikhil Rao",
    role: "VP of Engineering",
    organization: "CognitiveFlow Technologies",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&h=300&q=80"
  },
  {
    id: 'test-2',
    quote: "AICAIML represents the modern benchmark. The research deep-dives and active sandbox labs treat students like researchers, emphasizing actual mathematics and code instead of high-level buzzwords. It is exactly what India needs.",
    author: "Ananya Deshpande",
    role: "Postgrad AI Scholar",
    organization: "Indian Institute of Science",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=80"
  },
  {
    id: 'test-3',
    quote: "The interactive chapters represent a tight-knit community of brilliant practitioners. In a world full of impersonal webinars, AICAIML's local roundtables and peer-led debug clinics provide genuine, durable career support.",
    author: "Vikram Malhotra",
    role: "Lead Data Scientist",
    organization: "AeroCore Systems",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&h=300&q=80"
  }
];
