import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./layout";
import Dashboard from "./pages/dashboard";
import Inbox from "./pages/inbox";
import ManageUsecases from "./pages/manage/use-cases/use-cases";
import ManageUseCase from "./pages/manage/use-cases/use.case";
import Onboarding from "./pages/onboarding";
import Overview from "./pages/overview";
import Tasks from "./pages/tasks/tasks";

export default function App(props) {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Onboarding} />
          <Route exact path="/home" component={Overview} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route
            path="/inbox"
            render={({ match: { url } }) => (
              <>
                <Route path={`${url}/`} component={Tasks} exact />
                <Route path={`${url}/:taskId`} component={Inbox} exact />
              </>
            )}
          />
          <Route
            path="/use-cases"
            render={({ match: { url } }) => (
              <>
                <Route path={`${url}/`} component={ManageUsecases} exact />
                <Route
                  path={`${url}/:taskId`}
                  component={ManageUseCase}
                  exact
                />
              </>
            )}
          />
        </Switch>
      </Layout>
    </Router>
  );
}
