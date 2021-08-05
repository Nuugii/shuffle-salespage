import React from "react"
import { stack as Menu } from "react-burger-menu"
import disableScroll from 'disable-scroll';
import "./BurgerMenu.scss"

/* https://github.com/negomi/react-burger-menu */

export default props => {
  const onStateChange = ({isOpen}) => {
    if(isOpen) {
      disableScroll.on()
    } else {
      disableScroll.off()
    }
  }

  return (
    <Menu right width="100%"  onStateChange={onStateChange} {...props}>
      <a className="menu-item" href="/">
        Overview
      </a>

      <a className="menu-item" href="/">
        FAQs
      </a>

      <a className="menu-item" href="/">
        Login
      </a>

      <a className="header__web-menu__item btn btn--header btn--lightblue" href="https://app.elify.com/signup?#!/signup">
          GET SHUFFLE
      </a>
      <a className="header__web-menu__item btn btn--header btn--blue" href="https://app.elify.com/signup?#!/signup">
          SIGN IN
      </a>
    </Menu>
  )
}
