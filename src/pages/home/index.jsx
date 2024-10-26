import { useEffect, useState } from "react";
import { Card } from "../../components/card";
import { Pagination } from "../../components/pagination";
import { getAllCharacters } from "../../services/characters";
// import { characters } from "./data/characters";

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await getAllCharacters({ page });

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

      <Pagination
        disabled={loading}
        page={page}
        setPage={setPage}
        pageCount={info?.pages}
        setLoading={setLoading}
      />
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
};
