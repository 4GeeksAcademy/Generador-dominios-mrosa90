/* eslint-disable */
import "./style.css";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extension = [".com", ".es"];

window.onload = () => {
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let m = 0; m < noun.length; m++) {
        for (let t = 0; t < extension.length; t++) {
          console.log(pronoun[i] + adj[j] + noun[m] + extension[t]);
        }
      }
    }
  }
};
