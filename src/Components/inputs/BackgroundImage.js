import React from 'react'
// import { toAbsoluteUrl } from '@ellantec/pearlcore_config/dist/_pearl/_helpers'

export default function BackgroundImage({className,image,transform}) {
  const toAbsoluteUrl = process.env.REACT_APP_API_URL
    return (
        <div
                className={className}
                style={{
                  backgroundImage: `url(${"http://77.68.116.225:8488/"(
                    image
                  )})`,transform
                }}
              ></div>
    )
}
