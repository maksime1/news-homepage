import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo_img {
    width: 42px;
    height: 28px;
  }
  .menu_img {
    @media (min-width: 1440px) {
      display: none;
    }
  }
  .navigation p {
    display: none;
    @media (min-width: 1440px) {
      display: block;
      color: #5e607a;
      font-size: 15px;
      line-height: 1.73;
      &:hover {
        color: #f15d51;
      }
    }
  }
  .navigation {
    @media (min-width: 1440px) {
      display: flex;
      align-items: center;
      gap: 40px;
      cursor: pointer;
    }
  }
  .menu {
    background-color: blanchedalmond;
    width: 256px;
    height: 669px;
    padding: 144px 29px 309px 24px;
    position: absolute;
    top: -30px;
    right: -15px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    color: #00001a;
    font-size: 18px;
    line-height: 1.33;
  }
  .menu p {
    cursor: pointer;
  }
  .close_img {
    position: absolute;
    right: 10px;
    top: 2px;
  }
`;
export const NewsContainer = styled.div`
  margin-top: 55px;
  @media (min-width: 1440px) {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .mobile_img {
    width: 343px;
    height: 300px;
    margin-top: 33px;
  }
  .dekstop_img {
    display: none;
    @media (min-width: 1440px) {
      display: block;
    }
  }
  .dekstop_img {
    @media (min-width: 1440px) {
      width: 730px;
      height: 300px;
    }
  }
  .mobile_img {
    @media (min-width: 1440px) {
      display: none;
    }
  }
  .left h1 {
    color: #00001a;
    font-size: 40px;
    font-weight: 800;
    line-height: 1;
    width: 323px;
    padding-top: 24px;
    @media (min-width: 1440px) {
      font-size: 56px;
    }
  }
  .right p {
    color: #5e607a;
    font-size: 15px;
    line-height: 1.73;
    margin-top: 16px;
    @media (min-width: 1440px) {
      width: 350px;
    }
  }
  .right button {
    background-color: #f15d51;
    padding: 13px 35px 11px 31px;
    color: #00001a;
    font-size: 14px;
    line-height: 1.74;
    letter-spacing: 4.38px;
    border: none;
    margin-top: 24px;
    font-weight: bolder;
    cursor: pointer;
    &:hover {
      background-color: #00001a;
      color: #fff;
    }
  }
  .news_container {
    background-color: #00001a;
    padding: 24px 20px 24px 21px;
    margin-top: 20px;
  }
  .news_container h2 {
    color: #e9aa52;
    font-size: 32px;
    font-weight: bold;
    line-height: 1;
    padding-bottom: 35px;
    @media (min-width: 1440px) {
      font-size: 40px;
    }
  }
  .news_container h3 {
    color: #fffdfa;
    font-size: 20px;
    font-weight: 800;
    line-height: 1.2;
    padding-bottom: 8px;
    cursor: pointer;
    &:hover {
      color: #e9aa52;
    }
  }
  .news_container p {
    color: #c5c6ce;
    font-size: 15px;
    line-height: 1.73;
    border-bottom: solid 1px grey;
    padding-bottom: 29px;
  }
  .news_container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media (min-width: 1440px) {
      margin-bottom: 38px;
    }
  }
  .news_container span {
    color: #c5c6ce;
    font-size: 15px;
    line-height: 1.73;
  }
  .texts {
    @media (min-width: 1440px) {
      display: flex;
      align-items: center;
      gap: 30px;
    }
  }
`;
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 64px;
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
  }

  gap: 34px;
  .pc-div img {
    width: 100px;
    height: 129px;
  }
  .pc-div {
    display: flex;
    gap: 24px;
  }
  .keyboard_div img {
    width: 100px;
    height: 129px;
  }
  .keyboard_div {
    display: flex;
    gap: 24px;
  }
  .controller_div img {
    width: 100px;
    height: 129px;
  }
  .controller_div {
    display: flex;
    gap: 24px;
  }
  .text h2 {
    color: #f15d51;
    font-size: 32px;
    font-weight: bold;
    line-height: 1;
    padding-bottom: 12px;
  }
  .text h3 {
    color: #00001a;
    font-size: 18px;
    font-weight: 800;
    line-height: 1.33;
    padding-bottom: 9px;
    cursor: pointer;
    &:hover {
      color: #f15d51;
    }
  }
  .text p {
    color: #5e607a;
    font-size: 15px;
    line-height: 1.73;
  }
`;
export const FullMain = styled.main`
  padding: 28px 16px 80px;
  @media (min-width: 1440px) {
    padding: 89px 165px 129px;
  }
`;
