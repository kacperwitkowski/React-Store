import Products from './section/Products';
import Details from './section/Details';
import {Route,Switch} from 'react-router-dom';
import Cart from './section/Cart';
import Home from './section/Home';
import About from './section/About';
import Contact from './section/Contact';
import Reviews from './section/Reviews';
import Payment from './section/Payment';

const Section = () => {
 return (
   <div>
     <section>
       <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/product" exact component={Products} />
         <Route path="/product/:id" component={Details} />
         <Route path="/cart" component={Cart} />
         <Route path="/payment" component={Payment} />
         <Route path="/contact" component={Contact} />
         <Route path="/about" component={About} />
         <Route path="/reviews" component={Reviews} />
       </Switch>
     </section>
   </div>
 );
}
 
export default Section;