import React from 'react'
import { Avatar, IconButton, Chip, Typography, Paper, Button } from '@mui/material';
import { Edit as EditIcon, BusinessCenterTwoTone, AddCircleOutline, Add } from '@mui/icons-material';

const PatientDetail = () => {
  return (
    <div className="max-w-[65rem] mx-auto my-8">

      <div className='flex'>
        <Paper elevation={2} className='w-full p-4'>
          <div className="flex justify-between">
            <div className="flex items-center flex-col">

              <div className='flex'>
                <Avatar className="mr-4" />
                <div>
                  <div className='flex'>
                    <Typography variant="h6" className='text-sky-500' >Pet3011 Par3011</Typography>
                    <IconButton color="primary">
                      <EditIcon />
                    </IconButton>
                    <div className="flex items-center ml-2 px-2 h-8 rounded-3xl bg-sky-500 text-white">
                      <Button>
                        <Add />Chart
                      </Button>
                    </div>
                    <div className="flex items-center ml-2 px-2 h-8 rounded-3xl bg-sky-500 text-white">
                      <Button>
                        <Add />Enroll
                      </Button>
                    </div>
                  </div>
                  <Typography variant="body2">Male DOB: 01-Jan-1980 (42 Yrs)</Typography>
                  <Typography variant="body2">Ethnicity: Caucasian (European)</Typography>
                  <Typography variant="body2">Occupation: Management</Typography>
                  <Typography variant="body2">Account #: 14251541825</Typography>
                </div>
              </div>

              <div className="flex justify-between w-full mt-4">
                <div className="text-center border border-sky-500 rounded-md p-1">
                  <Typography variant="body2" className='bg-sky-500 text-white'>Risk</Typography>
                  <div className='pt-1'></div>
                  <Typography variant="body2" className='bg-gray-300'>This Year: N/A</Typography>
                  <div className='pt-1'></div>
                  <Typography variant="body2" className='bg-gray-300 mt-1'>Last Year: N/A</Typography>
                </div>
                <div className="text-center border border-sky-500 rounded-md p-1">
                  <Typography variant="body2" className='bg-sky-500 text-white'>Care Gaps</Typography>
                  <Chip label="3" className='border-1' />
                </div>
                <div className="text-center border border-sky-500 rounded-md p-1">
                  <Typography variant="body2" className='bg-sky-500 text-white'>ASCVD</Typography>
                  <div className='pt-1'></div>

                  <Typography variant="body2" className='bg-gray-300 mt-1'>Current Risk: 2.70</Typography>
                  <div className='pt-1'></div>

                  <Typography variant="body2" className='bg-gray-300'>Lowest Risk: 0.20</Typography>
                </div>
                <div className="text-center border border-sky-500 rounded-md p-1">
                  <Typography variant="body2" className='bg-sky-500 text-white'>SDOH</Typography>
                  <div className='pt-1'></div>

                  <Typography variant="body2" className='bg-gray-300'>This Year: 0.57</Typography>
                  <div className='pt-1'></div>

                  <Typography variant="body2" className='bg-gray-300'>Last Year: 0.60</Typography>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div>
                <Typography variant="body2">Primary: +91 ******16720</Typography>
                <Typography variant="body2">Emergency: +1 ******3210</Typography>
                <Typography variant="body2">Policy Number: 999999999</Typography>
                <Typography variant="body2">Insurer: Medicare</Typography>
              </div>
              <div className="border p-2">
                <Typography variant="body2" className="mb-2">
                  Screenings
                </Typography>
                <ul className="list-disc pl-5 grid grid-cols-2 gap-x-4 gap-y-1">
                  <li>DM</li>
                  <li>BP</li>
                  <li>Depression</li>
                  <li>Colorectal</li>
                  <li>Breast Cancer</li>
                  <li>Fall Risk</li>
                  <li>Tobacco</li>
                </ul>
              </div>
            </div>
          </div>

        </Paper>

        <div className='ml-4'>
          <Paper className="w-60 mb-4" elevation={3}>

            <Typography variant="h6" className='px-2 text-sm bg-sky-500 text-white' gutterBottom>
              <div className='flex justify-between'>
                <BusinessCenterTwoTone />
                Recent Activity
                <AddCircleOutline />
              </div>
            </Typography>
            <Typography variant="body2" className='text-sm p-2'>
              Follow Up
            </Typography>
          </Paper>

          <Paper className="w-60" elevation={3}>

            <Typography variant="h6" className='px-2 text-sm bg-sky-500 text-white' gutterBottom>
              <div className='flex justify-between'>
                <BusinessCenterTwoTone />
                Latest Note
                <AddCircleOutline />
              </div>
            </Typography>

            <Typography variant="body2" className='text-sm p-2'>
              Type of Wellness Exam: IPPE - Welcome to Medicare - Select G0402, G0403, G0404 or G0405...
            </Typography>
          </Paper>
        </div>
      </div >

      <div className="mt-4 grid grid-cols-4 gap-4">
        <Paper className="p-4 border-t-8 border-sky-500 border-l-[1px] border-b-[1px] border-r-[1px]">
          <p className='font-bold'>Primary Physician:</p>
          <p>TEST ONLY</p>
          <p className='font-bold' >Primary Location:</p>
          <p>EBS Demo Facility - 35</p>
          <p className='font-bold'>Referred by:</p>
          <p>Not provided</p>
          <p className='font-bold'>Last Visit:</p>
          <p>15-Nov-2019</p>
          <p className='font-bold'>No of visit:</p>
          <p>7</p>
          <p className='font-bold'>No of Hospitalizations:</p>
          <p>0</p>
          <p color="error">Readmissions:</p>
          <p>Readmissions</p>
        </Paper>
        <Paper className="p-4 border-t-8 border-green-500 border-l-[1px] border-b-[1px] border-r-[1px]">
          <p className='font-bold'>Condition:</p>
          <p>Heart Failure, Hypertension, Ischemic Heart Disease</p>
          <p className='font-bold'>Habits:</p>
          <p>Smoking</p>
          <p className='font-bold'>Vitals: </p>
          <p>BMI: NA, Systolic/Diastolic: 127/84, Glucose: NA, O2 Saturation: NA</p>
          <p className='font-bold'>Lab: </p>
          <p>HDL N/A, LDL N/A, HbA1c N/A</p>
        </Paper>
        <Paper className="p-4 border-orange-500 border-t-8 border-l-[1px] border-b-[1px] border-r-[1px]">
          <p className='font-bold'>Allergy:</p>
          <p>Env (Fungicide), Food (Egg), Food (Tree Nut)</p>
          <p className='font-bold'>Medication:</p>
          <p>DIA-EZE</p>
          <p className='font-bold'>Immunization:</p>
          <p>1122 (dtp)</p>
        </Paper>
        <Paper className="p-4 border-red-500 border-t-8 border-l-[1px] border-b-[1px] border-r-[1px]">
          <p className='font-bold'>Programs: </p>
          <p>Remote Monitoring, Disease Management Program, CCM, AWV...</p>
          <p className='font-bold'>Service Category:</p>
          <p>High Acuity, Straight Medicare</p>
          <p className='font-bold'>Measures:</p>
          <p>Adult Access to Preventive/Ambulatory Health Services ALL, Adult BMI Assessment, Controlling High Blood Pressure with 18-59 years of age</p>
        </Paper>
      </div>
    </div >
  );
};


export default PatientDetail;