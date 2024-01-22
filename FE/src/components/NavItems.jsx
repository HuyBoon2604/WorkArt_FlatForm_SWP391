import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo/logo.png"

const NavItems = () => {
    const[menuToggle,setMenuToggle] = useState(false);
    const[socialToggle,setSocialToggle] = useState(false);
    const[headerFixed,setHeaderFixed] = useState(false);

    //addevent listeners
    window.addEventListener("scroll",()=>{
        if(window.scrollY>200){
            setHeaderFixed(true);
        }else{
            setHeaderFixed(false);
        }
    })

  return (
    
    <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`} > 
        {/*header top start */}
        <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
            <div className='container'>
                <div className='header-top-area'>
                    <Link to="/signup" className='lab-btn me-3'><span>Logo content</span></Link>
                    <Link to="/login" >Login</Link>
                </div>
            </div>
        </div>
        {/*header bottom */}
        <div className="header-bottom">
            <div className='container'>
                <div className='header-wrapper'>
                    {/*Logo*/}
                    <div className='logo-search-act'>
                        <div className='logo'>
                            <Link to='/'><img src={logo} alt="" /></Link>
                        </div>
                    </div>
                    {/*Menu area*/}
                    <div className='menu-area'>
                        <div className='menu'>
                            <ul className={'lab-ul ${menuToggle  ? "active" : ""}'}>
                                <li><Link to='/' className='icofont-home'>Home</Link></li>
                                <li><Link to='/Blog'>Blog</Link></li>
                                <li><Link to='/About'>About</Link></li>
                                <li><Link to='/Contact'>Contact</Link></li>
                            </ul>
                        </div>
                        {/*signin & login*/}
                        <Link to="/signup" className='lab-btn me-3 d-none d-md-block'>Create Account</Link>
                        <Link to="/signin" className='d-none d-md-block'>Login</Link>
                        
                        
                    </div>
                </div>
            </div>
        </div>

    </header>
  )
}

export default NavItems