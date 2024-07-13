import React from 'react';
import usePayment from '../hooks/usePayment';

const paymentTable = () => {
  const { paymentData } = usePayment();

  return (
    <div className='w-screen  '>
      <table className=' mt-6 lg:w-[77%] 2xl:w-[82%] xl:w-[80%] '>
        <tr>
          <div className='bg-secondary__fill font-thin text-white flex justify-around  lg:h-12'>
            <th className=' mt-2'>Name</th>
            <th className=' mt-2'>Transaction id </th>
            <th className=' mt-2'>Payment Type</th>
            <th className=' mt-2'>Date</th>
            <th className=' mt-2'>Plan Amount</th>
            <th className=' mt-2'>Plan Valid</th>
          </div>
        </tr>
        <tr>
          {paymentData &&
            paymentData.map((data, index) => {
              return (
                <div key={index}>
                  <div className='flex justify-around text-grey__primary__light lg:h-12'>
                    <td className='2xl:mt-3 mt-2'>{data.name}</td>
                    <td className='2xl:mt-3 mt-2'>{data.transectionId}</td>
                    <td className='text-left 2xl:mt-3 mt-2'>
                      {data.paymentType}
                    </td>
                    <td className='text-left 2xl:mt-3 mt-2'>{data.date}</td>
                    <td className='text-left 2xl:mt-3 mt-2'>
                      {data.planAmount}
                    </td>
                    <td className='text-left 2xl:mt-3 mt-2'>
                      {data.planValid}
                    </td>
                  </div>
                  <hr className=' opacity-20' />
                </div>
              );
            })}
        </tr>
      </table>
    </div>
  );
};

export default paymentTable;
