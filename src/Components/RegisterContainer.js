import styled from "styled-components";

import { A } from "./CheckboxContainer";

const Wrapper = styled.div`
    margin: 8px 0px;
`;
const Text = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    @media only screen and (max-width: 970px) {
        font-size: 12px;
    }
`;

const RegisterContainer = ({ text, href, hrefText }) => {
    return (
        <Wrapper>
            <Text>{text}</Text>
            <A href={href}>{hrefText}</A>
        </Wrapper>
    );
}

export default RegisterContainer;