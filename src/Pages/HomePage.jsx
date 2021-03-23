import { Menu } from '../Core/Menu';
import { Contact } from './Contact/Contact';
import { Discover } from '../Pages/Discover/Discover';
import { HousePage } from '../Pages/HousePage/HousePage';
import {Rooms} from '../Pages/Rooms/Rooms';
import { Footer } from '../Core/Footer/Footer';
import { animateScroll as scroll} from 'react-scroll';

export function HomePage () {

    function onClickUp () {
        scroll.scrollToTop();
      }
    

    return (
        <div>
        <Menu/>
     
      <HousePage></HousePage>
      <Rooms/>
      <Discover/>
      <Contact />
      <button className='up' onClick={onClickUp}>Subir</button>
      <Footer></Footer>
      </div>
    )
}
export default HomePage;