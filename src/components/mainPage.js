import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMenu from "./navMenu";
import MainFeedPage from "./mainFeedPage";
import ProfilePage from "./profilePage";
import PeoplePage from "./peopleComponents/peoplePage";
import OnePpl from "./peopleComponents/onePpl";


class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavMenu />
                <Switch>
                    <Route exact path="/" component={MainFeedPage} />
                    <Route path="/mainFeedPage" component={MainFeedPage} />
                    <Route path="/profilePagee/:id" component={OnePpl} />
                    <Route path="/profilePage" component={ProfilePage} />
                    <Route path="/peoplePage" component={PeoplePage} />
                </Switch>
            </div>
        );
    }

}
export default MainPage;