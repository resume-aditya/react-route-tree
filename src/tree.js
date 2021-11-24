import React from "react";
import Node from "./node";
import "./tree.css";
class Tree extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.data.map((node) => (
          <Node node={node} parentRoute={this.props.parentRoute || ''}/>
        ))}
      </div>
    );
  }
}

export default Tree;
