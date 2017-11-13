import { AppRegistry } from 'react-native';
import CreateFood from "./src/app/component/first/CreateFood";
import AppProvider from "./src/app/AppProvider";
import MenuItemCooker from "./src/app/component/first/MenuItemCooker";
import Cookers from "./src/app/component/first/Cookers";
import DetailCooker from "./src/app/component/first/DetailCooker";
import MenuItemFood from "./src/app/component/first/MenuItemFood";
AppRegistry.registerComponent('MomCook', () => DetailCooker);
