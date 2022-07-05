import React from 'react'
import { Link } from 'react-router-dom'
import ImgFile from '../ImgFile'

export default function ChatPerson({className,userName,role,time,count,type}) {
    return (
        <div className={`d-flex align-items-center justify-content-between ${className}`}>
              <div className="d-flex align-items-center">
                <div className="symbol symbol-circle symbol-50 mr-3">
                  <ImgFile alt="Pic" image="/media/users/300_11.jpg"/>
                </div>
                <div className="d-flex flex-column">
                  <Link
                    to="/"
                    className="text-dark-75 text-hover-primary fw-bold font-size-lg"
                  >
                    {userName}
                  </Link>
                  <span className="text-muted fw-bold font-size-sm">
                    {role}
                  </span>
                </div>
              </div>
              <div className="d-flex flex-column align-items-end">
                <span className="text-muted fw-bold font-size-sm">
                  {time}
                </span>
                <span className={`label label-sm label-${type}`}>{count}</span>
              </div>
            </div>
    )
}
