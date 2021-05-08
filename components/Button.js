import styles from '../styles/Button.module.scss'
import PropTypes from 'prop-types'

export default function Button({ children, style }) {

  return (
    <div className={styles.button} style={style}>
      {children}
    </div>
  )
}

Button.propTypes = {
  style: PropTypes.object,
}