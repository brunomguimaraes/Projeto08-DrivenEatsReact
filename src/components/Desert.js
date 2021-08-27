import Option from "./generics/Option";

export default function Desert() {
    const options = [
        {
            img: "media/alfenim.jpg",
            name: "Alfenim",
            detail: "Nem lembro da última vez que vi",
            price: "3,90"
        }, 
        {
            img: "media/mousse-de-maracuja.jpg",
            name: "Mousse",
            detail: "Maracujá, o melhor mousse que há",
            price: "7,56"
        }, 
        {
            img: "media/bolo-de-rolo.jpg",
            name: "Bolo de rolo",
            detail: "Tem quem diz que é rocombole",
            price: "4,42"
        }, 
        {
            img: "media/cheesecake.jpg",
            name: "Cheesecake",
            detail: "Bolo de queijo? Só pra quem pode",
            price: "10,04"
        }
    ]
    return (
        <div class="menu desert">
            {options.map((option) => {
                const {img, name, detail, price} = option;
                return <Option option={option}></Option>
            })}
        </div>
    );
}