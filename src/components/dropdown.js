import React, { Component } from "react";

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: ""
    };

    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }

  handleDropdownChange(e) {
    this.setState({ selectValue: e.target.value });
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <select id="dropdown" onChange={this.handleDropdownChange}>
              <option value="single">single</option>
              <option value="complicated">complicated</option>
              <option value="relationship">relationship</option>
            </select>
          </div>

          <div>Selected value is : {this.state.selectValue}</div>
        </div>
      </div>
    );
  }
}
export default DropDown;