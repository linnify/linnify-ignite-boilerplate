import {
  NavigationActions,
  NavigationParams,
  NavigationRoute,
  StackActions,
} from 'react-navigation';

class NavigationService {
  private static navigator: any;

  public static initialize(navigatorRef: any) {
    NavigationService.navigator = navigatorRef;
  }

  public static navigate(routeName: string, params?: NavigationParams) {
    NavigationService.navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      }),
    );
  }

  public static navigateBack() {
    NavigationService.navigator.dispatch(NavigationActions.back());
  }
}

export default NavigationService;
