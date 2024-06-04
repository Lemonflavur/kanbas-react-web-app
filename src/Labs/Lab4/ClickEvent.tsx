const hello = () => {
    alert("Hello World!");
};
const lifeIs = (good: string) => {
    alert(`Life is ${good}`);
};
export default function ClickEvent() {
    return (
        
        <div id="wd-click-event">
            <h2>Click Event</h2>
            
            <button onClick={hello}
                    className="btn btn-primary"
                    id="wd-hello-world-click">
                Hello World!</button>
            
            <button onClick={() => lifeIs("Good!")}
                    className="btn btn-primary"
                    id="wd-life-is-good-click">
                Life is Good!</button>
            
            <button onClick={() => {hello(); lifeIs("Great!"); }}
                    className="btn btn-primary"
                    id="wd-life-is-great-click">
                Life is Great!
            </button>
            <hr/>
        </div>
    );}
