import { useState } from "react";

export default function Option(props) {
    const {img, name, detail, price} = props.option;
    const [selected, setSelected] = useState("");
    const [amount, setAmount] = useState(1);

    const select = () => {
        if (selected === "") {
            setSelected("selected");
        }
    }

    const decreaseAmount = () => {
        if (amount === 1) {
            setSelected("");
        } else {
            setAmount(amount - 1);
        }
    }

    const increaseAmount = () => {
        setAmount(amount + 1);
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