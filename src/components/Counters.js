import React, {Component} from 'react';
import Counter from './Counter';
import { Icon } from 'semantic-ui-react';
import './counter.css';



class Counters extends Component{

    render(){

        const {counters, onReset, onIncrement,onDecrement}= this.props;

        return(
        <div> 

                        <button 
                            onClick ={onReset}
                            className ="reset"> 
                            <Icon  name='recycle'/>
                        </button>

                        {counters.map(counter =>(
                            <Counter
                            key ={counter.id}
                            onIncrement={onIncrement}
                            onDecrement={onDecrement}
                            counter={counter}
                            />
                        ))}
         </div>
        );
    }
}

export default Counters;