import React, { useEffect } from "react"
import { Link } from "gatsby"

import { useLocation } from "@reach/router"

const Header = ({ setMenuState, menuState, setCursorHovered }) => {
  const location = useLocation()

  useEffect(() => {
    setMenuState(false)
  }, [location])

  return (
    <header>
      <div className="container fluid">
        <div
          onMouseLeave={() => setCursorHovered(false)}
          onMouseEnter={() => setCursorHovered(true)}
          className="header-inner"
        >
          <Link activeClassName="active" to="/">
            Pocket.
          </Link>
          <div
            onMouseLeave={() => setCursorHovered(false)}
            onMouseEnter={() => setCursorHovered(true)}
            onClick={() => setMenuState(!menuState)}
            className="hamburger-menu"
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
