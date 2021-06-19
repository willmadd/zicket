import React from 'react';
import { Switch} from "react-router-dom";
import { routes } from "../../routes/routes";
import RouteFromArray from "../../routes/RouteFromArray";
import '../../../css/app.css';

function App() {
    return (
        <div className="">
            <Switch>
                {routes.map((route, index) => (
                    <RouteFromArray
                        key={index}
                        exact={route.exact}
                        {...route}
                    />
                ))}
            </Switch>
        </div>
    );
}

export default App;

