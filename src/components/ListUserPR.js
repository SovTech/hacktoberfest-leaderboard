import * as React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import moment from 'moment';
import styles from "../styles";
import book from '../images/book.svg';
import pullRequest from '../images/git-pull-request.svg';
import UserPRItem from './UserPRItem'


class ListUserPR extends React.Component {
    static ListWrapper = styled.div`
        width: 100%;
        padding: 20px 30px;
        margin: 15px 0px;
        background-color: ${styles.colors.crimson};
        box-sizing: border-box;
        box-shadow: 0px 0px 10px ${styles.colors.crimson};
        color: black;
        max-height: 50vh;
        overflow: scroll;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        cursor: initial;
        font-family: 'Rubik', sans-serif;

        p#info {
            color: ${styles.colors.blue};
            text-shadow: none;
            font-size: 20px;
        }
    `;

    render() {
        const { userPR } = this.props;
        const { ListWrapper } = ListUserPR;

        return (
            <ListWrapper>
                {userPR.length > 0 ? (
                    userPR.map((item, index) => (<UserPRItem item={item} index={index} />))
                ) : (
                    <p id="info">No pull requests have been opened yet.</p>
                )}
            </ListWrapper>
        );
    }
}

ListUserPR.propTypes = {
    userPR: PropTypes.object
};

export default ListUserPR;
