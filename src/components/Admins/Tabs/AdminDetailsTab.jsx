import React from 'react';
import TabTitle from '../../shared/TabTitle';
import AdminDetailsForm from '../Form/AdminDetailsForm';

const AdminDetailsTab = () => {
  return (
    <div>
      <TabTitle title='Admin Personal Details' sx={{ marginTop: '20px' }} />
      <AdminDetailsForm />
    </div>
  );
};

export default AdminDetailsTab;
