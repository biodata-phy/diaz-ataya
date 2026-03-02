import { motion } from 'framer-motion'

const photos = [
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=40&w=400',
    'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=40&w=400',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=40&w=400',
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=40&w=400',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=40&w=400',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=40&w=400',
]

export default function FloatingPhotos() {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    const displayPhotos = isMobile ? photos.slice(0, 3) : photos

    return (
        <div style={{
            position: 'absolute',
            inset: 0,
            zIndex: -1,
            overflow: 'hidden',
            pointerEvents: 'none',
            opacity: 0.15, // Slightly more subtle
            maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
        }}>
            {displayPhotos.map((src, i) => (
                <motion.div
                    key={src}
                    initial={{
                        opacity: 0,
                        scale: 0.8,
                        x: (i * 20) + '%',
                        y: (Math.random() * 50 + 10) + '%'
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        x: [
                            (i * 20) + '%',
                            ((i * 20) + 5) + '%',
                            (i * 20) + '%'
                        ],
                        y: [
                            (10 + i * 10) + '%',
                            (15 + i * 10) + '%',
                            (10 + i * 10) + '%'
                        ],
                    }}
                    transition={{
                        duration: 15 + i * 3,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'linear',
                        delay: i * 0.5
                    }}
                    style={{
                        position: 'absolute',
                        width: isMobile ? 120 : 180, // Smaller on mobile
                        height: isMobile ? 120 : 180,
                        padding: 6,
                        background: 'white',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        borderRadius: 4,
                        rotate: (i * 5 - 10) // Consistent rotation instead of Math.random
                    }}
                >
                    <img
                        src={src}
                        alt=""
                        loading="lazy"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 2 }}
                    />
                </motion.div>
            ))}
        </div>
    )
}
