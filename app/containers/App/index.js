/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useCallback } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route, useLocation, useParams } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Login from 'containers/Login/Loadable';
import UserRegister from '../UserRegister';
import Dashboard from '../../containers/Dashboard';
import DashboardStore from '../../containers/DashboardStore';
import DetailStore from '../../containers/DetailStore';
import SellerRegister from '../../containers/SellerRegister';
import DashboardRegister from '../../containers/DashboardRegister';
import DashboardCustomer from '../../containers/DashboardCustomer';
import DetailRegister from '../../containers/DetailRegister';
import SellerHomePage from '../../containers/SellerHomePage';
import SellerManagerProduct from '../../containers/SellerManagerProduct';
import SellerAddProduct from '../../containers/SellerAddProduct';
import SellerActionProduct from '../../containers/SellerActionProduct';
import UserHomePage from '../../containers/UserHomePage';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import SideBar from '../../components/SideBar';
import SellerSideBar from '../../components/SellerSideBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core';
import { StylesProvider } from "@material-ui/core/styles";
import { getUser } from '../../utils/common';

const useStyles = makeStyles((theme) => ({

  down: {
    [theme.breakpoints.up("xs")]: {
      width: "100%",
      marginTop: "100px",
      marginLeft: "30px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "100%",
      marginTop: "100px",
      marginLeft: "250px",
    },
    [theme.breakpoints.between("lg", "xl")]: {
      marginTop: "100px",
      width: "100%",
      marginLeft: "250px",
    },
  },
  down1: {
    [theme.breakpoints.up("xs")]: {
      width: "100%",
      marginTop: "100px",
      marginLeft: "30px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "100%",
      marginTop: "100px",
      marginLeft: "270px",
    },
    [theme.breakpoints.between("lg", "xl")]: {
      marginTop: "100px",
      width: "100%",
      marginLeft: "270px",
    },
  },
  down2: {
    width: "100%"
  }

}));

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  font-family: sans-serif;
`;

export default function App() {
  const location = useLocation();
  console.log(location.pathname)

  // let { storeId } = useParams();
  const classes = useStyles();

  const user = getUser();
  //console.log(user.authorities[0].authority)
  return (
    <StylesProvider injectFirst>
      <AppWrapper>
        <Helmet
          titleTemplate="%s - No Ne"
          defaultTitle="No Ne"
        >
          <meta name="description" content="A React.js Boilerplate application" />
        </Helmet>
        {/* <Header /> */}

        {/* {location.pathname != "/login" && location.pathname != "/userRegister" && location.pathname != "/sellerRegister" && location.pathname != "/" && location.pathname != "/myStore"
          && location.pathname != "/managerProduct" && location.pathname != "/managerProduct/addProduct" && user.authorities[0].authority == 'ADMIN' ? */}
        {user != null && user.authorities[0].authority == 'ADMIN' ?
          <Grid container spacing={2}>
            <Grid item sm={12} xs={12} md={2}>
              <SideBar />
            </Grid>
            <div className={classes.down}>
              <Grid item sm={12} xs={12} md={12} >
                {/* <DashboardHeader /> */}
                <Switch>
                  {/* <Route exact path="/" component={HomePage} /> */}
                  {/* <Route path="/features" component={FeaturePage} />
                  <Route path="/login" component={Login} /> */}
                  <Route path="/userRegister" component={UserRegister} />
                  <Route path="/sellerRegister" component={SellerRegister} />
                  <Route path="/dashboard" component={Dashboard} />
                  <Route exact path="/register" component={DashboardRegister} />
                  <Route path="/register/:id" component={DetailRegister} />
                  <Route path="/customer" component={DashboardCustomer} />
                  <Route exact path="/store" component={DashboardStore} />
                  <Route path="/store/:id" component={DetailStore} />
                  <Route path="" component={NotFoundPage} />

                </Switch>
              </Grid>
            </div>
          </Grid>
          // : location.pathname == "/myStore" || location.pathname == "/managerProduct" || location.pathname == "/managerProduct/addProduct" && user.authorities[0].authority == 'USER' ?
          :
          user != null && user.authorities[0].authority == 'USER' && location.pathname == "/" ?
            <Grid container spacing={1}>
              <Grid item sm={12} xs={12} md={12}>
                <Switch>
                  <Route exact path="/" component={UserHomePage} />
                  <Route path="" component={NotFoundPage} />
                </Switch>
              </Grid>
            </Grid>
            //

            : user != null && user.authorities[0].authority == 'USER' && location.pathname != "/sellerRegister" ?
              <Grid container spacing={1}>
                <Grid item sm={12} xs={12} md={2}>
                  <SellerSideBar />
                </Grid>
                <div className={classes.down1}>
                  <Grid item sm={12} xs={12} md={12}>
                    <Switch>
                      {/* <Route exact path="/" component={HomePage} /> */}
                      <Route path="/myStore" component={SellerHomePage} />
                      <Route exact path="/managerProduct" component={SellerManagerProduct} />
                      <Route path="/managerProduct/addProduct" component={SellerAddProduct} />
                      <Route path="/managerProduct/:id" component={SellerActionProduct} />
                      {/* <Route path="/sellerRegister" component={SellerRegister} /> */}
                      <Route path="" component={NotFoundPage} />
                    </Switch>
                  </Grid>
                </div>
              </Grid>
              :
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Switch>
                    <Route exact path="/" component={UserHomePage} />
                    {/* <Route path="/features" component={FeaturePage} /> */}
                    <Route path="/login" component={Login} />
                    <Route path="/userRegister" component={UserRegister} />
                    <Route path="/sellerRegister" component={SellerRegister} />
                    {/* <Route path="/managerProduct/:id" component={SellerActionProduct} /> */}
                    {/* <Route path="/dashboard" component={Dashboard} />
                  <Route path="/register" component={DashboardRegister} />
                  <Route path="/register/:id" component={DetailRegister} />
                  <Route path="/customer" component={DashboardCustomer} />
                  <Route exact path="/store" component={DashboardStore} />
                  <Route path="/store/:id" component={DetailStore} /> */}
                    <Route path="" component={NotFoundPage} />
                  </Switch>
                </Grid>
              </Grid>
        }


        {/* <Footer /> */}
        <GlobalStyle />
      </AppWrapper >
    </StylesProvider>
  );
}
