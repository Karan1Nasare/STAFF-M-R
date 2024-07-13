import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import BasicDetails from './BasicDetails';
import Videos from './Videos';
import Images from './Images';
import ThreedModel from './ThreedModel';
import Documents from './Documents';
import QuestionBank from './QuestionBank';
import ArrowRight from '../../assets/icon/Arrow Right.svg';
import './styles/tabsStyles.css';
import MaxWidthDialog from './Preview';
import MaterialPreview from './MaterialPreview';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabContainer() {
  const tabCountIdx = 5;
  const [value, setValue] = useState(0);
  const [files, setFiles] = useState([
    { file: {}, src: '' },
    { file: {}, src: '' },
  ]);
  const [thumbnailImage, setThumbnailImage] = useState({ files: {}, src: '' });
  const [thumbnailVideo, setThumbnailVideo] = useState({ files: {}, src: '' });
  const [isUpload, setUpload] = useState(false);
  const [isVideoUpload, setVideoUpload] = useState(false);
  const [title, setTitle] = useState('');
  const [error, setError] = useState({});
  const [details, setDetails] = useState('');
  const [fistStepFinished, setFistStepFinished] = useState(false);
  const [showPreviewDialog, setShowPreviewDialog] = useState(false);
  const submitRef = useRef();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onNextButtonHandler = () => {
    if (value < tabCountIdx) setValue(value + 1);
    if (tabCountIdx === value) {
      setShowPreviewDialog(true);
    }
    // handleChange();
  };

  const onPreviousChangeHandler = () => {
    if (value > 0) setValue(value - 1);
  };

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <div className='flex justify-start items-center ml-7'>
          <div className='h-1 w-7 bg-primary rotate-90'></div>
          <Typography variant='h5'>Content</Typography>
        </div>
        <div className=' p-8'>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor='primary'
              indicatorColor='secondary'
              variant='scrollable'
              aria-label='basic tabs example'
            >
              <Tab label='Basic Details' {...a11yProps(0)} />
              <Tab label='Videos' {...a11yProps(1)} />
              <Tab label='Images' {...a11yProps(2)} />
              <Tab label='Documents Content' {...a11yProps(3)} />
              <Tab label='Question Bank Content' {...a11yProps(4)} />
              <Tab label='3D Models' {...a11yProps(5)} />
            </Tabs>
          </Box>
          <div className='border-[0.6px] border-dropdown__border rounded-md'>
            <CustomTabPanel value={value} index={0}>
              <BasicDetails
                submitRef={submitRef}
                files={files}
                setFiles={setFiles}
                isUpload={isUpload}
                setUpload={setUpload}
                title={title}
                setTitle={setTitle}
                setVideoUpload={setVideoUpload}
                isVideoUpload={isVideoUpload}
              />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Videos />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <Images />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <Documents />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
              <QuestionBank />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
              <ThreedModel />
            </CustomTabPanel>
          </div>
        </div>
        <div
          className={
            value > 0 ? 'flex justify-between mt-4' : 'flex justify-end mt-4'
          }
        >
          {value > 0 && (
            <Button
              variant='outline-add-button'
              onClick={onPreviousChangeHandler}
            >
              <img
                src={ArrowRight}
                style={{ marginRight: '1rem', transform: 'rotate(180deg)' }}
              ></img>
              Previous
            </Button>
          )}
          <Button
            variant='outline-add-button'
            onClick={() => onNextButtonHandler()}
          >
            {value === tabCountIdx ? 'Preview' : 'Next'}
            <img src={ArrowRight} style={{ marginLeft: '1rem' }}></img>
          </Button>
        </div>
      </Box>
      <MaterialPreview
        handleClose={() => setShowPreviewDialog(false)}
        open={showPreviewDialog}
      />
    </>
  );
}
