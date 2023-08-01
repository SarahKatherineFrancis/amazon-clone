import React from 'react'
import "./header.css"
import LOGO from "../../assets/amazon-logo.png"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import {useStateValue} from "../../StateProvider"

const Header = () => {
  const [{basket}] = useStateValue()

  return (
    <div className='header'>
      <Link to='/'>
        <img src={LOGO} alt="Amazon Logo" className='header__logo'/>
      </Link>

      <div className="header__search">
          <input type="text" className='header__search-input'/>
          <SearchIcon className='header__search-icon'/>
      </div>

      <div className="header__nav">
        <Link to="/login">
          <div className="header__option">
            <span className="header__option-line1">
              Hello
            </span>
            <span className="header__option-line2">
              Sign in
            </span>
          </div>
        </Link>

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

        <Link to='/checkout'>
          <div className="header__option-basket">
            <ShoppingCartIcon />
            <span className="header__option-basket-count">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
