// app/top-artists/page.tsx
import getData from "@/lib/getData";

export default async function TopArtistsPage() {
    let data;
    //Try and catch for API calls
    try {
        data = await getData("artists");
    } catch (error) {
        console.log("API call failed!", error);
        //This will be returned if it fails
        return <h1>API data can't be retrieved</h1>
    }

    if (!data || (data as any).error) {
        return <p>Unable to obtain API data</p>;
    }
    //Checks if the given data is an array and if it isn't it will be treated like an empty array

    const artists: any[] = Array.isArray(data) ? data : [];

    return (
        <main>
            <h1>Top 50 Artists on Last.fm</h1>
            <ol>
                {artists.map((a, i) => (
                    // a represents the current track object and i represents the position of where the loop is in the array
// i represents the position of where the loop is at
                    <li key={`${a.name}-${i}`}>
                        {i + 1}. {a.name} {a.listeners ? `— ${a.listeners} listeners` : ""}
                    </li>
                ))}
            </ol>
        </main>
    );
}
