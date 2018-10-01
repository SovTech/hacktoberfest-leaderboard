import styled from "styled-components";
import styles from "../styles";
import BannerImage from "../images/Hacktoberfest_2018_editable_poster4_1926x1080_2.png";

export default styled.div`
  background: url(${BannerImage});
  background-position: center top;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: ${styles.colors.crimson};
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  @media (max-width: 1200px) {
    padding: 0 10px;
  }
`;
