import React from 'react';
export function Selector({
  head,
  middle,
  bottom,
  newCatchphrase,
  setNewCatchphrase,
  handleClick,
  onHeadChange,
  onMiddleChange,
  onBottomChange,
}) {
  const headPics = ['guy', 'baby', 'lady'];
  const middlePics = ['nic', 'big', 'strong'];
  const bottomPics = ['lizard', 'twisted', 'bent'];

  return (
    <section>
      <label htmlFor="top">
        Head
        <select value={head} onChange={(e) => onHeadChange(e.target.value)} className="top">
          {headPics.map((pic) => (
            <option key={pic}>{pic}</option>
          ))}
          ;
        </select>
      </label>
      <label htmlFor="middle">
        Middle
        <select value={middle} onChange={(e) => onMiddleChange(e.target.value)} className="middle">
          {middlePics.map((pic) => (
            <option key={pic}>{pic}</option>
          ))}
          ;
        </select>
      </label>
      <label htmlFor="bottom">
        Bottom
        <select value={bottom} onChange={(e) => onBottomChange(e.target.value)} className="bottom">
          {bottomPics.map((pic) => (
            <option key={pic}>{pic}</option>
          ))}
          ;
        </select>
      </label>
      <label>
        Enter New Phrase Here!
        <input
          type="text"
          value={newCatchphrase}
          onChange={(e) => setNewCatchphrase(e.target.value)}
        />
      </label>
      <button type="button" onClick={handleClick}>
        Add Phrase Here!
      </button>
    </section>
  );
}
