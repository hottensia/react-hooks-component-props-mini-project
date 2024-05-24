import React from "react";

function About(props){
    const defaultImageUrl = "https://via.placeholder.com/215";
    return(
        <aside>
      <img src={props.image||defaultImageUrl} alt ='blog logo' ></img>
      <p>{props.about}</p>
        </aside>
    )
}

export default About;