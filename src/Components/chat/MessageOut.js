import React from 'react'
import { Link } from 'react-router-dom'
// import ImgFile from '../ImgFile'

export default function MessageOut({className,time,message,image}) {
    return (
        <div className={`d-flex flex-column mb-5 align-items-end ${className}`}>
                  <div className="d-flex align-items-center">
                    <div>
                      <span className="text-muted font-size-sm">{time}</span>
                      <Link
                        to="/"
                        className="text-dark-75 text-hover-primary fw-bold font-size-h6"
                      >
                        You
                      </Link>
                    </div>
                    <div className="symbol symbol-circle symbol-40 ml-3">
                    <img
                      alt="Pic"
                      src={image}
                    />
                    </div>
                  </div>
                  <div className="mt-2 rounded p-5 bg-light-primary text-dark-50 fw-bold font-size-lg text-end max-w-400px">
                    {message}
                  </div>
                </div>
    )
}
