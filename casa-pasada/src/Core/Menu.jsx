import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Menu.scss';
import HamburgerMenu from 'react-hamburger-menu';
import MenuContent from './MenuContent/MenuContent';

export function Menu () {

  const [open, setOpen] = useState(false);
  const [isActive, setActive] = useState("false");
  
  function handleClickOpen(){
  //  setOpen(true)
  setOpen(prevOpen => !prevOpen);
  setActive(!isActive);
}


    return (
        <header>
          <nav className="container-fluid container-header px-0">   
         <div className="row w-100 container-menu-title mx-0 position-relative">
         <div className="hidden col">
            <HamburgerMenu
    isOpen={open}
    menuClicked={handleClickOpen}
    width={20}
    height={17}
    strokeWidth={3}
    rotate={0}
    color='white'
    borderRadius={0}
    animationDuration={0.5}
/>
</div>   
              <div className="col-8  container-title">
              {/* <i class="fab fa-pagelines"></i> */}
              </div>
            </div>
            {/* <div className={isActive ? "hiddenContent" : null}> <MenuContent/></div>   */}
            <div className="fade-container">
            <div className={isActive ? "fadeOut" : "fadeIn"}> <MenuContent/></div>
            </div>
           
        </nav> 
             
        </header>
    )
}

export default Menu; 