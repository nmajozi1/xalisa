import { useStyles } from "./Nav.style"

const Nav = () => {
  const classes = useStyles()

  return (
    <div className={classes.container} >
      <img alt="logo512.png" src="xalisa.svg" />
      <div className={classes.listContainer}>
        <ul>
          <li>Cleaning</li>
          <li>Security</li>
        </ul>
      </div>
    </div>
  )
}

export default Nav