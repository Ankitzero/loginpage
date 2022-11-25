import styled from 'styled-components';

const CheckContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin-bottom: 15px;
`;
const InnerCheckContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
const CheckBox = styled.input`
    width: 16px;
    height: 16px;
    border: 1px solid #737B86;
    border-radius: 4px;
`;
const Text = styled.span`
    margin: 0px 8px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 110%;
    color: #737B86;
    @media only screen and (max-width: 970px) {
        font-size: 12px;
    }
`;
export const A = styled.a`
    text-decoration: none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 110%;
    color: #F78719;
    @media only screen and (max-width: 970px) {
        font-size: 12px;
    }
`;

const CheckboxContainer = ({
    name, text, innerHref = "", innerHrefText, sideHref = "", sideHrefText
}) => {
    return (
        <CheckContainer>
            <InnerCheckContainer>
                <CheckBox type={"checkbox"} name={name} />
                <Text>{text}</Text>
                {innerHref && <A href={innerHref}>{innerHrefText}</A>}
            </InnerCheckContainer>
            {sideHref && <A href={sideHref}>{sideHrefText}</A>}
        </CheckContainer>
    );
}

export default CheckboxContainer;