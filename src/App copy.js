import  styled from "styled-components";

const Father = styled.div`
  display : flex;
`;

const Box = styled.div`
  background-color : ${props => props.bgColor};
  width : 100px;
  height : 100px;
`;

// const BoxTwo = styled.div`
//   background-color : cadetblue;
//   width: 100px;
//   height : 100px;
// `;

const Text = styled.h1`
  color : cadetblue;
`;

// styled components 확장
const Circle = styled(Box)`

  border-radius : 50px;
`;

const Btn = styled.button`
  color : white;
  background-color : cornflowerblue;
  border : 0px;
  border-radius : 15px;

`;

const Input = styled.input.attrs({required: true, minLength : 10})`
  background-color: cornflowerblue;  
  color: red;
`;



function App() {
  return (
    <Father>
      {/* <Box bgColor="teal"/>
        <Text>Hello</Text>
      <Circle bgColor="cornflowerblue" />
      <Btn>Log in</Btn>
      <Btn as="a" href="/">Log in</Btn> */}
      <Input />
      <Input />
      <Input />
      <Input />

    </Father>
  );
}

export default App;
