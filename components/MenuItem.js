import Link from "next/link";
import PropTypes from 'prop-types'
import styles from '../styles/MenuItem.module.scss'
import { useRouter } from 'next/router'

export default function MenuItem({ children, to }) {
  const path = useRouter().pathname
  return (
    <div>
      <Link href={to}>
        <a className={path === to ? `${styles.menuItem} ${styles.active}` : styles.menuItem}>{children}</a>
      </Link>
    </div>
  )
}

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
}