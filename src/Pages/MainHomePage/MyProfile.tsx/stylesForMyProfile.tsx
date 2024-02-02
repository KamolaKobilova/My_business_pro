import styled from "styled-components";
export const Back = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  background-color: #ebe8fd;
`;

export const Container = styled.div`
  display: flex;
  max-width: 1500px;
  height: 700px;
  margin: 20px auto;
  border: 1px solid white;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 10px 5px #eeeeee;
`;

export const ProfileSide = styled.div`
    display:flex:
    flex-direction:column;
    padding:20 10px;
    margin-top:60px;
    width:400px;
.img-block{
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:10px

}

.button-block{
    margin:70px 0 0 30px;
}
`;

export const Button = styled.div<{ active: boolean }>`
  width: 300px;
  height: 20px;
  background-color: ${(props) => (props.active ? "#eeeeee" : "white")};
  border: ${(props) =>
    props.active ? "1px solid #dbd9d9" : " 1px solid white"};
  /* text-align: center; */
  padding: 8px 0 8px 20px;
  align-items: center;
`;

export const ScrollingBlockWrp = styled.div`
  width: 920px;
  height: 550px;
  margin: 80px 0 0 50px;
  border-radius: 30px;
  box-shadow: 0 0 10px 5px #eeeeee;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  .header {
    background-color: #eeeeee;
    padding: 20px;
    border-radius: 15px 15px 0 0;
  }
`;

export const ScrollingBlock = styled.div`
  width: 850px;
  height: auto;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 10px 25px;
`;

export const ScrollingBlockContent = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #ccc;

  gap: 30px;
`;
