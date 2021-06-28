
import {
    AppBar, Toolbar, List, Typography
} from '@material-ui/core';
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Auth from '../../utils/auth';

// Icons
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CreateIcon from '@material-ui/icons/Create';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import ChatIcon from '@material-ui/icons/Chat';

const useStyles = makeStyles((theme) => ({
    appbar: {
        flexGrow: 1,
        margin: 0,
        width: '100%',
        height: "8vh",
        background: '#003262',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '1rem',
        paddingTop: '1.5rem',
    },
    listItem: {
        marginRight: theme.spacing(2),
        color: "whitesmoke",
        "&:hover": {
            color: "orange",
        },
        "& .MuiTypography-body1": {
            '@media (max-width:1200px)': {
                fontSize: '0.9rem',
            },
            '@media (min-width:1200px)': {
                fontSize: '1.1rem',
            },
        },
    },
    title: {
        color: "whitesmoke",
        '@media (max-width:1200px)': {
            fontSize: '1.2rem',
        },
        '@media (min-width:1200px)': {
            fontSize: '1.5rem',
        },
    },
}));

const Header = () => {

    const classes = useStyles();

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <Box component="nav">
            <AppBar position="static" className={classes.appbar}>
                <Toolbar className={classes.toolbar}>
                    <Typography
                        component={Button}
                        href="/">
                        <span className={classes.title}>App Name/Logo</span>
                    </Typography>
                    <List>
                        {Auth.loggedIn() ? (
                            <>
                                <Button className={classes.listItem} href="/chat"><ChatIcon /> Features</Button>
                                <Button className={classes.listItem} href="/" onClick={logout}><ExitToAppIcon /> Logout</Button>

                            </>
                        ) : (
                            <>
                                <Button className={classes.listItem} href="/login"><DoubleArrowIcon /> Login</Button>
                                <Button className={classes.listItem} href="/signup"><CreateIcon /> Signup</Button>
                            </>
                        )}
                    </List>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header