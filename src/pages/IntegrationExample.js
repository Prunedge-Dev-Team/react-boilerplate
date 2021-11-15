// This file is used to illustrate how to make a sample API request using React-Query. More Details can be found in API_INTEGRATION.md  
import React from "react";
import { useQuery } from "react-query";
import exampleService from "services/exampleService";
import Box from '@mui/material/Box'

function IntegrationExample() {
  const { isLoading, isError, data } = useQuery(
    "awardedProcurements",
    exampleService.getAwardedProcurements
  );

  return (
    <div>
      {isLoading && <div>Loading....</div>}
      {isError && <div>Failed to fetch overview data</div>}
      <Box sx={{ color: 'blue' }}><b>Data from API would be displayed below, if successful: </b></Box>
      <ul>
        {data?.data.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default IntegrationExample;
