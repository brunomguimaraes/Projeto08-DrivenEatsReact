import Option from "./generics/Option";

export default function Food({food, setFood, foodPrice, setFoodPrice}) {
    const options = [
        {
            img: "media/baiao.jpg",
            name: "Baião de dois",
            detail: "Baião quentinho e bem gostosinho",
            price: "30,60"
        }, 
        {
            img: "media/bife-wellington.jpg",
            name: "Bife Wellington",
            detail: "Sei que tu viu no masterchef",
            price: "83,45"
        }, 
        {
            img: "media/Yakisoba.jpg",
            name: "Yakisoba",
            detail: "Pode pedir com garfo",
            price: "44,56"
        }, 
        {
            img: "media/cuscuz.jpg",
            name: "Cuscuz com ovo",
            detail: '"Cuscuz é vida", Juliette Freire',
            price: "6,39"
        }
    ]
    return (
        <div class="menu food">
            {options.map((option, index) => {
                const {img, name, detail, price} = option;
                return <Option key={index} option={option} item={food} setItem={setFood} itemPrice={foodPrice} setItemPrice={setFoodPrice}></Option>
            })}
        </div>
    );
}