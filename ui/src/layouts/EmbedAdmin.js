import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ReactNotification from 'react-notifications-component';

// views
import Sidebar from "components/Sidebar/Sidebar.js";
import Settings from "views/admin/Settings.js";
import Notebooks from "views/admin/Notebooks.js";
import NotebookView from "views/admin/NotebookView.js";
import Connections from "views/admin/Connections.js";
import Files from "views/admin/Files.js";
import WorkflowsMain from "views/admin/WorkflowsMain.js";
import WorkflowRunLogs from "views/admin/WorkflowRunLogs.js";
import SchedulesView from "views/admin/Schedules.js";

export default function Admin() {
  return (
    <>
      <Sidebar isEmbedPage={true} />
      <ReactNotification />
      <div className="relative md:ml-48 bg-gray-200" >
        <div className="px-0 md:px-0 py-2 mx-auto w-full" style={{height: "calc(100vh - 0px)", padding: "2rem 3rem 0 3rem"}}>
          <Switch>
            <Route path="/api/redirect/cuelake/notebooks"  exact component={Notebooks} />
            <Route path="/api/redirect/cuelake/notebook/:notebookId" exact component={NotebookView} />
            <Route path="/api/redirect/cuelake/settings" exact component={Settings} />
            <Route path="/api/redirect/cuelake/connections" exact component={Connections} />
            <Route path="/api/redirect/cuelake/schedules" exact component={SchedulesView} />
            <Route path="/api/redirect/cuelake/workflows" exact component={WorkflowsMain} />
            <Route path="/api/redirect/cuelake/workflows/workflowRun/:id" exact component={WorkflowRunLogs} />
            <Route path="/api/redirect/cuelake/files" exact component={Files} />
            <Redirect from="/" to="/api/redirect/cuelake/notebooks" />
          </Switch>
        </div>
      </div>
    </>
  );
}
