export default function BottomBar({orderSelected, completeOrder}) {
    
    return (
        <div className={`bottom-bar ${orderSelected}`}>
            <button className="orderButton">Selecione os 3 itens para fechar o pedido</button>
            <button className="orderButton orderSelected {orderSelected}" onClick={completeOrder}>Fechar pedido</button>
        </div>
    );
}