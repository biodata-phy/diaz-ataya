import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, MessageCircle, Download, Check, ArrowUpRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import AnimatedSection from '../components/AnimatedSection'

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)
    const [focused, setFocused] = useState(null)

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
    }

    const inputWrapStyle = (field) => ({
        borderRadius: 'var(--radius-md)',
        border: `1px solid ${focused === field ? 'var(--color-accent)' : 'var(--color-border)'}`,
        background: 'var(--color-bg)',
        transition: 'all 0.2s',
        overflow: 'hidden',
        boxShadow: focused === field ? 'var(--shadow-glow)' : 'none',
    })

    const inputStyle = {
        width: '100%', padding: '0.75rem 1rem', border: 'none', outline: 'none',
        background: 'transparent', fontFamily: 'var(--font-body)',
        fontSize: '0.9rem', color: 'var(--color-text-primary)',
    }

    return (
        <PageTransition>
            <div className="container section">
                {/* Header */}
                <AnimatedSection>
                    <div style={{ marginBottom: '2.5rem' }}>
                        <span className="badge badge-accent" style={{ marginBottom: 12 }}>
                            <MessageCircle size={12} /> Let's Connect
                        </span>
                        <h1 style={{ marginBottom: 12 }}>
                            Get in <span className="gradient-text">Touch</span>
                        </h1>
                        <p style={{ fontSize: '1.05rem', maxWidth: 500 }}>
                            Have a question, collaboration idea, or just want to say hello?
                            I'd love to hear from you.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="contact-grid">
                    {/* Contact Form */}
                    <AnimatedSection delay={0.1}>
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', marginBottom: 24 }}>
                                Send a Message
                            </h2>
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                                    <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                                        Your Name
                                    </label>
                                    <div style={inputWrapStyle('name')}>
                                        <input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            onFocus={() => setFocused('name')}
                                            onBlur={() => setFocused(null)}
                                            placeholder="Enter your name"
                                            style={inputStyle}
                                            required
                                        />
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                                    <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                                        Email Address
                                    </label>
                                    <div style={inputWrapStyle('email')}>
                                        <input
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onFocus={() => setFocused('email')}
                                            onBlur={() => setFocused(null)}
                                            placeholder="your@email.com"
                                            style={inputStyle}
                                            required
                                        />
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                                    <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                                        Message
                                    </label>
                                    <div style={inputWrapStyle('message')}>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            onFocus={() => setFocused('message')}
                                            onBlur={() => setFocused(null)}
                                            placeholder="Tell me about your idea..."
                                            style={{ ...inputStyle, resize: 'vertical' }}
                                            rows={5}
                                            required
                                        />
                                    </div>
                                </div>

                                <motion.button
                                    type="submit"
                                    className="btn btn-primary"
                                    style={{ width: '100%', padding: '0.875rem', fontSize: '0.95rem', marginTop: 4 }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {submitted ? (
                                        <><Check size={18} /> Message Sent!</>
                                    ) : (
                                        <><Send size={18} /> Send Message</>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </AnimatedSection>

                    {/* Contact Info */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        <AnimatedSection delay={0.2}>
                            <div className="glass-card" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: 16 }}>
                                <div style={{
                                    width: 44, height: 44, borderRadius: 'var(--radius-md)',
                                    background: 'var(--color-accent-subtle)', color: 'var(--color-accent)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                                }}>
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h3 style={{
                                        fontFamily: 'var(--font-display)', fontWeight: 600,
                                        fontSize: '0.85rem', color: 'var(--color-text-tertiary)', marginBottom: 2,
                                    }}>Email</h3>
                                    <p style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--color-text-primary)' }}>
                                        h1021221019@student.untan.ac.id
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.3}>
                            <div className="glass-card" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: 16 }}>
                                <div style={{
                                    width: 44, height: 44, borderRadius: 'var(--radius-md)',
                                    background: 'var(--color-accent-subtle)', color: 'var(--color-accent)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                                }}>
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h3 style={{
                                        fontFamily: 'var(--font-display)', fontWeight: 600,
                                        fontSize: '0.85rem', color: 'var(--color-text-tertiary)', marginBottom: 2,
                                    }}>Location</h3>
                                    <p style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--color-text-primary)' }}>
                                        Indonesia
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Social Links */}
                        <AnimatedSection delay={0.4}>
                            <div className="glass-card" style={{ padding: '1.5rem' }}>
                                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', marginBottom: 12 }}>
                                    Connect on Socials
                                </h2>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                    {['Instagram', 'Medium', 'LinkedIn'].map(name => (
                                        <motion.a
                                            key={name}
                                            href="#"
                                            style={{
                                                display: 'inline-flex', alignItems: 'center', gap: 6,
                                                padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)',
                                                border: '1px solid var(--color-border)', fontSize: '0.85rem',
                                                fontWeight: 500, color: 'var(--color-text-secondary)',
                                                textDecoration: 'none',
                                            }}
                                            whileHover={{
                                                borderColor: 'var(--color-accent)',
                                                color: 'var(--color-accent)',
                                            }}
                                        >
                                            {name}
                                            <ArrowUpRight size={14} style={{ opacity: 0.5 }} />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* CV Download */}
                        <AnimatedSection delay={0.5}>
                            <div style={{
                                padding: '1.5rem', background: 'var(--color-accent-subtle)',
                                borderRadius: 'var(--radius-lg)', border: '1px solid rgba(99, 102, 241, 0.1)',
                            }}>
                                <h2 style={{ fontFamily: 'var(--font-display)', marginBottom: 4 }}>
                                    Looking for my CV?
                                </h2>
                                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-tertiary)', marginBottom: 12 }}>
                                    Download my complete resume as a PDF.
                                </p>
                                <button className="btn btn-outline" style={{ fontSize: '0.8rem', gap: 6 }}>
                                    <Download size={14} /> Download CV
                                </button>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}
