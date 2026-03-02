export default function BackgroundDecor() {
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
                    width: '70vw', height: '70vw',
                    background: 'radial-gradient(circle, var(--color-accent-light) 0%, transparent 70%)',
                    top: '-20vw',
                    left: '-10vw',
                    opacity: 0.15,
                    filter: 'blur(100px)',
                    animationDuration: '25s'
                }}
            />
            <div
                className="floating-shape"
                style={{
                    width: '60vw', height: '60vw',
                    background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
                    bottom: '-10vw',
                    right: '-10vw',
                    opacity: 0.1,
                    filter: 'blur(120px)',
                    animationDelay: '-5s',
                    animationDuration: '30s'
                }}
            />
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
        </div>
    )
}
