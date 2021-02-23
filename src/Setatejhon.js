import React, { Component } from 'react'

export default class Setatejhon extends Component {
  state = {
    usamah: "disini",
    jogja: "cerita"
  }
  render() {
    return (
      <div>
        <p>iki state usamah: {this.state.usamah}</p>

        <Cago usamah={this.state.usamah} />
        <Kowe />
      </div>

    )
  }
}


class Cago extends Component {
  render() {
    return (
      <div>

        <p>sklfjsdklfjasdklfjdsfklsdjfsdklfjsfklsdjfksdfjksdfjsdkfjsdkfj</p>
        <p>iki propos e usamah :{this.props.usamah}</p>
      </div>
    )
  }
}


class Kowe extends Component {
  render() {
    return (
      <p>
        kowe luwe
      </p>
    )
  }
}
