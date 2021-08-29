import Food from "./Food";
import Drink from "./Drink";
import Desert from "./Desert";

export default function Container(props) {
    const {food, setFood, foodPrice, setFoodPrice, drink, setDrink, drinkPrice, setDrinkPrice, desert, setDesert, desertPrice, setDesertPrice, displayButton} = props;
    return (
    <div className="container">
        <p className="section-name">Primeiro, seu prato</p>
        <Food 
        food={food} setFood={setFood} 
        foodPrice={foodPrice} setFoodPrice={setFoodPrice} 
        displayButton={displayButton}/>

        <p className="section-name">Agora, sua bebida</p>
        <Drink 
        drink={drink} setDrink={setDrink}
        drinkPrice={drinkPrice} setDrinkPrice={setDrinkPrice} 
        displayButton={displayButton}/>

        <p className="section-name">Por fim, sua sobremesa</p>
        <Desert 
        desert={desert} setDesert={setDesert}
        desertPrice={desertPrice} setDesertPrice={setDesertPrice} 
        displayButton={displayButton}/>
    </div>
    );
}