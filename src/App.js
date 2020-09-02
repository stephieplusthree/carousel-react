import React, {
  useState,
  useEffect
} from 'react';
import 'bootstrap/dist/css/bootstap:css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import Slider from 'react-slick';

function App() {
  const [suggestions,setSuggestions]=useState([])


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data=>{
      setSuggestions(data);
    })
      });

      let settings = {
        infinite: false,
        speed: 1000,
        arrows:true,
        slidesToShow: 5,
        slidesToScroll: 4,
      }

  return (
    <div className="container">
      <h6 className="text-muted">Friend Suggestions</h6>
      {suggestions.length === 0 ? (
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading ...</span>
          </div>
      ) : (
          <Slider {...settings}>
          {suggestions.map((current => (
            <div className="out" key={current.id}>
              <div className="card">
                <img 
                  className="rounded-circle" 
                  alt={"users here"} 
                  src={`https://source.unsplash.com/random/${current.id}`}
                  height={56}
                  width={56}
                />
              </div>
            </div>
          ))}
          </Slider>
      )}
    </div>
  );
}

export default App;
