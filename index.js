import { AppRegistry } from 'react-native';
import App from './App';
import {MainTabRouter} from "./src/app/MainTabRouter";
import ItemFood from "./src/app/component/common/ItemFood";
import DetailComponent from "./src/app/component/detail/DetailComponent";

AppRegistry.registerComponent('MomCook', () => MainTabRouter);
