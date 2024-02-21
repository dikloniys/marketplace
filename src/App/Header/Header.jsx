import React from "react";
import Logo from '../../Components/Logo/Logo'
import BrandButtons from '../../Components/BrandButtons/BrandButtons'
import Search from '../../Components/Search/Search'
import Sliders from '../../Components/Sliders/Sliders'


function Header() {
    return (
        <header >
            <div className="header-wrap">
                <Logo/>
                <Search/>
                <BrandButtons/> 
            </div>
            <Sliders/>
        </header>
        
    )
}

export default Header;