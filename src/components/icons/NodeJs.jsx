import React from 'react'

const NodeJs = () => {
    return (
    <div className='tech'>
        <a href='https://nodejs.org/' target='_blank' rel="noreferrer noopener">
            <svg width="116" height="99" viewBox="0 0 116 99" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect width="116" height="99" fill="url(#pattern51)"/>
                <defs>
                <pattern id="pattern51" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_168_31" transform="matrix(0.01 0 0 0.00959596 0 0.020202)"/>
                </pattern>
                <image id="image0_168_31" width="100" height="100" xlinkHref="data:image/png;base64,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"/>
                </defs>
            </svg>
        </a>
    <p className='tech-text'>NODE JS</p>
    </div>
    )
}

export default NodeJs