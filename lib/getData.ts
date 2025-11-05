
//Read the API key on the server side

const API_KEY = process.env.LASTFM_KEY as string;

type Kind = "artists" | "tracks";

export default async function getData(kind: Kind) {
    try {
        if (!API_KEY) {
            throw new Error("Missing LASTFM_KEY in .env.local");
        }
        //Based on the argument the user passes it will pick to render the top 50 artist page or the top 50 tracks page
        const method =
            kind === "artists" ? "chart.gettopartists" : "chart.gettoptracks";
//This is the API endpoint which limits the results to 50 artists/tracks
        const url = `https://ws.audioscrobbler.com/2.0/?method=${method}&api_key=${API_KEY}&format=json&limit=50`;

        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) {
            const text = await res.text();
            throw new Error(`Last.fm ${res.status} ${res.statusText} ${text}`);
        }

        const data = await res.json();
//This will choose which array to return based on the user input either the array of tracks or artists
        return kind === "artists" ? (data?.artists?.artist ?? []) : (data?.tracks?.track ?? []);
    } catch (error) {
        console.log("Error getData:", error);
        return { error: (error as Error).message || "Failed to fetch data" };
    }
}
