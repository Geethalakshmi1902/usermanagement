import React from 'react'
// import "./spinner.css";
// import { toAbsoluteUrl } from "@ellantec/pearlcore_config/dist/_pearl/_helpers";
// import SVG from "react-inlinesvg";

export default function Buttons({className,type,onClick,label,id,dataWizardType,icon,svg,form,isDisabled,isHidden,isLoding}) {
    const [isLoading, setIsLoading] = React.useState(false);
    const handleOnClick = () => {
    if (isLoading) return;

    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

    if (icon) {
        return <button type={type} className={className} onClick={onClick} id={id} data-wizard-type={dataWizardType} disabled={isDisabled} hidden={isHidden}><i className={icon}></i>{label}</button>
    }else if (svg) {
        return <button type={type} className={className} onClick={onClick} id={id} data-wizard-type={dataWizardType} disabled={isDisabled} hidden={isHidden}>
            <span className="svg-icon svg-icon-md">
                {/* <SVG src={toAbsoluteUrl(svg)} /> */}
            </span>
            {label}
        </button>
    } else if (isLoding) {
        return <button
        type={type} onClick={onClick} id={id} data-wizard-type={dataWizardType} disabled={isDisabled} hidden={isHidden} className={className}
        // className={isLoading ? "loading" : undefined}
      >
        <div className="spinners" />
        {label}
      </button>
    } 
    
    else {
        return <button type={type} className={className} onClick={onClick} id={id} data-wizard-type={dataWizardType} form={form} disabled={isDisabled} hidden={isHidden}>{label}</button>
    }
}
