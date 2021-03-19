
import './App.css';
import Menu from './Core/Menu';
import { Contact } from './Pages/Contact/Contact';
import { Discover } from './Pages/Discover/Discover';
import { HousePage } from './Pages/HousePage/HousePage';
import {Rooms} from './Pages/Rooms/Rooms';
import { Footer } from './Core/Footer/Footer';



function App() {
  return (
    <body>
    <div className="App">
      <Menu/>
      <HousePage></HousePage>
      <Rooms/>
      <Discover/>
      <Contact />
      <Footer></Footer>
    </div>
    </body>
  );
}

export default App;
