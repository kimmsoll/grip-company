import cx from 'classnames'
import { NavLink } from "react-router-dom"
import styles from './NavBar.module.scss'
import { SearchIcon, StarIcon } from 'assets/svgs'

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <NavLink to='/' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            <SearchIcon />
            <p className={styles.title}>Search</p>
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to='/favorite' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            <StarIcon />
            <p className={styles.title}>Favorites</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar