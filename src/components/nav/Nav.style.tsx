import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  container: {
    top: 0,
    display: 'flex',
    justifyContent: 'space-between',
    position: 'sticky',
    // backgroundColor: '#f8f9fa',
    '& img': {
      height: 100,
      width: 100
    }
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    '& ul': {
      display: 'flex',
      gap: 32,
      marginTop: 1,
    },
    '& li': {
      fontSize: 20,
      fontWeight: 700,
      cursor: 'pointer',
      listStyleType: 'none',
      color: '#1b242f',
    },
    '& li:hover': {
      color: '#04c2c9'
    }
  },
}))