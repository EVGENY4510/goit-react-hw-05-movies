export default function ButtonPlus({ changePagePlus, page }) {
  const handleClick = () => {
    changePagePlus();
  };
  return (
    <button type="click" onClick={handleClick}>
      <span>Plus{page}</span>
    </button>
  );
}
