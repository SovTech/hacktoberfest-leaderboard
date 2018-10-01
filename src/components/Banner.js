import styled from "styled-components";
import styles from "../styles";

export default styled.div`
  background: #fff;
  padding: 50px 0 30px 0;
  text-align: center;
  color: ${styles.colors.crimson};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-shadow: 2px 2px 0px 0px ${styles.colors.cyan};
  margin-bottom: 10px;
  h1 {
    font-size: 1.4rem;
    text-shadow: 2px 2px 0px #01ffff69;
    text-transform: uppercase;
    margin-top: 40px;
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 1rem;
    }
  }

  .__logo {
    display: flex;
    position: relative;
    transform: scale(1.4);
  }
`;
