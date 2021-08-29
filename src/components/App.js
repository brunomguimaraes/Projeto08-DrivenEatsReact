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

    const [orderSelected, setOrderSelected] = useState("not-selected");

    const displayButton = () => {
        if (food.length > 0 && drink.length > 0 && desert.length > 0) {    
            setOrderSelected("");
        } else {
            setOrderSelected("not-selected");
        }
    }

    const calculatePrice = () => {
        const foodTotal = foodPrice.reduce((sum, number) => sum + number);
        const drinkTotal = drinkPrice.reduce((sum, number) => sum + number);
        const desertTotal = desertPrice.reduce((sum, number) => sum + number);
        const total = foodTotal + drinkTotal + desertTotal;
    }

    const completeOrder = () => {
        
    }


    return (
        <div>   
            <TopBar/>
            <Container 
            food={food} setFood={setFood} 
            foodPrice={foodPrice} setFoodPrice={setFoodPrice}
            drink={drink} setDrink={setDrink}
            drinkPrice={drinkPrice} setDrinkPrice={setDrinkPrice} 
            desert={desert} setDesert={setDesert}
            desertPrice={desertPrice} setDesertPrice={setDesertPrice} 
            displayButton={displayButton}/>
            <Order />
            <BottomBar orderSelected={orderSelected} />
    
            <div class="blur-background hide"></div>
        </div>
    );
}