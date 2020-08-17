import React, { Component } from 'react';

class moviePage extends Component{
   
  id=this.props.match.params.id;  

   //calling the api function to get the data and put it in the state
   componentDidMount(){
      this.props.movieApi2(this.id);
      } 
      
 

  render(){ 
       
   let data=this.props.data;

   /* i put if condition to improve ux if i don't 
   put the if condition the movie who stored in result2 will appear 
   until state updated by new movie*/
   
   if (data.result2.id==this.id) {
          
       return(
          
            <div className="moviePage">
     
              <div  className="container">
                <div className="row mt-3">
                  <div className="col-md-8">
                   <img className="w-100" src={`https://image.tmdb.org/t/p/w500${data.result2.backdrop_path}`}/>
                   <h2 className="my-3 text-white">{data.result2.title}</h2>
                   <p className="vote text-white">vote average :<span> {data.result2.vote_average}</span></p>
                   <p className="overview text-white">{data.result2.overview}</p>
                </div>
     
              </div>
             </div>
            </div> 
         )
        }else{
          return(<div className="moviePage"></div>)
        }
   }
    
}


export default moviePage ;