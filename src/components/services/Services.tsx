import CardImage from "../cardImage/CardImage";
import { useStyles } from "./Services.style"

const Services = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <img alt="cleaning" src="security.jpeg" />
      </div>
      <div className={classes.cardBody}>
        <CardImage image="houseAndOffice.jpeg" />
        <CardImage image="officeClean.jpeg" />
        <CardImage image="windowTwo.jpeg" />
        <CardImage image="carpet.jpeg" />
      </div>
    </div>
  )
}

export default Services