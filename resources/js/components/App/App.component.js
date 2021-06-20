import React from 'react';
import { Switch} from "react-router-dom";
import { routes } from "../../routes/routes";
import RouteFromArray from "../../routes/RouteFromArray";
import '../../../css/app.css';
import Header from '../Header';

function App() {
    return (
        <div>
            <Header />
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

