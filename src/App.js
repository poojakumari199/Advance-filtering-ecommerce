import React, {useState} from 'react';
import './App.css';
import Navigation from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import Card from './components/Card';
import './index.css';

//Database
import products from './db/data';

function App() {
const [selectedCategory, setSelectedCategory] = useState(null);
const [query, setQuery] = useState("");

//input filter
const handleInputChange = (event) => {
  console.log("handle input change")
setQuery(event.target.value);
}

const filteredItems = products.filter(
  (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
);

//Radio filter
const handleChange = event => {
  setSelectedCategory(event.target.value);
  console.log("handle  change")
}

//Button filter
const handleClick = event => {
  setSelectedCategory(event.target.value);
  console.log("handle click")
}

function filteredData(products,selected,query){
let filteredProducts = products;

//Filtering input items
if(query){
  console.log("query",query);
  filteredProducts = filteredItems
}

//Selected Filter
if(selected){
  console.log("selected",selected);
  filteredProducts = filteredProducts.filter(
    ({category,color,company,newPrice, title}) => 
    category === selected 
  || color === selected
   || company === selected
    || newPrice === selected 
    || title === selected);
}
return filteredProducts.map(({img,title, star, reviews,newPrice, prevPrice}) =>(
  <Card
   key={Math.random()}
   img={img}
   title={title}
   star={star}
   reviews={reviews}
   newPrice={newPrice}
   prevPrice={prevPrice}
   />
))
}

const result = filteredData(products, selectedCategory, query)
  
return (
    <>
    <Sidebar handleChange={handleChange} />
    <Navigation  query={query} handleInputChange={handleInputChange}/>
    <Recommended handleClick={handleClick}/>
    <Products result={result}/>
    </>
  );
}

export default App;
