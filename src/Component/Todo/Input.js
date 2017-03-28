import React, {Component} from 'react';

class Input extends Component {


    render() {
        return (
            <div>
                <p>{this.props.text}</p>
                <input type="text" value={this.props.text} onChange={this.props.onTextChange} onKeyPress={this.props.sendAddEnter}/>

                <button onClick={this.props.onInputSubmit}>insert</button>
            </div>
        );
    }
}

export default Input;
