import { createTheme } from '@mui/material/styles';
import { fontFamily, colors } from './Css';

const theme = createTheme({
    typography: {
      button: {
        fontSize: '1rem',
        textTransform: 'none',
      },
      fontFamily: Object.values(fontFamily).join(','),
    },
    spacing: 2,
    palette: {
      primary: {
        main: colors.primary,
      },
      secondary: {
        main: colors.secondary,
      },
    }
});


export default theme