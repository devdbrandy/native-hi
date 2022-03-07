import {RouteStackParamList} from '@holie/navigation/routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RouteStackParamList {}
  }
}
