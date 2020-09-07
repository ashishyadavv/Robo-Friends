import React from 'react';
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox'
// import { robots } from './robots'
import './App.css'
import ErrorBoundary from '../Components/ErrorBoundary'
import Scroll from '../Components/Scroll'

class App extends React.Component{
    constructor(){
        super()
        this.state={

            robots: [],
            searchfield: ''

        }
    }
    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(response=> {
            return response.json();
        })
        .then(users => {
            this.setState ({ robots: users})
        })
       
        
    }
    onSearchChange= (event) => {
       this.setState({ searchfield: event.target.value })
        
       
       //  console.log(filteredRobots)


    }

    render(){
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.includes(this.state.searchfield)
        })
        if(this.state.robots.length === 0){
            return <h1>Loading....</h1>
        }
        else{
        return(
            <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
    
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
                <ErrorBoundary>
            <CardList robots={filteredRobots} />
            </ErrorBoundary>
            </Scroll>
            </div>
    );
        }

    }

}


export default App;