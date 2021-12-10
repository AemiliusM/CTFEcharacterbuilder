export default function CatchphraseDisplay({ catchphrases }) {
  return (
    <div>
      {catchphrases.map((catchphrase) => (
        <p key="catchphrase">{catchphrase}</p>
      ))}
    </div>
  );
}
