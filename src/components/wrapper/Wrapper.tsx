import Banner from "../banner/Banner";
import Contact from "../contact/Contact";
import { useStyles } from "./Wrapper.style"

const Wrapper = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
			<div className={classes.body}>
        <Banner />
        <Contact />
			</div>
    </div>
  )
}

export default Wrapper