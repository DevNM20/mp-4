
import styled from "styled-components";

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fef9c3;
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: bold;
    color: black;
    font-size: 24px;
    text-align: center;
`;

const Subtitle = styled.p`
    font-weight: bold;
    color: #854d0e;
    font-size: 18px;
    text-align: center;
    margin-top: 8px;
`;

export default function Home() {
    return (
        <PageContainer>
            <Title>Welcome to the Last.fm Dashboard!</Title>
            <Subtitle>Click a link above to view Top Artists or Top Tracks.</Subtitle>
        </PageContainer>
    );
}
