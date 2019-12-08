import React, { Component } from "react"
import TechItem from "./TechItem"

class TechList extends Component {
  state = {
    newTech: "",
    techs: []
  }

  handleInputChange = e => {
    this.setState({ newTech: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ techs: [...this.state.techs, this.state.newTech] })
    this.setState({ newTech: "" })
  }

  handleDelete = key => {
    const newTechs = this.state.techs.filter((tech, techkey) => techkey !== key)
    this.setState({ techs: newTechs })
  }

  componentDidMount() {
    const techs = localStorage.getItem("techs")
    techs && this.setState({ techs: JSON.parse(techs) })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem("techs", JSON.stringify(this.state.techs))
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map((tech, key) => (
            <TechItem
              key={key}
              tech={tech}
              deleteItem={() => this.handleDelete(key)}
            />
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
          placeholder="New item..."
        />
        <button type="submit">Send</button>
      </form>
    )
  }
}

export default TechList
