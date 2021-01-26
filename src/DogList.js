import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
/* 
props: dogs
App => DogList
 */
function DogList({ dogs }) {
  return (
    <ul className="DogList">
      {dogs.map(d => <li>
        <Link key={uuid()} to={`/dogs/${d.name.toLowerCase()}`}> {d.name}</Link>
      </li>)}
    </ul>)

}

export default DogList;