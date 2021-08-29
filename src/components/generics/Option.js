import { useEffect, useState } from "react";

export default function Option(props) {
    const {img, name, detail, price} = props.option;
    const {item, setItem, itemPrice, setItemPrice, displayButton} = props;
    const [selected, setSelected] = useState("");
    const [amount, setAmount] = useState(1);
    useEffect(() => displayButton());

    const select = () => {
        if (selected === "") {
            setSelected("selected")
            setItem(arr => [...arr, name]);
            setItemPrice(arr => [...arr, Number(price.replace(",", "."))]);
        }
    }

    const decreaseAmount = () => {
        if (amount === 1) {
            setSelected("");
            setItem(item.filter(option => option !== name));
            setItemPrice(itemPrice.filter(optionPrice => optionPrice !== Number(price.replace(",", "."))));
        } else {
            setAmount(amount - 1);
            const index = item.findIndex(option => option === name);
            setItem([
                ...item.slice(0, index), 
                ...item.slice(index + 1)
            ]);
            setItemPrice([
                ...itemPrice.slice(0, index), 
                ...itemPrice.slice(index + 1)
            ]);
        }
    }

    const increaseAmount = () => {
        setAmount(amount + 1);
        setItem(arr => [...arr, name]);
        setItemPrice(arr => [...arr, Number(price.replace(",", "."))]);
    }

    return (
        <button className={`option ${selected}`} onClick={select}>
                <img src={img} alt={name} />
                <p className="name">{name}</p>
                <p className="detail">{detail}</p>
                <p className="price">R$ {price}</p>
                <div className="amount">
                    <span className="minus" onClick={decreaseAmount}>-</span> {amount} <span className="plus" onClick={increaseAmount}>+</span>
                </div>
        </button>
    );
}