class GetDataMiddleware {
  // static getInstallataionTypeMiddleware = async () => {
  //   console.log('middleare calling')
  //   try {
  //     const result = await fetch('http://tamkeenstore.com.sa/installationflowapi/installation/read.php')
  //       .then(res => console.log(res))
  //       .catch(err => console.log(err));
  //     console.log('abc>>>', result)
  //     if (result && result.status === 'success') {
  //       return { 'installationType': result.document.records }
  //     } else {
  //       throw 'Failed to fatch data'
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // }



  static getInstallataionCategoryMiddleware = async () => {
    try {
      const result = await fetch('http://tamkeenstore.com.sa/installationflowapi/categories/read.php')
        .then(res => res.json())
        .catch(err => console.log(err));
      if (result && result.status === 'success') {
        return { 'installationCategories': result.document.records }
      } else {
        throw 'Failed to fatch data'
      }
    } catch (error) {
      throw error;
    }
  }

  // static getInstallataionSubCategoryMiddleware = async () => {
  //   try {
  //     const result = await fetch('http://tamkeenstore.com.sa/installationflowapi/sub_category/read.php')
  //       .then(res => res.json())
  //       .catch(err => console.log(err));
  //     if (result && result.status === 'success') {
  //       return { 'installationsSubCategory': result.document.records }
  //     } else {
  //       throw 'Failed to fatch data'
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // }


  // static getInstallataionBoughtFromMiddleware = async () => {
  //   try {
  //     const result = await fetch('http://tamkeenstore.com.sa/installationflowapi/bought_from/read.php')
  //       .then(res => res.json())
  //       .catch(err => console.log(err));
  //     if (result && result.status === 'success') {
  //       return { 'installationsBoughtFrom': result.document.records }
  //     } else {
  //       throw 'Failed to fatch data'
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // }


  // static getInstallataionAreaCityMiddleware = async () => {
  //   try {
  //     const result = await fetch('http://tamkeenstore.com.sa/installationflowapi/area_city/read.php')
  //       .then(res => res.json())
  //       .catch(err => console.log(err));
  //     if (result && result.status === 'success') {
  //       return { 'installationsAreaCity': result.document.records }
  //     } else {
  //       throw 'Failed to fatch data'
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // }


  // static getInstallataionHomeTypeMiddleware = async () => {
  //   try {
  //     const result = await fetch('http://tamkeenstore.com.sa/installationflowapi/location/read.php')
  //       .then(res => res.json())
  //       .catch(err => console.log(err));
  //     if (result && result.status === 'success') {
  //       return { 'installationsHomeType': result.document.records }
  //     } else {
  //       throw 'Failed to fatch data'
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // }


  // static getInstallataionOurServicesMiddleware = async () => {
  //   try {
  //     const result = await fetch('http://tamkeenstore.com.sa/installationflowapi/our_services/read.php')
  //       .then(res => res.json())
  //       .catch(err => console.log(err));
  //     if (result && result.status === 'success') {
  //       return { 'installationsOurServices': result.document.records }
  //     } else {
  //       throw 'Failed to fatch data'
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // }


  // static getInstallataionTamkeenPoliciesMiddleware = async () => {
  //   try {
  //     const result = await fetch('http://tamkeenstore.com.sa/installationflowapi/tamkeen_policies/read.php')
  //       .then(res => res.json())
  //       .catch(err => console.log(err));
  //     if (result && result.status === 'success') {
  //       return { 'installationsTamkeenPolicies': result.document.records }
  //     } else {
  //       throw 'Failed to fatch data'
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // }

}

export { GetDataMiddleware };