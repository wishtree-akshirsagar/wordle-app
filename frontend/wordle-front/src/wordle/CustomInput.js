import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
const CustomTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#FFFFFF',
    },
    '& label.Mui-error': {
        color: '#f44336',
      },
    "&.erroredLabel": {
      color: "#f44336"
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(0, 0, 0, 0.23)',
      },
      '&:hover fieldset': {
        borderColor: '#FFFFFF',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#FFFFFF',
      },
      '&.Mui-disabled fieldset': {
        borderColor: 'rgba(0, 0, 0, 0.23)',
        cursor: "not-allowed"
      },
      '&.Mui-error fieldset': {
        borderColor: '#f44336',
      },
      
    },
  });

export default CustomTextField;