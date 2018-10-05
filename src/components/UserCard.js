import * as React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import styles from "../styles";
import ListUserPR from "../components/ListUserPR";


const UserCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  &:last-of-type {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  
  img {
    width: 70px;
    border-radius: 50%;
    height: 70px;
    max-width: 100%;
  }

  h1 {
    width: 10%;
    color: ${styles.colors.crimson};
  }

  .__user--detail {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    h3 {
      margin-left: 20px;
      text-transform: lowercase;
      text-shadow: none;
      text-shadow: 2px 2px 0px #01ffff69;
      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }

  .__score-cont {
    display: flex;
    flex: 1;
    justify-content: space-between;
    flex-direction: row;
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

  @media (max-width: 600px) {
    flex-direction: column;

    h1 {
      font-size: 1.2rem;
    }

    h3 {
      font-size: 0.8rem;
    }

    img {
      width: 50px;
      border-radius: 50%;
      height: 50px;
      max-width: 100%;
    }

    .__score-cont {
      display: flex;
      flex: 1;
      justify-content: space-between;
      flex-direction: row;
      width: 100%;
      padding-top: 20px;
    }

    .__user--detail {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      h3 {
        margin-left: 0;
      }
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

class UserCardWrapper extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        showList: false
      }
    }

    static Wrapper = styled.div`
      width: 100%;
      padding: 10px 20px;	
      min-height: 50px;
      margin-bottom: 10px;
      box-shadow: 2px 2px 0px 0px ${styles.colors.cyan};
      overflow: hidden;
      color: ${styles.colors.crimson};
      text-shadow: 2px 2px 0px #01ffff69;
      transition: all 0.3s ease;
      background-color: #fff;

      &:last-of-type {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
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
    `;

    onClick = () => this.setState(prevState => ({ showListPR: !prevState.showListPR }));
    
    onLeave = () => this.setState({ showListPR: false });
    
    render() {
        console.log({ props: this.props.userPR })
        const { userPR, children } = this.props;
        const { Wrapper } = UserCardWrapper;

        return (
            <Wrapper onClick={this.onClick} onMouseLeave={this.onLeave}>
              <UserCard>
                {children}
              </UserCard>
              {this.state.showListPR && (
                <ListUserPR userPR={userPR} />
              )}
            </Wrapper>
        );
    }
}


UserCardWrapper.propTypes = {
  userPR: PropTypes.object
};

export default UserCardWrapper;

