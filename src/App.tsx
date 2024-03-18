import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import header from './IMG/car.png';
import car2 from './IMG/car2.png';
import car3 from './IMG/car3.png';



function App() {
  return (
    
    <body>
     
        <div className="header">
            <nav>
              <a href="#"><img src="IMG/pic.jpg" alt="" /></a>
              <div className="nav-links">
              
                <ul>
                  <li><a href="#">HOME</a></li>
                  <li><a href="#">CARS</a></li>
                  <li><a href="#">ABOUT US</a></li>
                </ul>  
          
              </div>
            </nav>
            <div className="container">
              <form className = "user" action="">
                <br /><br /><br /><br /><br /><br /><br />
                  <div className="row">
                    <div className="col">
                      <br /><br /><br /><br />
                      <h1> <strong> Car Rental <br />  </strong> </h1>
                      <p>Rent Now in Car Rental!</p>
                      
                      <a href="#" className="hero-btn" id = "home"> SHOP NOW &#8594;</a>
                    </div>
                    <div className="col">
                      <img src={header}alt="" />
                    </div>
                </div>
              </form>
            </div>

        </div>

        <div className="featured">
          <div className="container">
              <form className="user" action="">
              <br /><br />
              <div className="row">
                    <div className="col">     
                      <h1> <strong> Featured Cars <br />  </strong> </h1>
                    </div>
                </div>

                <div className="row">
                  <div className="col-4">
                    <img src={car2}alt="" width={"450px"}/>
                      <br /><br />
                      <h4><b>Range Rover</b></h4>     
                      <a href="#" className="hero-btn" id = "home"> RENT NOW &#8594;</a>
                  </div>
                  <div className="col-4">
                  <img src={car2}alt="" width={"450px"}/>
                  <br /><br />
                      <h4><b>Range Rover</b></h4>     
                      <a href="#" className="hero-btn" id = "home"> RENT NOW &#8594;</a>
                  </div>
                  <div className="col-4">
                    <img src={header}alt="" width={"450px"}/> 
                    <br /><br />
                    <h4><b>BMW M5</b></h4>    
                      <a href="#" className="hero-btn" id = "home"> RENT NOW &#8594;</a>
                  </div>
                </div> 
                <br /><br /><br />
                <div className="row">
                  <div className="col-4">
                    <img src={car2}alt="" width={"450px"}/>
                      <br /><br />
                      <h4><b>Range Rover</b></h4>     
                      <a href="#" className="hero-btn" id = "home"> RENT NOW &#8594;</a>
                  </div>
                  <div className="col-4">
                  <img src={car2}alt="" width={"450px"}/>
                  <br /><br />
                      <h4><b>Range Rover</b></h4>     
                      <a href="#" className="hero-btn" id = "home"> RENT NOW &#8594;</a>
                  </div>
                  <div className="col-4">
                    <img src={header}alt="" width={"450px"}/> 
                    <br /><br />
                    <h4><b>BMW M5</b></h4>    
                      <a href="#" className="hero-btn" id = "home"> RENT NOW &#8594;</a>
                  </div>
                </div>
              </form>
            </div>
        </div>

        
<br /><br /><br />
        <div className="aboutus">
            <div className="container">
              
                <form className="user" action="">
              <br /><br />
              <div className="row">
                    <div className="col-6">     
                      <h1> <strong> About Us <br />  </strong> </h1>
                    </div>
                    <div className="col-6">
                      <br /><br /><br />
                      <p>At Car Rental, we take pride in being your trusted partner for car rental services in the Philippines. With years of experience and a passion for customer satisfaction, we strive to exceed your expectations every step of the way. Our extensive fleet of vehicles, including sedans, SUVs, vans, and more, is meticulously maintained to ensure your safety and comfort on the road. Whether you're planning a family vacation, a business trip, or a weekend getaway, we have the perfect vehicle to suit your needs and budget.</p>
                      <p>Our dedicated team of professionals is here to assist you with personalized service and expert advice, making your car rental experience hassle-free and enjoyable. We understand the unique needs of travelers in the Philippines and are committed to providing convenient and affordable solutions. Discover the freedom to explore the stunning landscapes and vibrant cities of the Philippines on your own terms with Car Rental.</p>
                      
                    </div>
                </div>
              </form>
              </div>
              <br /><br />
            </div>
            <br /><br /><br />
  
    </body>
    
  );
}

export default App;
