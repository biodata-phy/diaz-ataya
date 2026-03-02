import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X, Sparkles } from 'lucide-react'

export default function Navbar({ theme, toggleTheme }) {
    const [mobileOpen, setMobileOpen] = useState(false)

    const links = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/projects', label: 'Projects' },
        { to: '/contact', label: 'Contact' },
    ]

    return (
        <header style={styles.header}>
            <div style={styles.inner}>
                {/* Logo */}
                <Link to="/" style={styles.logo}>
                    <div style={styles.logoIcon}>
                        <Sparkles size={16} color="#fff" />
                    </div>
                    <span style={styles.logoText}>Diaz Ataya</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="desktop-nav" style={styles.desktopNav}>
                    {links.map(link => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            end={link.to === '/'}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Actions */}
                <div style={styles.actions}>
                    <button
                        onClick={toggleTheme}
                        style={styles.themeBtn}
                        aria-label="Toggle theme"
                    >
                        <motion.div
                            key={theme}
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                        </motion.div>
                    </button>

                    <Link to="/contact" className="btn btn-primary nav-cta-btn" style={styles.ctaBtn}>
                        Let's Talk
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        style={styles.mobileMenuBtn}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={styles.mobileNav}
                    >
                        {links.map(link => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                end={link.to === '/'}
                                onClick={() => setMobileOpen(false)}
                                style={styles.mobileLink}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    )
}

const styles = {
    header: {
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        background: 'color-mix(in srgb, var(--color-surface) 80%, transparent)',
    },
    inner: {
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 1.5rem',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        textDecoration: 'none',
    },
    logoIcon: {
        width: 32,
        height: 32,
        borderRadius: 8,
        background: 'var(--color-accent)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoText: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: '1.125rem',
        color: 'var(--color-text-primary)',
        letterSpacing: '-0.02em',
    },
    desktopNav: {
        display: 'flex',
        alignItems: 'center',
        gap: 32,
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
    },
    themeBtn: {
        width: 36,
        height: 36,
        borderRadius: 'var(--radius-full)',
        border: '1px solid var(--color-border)',
        background: 'transparent',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-text-secondary)',
        transition: 'all 0.2s',
    },
    ctaBtn: {
        fontSize: '0.85rem',
        padding: '0.5rem 1.25rem',
    },
    mobileMenuBtn: {
        width: 44,
        height: 44,
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--color-border)',
        background: 'transparent',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-text-primary)',
    },
    mobileNav: {
        overflow: 'hidden',
        borderTop: '1px solid var(--color-border)',
        padding: '1rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
    },
    mobileLink: {
        padding: '0.75rem 0',
        fontSize: '1rem',
    },
}
