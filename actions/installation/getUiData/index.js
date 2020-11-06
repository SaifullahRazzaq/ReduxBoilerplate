import { ActionType } from '../../../constant';
import { GetDataMiddleware } from '../../../middlewares'


class InstallationGetDATA {
  // static GetInstallationTypeAction() {
  //   console.log('action calling')
  //   return (dispatch) => {
  //     dispatch({ type: ActionType.GET_INSTALLATION_TYPE_DATA });
  //     return GetDataMiddleware.getInstallataionTypeMiddleware()
  //       .then((result) => {
  //         dispatch({
  //           type: ActionType.GET_INSTALLATION_TYPE_DATA_SUCCESS,
  //           payload: result
  //         })
  //       })
  //       .catch((error) => {
  //         return dispatch({
  //           type: ActionType.GET_INSTALLATION_TYPE_DATA_FAILURE,
  //           payload: error,
  //           message: 'Failed to fatch data'
  //         })
  //       })
  //   }
  // }



  static GetInstallationCategoryAction() {
    return (dispatch) => {
      dispatch({ type: ActionType.GET_INSTALLATION_CATEGORY_DATA });
      return GetDataMiddleware.getInstallataionCategoryMiddleware()
        .then((result) => {
          dispatch({
            type: ActionType.GET_INSTALLATION_CATEGORY_DATA_SUCCESS,
            payload: result
          })
        })
        .catch((error) => {
          return dispatch({
            type: ActionType.GET_INSTALLATION_CATEGORY_DATA_FAILURE,
            payload: error,
            message: 'Failed to fatch data'
          })
        })
    }
  }


  // static GetInstallationSubCategoryAction() {
  //   return (dispatch) => {
  //     dispatch({ type: ActionType.GET_INSTALLATION_SUB_CATEGORY_DATA });
  //     return GetDataMiddleware.getInstallataionSubCategoryMiddleware()
  //       .then((result) => {
  //         dispatch({
  //           type: ActionType.GET_INSTALLATION_SUB_CATEGORY_DATA_SUCCESS,
  //           payload: result
  //         })
  //       })
  //       .catch((error) => {
  //         return dispatch({
  //           type: ActionType.GET_INSTALLATION_SUB_CATEGORY_DATA_FAILURE,
  //           payload: error,
  //           message: 'Failed to fatch data'
  //         })
  //       })
  //   }
  // }


  // static GetInstallationBoughtFromAction() {
  //   return (dispatch) => {
  //     dispatch({ type: ActionType.GET_INSTALLATION_BOUGHT_FROM_DATA });
  //     return GetDataMiddleware.getInstallataionBoughtFromMiddleware()
  //       .then((result) => {
  //         dispatch({
  //           type: ActionType.GET_INSTALLATION_BOUGHT_FROM_DATA_SUCCESS,
  //           payload: result
  //         })
  //       })
  //       .catch((error) => {
  //         return dispatch({
  //           type: ActionType.GET_INSTALLATION_BOUGHT_FROM_DATA_FAILURE,
  //           payload: error,
  //           message: 'Failed to fatch data'
  //         })
  //       })
  //   }
  // }


  // static GetInstallationAreaCityAction() {
  //   return (dispatch) => {
  //     dispatch({ type: ActionType.GET_INSTALLATION_AREA_CITY_DATA });
  //     return GetDataMiddleware.getInstallataionAreaCityMiddleware()
  //       .then((result) => {
  //         dispatch({
  //           type: ActionType.GET_INSTALLATION_AREA_CITY_DATA_SUCCESS,
  //           payload: result
  //         })
  //       })
  //       .catch((error) => {
  //         return dispatch({
  //           type: ActionType.GET_INSTALLATION_AREA_CITY_DATA_FAILURE,
  //           payload: error,
  //           message: 'Failed to fatch data'
  //         })
  //       })
  //   }
  // }


  // static GetInstallationHomeTypeAction() {
  //   return (dispatch) => {
  //     dispatch({ type: ActionType.GET_INSTALLATION_HOME_TYPE_DATA });
  //     return GetDataMiddleware.getInstallataionHomeTypeMiddleware()
  //       .then((result) => {
  //         dispatch({
  //           type: ActionType.GET_INSTALLATION_HOME_TYPE_DATA_SUCCESS,
  //           payload: result
  //         })
  //       })
  //       .catch((error) => {
  //         return dispatch({
  //           type: ActionType.GET_INSTALLATION_HOME_TYPE_DATA_FAILURE,
  //           payload: error,
  //           message: 'Failed to fatch data'
  //         })
  //       })
  //   }
  // }


  // static GetInstallationOurServicesAction() {
  //   return (dispatch) => {
  //     dispatch({ type: ActionType.GET_INSTALLATION_OUR_SERVICES_DATA });
  //     return GetDataMiddleware.getInstallataionOurServicesMiddleware()
  //       .then((result) => {
  //         dispatch({
  //           type: ActionType.GET_INSTALLATION_OUR_SERVICES_DATA_SUCCESS,
  //           payload: result
  //         })
  //       })
  //       .catch((error) => {
  //         return dispatch({
  //           type: ActionType.GET_INSTALLATION_OUR_SERVICES_DATA_FAILURE,
  //           payload: error,
  //           message: 'Failed to fatch data'
  //         })
  //       })
  //   }
  // }


  // static GetInstallationTamkeenPoliciesAction() {
  //   return (dispatch) => {
  //     dispatch({ type: ActionType.GET_INSTALLATION_TAMKEEN_POLICIES_DATA });
  //     return GetDataMiddleware.getInstallataionTamkeenPoliciesMiddleware()
  //       .then((result) => {
  //         dispatch({
  //           type: ActionType.GET_INSTALLATION_TAMKEEN_POLICIES_DATA_SUCCESS,
  //           payload: result
  //         })
  //       })
  //       .catch((error) => {
  //         return dispatch({
  //           type: ActionType.GET_INSTALLATION_TAMKEEN_POLICIES_DATA_FAILURE,
  //           payload: error,
  //           message: 'Failed to fatch data'
  //         })
  //       })
  //   }
  // }
}


export { InstallationGetDATA };