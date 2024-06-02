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
    marginBottom: 48,
    flexWrap: 'wrap',
    gap: 48,
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    fontSize: 20,
    fontWeight: 700,
    color: '#1b242f',
  }
}));