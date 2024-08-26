// App.jsx
import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import Doi from './Doi'
import Section_2 from './Containers';
import Image_description from './Imagedescription';
import Container from './Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import your App styles

function App() {
  return (
    <div>
      <Navbar />
      <Doi />
      <Section_2 />
      <Image_description />
      <Con />
    </div>
  );
}

export default App;

