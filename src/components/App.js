import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Order from "./Order";
import { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

export default function App() {
    const [food, setFood] = useState([]);
    const [foodPrice, setFoodPrice] = useState([]);
    const [drink, setDrink] = useState([]);
    const [drinkPrice, setDrinkPrice] = useState([]);
    const [desert, setDesert] = useState([]);
    const [desertPrice, setDesertPrice] = useState([]);
    const [orderSelected, setOrderSelected] = useState("not-selected");
    let finalOrder = {};

    const displayButton = () => {
        if (food.length > 0 && drink.length > 0 && desert.length > 0) {    
            setOrderSelected("");
        } else {
            setOrderSelected("not-selected");
        }
    }

    const calculatePrice = () => {
        finalOrder.foodPrice = foodPrice.reduce((sum, number) => sum + number).toFixed(2);
        finalOrder.drinkPrice = drinkPrice.reduce((sum, number) => sum + number).toFixed(2);
        finalOrder.desertPrice = desertPrice.reduce((sum, number) => sum + number).toFixed(2);
        finalOrder.totalPrice = (Number(finalOrder.foodPrice) + Number(finalOrder.drinkPrice) + Number(finalOrder.desertPrice)).toFixed(2);
    }

    const printOrder = (section) => {
        const items = section.sort();
        const order = {};
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
        calculatePrice();
        finalOrder.food = printOrder(food);
        finalOrder.drink = printOrder(drink);
        finalOrder.desert = printOrder(desert);
    }

    const whatsapp = (foodOrder, drinkOrder, desertOrder, totalPrice) => {
        const message = `Olá, gostaria de fazer o pedido:\n- Prato:${foodOrder}\n- Bebida:${drinkOrder}\n- Sobremesa:${desertOrder}\nTotal: R$ ${totalPrice}`;
        const link = "https://wa.me/5519981266625?text=" + encodeURIComponent(message);
        window.location = link;
    }

    const cancelOrder = () => {
        setFood([]);
        setFoodPrice([]);
        setDrink([]);
        setDrinkPrice([]);
        setDesert([]);
        setDesertPrice([]);
        finalOrder = {};
        displayButton();
    }

    return (
        <Router>
            <Switch> 
                <Route exact path="/">
                    <Header/>
                    <Main 
                        food={food} setFood={setFood} 
                        foodPrice={foodPrice} setFoodPrice={setFoodPrice}
                        drink={drink} setDrink={setDrink}
                        drinkPrice={drinkPrice} setDrinkPrice={setDrinkPrice} 
                        desert={desert} setDesert={setDesert}
                        desertPrice={desertPrice} setDesertPrice={setDesertPrice} 
                        displayButton={displayButton}
                    />
                    <Footer orderSelected={orderSelected} completeOrder={completeOrder}/>
                </Route>
                <Route exact path="/revisar">
                    <Header/>
                    <Order cancelOrder={cancelOrder} whatsapp={whatsapp} order={finalOrder}/>
                </Route> 
            </Switch> 
        </Router>
    );
}