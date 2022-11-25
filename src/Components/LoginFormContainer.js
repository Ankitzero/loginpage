import styled from 'styled-components';

const Wrapper = styled.form`
    flex: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    background: #FFFFFF;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.16);
    border-radius: 12px;
    margin: 50px;
    @media only screen and (max-width: 970px) {
        flex: 100%;
        width: 100%;
        padding: 15px 0px;
        margin: 10px 0px;
    }
`;


const LoginFormContainer = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

export default LoginFormContainer;