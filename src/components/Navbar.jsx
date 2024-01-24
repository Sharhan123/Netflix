import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import './navbar.css'
function Navbar() {
  function change(){
    document.getElementById(down).style.display = 'block'
  }
  return (
    <div className='navbar'>
        
        <div className='container'>

      <div className='image'>
        <img className='logo' src="https://assets-global.website-files.com/5ee732bebd9839b494ff27cd/5ee732bebd98393d75ff281d_580b57fcd9996e24bc43c529.png" alt="no" />

        <div className='texts'>
            <p>Home</p>
            <p>Movies</p>
            <p>Shows</p>
            <p>latest continues</p>
            
            
        </div>
      </div>
      <div className='end'>
        <FontAwesomeIcon className='icon-search' icon={faSearch} />
        <FontAwesomeIcon className='icon-search' icon={faBell} />
        <div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" onClick={change} className='avatar' alt="" />
        &nbsp;&nbsp;
        <FontAwesomeIcon className='icon-search' icon={faAngleDown} />
        </div>
        <div className='down' id='down' style={{display:'none'}}>
          <div className='rows'>
            <img className='image-logo' src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" alt="" />
            <p className='texts'>Anjith</p>
          </div>
          <div className='rows'>
            <img className='image-logo' src="https://i.pinimg.com/736x/92/b4/e7/92b4e7c57de1b5e1e8c5e883fd915450.jpg" alt="" />
            <p className='texts'>Ramesh</p>
          </div>
          <div className='rows'>
            <img className='image-logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_abfqFd08x_Fg5ECzkRxnEX80vC8tuqu4083-VwZzitqU-4Y5CL3A35tSgaVPHrALuc&usqp=CAU" alt="" />
            <p className='texts'>Divya</p>
          </div>
          <div className='rows'>
            <img className='image-logo' src="https://ih1.redbubble.net/image.618422871.1999/flat,750x,075,f-pad,750x1000,f8f8f8.u2.webp" alt="" />
            <p className='texts'>Chenadan</p>
          </div>
          <div className='rows'>
            <img className='image-logo' src="https://img.freepik.com/premium-vector/funny-green-face-square-avatar-cartoon-emotion-icon_53562-16129.jpg" alt="" />
            <p className='texts'>Rajesh</p>
          </div>
          <div className='rows'>
            <img className='image-logo' src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" alt="" />
            <p className='texts'>sandeep</p>
          </div>
          <div className='rows-last'>
            <FontAwesomeIcon icon={faSignOut} style={{color:'red'}} />
            <p className='texts'>LOGOUT</p>
          </div>
        </div>
      </div>
      
        </div>

    </div>
  )
}

export default Navbar
