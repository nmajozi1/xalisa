import { useStyles } from "./CardImage.style"

interface IProps {
  image: string;
};

const CardImage = (Props: IProps) => {
  const { image } = Props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img alt="images" src={image} />
    </div>
  )
}

export default CardImage