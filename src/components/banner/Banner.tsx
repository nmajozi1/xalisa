// import { Tooltip } from "@mui/material";
import { Tooltip } from "@material-ui/core";
import CardImage from "../cardImage/CardImage";
import { useStyles } from "./Banner.style"

const Banner = () => {
  const classes = useStyles();

  return (
    <>
    <div className={classes.container}>
      <div className={classes.header}>
        <img alt="cleaning" src="xalisa.svg" />
      </div>

      <span className={classes.title}>Cleaning</span>

      <div className={classes.cardBody}>
      <Tooltip title="House & Office Clean Up" placement="top">
        <CardImage image="houseAndOffice.jpeg" />
      </Tooltip>
      <Tooltip title="Office Clean Up" placement="top">
        <CardImage image="officeClean.jpeg" />
      </Tooltip>
      <Tooltip title="Window Clean Up" placement="top">
        <CardImage image="windowTwo.jpeg" />
      </Tooltip>
      <Tooltip title="Carpet Clean Up" placement="top">
        <CardImage image="carpet.jpeg" />
      </Tooltip>
      </div>

      <span className={classes.title}>Security</span>

      <div className={classes.cardBody}>
        <CardImage image="propertySecurity.jpeg" />
        <CardImage image="mallSecurity.jpeg" />
        <CardImage image="officeSecurity.jpeg" />
        <CardImage image="complexSecurity.jpeg" />
      </div>
      {/* <img style={{width: '100%'}} alt="cleaning" src="securityThree.jpeg" /> */}
    </div>
    {/* <img style={{width: '100%'}} alt="cleaning" src="securityFour.jpeg" /> */}
    </>
  )
}

export default Banner