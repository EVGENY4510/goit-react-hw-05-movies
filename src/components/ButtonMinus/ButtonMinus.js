import { ImReply } from 'react-icons/im';
import css from './ButtonMinus.module.css';

export default function ButtonMinus({ changePageMinus, page }) {
  const handleClick = () => {
    changePageMinus();
  };
  return (
    <button className={css.btnMinus} type="click" onClick={handleClick}>
      <ImReply color="#e7a61a" size={25} />
    </button>
  );
}
