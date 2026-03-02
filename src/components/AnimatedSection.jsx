import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AnimatedSection({ children, delay = 0, style = {} }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.16, 1, 0.3, 1],
            }}
            style={style}
        >
            {children}
        </motion.div>
    )
}
