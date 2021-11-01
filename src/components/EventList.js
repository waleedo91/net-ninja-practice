import React from "react";
import styles from "./EventList.module.css";

export default function EventLIst({ handleClick, events }) {
  return (
    <div>
      {events.map((e, index) => (
        <div className={styles.card} key={e.id}>
          <h2>
            {index} - {e.title}
          </h2>
          <p>
            {e.location} - {e.date}
          </p>
          <button onClick={() => handleClick(e.id)}>Delete Event</button>
        </div>
      ))}
    </div>
  );
}
