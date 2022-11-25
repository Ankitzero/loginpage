import styled from 'styled-components';

const Wrapper = styled.div`
    flex: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px;
`;
const Image = styled.img`
    height: 400px;
    @media only screen and (max-width: 970px) {
        height: 200px;
    }
`;

const ImageContainer = ({src="", alt=""}) => {
    return (
        <Wrapper>
            <Image src={src} alt={alt} />
        </Wrapper>
    );
}

export default ImageContainer;