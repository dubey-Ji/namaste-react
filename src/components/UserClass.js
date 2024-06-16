import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };
  }

  render() {
    return (
      <div className="class-component">
        <h1>Count : {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment Count
        </button>
        <h1>Count2 : {this.state.count2}</h1>
        <button
          onClick={() => {
            this.setState({
              count2: this.state.count2 + 2,
            });
          }}
        >
          Increment Count2
        </button>
        <h1>Class Component</h1>
        <h4>Name - {this.props.name}</h4>
        <h4>Designation - {this.props.designation}</h4>
        <h4>Location - {this.props.location}</h4>
        <h4>Rating - {this.props.rating}</h4>
      </div>
    );
  }
}

export default UserClass;
