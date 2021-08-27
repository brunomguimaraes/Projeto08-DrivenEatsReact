import TopBar from "./TopBar";
import Container from "./Container";
import Order from "./Order";
import BottomBar from "./BottomBar";

export default function App() {
    return (
        <div>   
            <TopBar/>
            <Container/>
            <Order />
            <BottomBar />
    
            <div class="blur-background hide"></div>
        </div>
    );
}