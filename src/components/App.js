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
        const totalPrice = foodTotal + drinkTotal + desertTotal;
        return totalPrice.toFixed(2);
    }

    const printOrder = (section) => {
        const items = section.sort();
        const order = {};
        console.log(items, order);
        for (let i = 0; i < items.length; i++) {
            if (i !== 0) {
                if (items[i] === items[i - 1]) {
                    order[items[i]]++;
                } else {
                    order[items[i]] = 1;
                } 
            } else {
                order[items[i]] = 1;
            }
        }
        const itemNames = Object.keys(order);
        const itemAmounts = Object.values(order);
        let message = "";
        for (let i = 0; i < itemNames.length; i++) {
            message += ` ${itemNames[i]} (${itemAmounts[i]}x)`;
        }
        
        return message;
    }

    const completeOrder = () => {
        const totalPrice = calculatePrice();
        const foodOrder = printOrder(food);
        const drinkOrder = printOrder(drink);
        const desertOrder = printOrder(desert);

        const message = `Olá, gostaria de fazer o pedido:\n- Prato:${foodOrder}\n- Bebida:${drinkOrder}\n- Sobremesa:${desertOrder}\nTotal: R$ ${totalPrice}`;
        const link = "https://wa.me/5519981266625?text=" + encodeURIComponent(message);
        window.location = link;
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
            <BottomBar orderSelected={orderSelected} completeOrder={completeOrder} />
        </div>
    );
}