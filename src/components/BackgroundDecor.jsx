export default function BackgroundDecor() {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: -1,
            overflow: 'hidden',
            pointerEvents: 'none',
        }}>
            {/* Mesh Gradient Bloom */}
            <div
                className="floating-shape"
                style={{
                    width: isMobile ? '100vw' : '70vw',
                    height: isMobile ? '100vw' : '70vw',
                    background: 'radial-gradient(circle, var(--color-accent-light) 0%, transparent 70%)',
                    top: isMobile ? '-20vw' : '-20vw',
                    left: isMobile ? '-50vw' : '-10vw',
                    opacity: 0.1,
                    filter: isMobile ? 'blur(60px)' : 'blur(100px)',
                    animationDuration: '25s'
                }}
            />
            <div
                className="floating-shape"
                style={{
                    width: isMobile ? '80vw' : '60vw',
                    height: isMobile ? '80vw' : '60vw',
                    background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
                    bottom: isMobile ? '-30vw' : '-10vw',
                    right: isMobile ? '-30vw' : '-10vw',
                    opacity: 0.08,
                    filter: isMobile ? 'blur(80px)' : 'blur(120px)',
                    animationDelay: '-5s',
                    animationDuration: '30s'
                }}
            />
            {!isMobile && (
                <div
                    className="floating-shape"
                    style={{
                        width: '40vw', height: '40vw',
                        background: 'radial-gradient(circle, var(--color-warm) 0%, transparent 70%)',
                        top: '30vh',
                        right: '10vw',
                        opacity: 0.08,
                        filter: 'blur(80px)',
                        animationDelay: '-10s'
                    }}
                />
            )}
        </div>
    )
}
