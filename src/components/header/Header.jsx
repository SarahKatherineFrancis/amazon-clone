import React from 'react'
import "./header.css"
import LOGO from "../../assets/amazon-logo.png"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  return (
    <div className='header'>
      <img src={LOGO} alt="Amazon Logo" className='header__logo'/>

      <div className="header__search">
          <input type="text" className='header__search-input'/>
          <SearchIcon className='header__search-icon'/>
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__option-line1">
            Hello
          </span>
          <span className="header__option-line2">
            Sign in
          </span>
        </div>

        <div className="header__option">
          <span className="header__option-line1">
            Returns
          </span>
          <span className="header__option-line2">
            & Orders
          </span>
        </div>

        <div className="header__option">
          <span className="header__option-line1">
            Your
          </span>
          <span className="header__option-line2">
            Prime
          </span>
        </div>

        <div className="header__option-basket">
          <ShoppingCartIcon />
          <span className="header__option-basket-count">
            0
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
