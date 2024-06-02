import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  container: {
    marginBottom: 48,
    display: 'flex',
    justifyContent: 'center',
    gap: 16,
    '& img': {
      marginTop: 16,
      marginBottom: 16,
      borderRadius: 16,
      maxHeight: 600,
      maxWidth: 600,
      boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.1)',
    },
    '@media (max-width: 600px)': {
      '& img': {
        maxWidth: 250
      }
    }
  },
  body: {
    display: 'flex',
    fontSize: 20,
    color: '#1b242f',
    flexDirection: 'column',
    gap: 8,
    alignItems: 'center',
    fontWeight: 700,
    marginBottom: 48,
  }
}));