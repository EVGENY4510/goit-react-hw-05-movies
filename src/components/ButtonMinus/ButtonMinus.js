export default function ButtonMinus({ changePageMinus, page }) {
  const handleClick = () => {
    changePageMinus();
  };
  return (
    <button type="click" onClick={handleClick}>
      <span>Minus{page}</span>
    </button>
  );
}
