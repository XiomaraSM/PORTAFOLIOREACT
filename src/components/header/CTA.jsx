import React from 'react'
import HV from '../../assets/HV-Xiomara.pdf'
const CTA = () => {
  return (
    <div className='cta'>
      <a href={HV} download className='btn'>DESCARGAR HV</a>
      <a href="#contact" className=' btn btn-primary'>Hablemos</a>

    </div>
  )
}

export default CTA