import logo from './logo.svg';
import './App.css';

import { ListWithStyle} from "./components/items";

const linkArr = ["Services", "Projects", "About"];

function App() {

  const systems = [{
    title: "Android",
    type: "disc"
  }, { title: "BlackBerry", type: "disc" }, {
      title: "iPhone",
      type: "disc"
    }, { title: "Windows Phone", type: "disc" }];
  
  const manufracturers = [{
    title: "Samsung",
    type: "square"
  }, {
      title: "HTC",
      type: "square"
    }, {
      title: "Micromax",
      type: "disc"
    }, { title: "Apple", type: "circle" }]
  return (
    <div className="App">
       <nav className="navbar">
        <div className="logo">LOGOBAKERY</div>
        <ul className="navlinks">
          {linkArr.map((e) => {
            return (
              <li className="links">
                <Navlink name={e} />
              </li>
            );
          })}
        </ul>
        <button className="contact">Contact</button>
      </nav>
      <div className="container">
        
          <h1> Mobile Operating System</h1>
          <ul>
          {systems.map(el => {
            return <ListWithStyle title={el.title} type={el.type} />
          })}
          </ul>
          <h1>Mobile Manufracturers</h1>
          <ul>
           {manufracturers.map(el=> <ListWithStyle {...el}/>)}
          </ul>
        
      </div>
    </div>
  );
}


function Navlink(prop) {
  return <p>{prop.name}</p>;
}

export default App;
