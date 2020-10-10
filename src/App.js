import React from 'react';
import Footer from "./Components/footer";
import Header from "./Components/header";
import pic from "./imageInSrc.jpg";

function App() {
  return (
    <div>
      <Header />
      <div>
        <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
          <h1 className="title red" style={{ color: "red", textAlign:"center"}}>Yesmine Makkes</h1>
          <br />
          <img src="moi.png" alt="myimage" style={{width: "250px", height: "300px", display: "block", marginLeft: "auto",marginRight: "auto" }}/>
          <br />
          <img src={pic} alt="myimage" style={{ width: "250px", height: "300px", display: "block", marginLeft: "auto", marginRight: "auto" }}/>
        </div>

        <video width="320" height="240" controls style={{ width: "250px", height: "300px", display: "block", marginLeft: "auto", marginRight: "auto" }}>
          <source src="AngularCourse.mp4" type="video/mp4" />
        </video>
      </div>
        <Footer />
    </div>
  );
}

export default App;
