import React, { Component } from 'react';


class Button extends Component{

    render(){
       return(
           <div>
               <button onClick={this.props.action}>Open Coockie</button>
           </div>
       )
    }
}
export default Button;