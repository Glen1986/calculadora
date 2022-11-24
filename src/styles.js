import styled from "styled-components";

export const Container = styled.div`
   width:100%;
   height:100vh;
   background-color: #ddd;
   border-radius: 5px;
`;
export const Content = styled.div`
   background-color: #ffffff;
   width:50%;
   min-height: 350px;
   margin:auto;
`;
export const Row = styled.div`
   display:flex;
   flex-direction:row;
   justify-content: space-between;
`;
export const Column = styled.div`
   display:flex;
   flex-direction: column;
   justify-content: space-between;
`;

