import { useEffect, useState } from 'react'

export default function CursorGlow() {
    const [pos, setPos] = useState({ x: 0, y: 0 })
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleMove = (e) => {
            setPos({ x: e.clientX, y: e.clientY })
            setVisible(true)
        }
        const handleLeave = () => setVisible(false)

        window.addEventListener('mousemove', handleMove)
        window.addEventListener('mouseleave', handleLeave)
        return () => {
            window.removeEventListener('mousemove', handleMove)
            window.removeEventListener('mouseleave', handleLeave)
        }
    }, [])

    return (
        <div
            className="cursor-glow"
            style={{
                left: pos.x,
                top: pos.y,
                opacity: visible ? 1 : 0,
            }}
        />
    )
}
