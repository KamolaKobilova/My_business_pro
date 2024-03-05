import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
`;
export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px 5px #eeeeee;
  border-radius: 10px;
  border: none;
  width: 350px;
  height: 800px;
  margin: 80px 0 0 20px;
  padding: 0 10px;
  .header {
    margin: 10px 0 10px 0;
    border-bottom: 1px solid #eeeeee;
    padding: 0 0 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const StaffBUtton = styled.button`
  width:30px;
  height:30px;
  display:flex:
  align-items:center;
  color:white;
  background-color:#4f4a7b;
  border:none;
  border-radius:5px;
  font-size:25px;
`;
export const StaffUser = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.active ? "#f8f8f8" : "white")};
  border: ${(props) =>
    props.active ? "1px solid #dbd9d9" : " 1px solid white"};
  padding: 10px;
  border-radius: 6px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 40px;
  }
  .staff-user-text {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-left: 10px;
    flex: 1;
  }
`;
