import { createMuiTheme } from 'material-ui/styles';
import orange from 'material-ui/colors/orange';
import deepPurple from 'material-ui/colors/deepPurple';
import red from 'material-ui/colors/red';

export default createMuiTheme({
    palette: {
        primary: orange,
        secondary: deepPurple,
        error: red
    },
});
