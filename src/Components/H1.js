import styled from 'styled-components';

const Header = styled.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 110%;
`;

const H1 = ({ children }) => {
    return (
        <Header>
            {children}
        </Header>
    );
}

export default H1;