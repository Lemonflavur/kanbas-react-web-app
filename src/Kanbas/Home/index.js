import ModuleList from "../Modules/ModuleList";
import topButtons from "./topButtons";

function Home() {
    return (

        <div>
            <topButtons/>
            <h2>Home</h2>
            <ModuleList />
            <h2>Status</h2>
        </div>
    );
}
export default Home;

