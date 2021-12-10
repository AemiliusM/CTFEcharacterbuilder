export default function Character({ head, middle, bottom }) {
  return (
    <section>
      <article
        aria-label="head"
        className="head"
        style={{
          backgroundImage: `url(./${head}-head.png)`,
          width: 150,
          height: 150,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <article
        aria-label="middle"
        className="middle"
        style={{
          backgroundImage: `url(./${middle}-middle.png)`,
          marginRight: 300,
          width: 200,
          height: 200,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <article
        aria-label="bottom"
        className="bottom"
        style={{
          backgroundImage: `url(./${bottom}-bottom.png)`,
          width: 150,
          height: 150,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </section>
  );
}
