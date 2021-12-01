export default function CatchphraseDisplay({ catchphrases }) {
  console.log('phraseess', catchphrases);
  return (
    <div>
      {catchphrases.map((catchphrase) => (
        <p key="catchphrase">{catchphrase}</p>
      ))}
    </div>
  );
}
