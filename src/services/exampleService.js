// This file is used to illustrate how to make a sample API request using React-Query. More Details can be found in API_INTEGRATION.md  
import Api from "utils/Api";
import handleApiError from "utils/handleApiError";

const getAwardedProcurements = async (key, params) => {
  try {
    const response = await Api.get("contracts/awardedProcurements", { params });
    return response.data;
  } catch (e) {
    throw new Error(handleApiError(e));
  }
};

const exampleService = {
  getAwardedProcurements,
};

export default exampleService;
