import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
const CustomIput = styled(TextField)({
    '& .MuiOutlinedInput-root': {
     
      '& fieldset': {
        borderColor: 'rgba(0, 0, 0, 0.23)',
        borderWidth:"1px",

      },
<<<<<<< HEAD
      '&:hover fieldset': {
        borderColor: 'rgba(0, 0, 0, 0.23)',
=======
      '& input':{
         padding: "12.5px 14px",
>>>>>>> f27de20b46f2646abceb9769dac79969a82bf6b7
      },
      
      '&.Mui-focused fieldset': {
<<<<<<< HEAD
        borderColor: 'rgba(0, 0, 0, 0.23)',
      },
      '&.Mui-disabled fieldset': {
        borderColor: 'rgba(0, 0, 0, 0.23)',
        cursor: "not-allowed"
      },
      '&.Mui-error fieldset': {
        borderColor: '#f44336',
=======
        borderColor: '#d3d6da',
        borderWidth:"1px"

>>>>>>> f27de20b46f2646abceb9769dac79969a82bf6b7
      },
      
    },
  });

export default CustomIput;