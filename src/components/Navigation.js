import React from 'react'
import { Link } from 'gatsby'

const Navigation = class extends React.Component {

  state = { showMenu : false }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
 
  render() {
    const menuActive = this.state.showMenu ? 'is-active' : '';
    const burgerActive = this.state.showMenu ? 'is-active' : '';
    return (     
    <nav className="navigation">
      <div className={`navigation__menu ${menuActive}`} >
        <div className="navigation__inside">
        <ul className="navigation__list">
          <li className="navigation__list-item"><Link className="navigation__item" activeClassName="active" to="/">
            Home
          </Link></li>
          <li className="navigation__list-item"><Link className="navigation__item" activeClassName="active" to="/about">
            About
          </Link></li>
          <li className="navigation__list-item"><Link className="navigation__item" activeClassName="active" to="/oddfellows-hall">
            Oddfellows Hall
          </Link></li>
          <li className="navigation__list-item"><Link className="navigation__item" activeClassName="active" to="/discography">
            Discography
          </Link></li>
          <li className="navigation__list-item"><Link className="navigation__item" activeClassName="active" to="/gigs">
            Gigs
          </Link></li>
          <li className="navigation__list-item"><Link className="navigation__item" activeClassName="active" to="/guestbook">
            Guestbook
          </Link></li>
          <li className="navigation__list-item"><Link className="navigation__item" activeClassName="active" to="/book-us">
            Book Us
          </Link></li>
          </ul>
        </div>
      </div>
      <div className={`navigation__burger burger ${burgerActive}`} onClick={this.toggleMenu}>
        <div className={`navigation__burger-inside ${burgerActive}`}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )}
}

export default Navigation
