import React from 'react';

import Header from './header';

const contentStyle={
    
    'border':'1px solid #ccc'
}
function MainLayout({children}) {
    return (
        <>
        <Header/>
        <div style={contentStyle}>
        {/* check for applying styles to only children not div */}
        {children}
        </div>
        
        </>
    )
}

export default MainLayout;