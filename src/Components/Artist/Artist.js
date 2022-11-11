import React from "react"
import "./Artist.css";


class Artist extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
    return(
        <>
        <section className="Artist">
            <p >Artiest</p>
            <li>{this.props.name}</li>
            </section>
        </>
        )
    }

}

export default Artist