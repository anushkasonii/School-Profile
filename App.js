import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';
import Select from 'react-select';
import Chip from '@mui/material/Chip';
import { Box, TextField, InputAdornment, Button } from '@mui/material';
import './App.css';
import LocationOn from '@mui/icons-material/LocationOn';




function AdminDashboardForm() {
const [formData, setFormData] = useState({
  schoolName: '',
  aboutSchool: '',
  googleLocation: '',
  city:'',
  state:'',
  contactNumber: '',
  Name: '',
  enrolled:'',
  programs: [],
  facilities: [],
  services: [],
  amenities: [],
  extraCurricular: [],
  additionalOptions: '',
  virtualTour: '',
  socialMedia:'',
});






const [errors, setErrors] = useState({
  contactNumber: '',
});




const handleContactNumberChange = (event) => {
  const contactNumber = event.target.value;
  const isValid = validateContactNumber(contactNumber);
  setFormData({ ...formData, contactNumber });
  setErrors({ ...errors, contactNumber: isValid ? '' : 'Please enter the right number' });
};




const validateContactNumber = (contactNumber) => {
  const regex = /^[6-9]\d{9}$/;
  return regex.test(contactNumber);
};






const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const programOptions = [
 { value: 'Infant Care Program (0-12 Months)', label: 'Infant Care Program (0-12 Months)' },
 { value: 'Toddler Program (1-3 Years)', label: 'Toddler Program (1-3 Years)' },
 { value: 'Preschool Program (3-5 Years)', label: 'Preschool Program (3-5 Years)' },
 { value: 'Pre-Kindergarten Program (4-5 Years)', label: 'Pre-Kindergarten Program (4-5 Years)' },
 { value: 'Full-Day Kindergarten Program', label: 'Full-Day Kindergarten Program' },
 { value: 'Before and After-School Care', label: 'Before and After-School Care' },
 { value: 'Summer & Holiday Programs', label: 'Summer & Holiday Programs' },
 { value: 'Language Learning Programs: Chinese, English, Spanish, French', label: 'Language Learning Programs: Chinese, English, Spanish, French' },
 { value: 'Special Needs Support Program', label: 'Special Needs Support Program' }
];

const facilityOptions = [
 { label: 'Facilities', options: [
   { value: 'Spacious Classrooms', label: 'Spacious Classrooms' },
   { value: 'Outdoor Play Area', label: 'Outdoor Play Area' },
   { value: 'STEM Learning Lab', label: 'STEM Learning Lab' },
   { value: 'Library & Reading Nook', label: 'Library & Reading Nook' },
   { value: 'Art & Craft Room', label: 'Art & Craft Room' },
   { value: 'Music & Dance Studio', label: 'Music & Dance Studio' },
   { value: 'Nap Rooms', label: 'Nap Rooms' },
   { value: 'Computer Lab', label: 'Computer Lab' },
   { value: 'Science Experiment Stations', label: 'Science Experiment Stations' },
   { value: 'Indoor Sports Area', label: 'Indoor Sports Area' }
 ]}
 ];
 const servicesOptions =[
 { label: 'Services', options: [
   { value: 'Real-Time Parent Communication', label: 'Real-Time Parent Communication' },
   { value: 'Daily Reports', label: 'Daily Reports' },
   { value: 'Healthy Meal Program', label: 'Healthy Meal Program' },
   { value: 'Child Progress Reports', label: 'Child Progress Reports' },
   { value: 'Digital Attendance and Check-Ins', label: 'Digital Attendance and Check-Ins' },
   { value: 'Automated Billing & Invoicing', label: 'Automated Billing & Invoicing' },
   { value: 'Parent-Teacher Conferences', label: 'Parent-Teacher Conferences' }
 ]}];
 const amenitiesOptions =[
 { label: 'Amenities', options: [
   { value: 'Air-Conditioned Classrooms', label: 'Air-Conditioned Classrooms' },
   { value: 'Child-Safe Furniture', label: 'Child-Safe Furniture' },
   { value: 'First Aid Station', label: 'First Aid Station' },
   { value: 'CCTV Security', label: 'CCTV Security' },
   { value: 'Transport Services', label: 'Transport Services' },
   { value: 'Temperature Monitoring', label: 'Temperature Monitoring' },
   { value: 'Sanitization Stations', label: 'Sanitization Stations' },
   { value: 'Child Safety Protocols', label: 'Child Safety Protocols' }
 ]}];
 const extraCurricularOptions =[
 { label: 'Extra Curricular', options: [
   { value: 'Art & Craft Workshops', label: 'Art & Craft Workshops' },
   { value: 'Music & Dance Classes', label: 'Music & Dance Classes' },
   { value: 'Sports & Physical Activities', label: 'Sports & Physical Activities' },
   { value: 'Yoga & Meditation', label: 'Yoga & Meditation' },
   { value: 'Drama & Theatre', label: 'Drama & Theatre' },
   { value: 'STEM Workshops', label: 'STEM Workshops' },
   { value: 'Language Learning', label: 'Language Learning' },
   { value: 'Robotics & Coding', label: 'Robotics & Coding' }
 ]}];


const handleFormSubmit = (event) => {
 event.preventDefault();
};


return (
 <div className="admin-dashboard-form">
   <h1 style={{ color: 'black',padding:'-10px', fontSize: '26px', fontWeight:'bold'}}>Admin Dashboard Form</h1>
   
   <div style={{ marginBottom: '15px' }}>  </div>
   <form onSubmit={handleFormSubmit} >

    <div className="upper_left_box"style={{ display: 'flex', justifyContent: 'space-between', gap:'20px' }}>
      {/* School Information  */}
   <div className="school-info" style={{ width: "100%", border: '2px solid #cac7c7', borderRadius: '10px', backgroundColor:'#f9f9f9', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
     <div style={{ backgroundColor:'#d0c8d4', borderRadius: '10px' }}>
        <h3 style={{ color: '#656565',padding:'10px', backgroundColor:'#d0c8d4', width: "100%",borderTopLeftRadius: 0, 
        borderTopRightRadius: 0,
        marginTop: '0px', fontSize:'17px', fontWeight:'bold'
        }}>School Information</h3>
    </div>
    <div style={{ marginBottom: '15px' }}>  </div>
  <div>  

  {/* NAME */}
  <Box
      component="form"
      sx={{ '& .MuiTextField-root': {m: 1, width: '61.5ch',marginLeft:3.5}}}
      noValidate
      autoComplete="off"
    >
      <div> 
      <TextField
          id="outlined-multiline-flexible"
          label="Name"
          color='primary'
          multiline
          maxRows={2}
          InputProps={{
            sx: {
              
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1FB892', // Border color when focused
              },
              '& .MuiInputBase-input': {
                color: '#000000', // Default text color
              },
              '&.Mui-focused .MuiInputBase-input': {
                color: '#000000', // Text color when focused
              },
            },
          }}
          InputLabelProps={{
            sx: {
              '&.Mui-focused': {
                color: '#1FB892', // Label color when focused
              },
            },
          }}
        />
      </div>
    </Box>

 {/* PHONE NUMBER             */}
  <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '61.5ch',marginLeft:3.5} }}
      noValidate
      autoComplete="off"
    >
      <div> 
      <TextField
          id="outlined-multiline-flexible"
          label="Phone Number"
          multiline
          maxRows={2}
          InputProps={{
            sx: {
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1FB892', // Border color when focused
              },
              '& .MuiInputBase-input': {
                color: '#000000', // Default text color
              },
              '&.Mui-focused .MuiInputBase-input': {
                color: '#000000', // Text color when focused
              },
            },
          }}
          InputLabelProps={{
            sx: {
              '&.Mui-focused': {
                color: '#1FB892', // Label color when focused
              },
            },
          }}
        />
      </div>
  </Box>
         


          {/* <div className="floating-label">
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleContactNumberChange}
              className="form-control"
              placeholder=" "
            />
            
            <label>Contact Number</label>
          </div> */}

{/* SCHOOL NAME */}
 <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '61.5ch',marginLeft:3.5 } }}
      noValidate
      autoComplete="off"
    >
      <div> 
      <TextField
          id="outlined-multiline-flexible"
          label="School Name"
          multiline
          maxRows={2}
          InputProps={{
            sx: {
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1FB892', // Border color when focused
              },
              '& .MuiInputBase-input': {
                color: '#000000', // Default text color
              },
              '&.Mui-focused .MuiInputBase-input': {
                color: '#000000', // Text color when focused
              },
            },
          }}
          InputLabelProps={{
            sx: {
              '&.Mui-focused': {
                color: '#1FB892', // Label color when focused
              },
            },
          }}
        />
      </div>
  </Box>
  
  {/* TOTAL STUDENTS ENROLLED */}
  <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '61.5ch',marginLeft:3.5 } }}
      noValidate
      autoComplete="off"
    >
      <div> 
      <TextField
          id="outlined-multiline-flexible"
          label="Total Students Enrolled"
          color="primary"
          multiline
          maxRows={2}
          InputProps={{
            sx: {
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1FB892', // Border color when focused
              },
              '& .MuiInputBase-input': {
                color: '#000000', // Default text color
              },
              '&.Mui-focused .MuiInputBase-input': {
                color: '#000000', // Text color when focused
              },
            },
          }}
          InputLabelProps={{
            sx: {
              '&.Mui-focused': {
                color: '#1FB892', // Label color when focused
              },
            },
          }}
        />
      </div>
      
  </Box>
  {/* ABOUT US */}
  <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '61.5ch',marginLeft:3.5 } }}
      noValidate
      autoComplete="off"
    >
      <div> 
      <TextField
          id="outlined-multiline-flexible"
          label="About Us"
          multiline
          rows={4}
          maxRows={4}
          InputProps={{
            sx: {
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1FB892', // Border color when focused
              },
              '& .MuiInputBase-input': {
                color: '#000000', // Default text color
              },
              '&.Mui-focused .MuiInputBase-input': {
                color: '#000000', // Text color when focused
              },
            },
          }}
          InputLabelProps={{
            sx: {
              '&.Mui-focused': {
                color: '#1FB892', // Label color when focused
              },
            },
          }}
        />
      </div>
      
  </Box>
  <div style={{ marginBottom: '-15px' }}>  </div>
  {/* ADD IMAGES */}
  <Box
  component="form"
  sx={{ '& .MuiTextField-root': { m: 1, width: '61.5ch', marginLeft: 3.5 } }}
  noValidate
  autoComplete="off"
>
  <div>
    {/* Label for File Input */}
    <label style={{ margin: '16px 0', display: 'block', marginLeft: 30, fontWeight:'bolder', fontSize:'17px', color:'#656565'}}>
      Add Images
    </label>
    <div style={{ marginBottom: '-12px' }}>  </div>
    {/* File Input */}
    <input
      type="file"
      accept="image/*"
      multiple
      style={{
        margin: '16px 0', // Add some margin
        display: 'block', // Ensure it behaves like a block element
        width: '61.5ch', // Match the width of the TextField
        marginLeft: 30, // Align with the TextField
      }}
      onChange={(e) => {
        const files = e.target.files;
        // Handle the file selection
        console.log(files);
      }}
    />
  </div>
</Box>

    
       </div> 
       </div>

    {/* location details box */}
       <div className="location" style={{ width: '100%', border: '2px solid #cac7c7', borderRadius: '10px', backgroundColor: '#f9f9f9', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
     <div style={{ backgroundColor:'#d0c8d4', borderRadius: '10px' }}>
        <h3 style={{ color: '#656565',padding:'10px', backgroundColor:'#d0c8d4', width: "100%",fontSize:'17px', fontWeight:'bold' }}>Location Details</h3>
        </div>
    <div className="formGrid-container"></div>

    <div style={{ marginBottom: '15px' }}>  </div>
    {/* GOOGLE LOCATION */}
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '61ch',marginLeft:4 } }}
      noValidate
      autoComplete="off"
    >
      <div> 
      <TextField
      disabled
          id="outlined-disabled"
          label="Google Location"
          multiline
          maxRows={4}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOn />
              </InputAdornment>
            ),
          }}
        />
      </div>
  </Box>
         

    {/* CITY */}
     <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '61ch',marginLeft:4 } }}
      noValidate
      autoComplete="off"
    >
      <div> 
      <TextField
          id="outlined-multiline-flexible"
          label="City"
          multiline
          maxRows={4}
          InputProps={{
            sx: {
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1FB892', // Border color when focused
              },
              '& .MuiInputBase-input': {
                color: '#000000', // Default text color
              },
              '&.Mui-focused .MuiInputBase-input': {
                color: '#000000', // Text color when focused
              },
            },
          }}
          InputLabelProps={{
            sx: {
              '&.Mui-focused': {
                color: '#1FB892', // Label color when focused
              },
            },
          }}
        />
      </div>
  </Box>
   {/* STATE       */}
  <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '61ch',marginLeft:4 } }}
      noValidate
      autoComplete="off"
    >
      <div> 
      <TextField
          id="outlined-multiline-flexible"
          label="State"
          multiline
          maxRows={4}
          InputProps={{
            sx: {
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1FB892', // Border color when focused
              },
              '& .MuiInputBase-input': {
                color: '#000000', // Default text color
              },
              '&.Mui-focused .MuiInputBase-input': {
                color: '#000000', // Text color when focused
              },
            },
          }}
          InputLabelProps={{
            sx: {
              '&.Mui-focused': {
                color: '#1FB892', // Label color when focused
              },
            },
          }}
        />
      </div>
  </Box>
         
       


   </div>
   </div>
   <div classame="upper_right_box"style={{ display: 'flex', justifyContent: 'space-between', gap:'20px', paddingTop:'20px'}}>
     {/* Right Container for Large Box */}
     <div className="about school" style={{ width: '100%', border: '2px solid #cac7c7', borderRadius: '10px', backgroundColor: '#f9f9f9',  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)'}}>
     <div style={{ backgroundColor:'#d0c8d4', borderRadius: '10px' }}>
        <h3 style={{ color: '#656565',padding:'10px', backgroundColor:'#d0c8d4', width: "100%",fontSize:'17px', fontWeight:'bold' }}>About School</h3>
        </div>
    <div className="formGrid-container">
    <div style={{ marginBottom: '10px' }}>  </div>

          {/* PROGRAMS */}
    <div className="form-group">
  <Autocomplete
    multiple
    id="programs"
    options={programOptions}
    getOptionLabel={(option) => option.label}
    value={formData.programs}
    onChange={(event, value) => setFormData({ ...formData, programs: value })}
    renderTags={(value, getTagProps) =>
      value.map((option, index) => (
        <Chip label={option.label} {...getTagProps({ index })} />
      ))
    }
    
    renderInput={(params) => (
      <TextField
        {...params}
        label="Programs"
        placeholder="Select Programs"
        InputProps={{
          ...params.InputProps, // Ensure to spread the existing InputProps
          sx: {
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#1FB892', // Border color when focused
            },
            '& .MuiInputBase-input': {
              color: '#000000', // Default text color
            },
            '&.Mui-focused .MuiInputBase-input': {
              color: '#000000', // Text color when focused
            },
          },
        }}
        InputLabelProps={{
          sx: {
            '&.Mui-focused': {
              color: '#1FB892', // Label color when focused
            },
          },
        }}
      />
    )}
    sx={{
      '& .MuiTextField-root': {
        m: 1,
        width: '54.73ch',
        marginLeft: 3.5,
      },
    }}
  />
</div>


     <div style={{ marginBottom: '1px' }}>  </div>
     {/* FACILITIES */}
     <div className="form-group">
       <Autocomplete
         multiple
         id="facilities"
         options={facilityOptions[0].options}
         getOptionLabel={(option) => option.label}
         value={formData.facilities}
         onChange={(event,value) => setFormData({ ...formData, facilities: value })}
         renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip label={option.label} {...getTagProps({ index })} />
          ))
        }
        
        renderInput={(params) => (
          <TextField 
          {...params} 
          label="Facilities" 
          placeholder="Select Facilities"
          
          InputProps={{
            ...params.InputProps, // Ensure to spread the existing InputProps
            sx: {
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1FB892', // Border color when focused
              },
              '& .MuiInputBase-input': {
                color: '#000000', // Default text color
              },
              '&.Mui-focused .MuiInputBase-input': {
                color: '#000000', // Text color when focused
              },
            },
          }}
          InputLabelProps={{
            sx: {
              '&.Mui-focused': {
                color: '#1FB892', // Label color when focused
              },
            },
          }}
        />
      )}
      sx={{
        '& .MuiTextField-root': {
          m: 1,
          width: '54.73ch',
          marginLeft: 3.5,
        },
      }}
    />
  </div>
     <div style={{ marginBottom: '1px' }}>  </div>

     {/* SERVICES */}
     <div className="form-group">
     <Autocomplete
        multiple
        id="services"
        options={servicesOptions[0].options}
        getOptionLabel={(option) => option.label}
        value={formData.services}
        onChange={(event, value) => setFormData({ ...formData, services: value })}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip label={option.label} {...getTagProps({ index })} />
          ))
        }
        
        renderInput={(params) => (
          <TextField 
          {...params} 
          label="Services" 
          placeholder="Select Services" 
          InputProps={{
            ...params.InputProps, // Ensure to spread the existing InputProps
            sx: {
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1FB892', // Border color when focused
              },
              '& .MuiInputBase-input': {
                color: '#000000', // Default text color
              },
              '&.Mui-focused .MuiInputBase-input': {
                color: '#000000', // Text color when focused
              },
            },
          }}
          InputLabelProps={{
            sx: {
              '&.Mui-focused': {
                color: '#1FB892', // Label color when focused
              },
            },
          }}
        />
      )}
      sx={{
        '& .MuiTextField-root': {
          m: 1,
          width: '54.73ch',
          marginLeft: 3.5,
        },
      }}
    />
  </div>


     <div style={{ marginBottom: '1px' }}>  </div>
     {/* AMENITIES */}
     <div className="form-group">
       
     <Autocomplete
        multiple
        id="amenities"
        options={amenitiesOptions[0].options}
        getOptionLabel={(option) => option.label}
        value={formData.amenities}
        onChange={(event, value) => setFormData({ ...formData, amenities: value })}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip label={option.label} {...getTagProps({ index })} />
          ))
        }
        
        renderInput={(params) => (
          <TextField 
          {...params} 
          label="Amenities" 
          placeholder="Select Amenities" 
          InputProps={{
            ...params.InputProps, // Ensure to spread the existing InputProps
            sx: {
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1FB892', // Border color when focused
              },
              '& .MuiInputBase-input': {
                color: '#000000', // Default text color
              },
              '&.Mui-focused .MuiInputBase-input': {
                color: '#000000', // Text color when focused
              },
            },
          }}
          InputLabelProps={{
            sx: {
              '&.Mui-focused': {
                color: '#1FB892', // Label color when focused
              },
            },
          }}
        />
      )}
      sx={{
        '& .MuiTextField-root': {
          m: 1,
          width: '54.73ch',
          marginLeft: 3.5,
        },
      }}
    />
  </div>


     <div style={{ marginBottom: '1px' }}>  </div>
     {/* EXTRA CURRICULAR */}
     <div className="form-group">
      
     <Autocomplete
        multiple
        id="extraCurricular"
        options={extraCurricularOptions[0].options}
        getOptionLabel={(option) => option.label}
        value={formData.extraCurricular}
        onChange={(event, value) => setFormData({ ...formData, extraCurricular: value })}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip label={option.label} {...getTagProps({ index })} />
          ))
        }
        
        renderInput={(params) => (
          <TextField 
          {...params} 
          label="Extra Curricular" placeholder="Select Extra Curricular Activities" 
          InputProps={{
            ...params.InputProps, // Ensure to spread the existing InputProps
            sx: {
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1FB892', // Border color when focused
              },
              '& .MuiInputBase-input': {
                color: '#000000', // Default text color
              },
              '&.Mui-focused .MuiInputBase-input': {
                color: '#000000', // Text color when focused
              },
            },
          }}
          InputLabelProps={{
            sx: {
              '&.Mui-focused': {
                color: '#1FB892', // Label color when focused
              },
            },
          }}
        />
      )}
      sx={{
        '& .MuiTextField-root': {
          m: 1,
          width: '54.73ch',
          marginLeft: 3.5,
        },
      }}
    />
  </div>
    </div>
    <div style={{ marginBottom: '4px' }}>  </div>
    {/* ADDITIONAL OPTIONS */}
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '61.5ch',marginLeft:3.5 } }}
      noValidate
      autoComplete="off"
    >
      <div> 
      <TextField
          id="outlined-multiline-flexible"
          label="Additional Options"
          color="primary"
          multiline
          maxRows={2}
          InputProps={{
            sx: {
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1FB892', // Border color when focused
              },
              '& .MuiInputBase-input': {
                color: '#000000', // Default text color
              },
              '&.Mui-focused .MuiInputBase-input': {
                color: '#000000', // Text color when focused
              },
            },
          }}
          InputLabelProps={{
            sx: {
              '&.Mui-focused': {
                color: '#1FB892', // Label color when focused
              },
            },
          }}
        />
      </div>
  </Box>
  <div style={{ marginBottom: '10px' }}>  </div>
  
   </div>
  


  {/* social media box */}
    <div className="social media" style={{ width: '100%', border: '2px solid #cac7c7', borderRadius: '10px', backgroundColor: '#f9f9f9', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)'}}>
     <div style={{ backgroundColor:'#d0c8d4', borderRadius: '10px' }}>
        <h3 style={{ color: '#656565',padding:'10px', backgroundColor:'#d0c8d4', width: "100%",fontSize:'17px', fontWeight:'bold' }}>Social Media</h3>
        </div>
        
    <div style={{ marginBottom: '15px' }}>  </div>

  <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '61.5ch',marginLeft:3.5 } }}
      noValidate
      autoComplete="off"
    >
      <div> 
      <TextField
          id="outlined-multiline-flexible"
          label="Facebook"
          color="primary"
          placeholder='Enter Facebook Account Link'
          multiline
          maxRows={2}
          InputProps={{
            sx: {
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1FB892', // Border color when focused
              },
              '& .MuiInputBase-input': {
                color: '#000000', // Default text color
              },
              '&.Mui-focused .MuiInputBase-input': {
                color: '#000000', // Text color when focused
              },
            },
          }}
          InputLabelProps={{
            sx: {
              '&.Mui-focused': {
                color: '#1FB892', // Label color when focused
              },
            },
          }}
        />
      </div>
  </Box>
  <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '61.5ch',marginLeft:3.5 } }}
      noValidate
      autoComplete="off"
    >
      <div> 
      <TextField
          id="outlined-multiline-flexible"
          label="Instagram"
          placeholder='Enter Instagram Account Link'
          color="primary"
          multiline
          maxRows={2}
          InputProps={{
            sx: {
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1FB892', // Border color when focused
              },
              '& .MuiInputBase-input': {
                color: '#000000', // Default text color
              },
              '&.Mui-focused .MuiInputBase-input': {
                color: '#000000', // Text color when focused
              },
            },
          }}
          InputLabelProps={{
            sx: {
              '&.Mui-focused': {
                color: '#1FB892', // Label color when focused
              },
            },
          }}
        />
      </div>
  </Box>
  <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '61.5ch',marginLeft:3.5 } }}
      noValidate
      autoComplete="off"
    >
      <div> 
      <TextField
          id="outlined-multiline-flexible"
          label="Youtube"
          color="primary"
          placeholder='Enter Youtube Account Link'
          multiline
          maxRows={2}
          InputProps={{
            sx: {
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1FB892', // Border color when focused
              },
              '& .MuiInputBase-input': {
                color: '#000000', // Default text color
              },
              '&.Mui-focused .MuiInputBase-input': {
                color: '#000000', // Text color when focused
              },
            },
          }}
          InputLabelProps={{
            sx: {
              '&.Mui-focused': {
                color: '#1FB892', // Label color when focused
              },
            },
          }}
        />
      </div>
  </Box>
  <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '61.5ch',marginLeft:3.5 } }}
      noValidate
      autoComplete="off"
    >
      <div> 
      <TextField
          id="outlined-multiline-flexible"
          label="Twitter"
          color="primary"
          placeholder='Enter Twitter Account Link'
          multiline
          maxRows={2}
          InputProps={{
            sx: {
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1FB892', // Border color when focused
              },
              '& .MuiInputBase-input': {
                color: '#000000', // Default text color
              },
              '&.Mui-focused .MuiInputBase-input': {
                color: '#000000', // Text color when focused
              },
            },
          }}
          InputLabelProps={{
            sx: {
              '&.Mui-focused': {
                color: '#1FB892', // Label color when focused
              },
            },
          }}
        />
      </div>
  </Box>
  <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '61.5ch',marginLeft:3.5 } }}
      noValidate
      autoComplete="off"
    >
      <div> 
      <TextField
          id="outlined-multiline-flexible"
          label="LinkedIn"
          color="primary"
          placeholder='Enter LinkedIn Account Link'
          multiline
          maxRows={2}
          InputProps={{
            sx: {
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1FB892', // Border color when focused
              },
              '& .MuiInputBase-input': {
                color: '#000000', // Default text color
              },
              '&.Mui-focused .MuiInputBase-input': {
                color: '#000000', // Text color when focused
              },
            },
          }}
          InputLabelProps={{
            sx: {
              '&.Mui-focused': {
                color: '#1FB892', // Label color when focused
              },
            },
          }}
        />
      </div>
  </Box>
  {/* VIRTUAL TOUR */}
  <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '61.5ch',marginLeft:3.5 } }}
      noValidate
      autoComplete="off"
    >
      <div> 
      <TextField
          id="outlined-multiline-flexible"
          label="Virtual Tour - Youtube Link"
          color="primary"
          multiline
          maxRows={2}
          InputProps={{
            sx: {
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1FB892', // Border color when focused
              },
              '& .MuiInputBase-input': {
                color: '#000000', // Default text color
              },
              '&.Mui-focused .MuiInputBase-input': {
                color: '#000000', // Text color when focused
              },
            },
          }}
          InputLabelProps={{
            sx: {
              '&.Mui-focused': {
                color: '#1FB892', // Label color when focused
              },
            },
          }}
        />
      </div>
  </Box>

     </div>
     </div>
    



  
     <div className="btn-primary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
<button type="submit" className="btn-primary" style={{ width: '13%', height: '50px', fontSize: '23px', color: '#fff', margin: '10px', backgroundColor: '#1FB892', padding: '10px', border: 'none', borderRadius: '13px' }}>Submit</button>
</div>
   </form>
 </div>
);
}

 function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '58ch' } }}
      noValidate
      autoComplete="off"
    >
      <div> 
        <TextField id="outlined-search" label="Search field" type="search" />
      </div>
    </Box>
  );
}

export default AdminDashboardForm;
