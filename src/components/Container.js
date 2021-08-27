import Food from "./Food";
import Drink from "./Drink";
import Desert from "./Desert";

export default function Container() {
    return (
    <div class="container">
        <p class="section-name">Primeiro, seu prato</p>
        <Food />

        <p class="section-name">Agora, sua bebida</p>
        <Drink />

        <p class="section-name">Por fim, sua sobremesa</p>
        <Desert />
    </div>
    );
}