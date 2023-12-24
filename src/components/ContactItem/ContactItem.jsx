import css from './ContactItem.module.css';
export default function ContactItem({ name, number, id, deleteContact }) {
  return (
    <li className={css.item}>
      <span>
        <p className={css.name}>{name}</p>
        <p className={css.tel}>{number}</p>
      </span>
      <button className={css.btn} onClick={() => deleteContact(id)}>
        Delete 🗑
      </button>
    </li>
  );
}
