export default function Order() {
    return (
        <div class="confirm-order hide">
        <p class="title">Confirme seu pedido</p>
        <div class="order">
           <div class="items">
                <p>Food</p>
                <p>Drink</p>
                <p>Desert</p>
                <p class="bold">Total</p>
           </div>
           <div class="prices">
                <p>FoodPrice</p>
                <p>DrinkPrice</p>
                <p>DesertPrice</p>
                <p class="bold">R$ TotalPrice</p>
           </div>
        </div>
        <button class="end-order" onclick="Whatsapp()">Tudo certo, pode pedir!</button>
        <button class="cancel-order">Cancelar</button>
    </div>
    );
}