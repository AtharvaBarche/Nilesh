import React from "react";
import Heading from "./Heading";
import Content from "./Content";
import Card1 from "./Card1";
import Card from "./Card";
import Footer from "./Footer";
import Address from "./Address";



function App() {
  return (
    <><Heading />
    <Content />
    <Card1
    text="When you entrust us with your clothing, you can rest assured that we treat each piece as a work of art. From alterations and repairs to custom-made attire, our dedication to perfection shines through in every stitch. We take the time to understand your unique style and preferences, ensuring that the end result reflects your individuality and fits you like a second skin."
     img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnJJ7oOXi7W23rKU8Aqz_-mfyw3ZQlib2RA&usqp=CAU"
     />
    <Card />
    <Address />
    <Footer />
    </>
  );
}

export default App;
