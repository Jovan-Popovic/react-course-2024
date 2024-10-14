import { useEffect, useState } from "react";
import { Card } from "./components/card";
// import { characters } from "./data/characters";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?page=${page}`
        );
        const data = await response.json();

        if (data.error) throw Error();

        setCharacters(data.results);
        setInfo(data.info);
      } catch (error) {
        setCharacters([]);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacters();
  }, [page]);

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-2">
        Rick and Morty characters
      </h1>

      <div className="flex flex-wrap items-center gap-4">
        <button
          className="bg-green-500 text-white p-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={() => {
            setLoading(true);
            setPage(page - 1);
          }}
          disabled={page === 1 || loading}
        >
          Previous
        </button>
        {Array.from({ length: info?.pages }).map((_, pageIndex) => (
          <button
            key={pageIndex}
            className="bg-green-500 text-white p-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
            onClick={() => {
              setLoading(true);
              setPage(pageIndex + 1);
            }}
            disabled={loading || page === pageIndex + 1}
          >
            {pageIndex + 1}
          </button>
        ))}
        <button
          className="bg-green-500 text-white p-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={() => {
            setLoading(true);
            setPage(page + 1);
          }}
          disabled={info?.pages === page || loading}
        >
          Next
        </button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {characters.length ? (
            characters.map((character, index) => (
              <Card
                key={index}
                articleClassName="col-span-1"
                data={character}
              />
            ))
          ) : (
            <p>No characters found</p>
          )}
        </div>
      )}
    </>
  );
}

export default App;
