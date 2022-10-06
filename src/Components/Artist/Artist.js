import React from "react"
import "../Item/Item.css";

class Artist extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
    return(
        <>
            <li  >{this.props.name}</li>
        </>
        )
    }

}

export default Artist