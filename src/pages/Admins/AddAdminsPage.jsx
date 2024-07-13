import { Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form';
import AdminDetailsTab from '../../components/Admins/Tabs/AdminDetailsTab';
import ArrowRight from '../../assets/icon/Arrow Right.svg';
import { FormProvider } from '../../hooks/hook-form';
import InvoiceTab from '../../components/Admins/Tabs/InvoiceTab';
import BillingTab from '../../components/Admins/Tabs/BillingTab';
import SelectPlanTab from '../../components/Admins/Tabs/SelectPlanTab';
import SelectFeatureTab from '../../components/Admins/Tabs/SelectFeatureTab';
import AddStudentTab from '../../components/Admins/Tabs/AddStudentTab';
import Button from '../../components/shared/buttons/Button';

const AdminTabs = activeTab => {
  const TabsList = {
    1: <AdminDetailsTab />,
    2: <AddStudentTab />,
    3: <SelectPlanTab />,
    4: <SelectFeatureTab />,
    5: <InvoiceTab />,
    6: <BillingTab />,
  };

  return TabsList[activeTab];
};

const AddAdminsPage = () => {
  const [Tabvalue, setTabValue] = useState(1);
  const [formcomplete, setformcomplete] = useState({});
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const onSubmit = async data => {
    setformcomplete({ [Tabvalue]: true });
    setTabValue(prv => prv + 1);
    console.debug('onSubmit', data);
  };
  const methods = useForm();
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  function handlebackbtn() {
    setTabValue(prv => prv - 1);
  }
  return (
    <div>
      <Tabs
        value={Tabvalue}
        onChange={handleChange}
        aria-label='icon position tabs example'
      >
        <Tab
          icon={<Icon icon='gg:profile' width={25} />}
          iconPosition='start'
          label='Admin Details'
          sx={{ gap: '15px' }}
          value={1}
        />
        <Tab
          icon={<Icon icon={'flowbite:user-add-solid'} width={25} />}
          iconPosition='start'
          label='Add Student'
          sx={{ gap: '15px' }}
          value={2}
        />
        <Tab
          icon={<Icon icon={'oui:page-select'} width={25} />}
          iconPosition='start'
          label='Select Plan'
          sx={{ gap: '15px' }}
          value={3}
        />
        <Tab
          icon={<Icon icon={'pajamas:issue-type-feature'} width={25} />}
          iconPosition='start'
          label='Select Features'
          sx={{ gap: '15px' }}
          value={4}
        />
        <Tab
          icon={<Icon icon={'hugeicons:invoice-02'} width={25} />}
          iconPosition='start'
          label='Invoice'
          sx={{ gap: '15px' }}
          value={5}
        />
        <Tab
          icon={<Icon icon={'material-symbols:payments-sharp'} width={25} />}
          iconPosition='start'
          label='Billing'
          sx={{ gap: '15px' }}
          value={6}
        />
      </Tabs>
      <div>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          {AdminTabs(Tabvalue)}
          <div
            className={`flex  ${Tabvalue === 1 ? 'justify-end' : 'justify-between'}`}
          >
            {Tabvalue !== 1 && (
              <Button
                type='button'
                variant='contained'
                color='primary'
                disabled={isSubmitting}
                onClick={handlebackbtn}
                sx={{ mt: 3, background: 'white', color: '#000' }}
                startIcon={
                  <img src={ArrowRight} alt='next' className='rotate-180' />
                }
              >
                Pervious
              </Button>
            )}
            <Button
              type='submit'
              variant='contained'
              color='primary'
              disabled={isSubmitting}
              sx={{ mt: 3, background: 'white', color: '#000' }}
              endIcon={<img src={ArrowRight} alt='next' />}
            >
              Next
            </Button>
          </div>
        </FormProvider>
      </div>
    </div>
  );
};

export default AddAdminsPage;
