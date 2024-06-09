import { useStyles } from "./Contact.style"

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <span>Malcolm Xalisa (Director)</span>
        <img alt="malcom" src="malcomProfile.jpeg" />
        <span>079 081 3372 / 077 364 5345</span>
        <span>andilemalcomxalisa@gmail.com</span>
      </div>
    </div>
  )
}

export default Contact