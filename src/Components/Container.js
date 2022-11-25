import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    @media only screen and (max-width: 970px) {
        flex-direction: column;
        height: auto;
    }
`;

const Container = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

export default Container;