import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  color: #6da29f;
  font-family: "Playfair Display", sans-serif;
  @media (max-width: 800px) {
    margin-top: 100px;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  gap: 20px;
  padding: 20px;
  background-color: #f6f6f3;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
`;

export const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  background-color: #f7f8ef;
  border: 2px solid #6da29f;
  border-radius: 4px;
  color: #6da29f;
  font-weight: bold;

  &::placeholder {
    color: #c0e0de;
    font-weight: 300;
    font-size: 12px;
  }
`;

export const TextArea = styled.textarea`
  padding: 12px;
  font-size: 16px;
  background-color: #f7f8ef;
  border: 2px solid #6da29f;
  border-radius: 5px;
  height: 100px;
  color: #6da29f; 
  font-weight: bold;

   &::placeholder {
    color: #c0e0de;
    font-weight: 300; 
    font-size: 12px;
  }
  }
`;

export const SubmitButton = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  background-color: #6da29f;
  color: white;
  border: none;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 50px;

  &:hover {
    background-color: #f7f8ef;
    border: 2px solid #6da29f;
    color: #6da29f;
  }
`;

export const ErrorText = styled.p`
  color: #ef6363;
  font-size: 12px;
  margin-top: 5px;
`;

export const StyledLabel = styled.label`
  color: #6da29f;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 14px;
`;
