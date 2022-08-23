import React from 'react';

class HelloWorld extends React.Component {
  // Initialization set default probs and state
  // I will set default state of HelloWorld component is 
  // name: anonymous
  // university: Unknow
  // major: Unknow
  constructor(props) 
  { 
    console.log("INIT HelloWorld component");
    super(props); 
    this.state = { 
      name : "anonymous",
      university: "Unknow",
      major: "Unknow" 
    }; 
  } 
  
  componentWillMount() 
  { 
      console.log("After init component HelloWorld we can prepare some thing before rendering by running")
      console.log("componentWillMount()");
      console.log("THE IMPORTANT THING IS componentWillMount run only one time when create HelloWorld component") 
  } 

  componentDidMount() 
  { 
    console.log("AFTER rendering the component DID mount (rendered on the screen)")
    console.log("componentDidMount()");
    console.log("ALSO THE IMPORTANT THING IS componentDidMount run only one time when create HelloWorld component") 
  } 

  changeState() 
  { 
      this.setState({ 
        name : "Hoang Viet Hung",
        university: "Bach Khoa University",
        major: "Software engineering"
      }); 
  } 

  render() 
  { 
    console.log("RENDERING")
    return ( 
        <div> 
          <h1>ReactJs Learning, Hello { this.state.name } </h1>
          <h1>Where do you learning now?,  { this.state.university } </h1> 
          <h1>What are your major?, { this.state.major } </h1> 
          <h2> 
            <a onClick={this.changeState.bind(this)}>Press Here!</a> 
          </h2> 
        </div>); 
  } 

  shouldComponentUpdate(nextProps, nextState) 
  { 
      console.log("current state of name is "+ this.state.name)
      console.log("current state of university is "+ this.state.university)
      console.log("current state of major is "+ this.state.major)

      console.log("next state of name is "+ nextState.name)
      console.log("next state of university is "+ nextState.name)
      console.log("next state of major is "+ nextState.name)

      console.log("shouldComponentUpdate()"); 
      return true; 
  } 

  componentWillUpdate() 
  { 
    console.log("Updating now");
    console.log("componentWillUpdate()"); 
  } 

  componentDidUpdate() 
  {   
    console.log("DONE update");
    console.log("componentDidUpdate()"); 
  } 
}

export default HelloWorld;
