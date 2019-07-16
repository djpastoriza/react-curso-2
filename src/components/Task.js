import React, {Component} from 'react';

class Task extends Component{

    render(){
        const {details} = this.props;
        return(
            <div>
                 <p>
                    {details.title} - {details.description} - {details.id}
                    <input type="checkbox" />
                    <button>x</button>
                </p>
            </div>
        )
    }
}

export default Task;