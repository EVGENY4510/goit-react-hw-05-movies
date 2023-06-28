import css from './ButtonPlus.module.css';
import { ImForward } from 'react-icons/im';

export default function ButtonPlus({ changePagePlus }) {
  const handleClick = () => {
    changePagePlus();
  };
  return (
    <button className={css.btnPlus} type="click" onClick={handleClick}>
      <ImForward color="#e7a61a" size={25} />
    </button>
  );
}
