import React, { useEffect, useState } from 'react'

import children from '../types/children'

export function Naviqasiya({ children }: children) {
    const [path, setPath] = useState <string> ('/')

    useEffect (() => {
        setPath (window.location.pathname)
    }, [])

    return (
        <nav className={`w-screen ${path == '/' ? 'bg-transparent' : 'bg-mono-800'}`}>
            { children }
        </nav>
    )
}

export function Sol ({ children }: children) {
    return (
        <div id='nav-sol'>{ children }</div>
    )
}

export function Orta ({ children }: children) {
    return (
        <div id='nav-orta'>{ children }</div>
    )
}

export function Sağ ({ children }: children) {
    return (
        <div id='nav-sol'>{ children }</div>
    )
}