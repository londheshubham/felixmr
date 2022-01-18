import React, { useState, useEffect, fragment } from 'react';
import classNames from 'classnames';



const innerClasses = classNames(
    'hero-inner section-inner',
    'has-top-divider',
    'has-bottom-divider'
);

const Contact = () => {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 681px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    return (
        <fragment>
            {matches && (<h1 style={{marginTop: '180px', marginLeft: '420px' }}>Big Screen</h1>)}
            {!matches && (<h1 style={{marginTop: '180px', marginLeft: '420px', fontSize: '120px', visibility: 'visible', color: 'red' }}>Small Screen</h1>)}
        </fragment>
    )
}

export default Contact;