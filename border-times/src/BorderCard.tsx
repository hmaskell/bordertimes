import React, {useState} from 'react';

interface IBorderCrossingCardProps {
    name: string;
    icon: string;
    delay: string;
  }
  
export function BorderCrossingCard(props: IBorderCrossingCardProps) {
    let {name, icon, delay} = props;
  
    return (
      <div>
        <img className="border-icon" src={icon} alt={`${name} icon`}></img>
        <div className="border-text">
            <p className="border-title">{name}</p>
            <h4 className="border-time">{delay}</h4>
        </div>
    </div>
    )
  }