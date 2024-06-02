import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    maxHeight: 250,
    maxWidth: 250,
    minWidth: 200,
    borderRadius: 16,
    boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.1)',
    background: '#fff',
    overflow: 'hidden',
    flexWrap: 'wrap',
    '& img': {
      borderRadius: 16,
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    },
  }
}));