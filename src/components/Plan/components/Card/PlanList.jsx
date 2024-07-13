import React, { useState } from 'react';
import { Grid } from '@mui/material';

import PlanCard from './PlanCard';

function PlanList({ currentItems }) {
  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{ marginTop: '20px', paddingBottom: '50px' }}
      >
        {currentItems &&
          currentItems.map((plan, index) => {
            return (
              <Grid item md={4} key={index}>
                <PlanCard plan={plan} />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}

export default PlanList;
