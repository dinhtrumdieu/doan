import {StackNavigator} from 'react-navigation';
import {Login} from "./component/first/Login";
import {Register} from "./component/first/Register";
import AppProvider from "./AppProvider";

export const LoginRouter = StackNavigator({
    login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    register: {
        screen: Register,
        navigationOptions: {
            header: null
        }
    },
    mainTabRouter: {
        screen: AppProvider,
        navigationOptions: {
            header: null
        }
    }
});


