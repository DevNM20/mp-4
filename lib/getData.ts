//Read the API key on the server side
const API_KEY = process.env.LASTFM_KEY as string;

export default async function getData(type: "artists" | "tracks") {
//Based on the argument the user passes it will pick to render the top 50 artist page or the top 50 tracks page
    const method =
        type === "artists" ? "chart.gettopartists" : "chart.gettoptracks";
//This is the API endpoint which limits the results to 50 artists/tracks
    const url = `https://ws.audioscrobbler.com/2.0/?method=${method}&api_key=${API_KEY}&format=json&limit=50`;

    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();
//This will choose which array to return based on the user input either the array of tracks or artists
    if (type === "artists") return data?.artists?.artist || [];
    return data?.tracks?.track || [];
}
