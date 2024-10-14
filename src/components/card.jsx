export const Card = ({ articleClassName, data }) => {
  const { id, name, status, image, url } = data;

  return (
    <article className={`border border-black rounded-md ${articleClassName}`}>
      <img src={image} alt={name} />
      <p>
        Name:{" "}
        <span className="font-bold">
          #{id}
          {name}
        </span>
      </p>
      <p>
        Status: <span className="font-bold">{status}</span>
      </p>
      <a className="text-green-500" href={url}>
        Read more..
      </a>
    </article>
  );
};