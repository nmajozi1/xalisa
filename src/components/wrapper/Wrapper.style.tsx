import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
	wrapper: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		width: '100%'
	},
	body: {
		display: 'flex',
		flexDirection: 'column',
		width: '80%',
	}
}));