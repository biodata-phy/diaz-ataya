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
    return (
        <div style={{
            position: 'absolute',
            inset: 0,
            zIndex: -1,
            overflow: 'hidden',
            pointerEvents: 'none',
            opacity: 0.2, // Very subtle
            maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
        }}>
            {photos.map((src, i) => (
                <motion.div
                    key={src}
                    initial={{
                        opacity: 0,
                        scale: 0.8,
                        x: Math.random() * 100 - 50 + '%',
                        y: Math.random() * 100 - 50 + '%'
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        x: [
                            (i * 15) + '%',
                            ((i * 15) + 5) + '%',
                            (i * 15) + '%'
                        ],
                        y: [
                            (Math.random() * 70) + '%',
                            (Math.random() * 70 + 5) + '%',
                            (Math.random() * 70) + '%'
                        ],
                    }}
                    transition={{
                        duration: 20 + i * 5,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'linear',
                        delay: i * 2
                    }}
                    style={{
                        position: 'absolute',
                        width: 180,
                        height: 180,
                        padding: 8,
                        background: 'white',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        borderRadius: 4,
                        transform: `rotate(${Math.random() * 20 - 10}deg)`
                    }}
                >
                    <img
                        src={src}
                        alt="Instagram style"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 2 }}
                    />
                </motion.div>
            ))}
        </div>
    )
}
