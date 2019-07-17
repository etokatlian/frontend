import styled from '@emotion/styled';
import Paper from '@material-ui/core/Paper';

export const StyledFormPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
  padding: 20px;
  min-height: 300px;

  & > form {
    display: flex;
    flex-direction: column;
  }
`;
