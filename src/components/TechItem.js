import React from "react"
import PropTypes from "prop-types"

const TechItem = ({ tech, deleteItem }) => (
  <li>
    {tech}
    <button type="button" onClick={deleteItem}>
      delete
    </button>
  </li>
)

TechItem.defaultProps = {
  tech: "Oculto"
}

TechItem.propTypes = {
  tech: PropTypes.string,
  deleteItem: PropTypes.func.isRequired
}

export default TechItem
