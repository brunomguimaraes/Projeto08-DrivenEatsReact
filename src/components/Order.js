export default function Order() {
    return (
        <div className="confirm-order hide">
        <p className="title">Confirme seu pedido</p>
        <div className="order">
           <div className="items">
                <p>Food</p>
                <p>Drink</p>
                <p>Desert</p>
                <p className="bold">Total</p>
           </div>
           <div className="prices">
                <p>FoodPrice</p>
                <p>DrinkPrice</p>
                <p>DesertPrice</p>
                <p className="bold">R$ TotalPrice</p>
           </div>
        </div>
        <button className="end-order">Tudo certo, pode pedir!</button>
        <button className="cancel-order">Cancelar</button>
    </div>
    );
}