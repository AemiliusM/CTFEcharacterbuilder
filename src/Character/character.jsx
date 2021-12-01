export default function Character({ head, middle, bottom }) {
  return (
    <section>
      <article
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
