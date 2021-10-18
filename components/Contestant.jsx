import react, { useState } from "react";
import Image from "next/image";
import styles from "./Contestant.module.css";

const Contestant = ({
  id,
  fullname,
  from,
  charity,
  picture,
  isSelected,
  select,
  disabled,
  confirm
}) => {
  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    confirm(id, username);
  };

  return (
    <div className={styles.contestant}>
      <div>
        {picture && (
          <Image
            src={`${picture}`}
            alt={fullname}
            width="200px"
            height="200px"
            layout="fixed"
          />
        )}
        <div className={styles.name}>{fullname}</div>
        <div className={styles.from}>{from}</div>
        <div className={styles.charity}>
          <b>Charity:</b> <br />
          {charity}
        </div>
      </div>
      <div className={styles.btnContainer}>
        {isSelected ? (
          <form className={styles.form} onSubmit={handleSubmit}>
            <label>
              <span style={{ fontStyle: "italic", fontSize: "0.875rem" }}>
                (optional)
              </span>{" "}
              Your username, if this person wins you will be honored:
              <input type="text" value={username} onChange={handleChange} />
            </label>
            <input className={styles.confirm} type="submit" value="Confirm" />
          </form>
        ) : (
          <button className={styles.vote} disabled={disabled} onClick={() => select(id)}>
            {disabled ? "Already Voted" : "Select"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Contestant;
