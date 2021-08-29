import TopBar from "./TopBar";
import Container from "./Container";
import Order from "./Order";
import BottomBar from "./BottomBar";
import { useState } from "react";

export default function App() {
    const [food, setFood] = useState([]);
    const [foodPrice, setFoodPrice] = useState([]);
    const [drink, setDrink] = useState([]);
    const [drinkPrice, setDrinkPrice] = useState([]);
    const [desert, setDesert] = useState([]);
    const [desertPrice, setDesertPrice] = useState([]);

    return (
        <div>   
            <TopBar/>
            <Container 
            food={food} setFood={setFood} 
            foodPrice={foodPrice} setFoodPrice={setFoodPrice}
            drink={drink} setDrink={setDrink}
            drinkPrice={drinkPrice} setDrinkPrice={setDrinkPrice} 
            desert={desert} setDesert={setDesert}
            desertPrice={desertPrice} setDsertPrice={setDesertPrice} />
            <Order />
            <BottomBar />
    
            <div class="blur-background hide"></div>
        </div>
    );
}