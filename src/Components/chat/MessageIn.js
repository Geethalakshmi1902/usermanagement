import React from "react";
import { Link } from "react-router-dom";
// import ImgFile from "../ImgFile";

export default function MessageIn({className,image,userName,time,message}) {
  return (
    <div className={`d-flex flex-column mb-5 align-items-start ${className}`}>
      <div className="d-flex align-items-center">
        <div className="symbol symbol-circle symbol-40 mr-3">
        <img
                      alt="Pic"
                      src={image}
                    />
        </div>
        <div>
          <Link
            to="/"
            className="text-dark-75 text-hover-primary fw-bold font-size-h6"
          >
            {userName}
          </Link>
          <span className="text-muted font-size-sm">{time}</span>
        </div>
      </div>
      <div className="mt-2 rounded p-5 bg-light-success text-dark-50 fw-bold font-size-lg text-left max-w-400px">
        {message}
      </div>
    </div>
  );
}
