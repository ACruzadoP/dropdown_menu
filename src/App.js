import React from 'react';

function App() {
  return (
    <div>
      <nav>
        <div className="dropdown">
          <button><a href="#" className="home">Home</a></button>

          <div className="projects">
            <button>Projects</button>
            <ul>
              <li><a href="#">Weather App</a></li>
              <li><a href="#">Weather App</a></li>
              <li><a href="#">Weather App</a></li>
              <li><a href="#">Weather App</a></li>
            </ul>
          </div>

          <div className="products">
            <button>Products</button>
            <ul>
              <li><a href="#">Cloud Services</a></li>
              <li><a href="#">Bitcoin Mining</a></li>
              <li><a href="#">Troll on Youtube</a></li>
              <li><a href="#">Record Tutorials</a></li>
            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
}

export default App;
