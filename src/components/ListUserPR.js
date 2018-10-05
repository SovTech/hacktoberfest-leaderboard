import * as React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import moment from 'moment';
import styles from "../styles";
import book from '../images/book.svg';
import pullRequest from '../images/git-pull-request.svg';


class ListUserPR extends React.Component {
    static ListWrapper = styled.div`
        width: 100%;
        padding: 20px 30px;
        background-color:  ${styles.colors.crimson};
        color: black;
        max-height: 50vh;
        overflow: scroll;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        cursor: initial;
    `;

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

    static HeaderItem = styled.div`
        margin-bottom: 10px;
        align-self: start;
        display: flex;

        a {
            text-decoration: none;
            color: ${styles.colors.amber};
            cursor: pointer;
        }

        img {
            margin-right: 10px;
        }
    `;

    static FooterItem = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
        color: ${styles.colors.blue};
        align-self: end;
        align-items: flex-end;
    `;

    static DetailsItem = styled.div`
        margin-bottom: 10px;
        align-self: start;
        display: flex;

        a {
            text-decoration: none;
            color: ${styles.colors.amber};
            cursor: pointer;
        }

        img {
            margin-right: 10px;
        }
    `;

    render() {
        const { userPR } = this.props;
        const { ListWrapper, ItemWrapper, HeaderItem, DetailsItem, FooterItem } = ListUserPR;

        return (
            <ListWrapper>
                {userPR.length > 0 ? (
                     userPR.map((item, index) => {
                        console.log({ item })
                        return (
                            <ItemWrapper key={`${index}${item.id}`}>
                                <HeaderItem>
                                    <img src={book} alt="book" width="20" height="20" />{' '}
                                    <a href={item.repository.url} target="_blank">{item.repository.name}</a>
                                </HeaderItem>

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
                    })
                ) : (
                    <p>No pull resquest was opened for now</p>
                )}
            </ListWrapper>
        );
    }
}

ListUserPR.propTypes = {
    userPR: PropTypes.object
};

export default ListUserPR;
