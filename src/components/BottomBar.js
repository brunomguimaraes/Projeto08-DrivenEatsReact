import { useState } from "react";
import Order from "./Order";

export default function BottomBar({orderSelected}) {
    




    // const completeOrders = () => {
    //     calculatePrice();
    //     displayOrder(); 
    // }


    // const displayOrder = () => {

    // }
    return (
        <div className={`bottom-bar ${orderSelected}`}>
            <button className="orderButton">Selecione os 3 itens para fechar o pedido</button>
            <button className="orderButton orderSelected {orderSelected}" onClick="completeOrder">Fechar pedido</button>
        </div>
    );
}