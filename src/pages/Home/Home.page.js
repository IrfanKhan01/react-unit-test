import React, { useState } from 'react'
import HomeView from './Home'

export default function HomePage() {
    const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // const [data, setData] = useState(dummy)


    return (
        <HomeView data={dummy} />
    )
}
