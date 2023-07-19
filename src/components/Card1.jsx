import React from "react";

function Card1(props) {
  return (<div id="card2">
  <div class="row featurette"  >
        <div className=" col-md-7" id="Img-card2">
          <h2 className="featurette-heading fw-normal lh-1"> <span className="text-body-secondary"></span></h2>
          <p className="lead">{props.text}</p>
        </div>
        <div className="col-md-5" id="img-box2 ">
        <div className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="250" height="250"   Placeholder="250x250" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%"></rect><div x="50%" y="50%"  dy=".3em"><img src={props.img} height="250px" alt="img"/></div></div>
        </div>
      </div>
      </div>
    );
}

export default Card1;
