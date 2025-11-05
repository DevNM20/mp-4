// app/top-tracks/page.tsx
import getData from "@/lib/getData";

export default async function TopTracksPage() {
    let data;
    //Try and catch for API calls
    try {
        data = await getData("tracks");
    } catch (error) {
        console.log("API has failed please fix it", error);
        //This will be returned if it fails
        return <h1>API data can't be retrieved</h1>;
    }

    if (!data || (data as any).error) {
        return <p>Unable to obtain API data</p>;
    }

    //Checks if the given data is an array and if it isn't it will be treated like an empty array
    const tracks: any[] = Array.isArray(data) ? data : [];

    return (
        <main>
            <h1>Top 50 Tracks on Last.fm</h1>
            <ol>
                {tracks.map((t, i) => (
// t represents the current track object and i represents the position of where the loop is in the array
// i represents the position of where the loop is at
                    <li key={`${t.name}-${i}`}>
                        {i + 1}. {t.name} {t.artist?.name ? `— ${t.artist.name}` : ""}
                        {t.playcount ? ` (${t.playcount} plays)` : ""}
                    </li>
                ))}
            </ol>
        </main>
    );
}
