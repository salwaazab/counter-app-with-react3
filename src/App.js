import React, { Component } from "react";
import Counter from './components/Counter';
import Counters from './components/Counters';
import { Icon } from 'semantic-ui-react';




class App extends Component{

    state={
        counters:[
            { id : 1 , value : 0},
            { id : 2 , value : 0},
            { id : 3 , value : 0},
            { id : 4 , value : 0}
        ]
    };

    handleIncrement = counter =>
    {
        const counters =[...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index]={...counter};
        counters[index].value++;
        this.setState({counters});
        return {counters}

    };

    handleDecrement = counter =>
    {
        const counters =[...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index]={...counter};
        counters[index].value--;
        this.setState({counters});

    };

    handleReset= () =>{

        const counters = this.state.counters.map(c =>{
            c.value=0;
            return c
        })
    }

    render(){
        return(

            <React.Fragment>
                <div className="header">
                                        <Icon size={100} name='shopping cart' />
                                        <label className="items-label">{this.state.counters.filter(c => c.value >0).lenght} </label>
                                        <div><h1 > items </h1></div>

                </div>
                <div className="App">

                    <Counters
                    counters={this.state.counters}
                    onReset={this.handleReset}
                    onIncrement={this.handleIncrement}
                    onDecrement = {this.handleDecrement}
                    
                    />

                </div>

                </React.Fragment>
        )
    }
}


export default App;