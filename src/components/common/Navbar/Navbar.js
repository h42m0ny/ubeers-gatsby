import React, { Component } from "react"
import Scrollspy from "react-scrollspy"

import { Container } from "@components/global"
import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
} from "./style"

import { Link } from "gatsby"

import { ReactComponent as MenuIcon } from "@static/icons/menu.svg"

const NAV_ITEMS = [
  { name: "Accueil", link: "/", slug: "home" },
  { name: "Équipe", link: "/equipe", slug: "team" },
  { name: "Caves", link: "/caves", slug: "cellars" },
  { name: "Bieres", link: "/bieres", slug: "beers" },
  { name: "Brasseries", link: "/brasseries", slug: "breweries" },
  { name: "Articles", link: "/articles", slug: "articles" },
  { name: "FAQ", link: "/#" },
]

class Navbar extends Component {
  state = {
    mobileMenuOpen: false,
    selected: this.props.selected || null,
  }

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }))
  }

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false })
    }
  }

  getNavAnchorLink = item => {
    let classSelected = ""
    if (this.state.selected !== null && item.slug === this.state.selected) {
      classSelected = "selected"
    }

    return (
      <Link to={`${item.link}`} className={`${classSelected}`}>
        {item.name}
      </Link>
    )
  }

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map(item => item.name.toLowerCase())}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map(navItem => (
          <NavItem key={navItem.link}>{this.getNavAnchorLink(navItem)}</NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  )

  render() {
    const { mobileMenuOpen } = this.state

    return (
      <Nav {...this.props}>
        <StyledContainer>
          <Brand>UBeers</Brand>
          <Mobile>
            <button onClick={this.toggleMobileMenu} style={{ color: "black" }}>
              <MenuIcon />
            </button>
          </Mobile>

          <Mobile hide>{this.getNavList({})}</Mobile>
        </StyledContainer>
        <Mobile>
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList({ mobile: true })}</Container>
            </MobileMenu>
          )}
        </Mobile>
      </Nav>
    )
  }
}

export default Navbar
