import styled from "styled-components";
export const Back = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  background-color: #ebe8fd;
`;

export const Container = styled.div<{ variant?: string }>`
  display: flex;
  max-width: ${(props) => (props.variant === "little" ? "1150px " : "1500px")};
  height: auto;
  margin: 80px 20px 20px;
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
.img-block-service{
   display:flex;
    flex-direction:column;
    align-items:center;
    gap:10px

}

.img-block .photo{
  width:70px;
  height:70px;
  border-radius:40px;
  border:1px solid #ddd;
  display:flex;
  align-items:center;
}

.img-block .service-photo {
  width:70px;
  height:60px;
  border:1px solid #ddd;
   display:flex;
}
.service-photo img{
  width:70px;
  height:60px;
}
.img-block img {
  width:70px;
  height:70px;
  border-radius:40px;

}

.placeholder img{
  
  display:flex;
  align-items:center;
}
.service-placeholder img{
width:70px;
height:60px;

}

.button-block{
    margin:70px 0 0 30px;
}
`;

export const Button = styled.div<{ active: boolean; variant?: string }>`
  width: 300px;
  height: 20px;
  background-color: ${(props) => (props.active ? "#f8f8f8" : "white")};
  border: ${(props) =>
    props.active ? "1px solid #dbd9d9" : " 1px solid white"};

  padding: 8px 0 8px 20px;
  align-items: center;
`;

export const ScrollingBlockWrp = styled.div<{ variant?: string }>`
  width: ${(props) => (props.variant === "little" ? "950px " : "1050px")};
  height: 700px;
  margin: ${(props) =>
    props.variant === "little" ? "50px 20px 40px" : "50px 0 40px 0"};
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

export const ScrollingBlock = styled.div<{ variant?: string }>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.variant === "little" ? "700px " : "980px;")};
  height: 800px;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 10px 25px;
  .internal-header {
    width: 980px;
    border-bottom: 1px solid #ccc;
    padding: 20px 0;
  }
`;

export const ScrollingBlockContent = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  gap: 50px;
  border-bottom: 1px solid #ccc;
  .hour {
    display: flex;
    align-items: center;
    gap: 5px;
    flex: 1;
  }
  h3 {
    flex: 1;
  }
  p {
    flex: 3;
  }
`;
