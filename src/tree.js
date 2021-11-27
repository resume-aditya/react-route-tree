import React from "react";
import Node from "./Node";
import "./tree.css";
class Tree extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className = "route-tree">
        {!this.props.data || !Array.isArray(this.props.data) ? (
          <div>No tree to display. Check data prop</div>
        ) : (
          this.props.data.map((node) => (
            <Node node={node} parentRoute={this.props.parentRoute || ""} />
          ))
        )}
      </div>
    );
  }
}

export default Tree;
