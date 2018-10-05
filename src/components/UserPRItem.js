import * as React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import moment from 'moment';
import styles from "../styles";
import book from '../images/book.svg';
import pullRequest from '../images/git-pull-request.svg';


class UserPRItem extends React.Component {
    static ItemWrapper = styled.div`
        width: 23vw;
        margin: 10px;
        padding: 10px;
        white-space: nowrap;
        text-shadow: none;
        overflow: hidden;
        text-overflow: ellipsis;
        box-shadow: 1px 1px 0px 1px ${styles.colors.cyan};
        color: #fff;
        transition: all 0.3s ease;
        background-color: #fff;
        position: relative;
        display: flex;
        flex-direction: column;

        @media (max-width: 1100px) {
            width: 40vw;
        }

        @media (max-width: 750px) {
            width: 100vw;
        }
    `;

    static DetailsItem = styled.div`
        margin-bottom: 10px;
        align-self: start;
        display: flex;

        a {
            text-decoration: none;
            color: ${styles.colors.amber};
            cursor: pointer;
            font-family: 'Rubik', sans-serif;
            color: ${styles.colors.crimson};
            text-shadow: 2px 2px 0px #01ffff69;

            &:hover {
                color: ${styles.colors.amber};
                text-shadow: none;
            }
        }

        img {
            margin-right: 10px;
        }
    `;

    static FooterItem = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-content: flex-end;
        color: ${styles.colors.blue};
        padding-top: 10px;
        margin-bottom: 0;
        align-items: flex-end;

        p {
            margin-bottom: 2px;
        }
    `;


    render() {
        const { item, index } = this.props;
        const { ItemWrapper, DetailsItem, FooterItem } = UserPRItem;

        return (
            <ItemWrapper key={`${index}${item.id}`}>
                <DetailsItem>
                    <img src={book} alt="book" width="20" height="20" />{' '}
                    <a href={item.repository.url} target="_blank">{item.repository.name}</a>
                </DetailsItem>

                <DetailsItem>
                    <img src={pullRequest} alt="pullRequest" width="20" height="20" />{' '}
                    <a href={item.url} target="_blank">{item.headRefName}</a>
                </DetailsItem>
                
                <FooterItem>
                    {item.closed ? (
                        <p>{item.state.toLowerCase()} <span>✅</span></p>
                    ) : (
                        <p>{item.state.toLowerCase()} <span>⏳</span></p>
                    )}
                    <p>{moment(item.createdAt).fromNow()}</p>
                </FooterItem>
            </ItemWrapper>
        );
    }
}

UserPRItem.propTypes = {
    item: PropTypes.object,
    index: PropTypes.number
};

export default UserPRItem;
