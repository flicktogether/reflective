import React, { useEffect, useState } from 'react'

export default function Navigation() {
    const [path, setPath] = useState <string> ('/')

    useEffect (() => {
        setPath (window.location.pathname)
    }, [])

    return (
        <nav className='w-screen'>
            
        </nav>
    )
}