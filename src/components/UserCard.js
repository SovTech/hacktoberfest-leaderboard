import styled from "styled-components";
import styles from "../styles";

export default styled.div`
  width: 100%;
  padding: 10px 20px;
  background: #fff;
  min-height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2px 2px 0px 0px ${styles.colors.cyan};
  overflow: hidden;
  margin: 10px 0;
  color: ${styles.colors.crimson};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  text-shadow: 2px 2px 0px #01ffff69;
  transition: all 0.3s ease;

  &:last-of-type {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  img {
    width: 50px;
    border-radius: 50%;
  }

  h1 {
    width: 10%;
    color: ${styles.colors.crimson};
  }

  .__user--detail {
    width: 20%;
    h3 {
      margin: 0;
      text-transform: lowercase;
      text-shadow: none;
      text-shadow: 2px 2px 0px #01ffff69;
    }
  }

  .__score {
    width: 15%;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .__label {
      position: absolute;
      top: 0;
      right: 0;
      opacity: 0.2;
      font-size: 0.8rem;
      text-shadow: none;
      transition: all 0.3s ease;
    }
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0px 3px 0px 0px ${styles.colors.cyan};
    transform: scale(1.01);

    .__score {
      .__label {
        opacity: 1;
      }
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.2rem;
    }

    h3 {
      font-size: 0.8rem;
    }

    .__score {
      h2 {
        font-size: 1rem;
      }
      .__label {
        font-size: 0.7rem;
        opacity: 0.6;
      }
    }
  }
`;
