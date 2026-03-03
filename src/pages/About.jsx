import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    MapPin, GraduationCap, Leaf, BookOpen, Pen, X, ExternalLink,
    Calendar, Briefcase, Award, Users, Star, CheckCircle2, Languages,
    Trophy, Globe, Mic, Video
} from 'lucide-react'
import PageTransition from '../components/PageTransition'
import AnimatedSection from '../components/AnimatedSection'

// --- DATA ---

const skills = [
    { name: 'English (IELTS 6.0)', level: 80, icon: <Languages size={14} />, category: 'Language' },
    { name: 'Arabic (TOAFL 450)', level: 75, icon: <Languages size={14} />, category: 'Language' },
    { name: 'Public Speaking', level: 95, icon: <Mic size={14} />, category: 'Soft Skill' },
    { name: 'Graphic Design (Canva)', level: 90, icon: <Pen size={14} />, category: 'Creative' },
    { name: 'Video Editing (Capcut)', level: 85, icon: <Video size={14} />, category: 'Creative' },
]

const educationHistory = [
    {
        id: 1,
        degree: 'MA in Quranic Studies & Tafsir',
        school: 'Universitas Islam Internasional Indonesia',
        period: '2023 - Present',
        location: 'Depok, Indonesia',
        description: 'Specializing in contemporary interpretations of Quranic texts and their application in addressing social and environmental issues. Involved in research projects regarding religious literacy and ecological theology.',
        image: 'uiii_campus_architecture_1772457294478.png',
        logoName: 'UIII'
    },
    {
        id: 2,
        degree: 'Bachelor of Religious Studies',
        school: 'State Islamic University',
        period: '2019 - 2023',
        location: 'Pontianak, Indonesia',
        description: 'Foundation in Islamic philosophy, history, and classical Arabic. Graduated with honors, focusing on social movements and scientific writing in the Islamic world.',
        image: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=800',
        logoName: 'UIN'
    }
]

const workExperience = [
    {
        title: 'Trainer & Public Relations',
        org: 'CV. Kibar Kreatif Indonesia',
        period: 'Mar 2023 – 2024',
        desc: 'Led training sessions and managed external communications for creative initiatives.'
    },
    {
        title: 'Writing Mentor',
        org: 'IAIN Pontianak Literacy & Journal House',
        period: '2022 – 2024',
        desc: 'Mentored students in academic and creative writing, fostering a culture of publication.'
    },
    {
        title: 'Arabic & English Instructor',
        org: 'Sang Bintang School',
        period: 'Jul – Dec 2022',
        desc: 'Developed curricula and taught language courses for diverse student groups.'
    },
    {
        title: 'Mudabbir (Islamic Mentor)',
        org: 'Keluarga Kita Quranic Foundation',
        period: 'Feb 2022 – 2023',
        desc: 'Supervised and guided students in spiritual and academic growth.'
    },
    {
        title: 'Content Designer Intern',
        org: 'AgriQur’an (Canva Pro)',
        period: 'Mar – Jun 2022',
        desc: 'Created high-quality visual content for agricultural and religious literacy.'
    }
]

const organizationalExp = [
    {
        title: 'Public Relations (Kemendikbud Expo)',
        org: 'IAIN Pontianak / Ministry of Education',
        period: '2024',
        desc: 'Promoted campus profiles and established relationships with prospective students.'
    },
    {
        title: 'Community Service (KKN)',
        org: 'Kumprang Tengah (ID) & Tebedu (MY)',
        period: '2023 – 2024',
        desc: 'Engaged in cross-border community empowerment and social projects.'
    },
    {
        title: 'MC & Event Division',
        org: '5th Kalbar Food Festival',
        period: '2024',
        desc: 'Managed event flow and served as Master of Ceremonies for a major food festival.'
    },
    {
        title: 'Editor (Book Chapter)',
        org: 'RLJ FUAD IAIN Pontianak',
        period: '2023',
        desc: 'Reviewed and edited various articles for academic publication.'
    },
    {
        title: 'Event Division',
        org: 'All About Research RLJ',
        period: '2023',
        desc: 'Responsible for scheduling materials, coordinating lecturers, and agenda preparation.'
    }
]

const achievements = [
    {
        title: '2nd Place, Quranic Scientific Writing',
        org: 'Provincial MTQ Sanggau & Landak',
        period: '2023-2024',
        badge: 'Regional'
    },
    {
        title: '6th National Rank, Quranic Writing',
        org: 'OASE PTKI II National, UIN Jakarta',
        period: '2023',
        badge: 'National'
    },
    {
        title: '2nd Place, Scientific Work Expo',
        org: 'OASE PTKI II National, UIN Jakarta',
        period: '2023',
        badge: 'National'
    },
    {
        title: 'Panelist, Student Mobility Program',
        org: 'UNIMAS Sarawak, Malaysia',
        period: '2024',
        badge: 'International'
    },
    {
        title: 'Panelist, 6th Ushuluddin Conference',
        org: 'International Research Conference',
        period: '2022',
        badge: 'International'
    },
    {
        title: '4th Place, Quranic Scientific Writing',
        org: 'Provincial MTQ Ketapang',
        period: '2022',
        badge: 'Regional'
    },
    {
        title: 'Certified Mind Healing Therapy',
        org: 'CC. MHT Certification',
        period: 'Current',
        badge: 'Professional'
    }
]

// --- COMPONENTS ---

export default function About() {
    const [selectedEdu, setSelectedEdu] = useState(null)
    const [activeTab, setActiveTab] = useState('experience')

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

    return (
        <PageTransition>
            <div className="container section" style={{ paddingBottom: '6rem' }}>
                {/* Hero Profile */}
                <AnimatedSection>
                    <div className="glass-card" style={{ padding: isMobile ? '1.25rem' : '2.5rem', marginBottom: '3rem' }}>
                        <div className="profile-card-layout">
                            <div style={{ flexShrink: 0 }}>
                                <div style={{
                                    width: 200, height: 200, borderRadius: 'var(--radius-2xl)',
                                    background: 'var(--color-bg-secondary)', border: '4px solid var(--color-accent)',
                                    overflow: 'hidden', boxShadow: 'var(--shadow-lg)'
                                }}>
                                    <img src="about.png" alt="Diaz Ataya" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <h1 style={{ fontSize: 'clamp(2.1rem, 4.5vw, 2.75rem)', marginBottom: 8, letterSpacing: '-0.03em' }}>
                                    Diaz <span className="gradient-text">Ataya</span>
                                </h1>
                                <p style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '1.1rem', marginBottom: 12 }}>
                                    Tafsir Researcher & Creative Solutions Specialist
                                </p>
                                <p style={{ fontSize: '1rem', lineHeight: 1.75, marginBottom: 16, maxWidth: 650, color: 'var(--color-text-secondary)' }}>
                                    A dedicated researcher and public relations professional bridging the gap between sacred wisdom
                                    and modern creative storytelling. Specializing in Tafsir Al-Qur'an, linguistic studies,
                                    and social impact initiatives across regional and international platforms.
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                    <span className="badge badge-accent"><MapPin size={12} /> Indonesia</span>
                                    <span className="badge badge-warm"><GraduationCap size={12} /> MA Tafsir student</span>
                                    <span className="badge badge-success"><CheckCircle2 size={12} /> Certified Therapist</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Unified Layout */}
                <div className="two-col-layout" style={{ marginBottom: '4rem' }}>

                    {/* Left Column: Skills & Education */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

                        {/* Professional Skills */}
                        <AnimatedSection>
                            <h2 style={styles.sectionTitle}>
                                <Star size={20} className="social-link-hover" />
                                Technical Proficiency
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                                {skills.map((skill, i) => (
                                    <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 4 }}>
                                            <span style={{ fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 6, flex: 1, minWidth: 140 }}>
                                                {skill.icon} {skill.name}
                                            </span>
                                            <span style={{ fontSize: '0.7rem', fontWeight: 700, opacity: 0.5, textTransform: 'uppercase' }}>{skill.category}</span>
                                        </div>
                                        <div className="progress-track" style={{ height: 6 }}>
                                            <motion.div
                                                className="progress-fill"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        {/* Education History */}
                        <AnimatedSection delay={0.2}>
                            <h2 style={styles.sectionTitle}>
                                <GraduationCap size={20} className="social-link-hover" />
                                Education Journey
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                                {educationHistory.map((edu) => (
                                    <motion.div
                                        key={edu.id}
                                        className="glass-card"
                                        style={{
                                            padding: isMobile ? '1rem' : '1.25rem',
                                            cursor: 'pointer',
                                            position: 'relative',
                                            border: '1px solid var(--color-border)'
                                        }}
                                        onClick={() => setSelectedEdu(edu)}
                                        whileHover={{ scale: 1.02, x: 5, borderColor: 'var(--color-accent)' }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                                            <div style={{ flex: 1 }}>
                                                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 4, lineHeight: 1.3 }}>{edu.degree}</h4>
                                                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-tertiary)', fontWeight: 500 }}>{edu.school}</p>
                                            </div>
                                            <ExternalLink size={14} style={{ opacity: 0.3, flexShrink: 0, marginTop: 4 }} />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </AnimatedSection>

                        {/* Professional Writer Badge */}
                        <AnimatedSection delay={0.4}>
                            <div style={{
                                padding: '1.5rem', background: 'var(--color-accent-subtle)',
                                borderRadius: 'var(--radius-lg)', border: '1px solid rgba(27, 61, 109, 0.1)',
                                display: 'flex', gap: 16, alignItems: 'center'
                            }}>
                                <div style={styles.iconCircle}><BookOpen size={20} /></div>
                                <div>
                                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 2 }}>Regular Writer</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--color-accent)', fontWeight: 600 }}>Tafsirqu’an.id</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Right Column: Work, Org, Awards (Tabbed) */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {/* Tabs */}
                        <AnimatedSection>
                            <div style={styles.tabHeader}>
                                {['Experience', 'Leadership', 'Awards'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab.toLowerCase())}
                                        style={{
                                            ...styles.tabBtn,
                                            color: activeTab === tab.toLowerCase() ? 'var(--color-accent)' : 'var(--color-text-tertiary)',
                                            fontWeight: activeTab === tab.toLowerCase() ? 700 : 500,
                                        }}
                                    >
                                        {tab}
                                        {activeTab === tab.toLowerCase() && (
                                            <motion.div layoutId="activeTabUnderline" style={styles.tabUnderline} />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </AnimatedSection>

                        <div style={{ minHeight: 400 }}>
                            <AnimatePresence mode="wait">
                                {/* Experience Tab */}
                                {activeTab === 'experience' && (
                                    <motion.div
                                        key="exp"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        style={styles.tabContent}
                                    >
                                        <div style={styles.timelineContainer}>
                                            <div className="timeline-line" />
                                            {workExperience.map((exp, i) => (
                                                <div key={i} style={{ position: 'relative', paddingLeft: 32, marginBottom: 28 }}>
                                                    <div className="timeline-dot" style={{ left: -5, top: 4 }} />
                                                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>{exp.title}</h4>
                                                    <p style={{ fontSize: '0.85rem', color: 'var(--color-accent)', fontWeight: 600, marginBottom: 4 }}>{exp.org}</p>
                                                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-tertiary)', fontWeight: 500, marginBottom: 6 }}>{exp.period}</p>
                                                    <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>{exp.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {/* Leadership Tab */}
                                {activeTab === 'leadership' && (
                                    <motion.div
                                        key="lead"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        style={styles.tabContent}
                                    >
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                                            {organizationalExp.map((org, i) => (
                                                <div key={i} className="glass-card" style={{ padding: '1.25rem', border: '1px solid var(--color-border)' }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                                                        <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>{org.title}</h4>
                                                        <span className="badge badge-accent" style={{ fontSize: '0.65rem' }}>{org.period}</span>
                                                    </div>
                                                    <p style={{ fontSize: '0.85rem', color: 'var(--color-accent-light)', fontWeight: 600, marginBottom: 8 }}>{org.org}</p>
                                                    <p style={{ fontSize: '0.875rem', lineHeight: 1.5, color: 'var(--color-text-secondary)' }}>{org.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {/* Awards Tab */}
                                {activeTab === 'awards' && (
                                    <motion.div
                                        key="awards"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        style={styles.tabContent}
                                    >
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12 }}>
                                            {achievements.map((award, i) => (
                                                <div key={i} className="glass-card" style={{ padding: '1rem', border: '1px solid var(--color-border)' }}>
                                                    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                                                        <div style={{ color: 'var(--color-warm)', flexShrink: 0 }}><Trophy size={18} /></div>
                                                        <div style={{ minWidth: 0 }}>
                                                            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, lineHeight: 1.3, marginBottom: 4 }}>{award.title}</h4>
                                                            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-tertiary)', fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{award.org}</p>
                                                            <span style={{ fontSize: '0.65rem', padding: '2px 8px', background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)', borderRadius: 10, marginTop: 4, display: 'inline-block' }}>
                                                                {award.badge}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modern Pop-up Modal */}
            <AnimatePresence>
                {selectedEdu && (
                    <div className="modal-overlay" onClick={() => setSelectedEdu(null)}>
                        <motion.div
                            className="modal-content"
                            onClick={e => e.stopPropagation()}
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        >
                            <button className="modal-close" onClick={() => setSelectedEdu(null)}><X size={20} /></button>

                            <div style={{ height: 220, overflow: 'hidden', position: 'relative' }}>
                                <img
                                    src={selectedEdu.image}
                                    alt={selectedEdu.school}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={styles.modalImgOverlay} />
                                <div style={{ position: 'absolute', bottom: 20, left: 24, zIndex: 2 }}>
                                    <span className="badge badge-accent" style={{ marginBottom: 8, background: 'rgba(27, 61, 109, 0.9)', color: '#fff' }}>
                                        {selectedEdu.logoName}
                                    </span>
                                    <h2 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 800 }}>{selectedEdu.school}</h2>
                                </div>
                            </div>

                            <div style={{ padding: '2rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--color-accent)', fontWeight: 700 }}>
                                        <Star size={18} /> <span>{selectedEdu.degree}</span>
                                    </div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, fontSize: '0.85rem', color: 'var(--color-text-tertiary)', fontWeight: 500 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Calendar size={14} /> {selectedEdu.period}</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><MapPin size={14} /> {selectedEdu.location}</div>
                                    </div>
                                </div>

                                <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>{selectedEdu.description}</p>

                                <button className="btn btn-primary" style={{ width: '100%', marginTop: '2rem', padding: '1rem' }} onClick={() => setSelectedEdu(null)}>
                                    Close Details
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </PageTransition>
    )
}

// --- STYLES ---

const styles = {
    sectionTitle: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        fontSize: '1.25rem',
        marginBottom: '1.5rem',
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        letterSpacing: '-0.01em'
    },
    iconCircle: {
        width: 44, height: 44, borderRadius: 'var(--radius-md)',
        background: 'rgba(27, 61, 109, 0.1)', color: 'var(--color-accent)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
    },
    tabHeader: {
        display: 'flex',
        gap: 16, // Reduced from 24
        marginBottom: '2rem',
        borderBottom: '1px solid var(--color-border)',
        paddingBottom: 4,
        overflowX: 'auto', // Allow scroll on small screens
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
    },
    tabBtn: {
        padding: '0.75rem 0',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '0.95rem',
        position: 'relative',
        transition: 'color 0.2s'
    },
    tabUnderline: {
        position: 'absolute',
        bottom: -5,
        left: 0,
        right: 0,
        height: 3,
        background: 'var(--color-accent)',
        borderRadius: 'full'
    },
    tabContent: {
        marginTop: 10
    },
    timelineContainer: {
        position: 'relative',
        paddingTop: 8
    },
    modalImgOverlay: {
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,10,0.8), transparent)'
    }
}
