import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/homeComponent';
import Trending from './components/trending';
import TopRate from './components/highRate';
import MoviePage from './components/moviePage';



class App extends Component {

  state={
    //to recive json file for trending , home and highrate components
    result:[{id:1111,title:"aaaaa",poster_path:``,vote_average:``,overview:``}]
   //to recive json file for movie page
    ,result2:{id:1111,title:"",poster_path:``,vote_average:``,overview:``}
  }
 //function to get json file for trending , home and highrate components
  moviesApi= async (e,a) =>{
   let  api = await fetch(`https://api.themoviedb.org/3${e}/movie/${a}?api_key=1563719526528e7e769176e1d5fc9790`);
    let data = await api.json();
   this.setState({
      result:data.results
  });
  }

  //function to get json file for movie page
  movieApi2= async (id) =>{
    let  api = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1563719526528e7e769176e1d5fc9790&language=en-US`);
    let data = await api.json();
       this.setState({
          result2:data
      });
      }


  render(){

    //we send the state and api functions in props 
     return (
      <BrowserRouter>
         <div className="App">
           <Navbar/>
           <Route exact path="/" render={(props)=> (<Home {...props} moviesApi={this.moviesApi} data={this.state}/>)} />
           <Route  path="/trending" render={(props)=> (<Trending {...props} moviesApi={this.moviesApi} data={this.state}/>)} />
           <Route  path="/topRate" render={(props)=> (<TopRate {...props} moviesApi={this.moviesApi} data={this.state}/>)} />
           <Route  path="/MoviePage/:id" render={(props)=> (<MoviePage {...props} data={this.state} movieApi2={this.movieApi2}/>)} />
         </div>
      </BrowserRouter>
  );
}}

export default App;
