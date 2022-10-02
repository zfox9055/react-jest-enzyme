import React from "react";

export default function Hello(props) {
  
  // hello
  
  
  if (props.name) {
    return <h1>Hello, {props.name}!</h1>;
  } else {
    return <span>Hey, stranger</span>;
  }

  
}
