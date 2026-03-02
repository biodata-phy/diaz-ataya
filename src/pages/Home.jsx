import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Users, Heart, Pen, Video, Globe } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import AnimatedSection from '../components/AnimatedSection'
import CountUp from '../components/CountUp'
import FloatingPhotos from '../components/FloatingPhotos'

export default function Home() {
    return (
        <PageTransition>
            {/* Hero Section */}
            <section style={{ position: 'relative', padding: '5rem 0 3rem' }}>
                <FloatingPhotos />

                <div className="container">
                    <div className="hero-grid" style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
                            <AnimatedSection>
                                <div className="badge badge-accent" style={{ marginBottom: 16 }}>
                                    <span className="dot-pulse" />
                                    Spreading Positive Vibes
                                </div>
                            </AnimatedSection>

                            <AnimatedSection delay={0.1}>
                                <h1 style={{ lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 8 }}>
                                    Salam, I'm{' '}
                                    <span className="gradient-text">Diaz</span>,
                                    <br />
                                    exploring Tafsir & Creativity.
                                </h1>
                            </AnimatedSection>

                            <AnimatedSection delay={0.2}>
                                <p style={{ fontSize: '1.125rem', lineHeight: 1.7, maxWidth: 520, marginBottom: 8 }}>
                                    Tafsir Al-Qur'an student, Writer, and Content Creator.
                                    Dedicated to social activism and environmental sustainability
                                    through meaningful storytelling.
                                </p>
                            </AnimatedSection>

                            <AnimatedSection delay={0.3}>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 8 }}>
                                    <Link to="/about" className="btn btn-primary" style={{ padding: '0.875rem 2rem', fontSize: '1rem' }}>
                                        Learn More <ArrowRight size={18} />
                                    </Link>
                                    <Link to="/projects" className="btn btn-outline" style={{ padding: '0.875rem 2rem', fontSize: '1rem' }}>
                                        My Projects
                                    </Link>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection delay={0.4}>
                                <div style={{ display: 'flex', gap: 16, marginTop: 12 }}>
                                    {[
                                        { Icon: BookOpen, title: 'Writings' },
                                        { Icon: Video, title: 'Videos' },
                                        { Icon: Globe, title: 'Website' },
                                    ].map(({ Icon, title }) => (
                                        <motion.a
                                            key={title}
                                            href="#"
                                            title={title}
                                            style={{ color: 'var(--color-text-tertiary)', cursor: 'pointer' }}
                                            whileHover={{ color: 'var(--color-accent)', y: -2 }}
                                        >
                                            <Icon size={22} />
                                        </motion.a>
                                    ))}
                                </div>
                            </AnimatedSection>
                        </div>

                        <div style={{ flexShrink: 0 }}>
                            <AnimatedSection delay={0.2}>
                                <div style={{ position: 'relative', width: 340, height: 340 }}>
                                    {/* Decorative rings */}
                                    <div style={{
                                        position: 'absolute', inset: -16, borderRadius: 28,
                                        border: '1px solid var(--color-border)', transform: 'rotate(6deg)',
                                    }} />
                                    <div style={{
                                        position: 'absolute', inset: -8, borderRadius: 24,
                                        border: '1px solid var(--color-accent-subtle)', transform: 'rotate(-3deg)',
                                    }} />
                                    <div className="img-zoom" style={{
                                        width: '100%', height: '100%', borderRadius: 20, overflow: 'hidden',
                                        background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)',
                                    }}>
                                        <img
                                            src={`${import.meta.env.BASE_URL}landing.webp`}
                                            alt="Diaz Ataya"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                    {/* Status badge */}
                                    <motion.div
                                        style={{
                                            position: 'absolute', bottom: -12, right: -12,
                                            background: 'var(--color-surface)', padding: '12px 20px',
                                            borderRadius: 14, border: '1px solid var(--color-border)',
                                            boxShadow: 'var(--shadow-lg)', display: 'flex',
                                            flexDirection: 'column', alignItems: 'center',
                                        }}
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                                    >
                                        <span style={{
                                            fontFamily: 'var(--font-display)', fontWeight: 800,
                                            fontSize: '1.25rem', color: 'var(--color-accent)', lineHeight: 1,
                                        }}>Positive</span>
                                        <span style={{
                                            fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase',
                                            letterSpacing: '0.08em', color: 'var(--color-text-tertiary)',
                                        }}>Vibes Only</span>
                                    </motion.div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section style={{ padding: '2rem 0 4rem' }}>
                <div className="container">
                    <div className="stats-grid">
                        {[
                            { icon: <BookOpen size={24} />, label: 'Writings Published', value: 50, suffix: '+' },
                            { icon: <Users size={24} />, label: 'Active Campaigns', value: 12, suffix: '+' },
                            { icon: <Heart size={24} />, label: 'Volunteer Hours', value: 200, suffix: '+' },
                        ].map((stat, i) => (
                            <AnimatedSection key={i} delay={i * 0.1}>
                                <div className="glass-card" style={{ padding: '2rem' }}>
                                    <div style={{ color: 'var(--color-accent)', marginBottom: 12 }}>{stat.icon}</div>
                                    <p style={{
                                        fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase',
                                        letterSpacing: '0.06em', color: 'var(--color-text-tertiary)', marginBottom: 4,
                                    }}>
                                        {stat.label}
                                    </p>
                                    <p style={{
                                        fontFamily: 'var(--font-display)', fontSize: '2rem',
                                        fontWeight: 800, color: 'var(--color-text-primary)',
                                    }}>
                                        <CountUp end={stat.value} suffix={stat.suffix} />
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brief Intro Section */}
            <section className="section">
                <div className="container">
                    <AnimatedSection>
                        <div className="glass-card" style={{ padding: '3rem', overflow: 'hidden' }}>
                            <div style={{ maxWidth: 640 }}>
                                <span className="badge badge-warm" style={{ marginBottom: 12 }}>
                                    My Mission
                                </span>
                                <h2 style={{ marginBottom: 16 }}>
                                    Faith. Creativity. <span className="gradient-text">Impact.</span>
                                </h2>
                                <p style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                                    I believe that every individual has the power to create positive change.
                                    Through the lens of Tafsir Al-Qur'an, I explore how ancient wisdom applies to
                                    modern challenges — from environmental stewardship to community empowerment.
                                    My work bridges tradition and innovation, creating content that inspires action.
                                </p>
                                <Link
                                    to="/about"
                                    style={{
                                        display: 'inline-flex', alignItems: 'center', gap: 6,
                                        color: 'var(--color-accent)', fontWeight: 600,
                                        fontSize: '0.9rem', marginTop: 20,
                                    }}
                                >
                                    Read my full story <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </PageTransition>
    )
}
