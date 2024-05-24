import React from "react";
import Article from "./Article";

function ArticleList(props){
    return(
        <main>
        {props.posts.map((post, index) => (
        <Article key={index} {...post} />
      ))}
        </main>
    )
}

export default ArticleList;