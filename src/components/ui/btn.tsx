import React from 'react'

interface BtnProps{
    title: string,
    type?:"primary"|"outline"|"transparent"
    icon?: React.ReactElement,
    onClick?: () => any,
    className?:string
}
const btn = ({ title, type="primary", icon, onClick, className }: BtnProps) => {
    return (
      <button onClick={()=>onClick} className={`btn btn-${type} ${className}`}>
        {title}
        {icon}
      </button>
    );
};

export default btn