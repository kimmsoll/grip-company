import cx from 'classnames'
import { NavLink } from "react-router-dom"
import styles from './NavBar.module.scss'
import { SearchIcon, StarIcon } from 'assets/svgs'

const NavBar = () => {
  return (
    <ul className={styles.navBar}>
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
  )
}

export default NavBar