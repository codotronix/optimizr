import React, { useState } from 'react'
import clsx from 'clsx'
import './style.css'
import HTMLTab from './HTMLTab'
import CSSTab from './CSSTab'
import JSTab from './JSTab'
import ImagesTab from './ImagesTab'

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
    const [activeTab, setActiveTab] = useState('html')
    return (
        <div className="homepage">
            {/* THE TABS MENUS */}
            <div className="tabs">
                {
                    tabs.map(t => 
                    <div key={t.id} 
                        onClick={() => setActiveTab(t.id)}
                        className={clsx('tab', (activeTab === t.id) && 'selected' )}
                    >
                        {t.name}
                    </div>
                    )
                }
            </div>

            {/* THE TABS BODIES */}
            <div className="mt-25">
                <div className={clsx( (activeTab !== 'html') && 'hidden' )}>
                    <HTMLTab/>
                </div>
                <div className={clsx( (activeTab !== 'css') && 'hidden' )}>
                    <CSSTab/>
                </div>
                <div className={clsx( (activeTab !== 'js') && 'hidden' )}>
                    <JSTab/>
                </div>
                <div className={clsx( (activeTab !== 'images') && 'hidden' )}>
                    <ImagesTab/>
                </div>
            </div>
            

        </div>
    )
}

export default Home