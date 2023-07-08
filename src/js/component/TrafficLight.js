import React, { useState } from 'react'

const TrafficLight = () => {
  const [Color, setColor] = useState("yellow");

  return (
    <div className='Traffic_Light'>
      <div onClick={() => setColor("red")}
        className={
          'red Light ' + (Color === "red" ? "glowRed" : "")}>
        <img className='' src='https://cdn.domestika.org/c_fill,dpr_auto,f_auto,pg_1,t_base_params/v1644585304/job-covers/000/092/081/92081-original.png?1644585304' />
      </div>
      <div onClick={() => setColor("yellow")}
        className={'yellow Light ' + (Color === "yellow" ? "glowYellow" : "")}>
        <img className='' src='https://cdn.domestika.org/c_fill,dpr_auto,f_auto,pg_1,t_base_params/v1644585304/job-covers/000/092/081/92081-original.png?1644585304' />
      </div>
      <div onClick={() => setColor("green")}
        className={'green Light ' + (Color === "green" ? "glowGreen" : "")}>
        <img className='' src='https://cdn.domestika.org/c_fill,dpr_auto,f_auto,pg_1,t_base_params/v1644585304/job-covers/000/092/081/92081-original.png?1644585304' />
      </div>
    </div>
  )
}

export default TrafficLight