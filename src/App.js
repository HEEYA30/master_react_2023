import  styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
  display : flex;
  height : 100vh;
  width : 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const rotateAnimation = keyframes`
  0% {
    transform : rotate(0deg);
    border-raidus: 0px;
  }
  50% {
    transform : rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform : rotate(0deg);
    border-raidus: 0px;
  }
`;

const Title = styled.h1`
  color : ${(props)=>props.theme.textColor};

`;
const Emoji = styled.span`
  font-size: 35px;
`;
const Box = styled.div`

  height : 200px;
  width : 200px;
  background-color : cornflowerblue;
  
  display : flex;
  justify-content: center;
  align-items: center;
  animation:${rotateAnimation} 5s linear infinite;

  // if span대신 다른 태그 쓰고 싶다면??
  /* span {
    font-size : 35px;
    &:active{ // 클릭하고 있을 때. &는 자기자신, 즉 span을 가리킴
      opacity: 0;
    }
  } 
  */
  ${Emoji} {
    &:hover{ // 마우스 갖다댔을 때
      font-size: 100px;
      
    }
  }
`;

function App() {
  return (

      <Wrapper>
        <Box>
       <Emoji as="p">😊</Emoji>
        </Box>
        {/* box 안 emoji가 아니라 스타일 적용 X */}
        <Emoji>❤️</Emoji> 
        <Title>Hello</Title>
      </Wrapper>  
  );
}

export default App;
