import Food from "./Food";
import Drink from "./Drink";
import Desert from "./Desert";

export default function Container(props) {
    const {food, setFood, foodPrice, setFoodPrice, drink, setDrink, drinkPrice, setDrinkPrice, desert, setDesert, desertPrice, setDesertPrice} = props;
    return (
    <div class="container">
        <p class="section-name">Primeiro, seu prato</p>
        <Food 
        food={food} setFood={setFood} 
        foodPrice={foodPrice} setFoodPrice={setFoodPrice} />

        <p class="section-name">Agora, sua bebida</p>
        <Drink 
        drink={drink} setDrink={setDrink}
        drinkPrice={drinkPrice} setDrinkPrice={setDrinkPrice} />

        <p class="section-name">Por fim, sua sobremesa</p>
        <Desert 
        desert={desert} setDesert={setDesert}
        desertPrice={desertPrice} setDsertPrice={setDesertPrice} />
    </div>
    );
}