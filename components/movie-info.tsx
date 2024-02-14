import { API_URL } from "../app/(home)/page";

async function getMovie(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const videos = await getMovie(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
