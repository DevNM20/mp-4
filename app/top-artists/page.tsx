"use client";
import styled from "styled-components";
import getData from "@/lib/getData";

const PageContainer = styled.div`
    background-color: #0b0b0b;
    color: white;
    padding: 20px;
    text-align: center;
`;

const Title = styled.h1`
    color: #c99700;
    font-size: 28px;
    margin-bottom: 20px;
`;

const ArtistContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Card = styled.div`
    background-color: #1a1a1a;
    border-radius: 8px;
    margin: 10px;
    padding: 10px;
    width: 160px;
    text-align: center;
`;

const Img = styled.img`
    width: 100%;
    height: 160px;
    border-radius: 6px;
    background-color: #222;
`;

const Name = styled.p`
    font-weight: bold;
    margin-top: 8px;
    margin-bottom: 4px;
`;

const Listeners = styled.p`
    font-size: 12px;
    color: #bbb;
    margin: 0;
`;

export default async function TopArtistsPage() {
    const artists = await getData("artists");

    return (
        <PageContainer>
            <Title>Top 50 Artists on Last.fm</Title>
            <ArtistContainer>
                {artists.map((a: any, i: number) => (// a represents the current track object and i represents the position of where the loop is in the array
                    //A card is created for every artist and it will grab the URL for the third item in the array
                    <Card key={`${a.name}-${i}`}>
                        <Img src={a.image?.[2]?.["#text"] || ""} alt={a.name} />
                        <Name>
                            {i + 1}. {a.name}
                        </Name>
                        <Listeners>{a.listeners} listeners</Listeners>
                    </Card>
                ))}
            </ArtistContainer>
        </PageContainer>
    );
}
