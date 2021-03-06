import React from 'react';
import SearchAppBar from '../components/SearchAppBar';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import RandomShow from '../components/RandomShow';

const Layout = ({ children ,loading}) => {
    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
          '& > * + *': {
            marginTop: theme.spacing(2),
          },
        },
      }));

    return (
        <>
            <RandomShow/>
            <SearchAppBar />
            {loading && <LinearProgress color="secondary" />}
            <div className="inner">
                {children}
            </div>
        </>
    )
}

export default Layout;