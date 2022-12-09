import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
const CustomIput = styled(TextField)({
    '& .MuiOutlinedInput-root': {
     
      '& fieldset': {
        borderColor: 'rgba(0, 0, 0, 0.23)',
        borderWidth:"1px",

      },
      '& input':{
         padding: "12.5px 14px",
      },
      
      '&.Mui-focused fieldset': {
        borderColor: '#d3d6da',
        borderWidth:"1px"

      },
      
    },
  });

export default CustomIput;