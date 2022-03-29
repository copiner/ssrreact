
import React from "./react/index";
let ReactDOM = React;
function App(props) {
    const [minAge, setMinAge] = React.useState(1);
    const [maxAge, setMaxAge] = React.useState(100);
    return (
        <div>
            <h1>minAge: {minAge}</h1>
            <button onClick={() => setMinAge(minAge + 1)}>加</button>
            <h1>maxAge: {maxAge}</h1>
            <button onClick={() => setMaxAge(maxAge - 1)}>减</button>
        </div>
    );
}
ReactDOM.render(<App/>, document.getElementById("root"));
