import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class trending extends Component {

  imgPrefix=`https://image.tmdb.org/t/p/w500/`;

componentDidMount(){
  this.props.moviesApi('','top_rated');
}

render(){
  const content=this.props.data.result.map((x)=>{
    return(
    <div key={x.id} className="col-md-2 text-white py-4" >
      <Link to={`/MoviePage/${x.id}`} className="nav-link">
       <div className="position-relative">
         <img src={`https://image.tmdb.org/t/p/w500/`+x.poster_path} className="w-100"/>
         <p className="vote text-white mt-3">{x.title}</p>
       </div>
      </Link>
   </div>

    )
  });
  return (
    <div className="trending">
      <div className="container">
        <div className="row">
           {content}
        </div>
      </div>
    </div>
  );
}
}
export default trending;