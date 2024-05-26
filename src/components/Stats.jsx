/* eslint-disable react/prop-types */

export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">Start adding some items to your packing list ✈️</p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You have packed everything, be ready to ✈️ now!"
          : `💼 You have ${numItems} items on your list & you have packed (${numPacked}) (${packedPercentage}%)`}
      </em>
    </footer>
  );
}
