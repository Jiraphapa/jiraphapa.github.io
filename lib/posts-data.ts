export interface Post {
  slug: string
  category: string
  title: string
  excerpt: string
  date: string
  author: string
  authorAvatar: string
  imageUrl: string
  content: {
    intro: string
    sections: {
      title: string
      items: {
        label: string
        description: string
      }[]
    }[]
  }
}

export const posts: Post[] = [
  {
    slug: "designing-scalable-multi-region-aws-architectures",
    category: "Cloud Architecture",
    title: "Designing Scalable Multi-Region AWS Architectures for Enterprise",
    excerpt: "Learn how to design fault-tolerant, highly available systems that span multiple AWS regions while maintaining low latency and cost efficiency.",
    date: "JAN 28, 2026",
    author: "Jiraphapa Jiravaraphan",
    authorAvatar: "https://media.licdn.com/dms/image/v2/C4E03AQEYatDATIXCDA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1653991221607?e=1771459200&v=beta&t=M8uQkzQufx618ecBwpz__8OvSGxrUHbMir14t7vM9v4",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    content: {
      intro: "Building enterprise-grade applications requires careful consideration of availability, fault tolerance, and global performance. Multi-region architectures on AWS provide the foundation for systems that can withstand regional outages while delivering consistent user experiences worldwide.",
      sections: [
        {
          title: "Key Architecture Patterns",
          items: [
            { label: "Active-Active Deployment", description: "Distribute traffic across regions for optimal performance and redundancy." },
            { label: "Data Replication Strategies", description: "Implement cross-region replication for databases with conflict resolution." },
            { label: "Global Load Balancing", description: "Use Route 53 and Global Accelerator for intelligent traffic routing." },
            { label: "Disaster Recovery Planning", description: "Define RTO/RPO targets and automate failover procedures." },
          ]
        },
        {
          title: "Implementation Considerations",
          items: [
            { label: "Latency Optimization", description: "Strategic placement of resources to minimize round-trip times." },
            { label: "Cost Management", description: "Balance redundancy requirements with infrastructure costs." },
            { label: "Compliance Requirements", description: "Address data residency and sovereignty regulations." },
            { label: "Monitoring & Observability", description: "Implement comprehensive cross-region monitoring solutions." },
          ]
        }
      ]
    }
  },
  {
    slug: "implementing-gitops-workflows-with-argocd",
    category: "DevOps",
    title: "Implementing GitOps Workflows with ArgoCD and Kubernetes",
    excerpt: "A practical guide to setting up GitOps pipelines that automate deployments and improve team collaboration across environments.",
    date: "JAN 25, 2026",
    author: "Jiraphapa Jiravaraphan",
    authorAvatar: "https://media.licdn.com/dms/image/v2/C4E03AQEYatDATIXCDA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1653991221607?e=1771459200&v=beta&t=M8uQkzQufx618ecBwpz__8OvSGxrUHbMir14t7vM9v4",
    imageUrl: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop",
    content: {
      intro: "GitOps represents a paradigm shift in how we manage infrastructure and application deployments. By using Git as the single source of truth, teams can achieve better collaboration, auditability, and reliability in their deployment processes.",
      sections: [
        {
          title: "Core GitOps Principles",
          items: [
            { label: "Declarative Configuration", description: "Define entire system state in version-controlled manifests." },
            { label: "Automated Synchronization", description: "ArgoCD continuously reconciles cluster state with Git repositories." },
            { label: "Pull-Based Deployments", description: "Clusters pull changes from Git rather than push-based CI/CD." },
            { label: "Drift Detection", description: "Automatically identify and alert on configuration drift." },
          ]
        },
        {
          title: "Best Practices",
          items: [
            { label: "Repository Structure", description: "Organize manifests for multi-environment and multi-cluster setups." },
            { label: "Secrets Management", description: "Integrate with Sealed Secrets or external secret stores." },
            { label: "Progressive Delivery", description: "Implement canary and blue-green deployments with Argo Rollouts." },
            { label: "RBAC Configuration", description: "Set up proper access controls for team collaboration." },
          ]
        }
      ]
    }
  },
  {
    slug: "zero-trust-architecture-implementation-guide",
    category: "Security",
    title: "Zero Trust Architecture: A Complete Implementation Guide",
    excerpt: "Explore the principles of Zero Trust and learn how to implement this security model in your organization step by step.",
    date: "JAN 20, 2026",
    author: "Jiraphapa Jiravaraphan",
    authorAvatar: "https://media.licdn.com/dms/image/v2/C4E03AQEYatDATIXCDA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1653991221607?e=1771459200&v=beta&t=M8uQkzQufx618ecBwpz__8OvSGxrUHbMir14t7vM9v4",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    content: {
      intro: "Zero Trust is not just a buzzword—it's a fundamental shift in security architecture that assumes no implicit trust. In today's landscape of sophisticated threats and distributed workforces, implementing Zero Trust is essential for protecting critical assets.",
      sections: [
        {
          title: "Zero Trust Principles",
          items: [
            { label: "Verify Explicitly", description: "Always authenticate and authorize based on all available data points." },
            { label: "Least Privilege Access", description: "Limit user access with just-in-time and just-enough-access policies." },
            { label: "Assume Breach", description: "Minimize blast radius and segment access to limit lateral movement." },
            { label: "Continuous Validation", description: "Re-evaluate trust continuously throughout every session." },
          ]
        },
        {
          title: "Implementation Roadmap",
          items: [
            { label: "Identity Foundation", description: "Establish strong identity verification with MFA and SSO." },
            { label: "Network Segmentation", description: "Implement micro-segmentation and software-defined perimeters." },
            { label: "Device Trust", description: "Ensure device health and compliance before granting access." },
            { label: "Data Protection", description: "Classify data and apply appropriate encryption and access controls." },
          ]
        }
      ]
    }
  },
  {
    slug: "event-driven-architecture-patterns",
    category: "Microservices",
    title: "Event-Driven Architecture Patterns for Modern Applications",
    excerpt: "Discover how event-driven patterns can help you build loosely coupled, scalable microservices that handle millions of events.",
    date: "JAN 15, 2026",
    author: "Jiraphapa Jiravaraphan",
    authorAvatar: "https://media.licdn.com/dms/image/v2/C4E03AQEYatDATIXCDA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1653991221607?e=1771459200&v=beta&t=M8uQkzQufx618ecBwpz__8OvSGxrUHbMir14t7vM9v4",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    content: {
      intro: "Event-driven architecture enables systems to react to changes in real-time while maintaining loose coupling between services. This approach is fundamental to building scalable, resilient microservices that can evolve independently.",
      sections: [
        {
          title: "Core Patterns",
          items: [
            { label: "Event Sourcing", description: "Store state changes as a sequence of events for complete audit trails." },
            { label: "CQRS", description: "Separate read and write models for optimized query performance." },
            { label: "Saga Pattern", description: "Manage distributed transactions across multiple services." },
            { label: "Event Choreography", description: "Let services react to events without central orchestration." },
          ]
        },
        {
          title: "Implementation Guidelines",
          items: [
            { label: "Schema Evolution", description: "Design events for backward and forward compatibility." },
            { label: "Idempotency", description: "Ensure event handlers can safely process duplicate events." },
            { label: "Dead Letter Queues", description: "Handle failed event processing gracefully." },
            { label: "Monitoring & Tracing", description: "Implement distributed tracing for event flows." },
          ]
        }
      ]
    }
  },
  {
    slug: "building-production-ready-ml-pipelines",
    category: "AI/ML",
    title: "Building Production-Ready ML Pipelines on Cloud Platforms",
    excerpt: "From model training to deployment - a comprehensive guide to implementing MLOps practices that scale with your organization.",
    date: "JAN 10, 2026",
    author: "Jiraphapa Jiravaraphan",
    authorAvatar: "https://media.licdn.com/dms/image/v2/C4E03AQEYatDATIXCDA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1653991221607?e=1771459200&v=beta&t=M8uQkzQufx618ecBwpz__8OvSGxrUHbMir14t7vM9v4",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    content: {
      intro: "Moving machine learning models from notebooks to production requires robust infrastructure, automation, and monitoring. MLOps practices bridge the gap between data science experimentation and reliable, scalable ML systems.",
      sections: [
        {
          title: "MLOps Fundamentals",
          items: [
            { label: "Feature Stores", description: "Centralize feature engineering for consistency across training and serving." },
            { label: "Model Registry", description: "Version and track models with metadata and lineage information." },
            { label: "Automated Training", description: "Implement continuous training pipelines triggered by data or schedule." },
            { label: "Model Serving", description: "Deploy models with auto-scaling and A/B testing capabilities." },
          ]
        },
        {
          title: "Production Considerations",
          items: [
            { label: "Data Validation", description: "Detect data drift and schema changes before they impact models." },
            { label: "Model Monitoring", description: "Track prediction quality and performance metrics in production." },
            { label: "Reproducibility", description: "Ensure experiments and training runs can be reproduced exactly." },
            { label: "Cost Optimization", description: "Optimize compute resources for training and inference workloads." },
          ]
        }
      ]
    }
  },
  {
    slug: "real-time-data-streaming-kafka-flink",
    category: "Data Engineering",
    title: "Real-Time Data Streaming with Apache Kafka and Flink",
    excerpt: "Learn to build robust streaming data pipelines that process millions of events per second with exactly-once semantics.",
    date: "JAN 5, 2026",
    author: "Jiraphapa Jiravaraphan",
    authorAvatar: "https://media.licdn.com/dms/image/v2/C4E03AQEYatDATIXCDA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1653991221607?e=1771459200&v=beta&t=M8uQkzQufx618ecBwpz__8OvSGxrUHbMir14t7vM9v4",
    imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop",
    content: {
      intro: "Real-time data processing has become essential for modern applications requiring immediate insights and actions. Apache Kafka and Flink together provide a powerful platform for building streaming pipelines that can handle massive scale with strong delivery guarantees.",
      sections: [
        {
          title: "Streaming Architecture",
          items: [
            { label: "Kafka Topics Design", description: "Structure topics for optimal partitioning and consumer scalability." },
            { label: "Flink Job Patterns", description: "Implement windowing, joins, and aggregations for stream processing." },
            { label: "Exactly-Once Semantics", description: "Configure end-to-end exactly-once processing guarantees." },
            { label: "State Management", description: "Leverage Flink's state backends for fault-tolerant processing." },
          ]
        },
        {
          title: "Operational Excellence",
          items: [
            { label: "Backpressure Handling", description: "Design systems that gracefully handle processing slowdowns." },
            { label: "Schema Registry", description: "Manage schema evolution for streaming data contracts." },
            { label: "Monitoring & Alerting", description: "Track lag, throughput, and processing latency metrics." },
            { label: "Disaster Recovery", description: "Implement checkpointing and recovery strategies." },
          ]
        }
      ]
    }
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug)
}
