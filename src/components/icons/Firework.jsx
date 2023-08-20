import React from 'react'

const Firework = () => {
  return (
    <a className='firework-link' href='#beginning'>
       <svg id="firework" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <title>Volver al principio</title>
            <rect width="80" height="80" fill="url(#pattern34)"/>
            <defs>
            <pattern id="pattern34" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_162_33" transform="scale(0.01)"/>
            </pattern>
            <image id="image0_162_33" width="80" height="80" xlinkHref="data:image/png;base64,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"/>
            </defs>
        </svg>
    </a>
  )
}

export default Firework