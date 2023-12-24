import css from './ContactForm.module.css';

function ContactForm({ handleSubmit, handleChange, name, number }) {
  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nameInput">
            <h3 className={css.title}>Name</h3>
          </label>
          <input
            className={css.input}
            type="text"
            name="name"
            value={name}
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="telInput">
            <h3 className={css.title}>Number</h3>
          </label>
          <input
            className={css.input}
            type="tel"
            name="number"
            value={number}
            required
            onChange={handleChange}
          />
        </div>
        <button className={css.btn} type="submit">
          Add contact 📲
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
