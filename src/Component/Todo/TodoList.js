import React, {Component} from 'react';

class Input extends Component {


    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.todos.map((item, index) => (
                            <li key={item + index}>{item} <button onClick={this.props.sendDel.bind(this,index) } >X</button></li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default Input;
