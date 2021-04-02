import React, { useEffect, Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import {
  Portfolio,
  Blog,
  PostSingle,
  ServiceSingle,
  MemberCard,
  PortfolioSingle
} from "./components/pages";
import Home from './webapp/cmm/pages/Home'
import SurveyPage from './webapp/svy/pages/SurveyPage'
import Course from './webapp/crs/pages/Course'
import ManagePage from 'webapp/mng/pages/ManagePage'
import { Header, Sidebar, Footer } from "./components/layouts";
import { ModalForm, ModalVideo, RequestForm } from "./components/ui";
import { Spinner } from "./components/elements";
import { useCustomState } from "./state/state";
import PlacePage from "webapp/pce/pages/PlacePage";
import AuthRoute from "webapp/cli/components/AuthRoute";

export default () => {
  const [state, actions] = useCustomState();

  useEffect(() => {
    actions.fetch();
  }, [actions]);

  let app = state.error ? <p>Can't load page</p> : <Spinner fluid />;

  if (state.data) {
    app = (
        <Fragment>
          <Sidebar data={state.data.menu} />
          <ModalForm />
          <ModalVideo />
          <RequestForm />
          <Header data={state.data.menu} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/survey" exact component={SurveyPage} />
            <AuthRoute authenticated={null} path="/course" componet={Course}/>
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/place"  component={PlacePage}/>
            <Route path="/manage" component={ManagePage} />
            
            
            
            
            <Route path="/blog/cats/:category" exact>
              <Blog sidebar="left" layout="grid" />
            </Route>

            <Route path="/blog/user/:author" exact>
              <Blog sidebar="left" layout="grid" />
            </Route>

            <Route path="/blog/date/:posting_date" exact>
              <Blog sidebar="left" layout="grid" />
            </Route>

            <Route path="/blog/search/:query" exact>
              <Blog sidebar="left" layout="grid" />
            </Route>
          </Switch>
          <Footer />
        </Fragment>
    );
  }

  return <Fragment>{app}</Fragment>;
};