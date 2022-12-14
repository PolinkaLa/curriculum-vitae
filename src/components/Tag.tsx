import * as React from "react"
import Bracket from "./Bracket"

const tagStyles = {
    color: "orange",
    fontSize: "50px",
    fontWeight: "bold",
    lineHeight: "150%"
}

const Tag = (props: any) => {
    let leftBracket = <Bracket bracket="&lt;/"/>
    if (props.open === "true") {
        leftBracket = <Bracket bracket="&lt;"/>
    }
    
    return (
        <React.Fragment>
            {leftBracket}
            <span style={tagStyles}>{props.tag}</span>
            <Bracket bracket="&gt;"/>
        </React.Fragment>
    )
  }
  
  export default Tag