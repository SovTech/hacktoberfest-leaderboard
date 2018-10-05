import * as React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";


class ListUserPR extends React.Component {
    static Wrapper = styled.ul`⏳
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #fff;
        color: black;
    `;

    render() {
        console.log({ props: this.props.userPR })
        const { userPR } = this.props;
        const { Wrapper } = ListUserPR;

        return (
            <Wrapper>
                {userPR.map((item, index) => {
                    console.log({ item })
                    return (
                        <React.Fragment>
                            <li key={`${index}${item.id}`}>
                                <p>{item.repository.name}</p>
                                {item.closed ? (
                                    <span>Finish ✅</span>
                                ) : (
                                    <span>In progress ⏳</span>
                                )}
                            </li>          
                        </React.Fragment>
                    );
                })}
            </Wrapper>
        );
    }
}

ListUserPR.propTypes = {
    userPR: PropTypes.any
};

export default ListUserPR;
