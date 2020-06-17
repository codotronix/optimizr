import React from 'react'
import './style.css'

const tabs = [
    {
        name: 'HTML',
        id: 'html'
    },
    {
        name: 'CSS',
        id: 'css'
    },
    {
        name: 'JS',
        id: 'js'
    },
    {
        name: 'Images',
        id: 'images'
    },
]

const Home = () => {
    return (
        <div className="homepage">
            {/* THE TABS MENUS */}
            <div className="tabs">
                {
                    tabs.map(t => 
                    <div className="tab" key={t.id}>
                        {t.name}
                    </div>
                    )
                }
            </div>

            {/* THE TABS BODIES */}
        </div>
    )
}

export default Home