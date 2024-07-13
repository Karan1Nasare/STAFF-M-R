/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { FiTrash2 } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

function Image({ src, alt, className }) {
  return <img loading='lazy' src={src} alt={alt} className={className} />;
}

const ContentCard = props => {
  const { data, editHandler, deleteHandler, viewHandler } = props;
  return (
    <>
      <section className='justify-center px-7 py-8 rounded-xl border border-gray-700 border-solid bg-secondary__fill max-w-[410px]'>
        <article className='flex gap-5 max-md:flex-col max-md:gap-0 text-start'>
          <div className='flex flex-col w-[71%] max-md:ml-0 max-md:w-full'>
            <div className='flex grow gap-5'>
              <img
                loading='lazy'
                src={data?.image || 'https://via.placeholder.com/150'}
                alt={data?.title}
                className='shrink-0 aspect-square w-[60px] rounded-md'
              />
              <div className='flex flex-col'>
                <h1 className='text-lg font-semibold text-white'>
                  {data?.title}
                </h1>
                <time className='flex gap-2 mt-2.5 text-sm leading-5 text-gray-400'>
                  <Icon icon='ph:calendar-bold' width={20} />
                  <span>{data?.date}</span>
                </time>
              </div>
            </div>
          </div>
          <aside className='flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full'>
            <div className='flex gap-3 self-stretch my-auto'>
              <Icon
                icon='mdi:eye'
                width={20}
                onClick={() => viewHandler(data)}
                className='text-white cursor-pointer'
              />

              <FaRegEdit
                className='text-white cursor-pointer shrink-0 self-start w-5 aspect-square'
                onClick={() => editHandler(data)}
              />

              <FiTrash2
                className='text-red-600 cursor-pointer shrink-0 self-start w-5 aspect-square'
                onClick={() => deleteHandler(data)}
              />
            </div>
          </aside>
        </article>
      </section>
    </>
  );
};

export default ContentCard;
