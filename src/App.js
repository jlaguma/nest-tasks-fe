import React, { Component, Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import SignInPage from './pages/signin/SignInPage';
import SignUpPage from './pages/signup/SignUpPage';
import TasksPage from './pages/tasks/TasksPage';
import CreateTaskPage from './pages/create-task/CreateTaskPage';

@inject('routerStore')
@observer
class App extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route exact path="/" element={<SignInPage />} />
          <Route path="/signin/" element={<SignInPage />} />
          <Route path="/signup/" element={<SignUpPage />} />
          <Route exact path="/tasks" element={<TasksPage />} />
          <Route exact path="/tasks/create" element={<CreateTaskPage />} />
        </Routes>
      </Fragment>
    );
  }
}

export default App;
