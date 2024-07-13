import * as React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import cImg from '../../assets/course.png';

const accordionStyle = {
  backgroundColor: '#0A1931',
  color: 'white',
  borderRadius: '10px',
  '& .MuiAccordionSummary-root': {
    borderBottom: '1px solid white',
  },
  '& .MuiAccordionDetails-root': {
    borderTop: '1px solid white',
  },
};

export default function PreviewAccordion() {
  return (
    <div>
      <Accordion sx={accordionStyle} defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
          aria-controls='panel1-content'
          id='panel1-header'
        >
          <div className='relative flex flex-col items-start  w-full '>
            <div className='absolute w-1 h-7 left-0 top-0 bg-[#F6B336] rounded-full'></div>
            <p className='dark:text-orange ml-2'>Basic Details</p>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className='relative flex flex-row items-start justify-between w-full'>
            <img src={cImg} alt='img-1' height={'150px'} width={'250px'} />
            <img src={cImg} alt='img-2' height={'150px'} width={'250px'} />
          </div>
          <h6 className='mt-1'>STD - 10 Bharat No Varsho</h6>
          <p className='mt-1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
          aria-controls='panel2-content'
          id='panel2-header'
        >
          <div className='relative flex flex-col items-start  w-full '>
            <div className='absolute w-1 h-7 left-0 top-0 bg-[#F6B336] rounded-full'></div>
            <p className='dark:text-orange ml-2'>Courses</p>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
          aria-controls='panel4-content'
          id='panel4-header'
        >
          <div className='relative flex flex-col items-start  w-full '>
            <div className='absolute w-1 h-7 left-0 top-0 bg-[#F6B336] rounded-full'></div>
            <p className='dark:text-orange ml-2'>Courses</p>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
          aria-controls='panel5-content'
          id='panel5-header'
        >
          <div className='relative flex flex-col items-start  w-full '>
            <div className='absolute w-1 h-7 left-0 top-0 bg-[#F6B336] rounded-full'></div>
            <p className='dark:text-orange ml-2'>Question Bank</p>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
          aria-controls='panel5-content'
          id='panel5-header'
        >
          <div className='relative flex flex-col items-start  w-full '>
            <div className='absolute w-1 h-7 left-0 top-0 bg-[#F6B336] rounded-full'></div>
            <p className='dark:text-orange ml-2'>3D Models</p>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
