import React, {Component} from 'react';
import './Task.css';

class Task extends Component{

    StyleCompleted(){
        return{
            fontSize: '20px',
            color:this.props.details.done ? 'gray' : 'black',
            textDecoration:'none'
        }
    }

    render(){
        const {details} = this.props;

        return(
            <div>
                 <p style={this.StyleCompleted()}>
                    {details.title} - {details.description} - {details.id}
                    <input type="checkbox" />
                    <button style={btnDelete}>x</button>
                </p>
            </div>
        )
    }
}

const btnDelete = {
    fontSize:'18px',
    background:'#ea2027',
    color:'#fff',
    border:'none',
    padding:'10px 15px',
    borderRadius:'50%',
    cursor:'pointer',
}

export default Task;