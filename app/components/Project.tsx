"use client"

import { motion } from 'motion/react'
import React from 'react'
import type { IconType } from 'react-icons'
import {
  FaBlog,
  FaBriefcase,
  FaCashRegister,
  FaChartLine,
  FaDatabase,
  FaGlobe,
  FaLock,
  FaMobileAlt,
  FaReceipt,
  FaShoppingCart,
  FaStore,
  FaVolumeUp,
} from 'react-icons/fa'
import ScrollReveal from './ui/scroll-reveal'

type SupportingProject = {
  number: string
  eyebrow: string
  title: string
  description: string
  architecture: string[]
  highlights: string[]
  tools: string[]
  status: string
  icon: IconType
}

const flagshipFeatures = [
  {
    title: 'Role-based operations',
    description: 'Dedicated workflows for technicians, cashiers, managers, and administrators.',
    icon: FaStore,
  },
  {
    title: 'Payments & checkout',
    description: 'Cash, transfer, QRIS, and card-payment flows with controlled order finalization.',
    icon: FaCashRegister,
  },
  {
    title: 'Inventory control',
    description: 'Product stock, receiving, warehouse visibility, and transfer requests.',
    icon: FaDatabase,
  },
  {
    title: 'Physical integration',
    description: 'ESC/POS receipt printing and cash-drawer control from the Flutter application.',
    icon: FaReceipt,
  },
]

const supportingProjects: SupportingProject[] = [
  {
    number: '02',
    eyebrow: 'Web product',
    title: 'Full-Stack Commerce Platform',
    description:
      'A complete storefront and administration system with product management, persistent carts, secure checkout, file uploads, and sales analytics.',
    architecture: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe'],
    highlights: [
      'Authenticated customer and administrator flows',
      'Redis-backed cart and Stripe checkout',
      'Product, banner, order, and dashboard management',
    ],
    tools: ['Next.js', 'TypeScript', 'Prisma', 'Redis', 'Stripe', 'Zod'],
    status: 'Product system',
    icon: FaShoppingCart,
  },
  {
    number: '03',
    eyebrow: 'Business delivery',
    title: 'Oxygen Business Website',
    description:
      'A responsive company website designed to make services, location, and contact information clear while supporting search visibility and analytics.',
    architecture: ['Next.js', 'SEO metadata', 'Structured data', 'Analytics'],
    highlights: [
      'Responsive service and contact experience',
      'Sitemap and structured-data integration',
      'Google Analytics and search-oriented delivery',
    ],
    tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'SEO'],
    status: 'Business website',
    icon: FaGlobe,
  },
  {
    number: '04',
    eyebrow: 'Engineering lab',
    title: 'Rust Full-Stack Dashboard Lab',
    description:
      'An in-progress exploration of a Rust-first web architecture using server-side rendering, hydration, WebAssembly, and a Rust backend.',
    architecture: ['Leptos UI', 'WebAssembly', 'Actix Web', 'SurrealDB'],
    highlights: [
      'Shared Rust types across frontend and backend',
      'SSR and client-side hydration experiments',
      'Server functions and database integration',
    ],
    tools: ['Rust', 'Leptos', 'Actix Web', 'WASM', 'SurrealDB'],
    status: 'In development',
    icon: FaChartLine,
  },
]

const labProjects = [
  {
    title: 'Audio Classification API',
    description: 'Audio preprocessing, training, and inference workflow.',
    tools: 'PyTorch · Torchaudio · FastAPI',
    icon: FaVolumeUp,
  },
  {
    title: 'Job Board Platform',
    description: 'Modern job publishing and application product experiment.',
    tools: 'Next.js · Prisma · Auth · Inngest',
    icon: FaBriefcase,
  },
  {
    title: 'Full-Stack Blog Platform',
    description: 'Decoupled content platform with a typed API layer.',
    tools: 'Next.js · NestJS · GraphQL · Prisma',
    icon: FaBlog,
  },
  {
    title: 'Authentication & Project App',
    description: 'Role-aware authentication and application foundation.',
    tools: 'React · Flask · JWT · SQLAlchemy',
    icon: FaLock,
  },
]

const Project = () => {
  return (
    <ScrollReveal id='project' amount={0.05} className='w-full scroll-mt-20 px-[8%] py-10 sm:px-[12%]'>
      <h4 className='mb-2 text-center text-lg font-serif'>
        What I built
      </h4>
      <h2 className='text-center text-5xl font-serif'>
        Selected Engineering Projects
      </h2>

      <p className='mx-auto mb-14 mt-5 max-w-3xl text-center font-serif'>
        Independent projects where I turn product requirements into complete systems—from application architecture and backend logic to user workflows and physical integrations.
      </p>

      <div className='mx-auto max-w-6xl'>
        <motion.article
          className='relative overflow-hidden rounded-lg border border-darkHover bg-lightHover/50 p-6 shadow-[7px_7px_0_#000] sm:p-8'
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className='pointer-events-none absolute -right-3 -top-9 select-none text-[150px] font-bold leading-none text-darkHover/[0.05]' aria-hidden='true'>
            01
          </span>

          <div className='relative grid gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:items-start'>
            <div>
              <div className='flex flex-wrap items-center gap-3'>
                <span className='flex h-11 w-11 items-center justify-center rounded-md border border-darkHover bg-white text-darkHover shadow-[3px_3px_0_#000]'>
                  <FaStore className='h-5 w-5' />
                </span>
                <div>
                  <p className='text-xs font-bold uppercase tracking-[0.18em] text-darkHover'>
                    Featured project · Complete product system
                  </p>
                  <p className='mt-1 text-xs text-gray-600'>Mobile · Backend · Database · Hardware</p>
                </div>
              </div>

              <h3 className='mt-6 max-w-xl text-3xl leading-tight text-gray-900 sm:text-4xl'>
                Multi-Role Tyre Store Operations Platform
              </h3>
              <p className='mt-4 max-w-2xl text-sm leading-7 text-gray-700 sm:text-base'>
                A complete store-management system that coordinates the operational journey from a technician&apos;s service quotation to cashier payment, receipt printing, stock movement, and management reporting.
              </p>

              <div className='mt-6'>
                <p className='text-xs font-bold uppercase tracking-[0.16em] text-darkHover'>System architecture</p>
                <div className='mt-3 flex flex-wrap items-center gap-2'>
                  {['Flutter application', 'Rust / Axum API', 'PostgreSQL', 'Payments & printer'].map((step, index, steps) => (
                    <React.Fragment key={step}>
                      <span className='rounded-md border border-darkHover/25 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700'>
                        {step}
                      </span>
                      {index < steps.length - 1 && <span className='font-bold text-darkHover'>→</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className='mt-7 flex flex-wrap gap-2 border-t border-darkHover/15 pt-5'>
                {['Flutter', 'Rust', 'Axum', 'SQLx', 'PostgreSQL', 'JWT', 'Docker', 'ESC/POS'].map((tool) => (
                  <span key={tool} className='rounded-md border border-darkHover/30 bg-white px-2.5 py-1 text-xs font-semibold text-darkHover'>
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className='overflow-hidden rounded-lg border border-darkHover bg-[#211e24] shadow-[5px_5px_0_#000]'>
              <div className='flex items-center justify-between border-b border-white/15 px-4 py-3 text-white'>
                <div className='flex items-center gap-2'>
                  <span className='h-2.5 w-2.5 rounded-full bg-[#d8a7f2]' />
                  <span className='text-xs font-semibold uppercase tracking-[0.14em]'>Operations overview</span>
                </div>
                <span className='rounded border border-white/20 px-2 py-1 text-[10px] text-white/70'>Live workflow</span>
              </div>

              <div className='grid gap-3 p-4 sm:grid-cols-3'>
                {[
                  { label: 'Pending orders', value: '12', detail: 'Technician → cashier' },
                  { label: 'Stock items', value: '248', detail: 'Store & warehouse' },
                  { label: "Today's sales", value: '18', detail: 'All payment methods' },
                ].map((stat) => (
                  <div key={stat.label} className='rounded-md border border-white/15 bg-white/[0.06] p-3'>
                    <p className='text-[10px] uppercase tracking-[0.12em] text-white/55'>{stat.label}</p>
                    <p className='mt-2 text-2xl text-white'>{stat.value}</p>
                    <p className='mt-1 text-[10px] text-white/50'>{stat.detail}</p>
                  </div>
                ))}
              </div>

              <div className='mx-4 mb-4 overflow-hidden rounded-md border border-white/15'>
                {[
                  { role: 'Technician', action: 'Create service order', icon: FaMobileAlt, state: 'Prepared' },
                  { role: 'Cashier', action: 'Settle payment & print', icon: FaCashRegister, state: 'Processing' },
                  { role: 'Manager', action: 'Review stock & profit', icon: FaChartLine, state: 'Reported' },
                ].map(({ role, action, icon: RoleIcon, state }) => (
                  <div key={role} className='flex items-center justify-between gap-3 border-b border-white/10 px-3 py-3 last:border-b-0'>
                    <div className='flex min-w-0 items-center gap-3'>
                      <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded border border-white/15 bg-white/10 text-[#e8c9f8]'>
                        <RoleIcon className='h-3.5 w-3.5' />
                      </span>
                      <div className='min-w-0'>
                        <p className='text-xs font-semibold text-white'>{role}</p>
                        <p className='truncate text-[10px] text-white/50'>{action}</p>
                      </div>
                    </div>
                    <span className='rounded border border-[#d8a7f2]/30 bg-[#d8a7f2]/10 px-2 py-1 text-[9px] text-[#e8c9f8]'>
                      {state}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='relative mt-8 grid gap-3 border-t border-darkHover/15 pt-6 sm:grid-cols-2 xl:grid-cols-4'>
            {flagshipFeatures.map(({ title, description, icon: FeatureIcon }) => (
              <div key={title} className='rounded-lg border border-darkHover/20 bg-white/80 p-4'>
                <FeatureIcon className='h-4 w-4 text-darkHover' />
                <h4 className='mt-3 text-sm font-semibold text-gray-900'>{title}</h4>
                <p className='mt-1 text-xs leading-5 text-gray-600'>{description}</p>
              </div>
            ))}
          </div>
        </motion.article>

        <div className='mt-12 flex flex-wrap items-end justify-between gap-3'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.16em] text-darkHover'>More selected work</p>
            <h3 className='mt-1 text-2xl text-gray-900'>Products, delivery, and technical exploration</h3>
          </div>
          <span className='rounded-md border border-gray-300 bg-white px-3 py-1 text-xs text-gray-600'>03 supporting projects</span>
        </div>

        <div className='mt-6 grid gap-6 lg:grid-cols-3'>
          {supportingProjects.map((project, index) => {
            const ProjectIcon = project.icon

            return (
              <motion.article
                key={project.title}
                className='group flex h-full flex-col rounded-lg border border-gray-300 bg-white p-5 transition duration-500 hover:-translate-y-1 hover:border-darkHover hover:shadow-[5px_5px_0_#000] sm:p-6'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className='flex items-start justify-between gap-3'>
                  <span className='flex h-10 w-10 items-center justify-center rounded-md border border-darkHover bg-lightHover text-darkHover shadow-[2px_2px_0_#000]'>
                    <ProjectIcon className='h-4 w-4' />
                  </span>
                  <span className='rounded-md border border-darkHover/20 bg-lightHover/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-darkHover'>
                    {project.status}
                  </span>
                </div>

                <p className='mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-darkHover'>
                  {project.number} · {project.eyebrow}
                </p>
                <h4 className='mt-2 text-xl leading-7 text-gray-900'>{project.title}</h4>
                <p className='mt-3 text-sm leading-6 text-gray-600'>{project.description}</p>

                <div className='mt-5 rounded-lg border border-darkHover/15 bg-lightHover/30 p-3'>
                  <p className='text-[10px] font-bold uppercase tracking-[0.14em] text-darkHover'>Architecture</p>
                  <div className='mt-2 flex flex-wrap gap-1.5'>
                    {project.architecture.map((step) => (
                      <span key={step} className='rounded border border-gray-300 bg-white px-2 py-1 text-[10px] font-medium text-gray-700'>
                        {step}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className='mt-5 grid gap-2'>
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className='flex gap-2 text-xs leading-5 text-gray-600'>
                      <span className='mt-1.5 h-2 w-2 shrink-0 rounded-sm border border-darkHover bg-lightHover' />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className='mt-auto flex flex-wrap gap-1.5 border-t border-gray-200 pt-5'>
                  {project.tools.map((tool) => (
                    <span key={tool} className='rounded-md border border-gray-300 bg-white px-2 py-1 text-[10px] font-semibold text-gray-600'>
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>

        <section className='mt-14 rounded-lg border border-darkHover/25 bg-lightHover/30 p-5 sm:p-6'>
          <div className='flex flex-wrap items-end justify-between gap-3'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.16em] text-darkHover'>Project lab</p>
              <h3 className='mt-1 text-2xl text-gray-900'>Smaller builds &amp; technical experiments</h3>
            </div>
            <span className='text-xs text-gray-600'>Continuous learning through working software</span>
          </div>

          <div className='mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4'>
            {labProjects.map(({ title, description, tools, icon: LabIcon }) => (
              <article key={title} className='rounded-lg border border-gray-300 bg-white p-4 transition duration-300 hover:border-darkHover hover:shadow-[3px_3px_0_#000]'>
                <div className='flex items-center gap-3'>
                  <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-darkHover/40 bg-lightHover text-darkHover'>
                    <LabIcon className='h-3.5 w-3.5' />
                  </span>
                  <h4 className='text-sm font-semibold text-gray-900'>{title}</h4>
                </div>
                <p className='mt-3 text-xs leading-5 text-gray-600'>{description}</p>
                <p className='mt-3 text-[10px] font-semibold uppercase leading-5 tracking-[0.08em] text-darkHover'>{tools}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </ScrollReveal>
  )
}

export default Project
