import * as React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";


class ListUserPR extends React.Component {
    static Wrapper = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px;
        flex-direction: column;
        box-sizing: border-box;
        background-color: #fff;
    `;

    render() {
        console.log({ props: this.props.userPR })
        const { userPR } = this.props;
        const { Wrapper } = ListUserPR;

        return (
            <Wrapper>
                {userPR.forEach((item, index) => {
                    console.log(item.repository.name)
                    return (
                        <span key={index}>{item.repository.name}bla</span>
                    )
                })}
            </Wrapper>
        );
    }
}

ListUserPR.propTypes = {
    userPR: PropTypes.any
};

export default ListUserPR;
