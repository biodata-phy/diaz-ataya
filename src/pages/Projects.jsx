import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Leaf, BookOpen, Video, Globe, Filter } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import AnimatedSection from '../components/AnimatedSection'
import CountUp from '../components/CountUp'

const categories = ['All', 'Environment', 'Writing', 'Media']

const projects = [
    {
        id: 1,
        title: 'Green Tahfidz Initiative',
        description: 'Integrating environmental education into religious curricula, teaching students to care for the Earth as part of their faith.',
        icon: <Leaf size={28} />,
        tags: ['Environment', 'Education'],
        category: 'Environment',
    },
    {
        id: 2,
        title: 'Reflective Writing Series',
        description: "A collection of weekly reflections on Tafsir Al-Qur'an, presented in simple language for the modern generation.",
        icon: <BookOpen size={28} />,
        tags: ['Writing', 'Spiritual'],
        category: 'Writing',
    },
    {
        id: 3,
        title: 'Positive Pulse Media',
        description: 'Short-form video content delivering positive messages and practical tips for community activism and environmental ethics.',
        icon: <Video size={28} />,
        tags: ['Content Creator', 'Social'],
        category: 'Media',
    },
]

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('All')

    const filtered = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category === activeFilter)

    return (
        <PageTransition>
            <div className="container section">
                {/* Header */}
                <div style={{ marginBottom: '2.5rem' }}>
                    <AnimatedSection>
                        <span className="badge badge-accent" style={{ marginBottom: 12 }}>
                            <Globe size={12} /> Social Impact
                        </span>
                        <h1 style={{ marginBottom: 16, maxWidth: 700 }}>
                            Meaningful Work for a{' '}
                            <span className="gradient-text">Better Tomorrow.</span>
                        </h1>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.7, maxWidth: 600, marginBottom: 20 }}>
                            Projects focused on religious literacy, community empowerment, and environmental
                            preservation. Every step is an effort to share POSITIVE VIBES.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.1}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span style={{
                                    fontFamily: 'var(--font-display)', fontSize: '1.75rem',
                                    fontWeight: 800, color: 'var(--color-accent)',
                                }}>
                                    <CountUp end={12} suffix="+" />
                                </span>
                                <span style={{
                                    fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase',
                                    letterSpacing: '0.06em', color: 'var(--color-text-tertiary)',
                                }}>
                                    Nature Campaigns
                                </span>
                            </div>
                            <div style={{ width: 1, height: 40, background: 'var(--color-border)' }} />
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span style={{
                                    fontFamily: 'var(--font-display)', fontSize: '1.75rem',
                                    fontWeight: 800, color: 'var(--color-accent)',
                                }}>
                                    <CountUp end={50} suffix="+" />
                                </span>
                                <span style={{
                                    fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase',
                                    letterSpacing: '0.06em', color: 'var(--color-text-tertiary)',
                                }}>
                                    Creative Articles
                                </span>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>

                {/* Filter Tabs */}
                <AnimatedSection delay={0.2}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '2rem', flexWrap: 'wrap' }}>
                        <Filter size={16} style={{ color: 'var(--color-text-tertiary)' }} />
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={activeFilter === cat ? 'btn btn-primary' : 'btn btn-ghost'}
                                style={{ padding: '0.4rem 1rem', fontSize: '0.8rem', borderRadius: 'var(--radius-full)' }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Projects Grid */}
                <div className="projects-grid" style={{ marginBottom: '4rem' }}>
                    <AnimatePresence mode="wait">
                        {filtered.map((project, i) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                transition={{ duration: 0.4, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
                                    <div style={{ color: 'var(--color-accent)', opacity: 0.4, marginBottom: 16 }}>
                                        {project.icon}
                                    </div>
                                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', marginBottom: 12 }}>
                                        {project.title}
                                    </h3>
                                    <p style={{ fontSize: '0.95rem', lineHeight: 1.7, flex: 1, marginBottom: 20 }}>
                                        {project.description}
                                    </p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                                        {project.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className={`badge ${['Environment', 'Content Creator', 'Writing'].includes(tag) ? 'badge-accent' : 'badge-warm'}`}
                                            >
                                                {tag.toUpperCase()}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* CTA */}
                <AnimatedSection>
                    <div style={{
                        position: 'relative', overflow: 'hidden', background: 'var(--color-accent)',
                        borderRadius: 'var(--radius-2xl)', padding: '4rem 3rem', textAlign: 'center',
                    }}>
                        <div className="floating-shape" style={{
                            width: 500, height: 500, background: 'rgba(255,255,255,0.1)',
                            top: -200, right: -200, filter: 'blur(100px)',
                        }} />
                        <div style={{
                            position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column',
                            alignItems: 'center', gap: 16, maxWidth: 600, margin: '0 auto',
                        }}>
                            <h2 style={{ color: '#fff', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
                                Collaborate with the Community?
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: 1.7 }}>
                                Let's work together to create impact through storytelling, education, and environmental action.
                            </p>
                            <Link
                                to="/contact"
                                className="btn"
                                style={{
                                    background: '#fff', color: 'var(--color-accent)', fontWeight: 700,
                                    fontSize: '1rem', padding: '0.875rem 2rem', borderRadius: 'var(--radius-md)',
                                    marginTop: 8, border: 'none',
                                }}
                            >
                                Join Now <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </PageTransition>
    )
}
