export default function Option(props) {
    const {img, name, detail, price} = props.option;
    return (
        <button class="option" onclick="selectDesert(this)">
                <img src={img} alt={name} />
                <p class="name">{name}</p>
                <p class="detail">{detail}</p>
                <p class="price">R$ {price}</p>
                <div class="amount">
                    <span class="minus">-</span> 1 <span class="plus">+</span>
                </div>
        </button>
    );
}