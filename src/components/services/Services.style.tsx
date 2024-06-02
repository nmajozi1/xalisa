import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    marginTop: 24,
    marginBottom: 24,
    gap: 32,
    '& img': {
      maxHeight: 500,
      maxWidth: 400,
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'center'
  },
  cardBody: {
    display: 'flex',
    justifyContent: 'center',
    gap: 48,
  }
}));