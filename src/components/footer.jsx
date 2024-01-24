import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div className='main-footer'>
      <div className="in">
        <div className='logos'>
        <img src="https://nenow.in/wp-content/uploads/2023/10/Netflix-India-Logo.webp" className='n-logo' alt="" />
        <img src="https://aphrodite.gmanetwork.com/entertainment/articles/900_675_MainImage35_0403__20200403170616.jpg" className='n-logo' alt="" />
        <img src="https://i.redd.it/ghmba1kgltn31.png" className='n-logo' alt="" />
        <img src="https://pbs.twimg.com/media/ERwK2FNX0AAdzPv.png" className='n-logo' alt="" />
        <img src="https://helios-i.mashable.com/imagery/articles/02l5ul5CtfE7vLX33oxP6Ci/hero-image.fill.size_1248x702.v1631034914.jpg" className='n-logo' alt="" />
      </div>
      <div className='lists'>
        <ul>
            <li>Audio description</li>
            <li>Investor relation</li>
            <li>Legal notices</li>
            
        </ul>
        <ul>
            <li>Help center</li>
            <li>jobs</li>
            <li>cookie prefferences</li>
            
        </ul>
        <ul>
            <li>Gift cards</li>
            <li>terms of use </li>
            <li>Coperate info</li>
        </ul>
      </div>
      <h6 style={{color:'grey',textAlign:'center'}}>Copy right @ Netflix.com</h6>
      </div>
    </div>
  )
}

export default Footer
