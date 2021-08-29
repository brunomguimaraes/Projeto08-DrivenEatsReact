export default function Footer({orderSelected, completeOrder}) {
    
    return (
        <footer className={`bottom-bar ${orderSelected}`}>
            <button className="orderButton">Selecione os 3 itens para fechar o pedido</button>
            <button className="orderButton orderSelected {orderSelected}" onClick={completeOrder}>Fechar pedido</button>
        </footer>
    );
}