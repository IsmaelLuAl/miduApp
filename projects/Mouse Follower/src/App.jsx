import './App.css'
import { useEffect, useState } from 'react'

function App () {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }
    if (enable) {
      window.addEventListener('pointermove', handleMove)
    }

    // Cleanup:
    // -> Cuando el componente se desmonta
    // -> Cuando cambian las dependencias, antes de ejecutar
    //   El efecto de nuevo
    return () => { // Clueanup method
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enable])

  return (
    <>
      <main>
        <h1>Mouse Follower</h1>
        <div style={{
          position: 'absolute',
          backgroundColor: 'hsla(0, 0%, 0%, 0.171)',
          border: '2px solid #fff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
        />
        <button onClick={() => setEnable(!enable)}>{enable ? 'Turn off' : 'Turn on'} follow mouse</button>
      </main>
    </>
  )
}

export default App
