import MainContainer from './components/MainContainer';

const API_KEY = process.env.API_KEY; /* API KEY */

export default async function Home() {
  const res = await fetch(
    `
  https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();
  const results = data.results;
  console.log(results);
  return (
    <div className="bg-stone-900">
      <MainContainer results={results} />
    </div>
  );
}
