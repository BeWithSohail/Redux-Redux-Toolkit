import React from 'react';
import styled from 'styled-components';
// import { FaBeer } from "react-icons/fa";
// import { AiFillAmazonCircle } from "react-icons/ai";
// import SmileOutlined from '@ant-design/icons/SmileOutlined';
// import { AiFillCloseCircle } from "react-icons/ai";
// import { Bs0Square } from "react-icons/bs";
import Addtodos from './components/Addtodo';




const App = () => {
  // Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: #BF4F74;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
padding: 4em;
background: papayawhip;
`;
  
  return (
    <div>
       {/* <Wrapper>
    <Title>
      Hello World!
        </Title>
        <h3> 
          React Icons <FaBeer />?  
        </h3>
        <h4>
          React Icons <AiFillAmazonCircle /> 
        </h4>
        <h4 >
          close circle <AiFillCloseCircle  />
        </h4>

        <h5> 
            Bootstrap  Icons <Bs0Square />
        </h5>

        <h6> 
            Ant Design ICONS     <SmileOutlined />
        </h6>
  </Wrapper> */}
      
    <Addtodos />
    </div>
  )
}

export default App