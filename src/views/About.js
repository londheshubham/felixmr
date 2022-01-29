import React from 'react';
import classNames from 'classnames';

const About = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
}) => {

    const outerClasses = classNames(
        'hero section center-content',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'hero-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container-sm" style={{textAlign:'justify'}}>
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h3 className="mt-30 mb-16" data-reveal-delay="200" style={{ fontSize: '20px' }}>
                            We are the top market research report and data insights seller globally, backed by our excellent publishers. We have millions of precise research reports and dedicated team of industry experts
                            to assist our client to achieve growth in their respective market. We understand our clients requirements, the challenges they are facing and help accordingly to tackle those issues.
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;