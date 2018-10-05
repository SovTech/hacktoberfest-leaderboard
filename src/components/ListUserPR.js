import * as React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import moment from 'moment';
import styles from "../styles";


class ListUserPR extends React.Component {
    static ListWrapper = styled.div`
        width: 100%;
        padding: 15px 30px;
        background-color: #fff;
        color: black;
        max-height: 50vh;
        overflow: scroll;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    `;

    static ItemWrapper = styled.div`
        width: 23%;
        margin: 10px;
        padding: 20px;
        display: flex;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        box-shadow: 1px 1px 0px 1px ${styles.colors.cyan};
        color: ${styles.colors.crimson};
        text-shadow: 2px 2px 0px #01ffff69;
        transition: all 0.3s ease;
        background-color: #fff;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
    `;

    static HeaderItem = styled.div`
        margin-bottom: 10px;
        /* display: flex; */
    `;

    static DetailsItem = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 5px;
        /* display: flex; */
    `;

    render() {
        const { userPR } = this.props;
        const { ListWrapper, ItemWrapper, HeaderItem, DetailsItem } = ListUserPR;

        return (
            <ListWrapper>
                {userPR.length > 0 ? (
                     userPR.map((item, index) => {
                        console.log({ item })
                        return (
                            <ItemWrapper>
                                <div key={`${index}${item.id}`}>
                                    <HeaderItem>
                                        <a href={item.repository.url} target="_blank">{item.repository.name}</a>
                                    </HeaderItem>
                                    
                                    <DetailsItem>
                                        <p>{moment(item.createdAt).fromNow()}</p>
                                        {item.closed ? (
                                            <span>{item.state.toLowerCase()} ✅</span>
                                        ) : (
                                            <span>{item.state.toLowerCase()} ⏳</span>
                                        )}
                                    </DetailsItem>
                                </div>          
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
