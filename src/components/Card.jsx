import React from "react";

function Card(){
    return( <div id="card">
    <div className="row featurette">
    <div className=" col-md-7 order-md-2" id="Img-card">
      <h2 className="featurette-heading fw-normal lh-1"><span class="text-body-secondary"></span></h2>
      <p className="lead">At our tailor's shop, we value the relationship we build with our clients. We believe in fostering a warm and welcoming environment where everyone feels like family. Whether you're a loyal customer who has been with us since the beginning or a newcomer seeking personalized fashion solutions, we are here to serve you with utmost care and professionalism.</p>
    </div>
    <div className=" col-md-5 order-md-1" id="img-box">
      <div className="img-img bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="250" height="250"   Placeholder="250x250" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%"></rect><div x="50%" y="50%"  dy=".3em"><img src="https://c1.wallpaperflare.com/preview/828/460/888/fashion-suit-tailor-clothes.jpg" height="250" alt="img"/></div></div>
    </div>
  </div></div>);
}

export default Card;