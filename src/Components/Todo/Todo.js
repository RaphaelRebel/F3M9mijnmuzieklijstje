import React from "react"
import "./Todo.css"
import Item from "../Item/Item"
import Artist from "../Artist/Artist"
import Input from "../Input/Input"
import songsObject from "../../data/songs"


class Todo extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            songs: [],
            // artists: [],
        }

        
    }

    //componentDidMount runt na het aanmaken en tekenen van een component
    componentDidMount(){
    
    }
    
    //componentDidUpdate runt na het updaten van de state
    componentDidUpdate(){
        
        
    }

    update = () => {
    
    }

    inputPressedEnter = (inputFromInputComponent) => {
        
        let toBeAdded = [{
            name: inputFromInputComponent,
            done: false,
            id: 100,
        }]

       let mergedSongArray = this.state.songs.concat(toBeAdded);
        this.setState({
            songs: mergedSongArray,
        })
    }

    // inputPressedEnterArtist = (inputFromInputComponentArtist) => {
    //     console.log('hier')
    //     console.log(inputFromInputComponentArtist)
    //     let toBeAdded = [{
    //         name: inputFromInputComponentArtist,
    //     }]

    //    let mergedArtistArray = this.state.artists.concat(toBeAdded);
    //     this.setState({
    //         songs: mergedArtistArray,    
    //     })
    // }



// listItems = this.state.tasks.map(task =>{
//     return <Item key={task.id} name={task.name} done={task.done}/>
    
//    });


render(){
    let items = this.state.songs.map(task => {
        return <Item done={task.done} name={task.name} key={task.id}></Item>
    });

    // let artists = this.state.songs.map(artist => {
    //     return <Artist  name={artist.name}></Artist>
    // })

    

    return(

        <>
        <article  className="todo">
            <header className="todo__header">
                <h1 className="todo__heading">{this.props.title}</h1>
            </header>
            <ul className="todo__list">
               
                {items}
                {/* {artists} */}
            </ul>
            <Input inputPressedEnter={this.inputPressedEnter} title="Nummer" inputValue={this.state.inputValue} />
            {/* <Input inputPressedEnterArtist={this.inputPressedEnterArtist} title="Artiest" inputValue={this.state.inputValue}/> */}
        </article>
        </>
    )}
}

export default Todo