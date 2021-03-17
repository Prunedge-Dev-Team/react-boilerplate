// This file contains configuration for handling error states from API after a request fails.

const handleApiError = (error) => {
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line
    console.warn("[Axios Error]", error, error.response);
  }
  if (!error.response) return "Something went wrong";
  const { response } = error;
  const { data } = response;

  switch (response.status) {
    case 400:
      return data.message || "Something went wrong";
    case 404:
      return data.message || "Resource not found";
    case 409:
      return "A duplicate already eists";
    default:
      return "Something went wrong";
  }
};

export default handleApiError;
