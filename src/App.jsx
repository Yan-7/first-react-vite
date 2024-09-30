import "./App.css";
import Shoppinglist from "./ShoppingList";
import PropertyList from "./PropertyList";

const properties = [
  { id: 1, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 2, name: "Lone Mountain Cabin", rating: 4.8, price: 200 },
  { id: 3, name: "Cactus Retreat", rating: 4.7, price: 120 },
  { id: 4, name: "Redwood Treehouse Escape", rating: 4.9, price: 300 },
  { id: 5, name: "Oceanview Condo", rating: 4.8, price: 250 },
  { id: 6, name: "Gold Miner Campground", rating: 4.6, price: 100 }
];

function App() {
  return (
    <div>
        <PropertyList properties={properties}/>
    </div>
  );
}

export default App;
