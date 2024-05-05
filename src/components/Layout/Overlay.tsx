import {Spin} from "antd";
import React from "react";

const Overlay = () => {
  return (
    <div className='mask rounded-5' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
      <div className='d-flex justify-content-center align-items-center h-100 '>
        <Spin/>
      </div>
    </div>
  )
}

export default Overlay
