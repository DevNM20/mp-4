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

const TrackContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Card = styled.div`
    background-color: #1a1a1a;
    border-radius: 8px;
    margin: 10px;
    padding: 10px;
    width: 180px;
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

const Artist = styled.p`
    font-size: 13px;
    color: #bbb;
    margin: 0;
`;

const Plays = styled.p`
    font-size: 12px;
    color: #888;
    margin-top: 6px;
`;

export default async function TopTracksPage() {
    const tracks = await getData("tracks");

    return (
        <PageContainer>
            <Title>Top 50 Tracks on Last.fm</Title>
            <TrackContainer>
                {tracks.map((t: any, i: number) => (// t represents the current track object and i represents the position of where the loop is in the array
                    //The img tag  takes the URL that is stored in the third element of the image array for all tracks
                    <Card key={`${t.name}-${i}`}>
                        <Img src={t.image?.[2]?.["#text"] || ""} alt={t.name} />
                        <Name>
                            {i + 1}. {t.name}
                        </Name>
                        <Artist>{t.artist.name}</Artist>
                        <Plays>{t.playcount} plays</Plays>
                    </Card>
                ))}

            </TrackContainer>
        </PageContainer>
    );
}
