import Option from "./generics/Option";

export default function Drink() {
    const options = [
        {
            img: "media/cana.jpg",
            name: "Caldo de cana",
            detail: "Humm, com pastel então",
            price: "2,23"
        }, 
        {
            img: "media/corote.jpg",
            name: "Corote",
            detail: "Pilar de festas universitárias",
            price: "0,99"
        }, 
        {
            img: "media/caja.jpg",
            name: "Suco de cajá",
            detail: "O melhor suco que há",
            price: "5,91"
        }, 
        {
            img: "media/agua.jpg",
            name: "Água",
            detail: "Tem quem diz que faz bem",
            price: "74,82"
        }
    ]
    return (
        <div class="menu drink">
            {options.map((option) => {
                const {img, name, detail, price} = option;
                return <Option option={option}></Option>
            })}
        </div>
    );
}