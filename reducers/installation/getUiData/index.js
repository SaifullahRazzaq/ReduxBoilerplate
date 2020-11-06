import { ActionType } from '../../../constant';

const initialState = {
  // getInstallationType: {},
  getInstallationCategory: {},
  // getInstallationSubCategory: {},
  // getInstallationBoughtFrom: {},
  // getInstallationAreaCity: {},
  // getInstallationHomeType: {},
  // getInstallationOurServices: {},
  // getInstallationTamkeenPolicies: {},


  // error_getInstallationType: null,
  error_getInstallationCategory: null,
  // error_getInstallationSubCategory: null,
  // error_getInstallationBoughtFrom: null,
  // error_getInstallationAreaCity: null,
  // error_getInstallationHomeType: null,
  // error_getInstallationOurServices: null,
  // error_getInstallationTamkeenPolicies: null,

  isLoading: false,
  success: null
}

const InstallationReducer = (state = initialState, action) => {
  switch (action && action.type) {
    // ===================================================== TYPE========================
    // case ActionType.GET_INSTALLATION_TYPE_DATA:
    //   return {
    //     ...state,
    //     isLoading: true
    //   }
    // case ActionType.GET_INSTALLATION_TYPE_DATA_SUCCESS:
    //   return {
    //     ...state,
    //     error: null,
    //     isLoading: false,
    //     getInstallationType: action.payload
    //   }
    // case ActionType.GET_INSTALLATION_TYPE_DATA_FAILURE:
    //   return {
    //     ...state,
    //     error_getInstallationType: action.message,
    //     isLoading: false,
    //     success: null
    //   }


    //=====================================================CATEGORY ======================

    case ActionType.GET_INSTALLATION_CATEGORY_DATA:
      return {
        ...state,
        isLoading: true
      }
    case ActionType.GET_INSTALLATION_CATEGORY_DATA_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        getInstallationCategory: action.payload
      }
    case ActionType.GET_INSTALLATION_CATEGORY_DATA_FAILURE:
      return {
        ...state,
        error_getInstallationCategory: action.message,
        isLoading: false,
        success: null
      }

    // // // ================================================ SUB CATEGORY=====================


    // case ActionType.GET_INSTALLATION_SUB_CATEGORY_DATA:
    //   return {
    //     ...state,
    //     isLoading: true
    //   }
    // case ActionType.GET_INSTALLATION_SUB_CATEGORY_DATA_SUCCESS:
    //   return {
    //     ...state,
    //     error: null,
    //     isLoading: false,
    //     getInstallationSubCategory: action.payload
    //   }
    // case ActionType.GET_INSTALLATION_SUB_CATEGORY_DATA_FAILURE:
    //   return {
    //     ...state,
    //     error_getInstallationSubCategory: action.message,
    //     isLoading: false,
    //     success: null
    //   }

    // // ================================================ BOUGHT FROM=====================


    // case ActionType.GET_INSTALLATION_BOUGHT_FROM_DATA:
    //   return {
    //     ...state,
    //     isLoading: true
    //   }
    // case ActionType.GET_INSTALLATION_BOUGHT_FROM_DATA_SUCCESS:
    //   return {
    //     ...state,
    //     error: null,
    //     isLoading: false,
    //     getInstallationBoughtFrom: action.payload
    //   }
    // case ActionType.GET_INSTALLATION_BOUGHT_FROM_DATA_FAILURE:
    //   return {
    //     ...state,
    //     error_getInstallationBoughtFrom: action.message,
    //     isLoading: false,
    //     success: null
    //   }

    // // ================================================ AREA CITY=====================


    // case ActionType.GET_INSTALLATION_AREA_CITY_DATA:
    //   return {
    //     ...state,
    //     isLoading: true
    //   }
    // case ActionType.GET_INSTALLATION_AREA_CITY_DATA_SUCCESS:
    //   return {
    //     ...state,
    //     error: null,
    //     isLoading: false,
    //     getInstallationAreaCity: action.payload
    //   }
    // case ActionType.GET_INSTALLATION_AREA_CITY_DATA_FAILURE:
    //   return {
    //     ...state,
    //     error_getInstallationAreaCity: action.message,
    //     isLoading: false,
    //     success: null
    //   }

    // // ================================================ HOME TYPE=====================


    // case ActionType.GET_INSTALLATION_HOME_TYPE_DATA:
    //   return {
    //     ...state,
    //     isLoading: true
    //   }
    // case ActionType.GET_INSTALLATION_HOME_TYPE_DATA_SUCCESS:
    //   return {
    //     ...state,
    //     error: null,
    //     isLoading: false,
    //     getInstallationHomeType: action.payload
    //   }
    // case ActionType.GET_INSTALLATION_HOME_TYPE_DATA_FAILURE:
    //   return {
    //     ...state,
    //     error_getInstallationHomeType: action.message,
    //     isLoading: false,
    //     success: null
    //   }

    // // ================================================ OUR SERVICES=====================


    // case ActionType.GET_INSTALLATION_OUR_SERVICES_DATA:
    //   return {
    //     ...state,
    //     isLoading: true
    //   }
    // case ActionType.GET_INSTALLATION_OUR_SERVICES_DATA_SUCCESS:
    //   return {
    //     ...state,
    //     error: null,
    //     isLoading: false,
    //     getInstallationOurServices: action.payload
    //   }
    // case ActionType.GET_INSTALLATION_OUR_SERVICES_DATA_FAILURE:
    //   return {
    //     ...state,
    //     error_getInstallationOurServices: action.message,
    //     isLoading: false,
    //     success: null
    //   }

    // // ================================================ TAMKEEN POLICIES=====================


    // case ActionType.GET_INSTALLATION_TAMKEEN_POLICIES_DATA:
    //   return {
    //     ...state,
    //     isLoading: true
    //   }
    // case ActionType.GET_INSTALLATION_TAMKEEN_POLICIES_DATA_SUCCESS:
    //   return {
    //     ...state,
    //     error: null,
    //     isLoading: false,
    //     getInstallationOurServices: action.payload
    //   }
    // case ActionType.GET_INSTALLATION_TAMKEEN_POLICIES_DATA_FAILURE:
    //   return {
    //     ...state,
    //     error_getInstallationOurServices: action.message,
    //     isLoading: false,
    //     success: null
    //   }

    default:
      return {
        ...state
      }
  }
}

export { InstallationReducer }