import React, { Component } from "react";

const asyncCmp = importCmp => {
  return class extends Component {
    state = {
      cmp: null
    };

    componentDidMount() {
      importCmp()
        .then(cmp => {
          this.setState({ cmp: cmp.default });
        })
        .catch(e => {
          console.log("err importing new cmp: " + e.toString());
        });
    }

    render() {
      const C = this.state.cmp;
      return C ? <C {...this.props} /> : null;
    }
  };
};

export default asyncCmp;
