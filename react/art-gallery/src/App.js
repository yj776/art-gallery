import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import Gallery from './components/Gallery'
import ButtonBar from './components/ButtonBar'


function App(){
  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})
  const handleIterate = (e) =>{
    setArtId(artId + Number(e.target.value))
  }
 
  console.log(data)

  useEffect(() => {
    document.title = 'Welcome to Artworld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))
}, [artId])

return(
  <div className="App">
      <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title}/>
      <ButtonBar handleIterate={handleIterate}/>
  </div>
)
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;


