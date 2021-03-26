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
import Survey from './webapp/svy/pages/Survey'
import Course from './webapp/crs/pages/Course'
import Manage from './webapp/cmm/pages/Manage'
import { Header, Sidebar, Footer } from "./components/layouts";
import { ModalForm, ModalVideo, RequestForm } from "./components/ui";
import { Spinner } from "./components/elements";
import { useCustomState } from "./state/state";
import PlacePage from "webapp/pce/pages/PlacePage";


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
            <Route path="/survey" exact component={Survey} />
            <Route path="/course" exact component={Course} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/place"  component={PlacePage}/>
            <Route path="/manage" exact component={Manage} />
            
            
            
            
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
