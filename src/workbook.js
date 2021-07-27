/*class App extends Component {
  state = {
    users: [
      { name: "anusha", age: "30", description: "softwaredeveloper" },
      { name: "pradeep", age: "31", description: "senior softwaredeveloper" },
    ],
    otherState: " some other value",
  };

  updateStateHandler = () => {
    //console.log("clicked");
    this.setState({
      users: [
        { name: "ananya", age: "30", description: "softwaredeveloper" },
        { name: "brundhavan", age: "30", description: "softwaredeveloper" },
      ],
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <h1> List of Users </h1>
        <button onClick={this.updateStateHandler}>Update user</button>
        <User name={this.state.users[0].name} age={this.state.users[0].age}>
          {this.state.users[0].description}
        </User>
        <User name={this.state.users[1].name} age={this.state.users[1].age}>
          {" "}
          {this.state.users[1].description}
        </User>
      </div>
    );
  }
}

/*
  
  function App() {
    return (
      <div className="App">
        <h1> List of Users </h1>
        <User name="anusha" age="30">
          software developer
        </User>
        <User name="Pradeep" age="31">
          Senior software developer
        </User>
      </div>
    );
  }



 ********************************************** Function component
  const App = (props) => {
  const [usersState, setUsersState] = useState({
    users: [
      { name: "anusha", age: "30", description: "softwaredeveloper" },
      { name: "pradeep", age: "31", description: "senior softwaredeveloper" },
    ],
    //otherState: " some other value",
  });

  console.log(usersState, otherState);
  const updateStateHandler = () => {
    //console.log("clicked");
    setUsersState({
      users: [
        { name: "ananya", age: "30", description: "softwaredeveloper" },
        { name: "brundhavan", age: "30", description: "softwaredeveloper" },
      ],
    });
  };
  return (
    <div className="App">
      <h1> List of Users </h1>
      <button onClick={updateStateHandler}>Update user</button>
      <User name={usersState.users[0].name} age={usersState.users[0].age}>
        {usersState.users[0].description}
      </User>
      <User name={usersState.users[1].name} age={usersState.users[1].age}>
        {" "}
        {usersState.users[1].description}
      </User>
    </div>
  );
};

/*

function App() {
  return (
    <div className="App">
      <h1> List of Users </h1>
      <User name="anusha" age="30">
        software developer
      </User>
      <User name="Pradeep" age="31">
        Senior software developer
      </User>
    </div>
  );
}
*/
