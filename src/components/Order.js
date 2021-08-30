import { Link } from "react-router-dom";

export default function Order(props) {
    const {whatsapp, cancelOrder} = props;
    const{food, foodPrice, drink, drinkPrice, desert, desertPrice, totalPrice} = props.order;
    return (
    <div className="confirm-order">
        <p className="title">Revise seu pedido</p>
        <div className="order">
                <p>{food}</p>
                <p>{foodPrice}</p>
                <p>{drink}</p>
                <p>{drinkPrice}</p>
                <p>{desert}</p>
                <p>{desertPrice}</p>
                <p className="bold">Total</p>
                <p className="bold">R$ {totalPrice}</p>
        </div>
        <button className="end-order" onClick={() => whatsapp(food, drink, desert, totalPrice)}>Tudo certo, pode pedir!</button>
        <Link to="/" className="cancel-order" onClick={cancelOrder}>Cancelar</Link>
    
    </div>
    );
}