---
category: "High-Performance Computing"
title: "Scaling HPC Infrastructure: Lessons from an Industrial Giant – 2021 vs. 2026"
excerpt: "What does an industrial giant's supercomputers have in common with today’s Generative AI infrastructure?"
date: "Jan 26, 2026"
author: "Jiraphapa Jiravaraphan"
authorAvatar: "https://media.licdn.com/dms/image/v2/C4E03AQEYatDATIXCDA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1653991221607?e=1771459200&v=beta&t=M8uQkzQufx618ecBwpz__8OvSGxrUHbMir14t7vM9v4"
imageUrl: "https://images.unsplash.com/photo-1639066648921-82d4500abf1a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
---

In 2020/2021, I architected a Hybrid [High-Performance Computing (HPC)](https://www.ibm.com/think/topics/hpc) environment for a global industrial manufacturer. We maintained a core [HPC cluster](https://www.hpe.com/emea_europe/en/what-is/hpc-clusters.html) of 200+ [nodes](https://glossary.cncf.io/nodes/) on-premises, while implementing a Cloud-Bursting strategy to AWS. This architecture allowed us to elastically scale over 500+ instances during peak computational cycles, ensuring that infrastructure was never a bottleneck for engineering velocity. 

Looking back at the scale we achieved in 2021, I recognize that 'scale' has redefined itself. We relied on massive CPU clusters to handle the mathematical complexity of [Computational Fluid Dynamics (CFD)](https://www.ansys.com/simulation-topics/what-is-computational-fluid-dynamics). Today, as workloads shift toward GPU acceleration—driven by platforms like [NVIDIA Blackwell](https://www.nvidia.com/en-us/data-center/technologies/blackwell-architecture/)—the density has changed. With the [leap in transistor density](https://ieeexplore.ieee.org/document/658762) and the shift from many-core CPUs to GPU-accelerated nodes, what took 500 nodes in 2021 might now fit in a few racks

Today, in 2026, while [Generative AI](https://cloud.google.com/use-cases/generative-ai) and CFD serve completely different use cases, they share a common enemy: the physical limits of infrastructure. Whether it was a CPU-heavy [CFD simulation](https://aws.amazon.com/hpc/cfd/) or a GPU-heavy [AI training](https://www.oracle.com/asean/artificial-intelligence/ai-model-training/), the challenges of data movement, thermal management, and power density at the rack level are still the ultimate performance gatekeepers. Here is why the infrastructure we built for CFD is the fundamental blueprint for scaling AI in 2026.

## 1. The Tail Latency Wall

*The Network is the Computer —John Gage, 1984, Sun Microsystems.*


High-performance workloads like CFD and GenAI Training are [tightly coupled](https://docs.aws.amazon.com/wellarchitected/latest/high-performance-computing-lens/tightly-coupled-scenarios.html), meaning the slowest node dictates the speed of the entire cluster. In CFD, if one node calculates airflow physics slower than others, the whole simulation waits. In GenAI, the [All-Reduce](https://docs.nvidia.com/doca/archive/doca-v1.3/allreduce/index.html) phase of distributed training turns every microsecond of network jitter into idle GPU cycles.

Why does this matter? In a distributed environment, latency isn't just a technical metric; it’s a financial drain. At a scale of 500 instances, between hardware depreciation, power, and cloud-bursting premiums, a cluster can easily burn through capital. If we estimate a burn rate of roughly $1.00 every single second, any inefficiency in the network [fabric](https://www.cisco.com/site/us/en/learn/topics/networking/what-is-a-network-fabric.html) becomes a boardroom-level problem.





In 2021, we bypassed the "Wait Tax" by using [InfiniBand](https://network.nvidia.com/pdf/whitepapers/IB_Intro_WP_190.pdf) on-site and AWS [EFA (Elastic Fabric Adapter)](https://aws.amazon.com/hpc/efa/) in the cloud. This enabled [RDMA](https://www.oracle.com/database/technologies/exadata/hardware/rdmanetwork/)-style, kernel-bypass communication, allowing nodes to directly read and write each other’s registered memory without OS intervention. EFA setups around that time exposed up to ~100 Gbps of raw network bandwidth between instances, significantly higher bandwidth and lower latency for [MPI](https://en.wikipedia.org/wiki/Message_Passing_Interface) workloads than standard TCP-based networking. By avoiding the TCP/IP stack, kernel crossings, and CPU interrupts, we eliminated much of the communication overhead that typically limits distributed performance.



In 2026, we are fighting the Physics of the Wire. At [1.6 Terabit per second (1.6T)](https://www.nvidia.com/en-us/networking/ethernet-switching/) speeds, traditional copper cables are hitting a distance-and-heat wall. Modern GPU clusters (like the [NVIDIA DGX Rubin](https://www.nvidia.com/en-us/data-center/technologies/rubin/) series) face a brutal physical bottleneck: Tail Latency Jitter. Even with massive bandwidth, if the fabric is not [deterministic](https://ieeexplore.ieee.org/document/10652378) (meaning it handles congestion without dropping packets), your million-dollar GPUs could spend 40% of their life just "checking their watches" and waiting for data to arrive.

**Fun Fact**: This is exactly why companies like NVIDIA, Microsoft, and Meta are shifting billions in capital expenditures toward networking.

Mastering these ultra-fast networks is the only way to make 1,000 GPUs act like one giant superbrain instead of 1,000 confused minions. Mastering low-latency fabrics is no longer an "infrastructure detail"—it is the only way to scale the cluster without the scaling efficiency falling off a cliff.

The Bottom Line: In 2026, the 'Network' is no longer a utility; it is the architecture. Building world-class AI is not just about having the fastest chips. You don't win by having the fastest cars (GPUs); you win by having the best traffic control (The Fabric).

## 2. Data Gravity & Sovereignty

In 2021, the "Full Cloud" dream often hits the wall of [Data Gravity](https://www.crowdstrike.com/en-us/cybersecurity-101/next-gen-siem/data-gravity/). Moving petabytes of simulation data isn't just slow; it’s an operational risk. We had to ensure that data moving between the on-prem cluster and the cloud was as secure as it was fast. We leveraged a dedicated connection (AWS [Direct Connect](https://aws.amazon.com/directconnect/)) and a high-performance cache for on-premises data (AWS [FSx for Lustre](https://aws.amazon.com/fsx/lustre/)) to optimize data movement. 

In a parallel workload (like CFD and GenAI), one instance must frequently access data residing in the memory of another instance. This "direct access" is the key to performance, but it’s also a significant security surface. Security cannot be an afterthought when running a fabric where the boundaries between nodes are intentionally blurred for speed.

Following industry-standard best practices and [Zero Trust](https://learn.microsoft.com/en-us/security/zero-trust/zero-trust-overview) principles, we implemented strict access controls, security hardening, data encryption (at rest and in transit), logs & monitoring, and automated configurations.

By architecting a Hybrid Infrastructure, we created a practical advantage in [Data Sovereignty](https://www.cloudflare.com/learning/privacy/what-is-data-sovereignty/). In 2026, this model has become the standard for "Sovereign AI." Organizations now keep their sensitive and proprietary data on-premises for primary model training to maintain control, while using the cloud's scale for specific [fine-tuning](https://www.ibm.com/think/topics/fine-tuning) and [inference](https://www.ibm.com/think/topics/inference) tasks.

## 3. Efficiency Over "Brute Force"

In the industrial sector, we don't just throw hardware at a problem; we optimize. In 2021, we used Performance Profiling and Resource Orchestration (e.g., [SLURM](https://slurm.schedmd.com/) and AWS [ParallelCluster](https://docs.aws.amazon.com/parallelcluster/latest/ug/what-is-aws-parallelcluster.html)) to ensure that workloads landed on the most cost-effective and performant hardware to maximize every CPU/GPU cycle. We can transform a cluster of individual CPUs (or GPUs) into a singular, cohesive supercomputer.

It is fascinating to see how 'scale' has redefined itself since 2021. In our hybrid CFD environment, 500 nodes was a massive physical footprint. Today, that same computational throughput is being condensed into fewer, much denser racks.

But as density increases, the stakes get higher. The Physical Limits of infrastructure—specifically thermal management and power delivery—are now the primary constraints. The HPC world taught me that no matter how fast the processor is, your architecture is only as strong as your ability to move data (and manage heat).

As GenAI matures in 2026, the era of "brute force" compute is ending due to power costs and hardware scarcity. The discipline of Resource Orchestration and Workload Distribution I learned in the HPC world is now the key to making AI economically viable at an enterprise scale.

## Conclusion: Different Use Cases, Same Infrastructure Rigor

CFD and GenAI are worlds apart in application, but they are neighbors in the data center. The rigor required to run 500+ nodes for a global industrial giant is the same rigor needed to power today’s AI-driven world.

Infrastructure is no longer a "background service"; it is the competitive edge.

___

I would like to extend a *special thanks* to the *AWS Solutions Architects* whom I had the pleasure to collaborated with in 2021 (Francesco, Neil, and their amazing team). Their deep expertise in Elastic Fabric Adapter (EFA) and HPC-optimized resources was instrumental in helping us push the boundaries of what was possible in a hybrid cloud environment. By working closely with AWS, we were able to bridge the gap between on-premises stability and cloud-native elasticity, ensuring that the physical limits of infrastructure never stood in the way of innovation.