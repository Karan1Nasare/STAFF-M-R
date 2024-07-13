import React, { useEffect, useState } from 'react';

const usePayment = () => {
  const [paymentData, setPaymentData] = useState([]);

  const fetchData = async () => {
    const record = Array.from({ length: 6 }, (_, index) => ({
      name: `Plan ${index}`,
      transectionId: '123456789',
      paymentType: 'Google Pay',
      date: '06-12-2023',
      planAmount: '999',
      planValid: '200 Day left',
    }));

    setPaymentData(record);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log('error while fetching notifications', error);
    }
  }, []);
  return { paymentData };
};

export default usePayment;
