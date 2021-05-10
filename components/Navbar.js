import Link from "next/link"
import styles from "../styles/Navbar.module.scss"
import MenuItem from "./MenuItem"

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.menu}>
        <MenuItem to="/introduction">Introduction</MenuItem>
        <MenuItem to="/working">Working Experience</MenuItem>
        <MenuItem to="/project">Project</MenuItem>
        <MenuItem to="/education">Education</MenuItem>
        <MenuItem to="/expertise">Expertises</MenuItem>
        <MenuItem to="/contact">Contact Me!</MenuItem>
      </div>
    </div>
  )
}