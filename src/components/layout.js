import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"

//Components
import Header from "./header"
import Menu from "./menu"

//Custom Hook
import useMousePosition from "../hooks/useMousePosition"

//Styles
import "../styles/App.scss"

const Layout = ({ children }) => {
  const siteData = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [menuState, setMenuState] = useState(false)
  const [cursorHovered, setCursorHovered] = useState(false)

  const { x, y } = useMousePosition()

  return (
    <div className="app">
      <motion.div
        animate={{
          x: x - 16,
          y: y - 16,
          scale: cursorHovered ? 1.5 : 1,
          opacity: cursorHovered ? 0.8 : 0,
        }}
        transition={{
          ease: "linear",
          duration: 0.2,
        }}
        className="cursor"
      ></motion.div>
      <Header
        menuState={menuState}
        setMenuState={setMenuState}
        siteTitle={siteData.site.siteMetadata.title}
        setCursorHovered={setCursorHovered}
      />
      <Menu
        x={x}
        y={y}
        setCursorHovered={setCursorHovered}
        menuState={menuState}
        setMenuState={setMenuState}
      />
      <div>
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
