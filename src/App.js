import './App.css';
import DogDetails from "./DogDetails";
import DogList from "./DogList";
import Nav from "./Nav";
import {Switch, Route, Redirect, BrowserRouter} from "react-router-dom";
import whiskey from "./whiskey.jpg";
import tubby from "./tubby.jpg";
import duke from "./duke.jpg";
import perry from "./perry.jpg";

/* 
props:
  dogs: array of dog object, default is defined 
States:
  None 

App => (DogList, DogDetails)
*/
function App({ dogs }) {

  /* given the name, return the dog object */
  function getDog(name) {
    const dog = dogs.find(d => d.name.toLowerCase() === name);
    return dog;
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Nav dogs={dogs.map(d => d.name)} />
      <Switch>
        <Route exact path="/dogs" >
          <DogList dogs={dogs} /> 
        </Route>
        <Route exact path="/dogs/:name" >
          <DogDetails getDog={getDog} />
        </Route>
        <Redirect to="/dogs" />
      </Switch>
      </BrowserRouter>
    </div>
  );
}




App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
