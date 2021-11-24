import React from "react";
import { Link } from "react-router-dom";
import Tree from "./tree";
class Node extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      node: props.node,
      show: false,
    };
    this.icon = require('./expand.png').default;
  }

  showChild() {
    this.setState({ show: !this.state.show });
  }

  render() {
    let nodeIconClass = this.state.show ? "nodeDown" : "";
    return (
      <div>
        {this.state.node.children ? (
          <span className={"img-wrapper"}>
            <img
              className={"node-img " + nodeIconClass}
              src={this.icon}
              onClick={this.showChild.bind(this)}
            />
          </span>
        ) : (
          <div className={"img-wrapper node-img empty-wrapper"}></div>
        )}
        <Link className={"links"} to={this.props.parentRoute + this.state.node.to}>
          <span key={this.state.node.name.length}>{this.state.node.name}</span>
        </Link>

        {this.state.node.children ? (
          <div className={"sub-tree " + (this.state.show ? "show" : "hide")}>
            <Tree data={this.state.node.children} parentRoute={this.props.parentRoute + this.state.node.to} />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Node;
