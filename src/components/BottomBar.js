import { useState } from "react";
import Order from "./Order";

export default function BottomBar() {
    const [message, setMessage] = useState("Selecione os 3 itens para fechar o pedido")
    const [orderSelected, setOrderSelected] = useState("");
    const [completeOrder, setCompleteOrder] = useState("");


    // const displayButton = () => {
    //     if (order.food ==! [] && order.drink ==! [] && order.desert ==! []) {
    //         setMessage("Fechar pedido");
    //         setOrderSelected("orderSelected");
    //         setCompleteOrder("completeOrder")
    //     }
    // }

    // const completeOrders = () => {
    //     calculatePrice();
    //     displayOrder(); 
    // }

    // const calculatePrice = () => {
    //     const foodPrice = foodPrice.reduce((sum, number) => sum + number);
    //     const drinkPrice = drinkrice.reduce((sum, number) => sum + number);
    //     const desertPrice = desertPrice.reduce((sum, number) => sum + number);
    //     total = foodPrice + drinkPrice + desertPrice;
    // }

    // const displayOrder = () => {

    // }
    return (
        <div class="bottom-bar">
            <button class={`orderButton ${orderSelected}`} onClick={completeOrder}>{message}</button>
        </div>
    );
}