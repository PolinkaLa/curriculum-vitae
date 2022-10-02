import * as React from "react"

const bracketStyles = {
    color: "#7de0df",
    fontSize: "40px",
    fontWeight: "bold"
}

const Bracket = (props: any) => {
    return (
        <span style={bracketStyles}>{props.bracket}</span>
    )
  }
  
  export default Bracket