import {Link} from "react-router-dom";

export default function Footer({orderSelected, completeOrder}) {
    
    return (
        <footer className={`bottom-bar ${orderSelected}`}>
            <button className="orderButton">Selecione os 3 itens para fechar o pedido</button>
            <Link to="/revisar" className="orderSelected" onClick={completeOrder}>Fechar pedido</Link>
        </footer>
    );
}