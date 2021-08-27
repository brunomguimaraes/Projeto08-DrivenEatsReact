export default function Option(props) {
    const {img, name, detail, price} = props.option;
    return (
        <button class="option" onclick="selectDesert(this)">
                <img src={img} alt={name} />
                <p class="name">{name}</p>
                <p class="detail">{detail}</p>
                <p class="price">R$ {price}</p>
                <ion-icon name="checkmark-circle"></ion-icon>
        </button>
    );
}