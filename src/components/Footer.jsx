import { Link } from 'react-router-dom'
import { Sparkles, ArrowUpRight } from 'lucide-react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer style={styles.footer}>
            <div style={styles.inner}>
                <div className="footer-grid" style={{ marginBottom: '2rem' }}>
                    {/* Brand */}
                    <div style={styles.brand}>
                        <div style={styles.logoRow}>
                            <div style={styles.logoIcon}>
                                <Sparkles size={14} color="#fff" />
                            </div>
                            <span style={styles.logoText}>Diaz Ataya</span>
                        </div>
                        <p style={styles.tagline}>
                            Tafsir student, writer, and creative activist. Spreading positive vibes through meaningful storytelling.
                        </p>
                    </div>

                    {/* Links */}
                    <div style={styles.linksGroup}>
                        <h4 style={styles.linksTitle}>Navigate</h4>
                        <div style={styles.linksList}>
                            <Link to="/" style={styles.link}>Home</Link>
                            <Link to="/about" style={styles.link}>About</Link>
                            <Link to="/projects" style={styles.link}>Projects</Link>
                            <Link to="/contact" style={styles.link}>Contact</Link>
                        </div>
                    </div>

                    {/* Social */}
                    <div style={styles.linksGroup}>
                        <h4 style={styles.linksTitle}>Connect</h4>
                        <div style={styles.linksList}>
                            <a href="#" style={styles.link}>
                                Instagram <ArrowUpRight size={12} style={{ opacity: 0.5 }} />
                            </a>
                            <a href="#" style={styles.link}>
                                Medium <ArrowUpRight size={12} style={{ opacity: 0.5 }} />
                            </a>
                            <a href="#" style={styles.link}>
                                LinkedIn <ArrowUpRight size={12} style={{ opacity: 0.5 }} />
                            </a>
                        </div>
                    </div>
                </div>

                <div style={styles.bottom}>
                    <p style={styles.copyright}>
                        © {currentYear} Diaz Ataya. All rights reserved.
                    </p>
                    <p style={styles.madeWith}>
                        Made with purpose & positive vibes ✨
                    </p>
                </div>
            </div>
        </footer>
    )
}

const styles = {
    footer: {
        background: 'var(--color-surface)',
    },
    inner: {
        maxWidth: 1200,
        margin: '0 auto',
        padding: '3rem 1.5rem 2rem',
    },
    brand: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
    },
    logoRow: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
    },
    logoIcon: {
        width: 28,
        height: 28,
        borderRadius: 6,
        background: 'var(--color-accent)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoText: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: '1rem',
        color: 'var(--color-text-primary)',
    },
    tagline: {
        fontSize: '0.875rem',
        lineHeight: 1.6,
        color: 'var(--color-text-tertiary)',
        maxWidth: 320,
    },
    linksGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
    },
    linksTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: '0.8rem',
        fontWeight: 600,
        color: 'var(--color-text-tertiary)',
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
    },
    linksList: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
    },
    link: {
        fontSize: '0.875rem',
        color: 'var(--color-text-secondary)',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        transition: 'color 0.2s',
    },
    bottom: {
        paddingTop: '1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 12,
    },
    copyright: {
        fontSize: '0.8rem',
        color: 'var(--color-text-tertiary)',
    },
    madeWith: {
        fontSize: '0.8rem',
        color: 'var(--color-text-tertiary)',
    },
}
