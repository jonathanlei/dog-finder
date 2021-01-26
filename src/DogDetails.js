import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { Redirect } from "react-router-dom";

/* 
Props:
  getDog - function that returns a dog that matches the name
State:
  dog
App => DogDetails
*/
function DogDetails({ getDog }) {
  const { name } = useParams();
  const [dog, setDog] = useState(getDog(name));

  useEffect(() => { setDog(getDog(name)) }, [name]);
  // fail first 
  if (!dog) return <Redirect to="/dogs" />
  
  return (
    <div className="DogDetails">
      <h2> Name: {dog.name} </h2>
      <p> Age: {dog.age} </p>
      <img src={dog.src} alt={dog.name}/>
      <div className="DogDetails-facts">
        <h3> facts about {dog.name}</h3>
        <ul>
          {dog.facts.map(f => <li key={uuid()}>{f}</li>)}
        </ul>
      </div>

    </div>)
}

export default DogDetails;