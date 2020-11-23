import  React , {Component} from 'react';

import { Icon } from 'semantic-ui-react';

import './counter.css'





class Counter extends Component {
   

    render(){

        console.log(this.props);


        return(

            <div className="counter-app">
                        {this.props.children}
                       
                      
                        
                        <div className="main">




                            <div className="counter">
                                
                                <label className="counter-label"> {this.formatCount()}</label>
                                
                                <button
                                    onClick= {() => this.props.onIncrement(this.props.counter) } 
                                    className="add">+
                                    
                                </button>
                                <button 
                                    onClick= {() => this.props.onDecrement(this.props.counter) } 
                                    className="sub">-
                                </button>
                            </div>

                        </div>
            </div>


        );
    };

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ?  "Zero" : value;
   }
    
}

export default Counter;