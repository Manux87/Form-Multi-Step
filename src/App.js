import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import MainForm from './components/MainForm';
import { Container } from 'semantic-ui-react';

class App extends Component {

  render() {
    return(
      <Container textAlign='center'>
        <MainForm />
      </Container>     )
  }
}

const NavBar = () => (
  <div className="navbar">
    <h3>Task Manager</h3>
    <Link to="/">Current Tasks</Link>
    <Link to="/completed">Completed Tasks</Link>
  </div>
);

const Template = (props) => (
  <div>
    <NavBar />
    <p className="page-info">
      {props.title}:
    </p>
    <ul className={props.status}>
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
    </ul>
  </div>
);

const CurrentTasks = () => (
  <Template title="Current Tasks" status="Current"/>
);

const CompletedTasks = () => (
  <Template title="Completed Tasks" status="Completed"/>
);

export default App;
