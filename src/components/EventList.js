import React, { Fragment } from "react";

export default function EventLIst({ handleClick, events }) {
  return (
    <div>
      {events.map((e, index) => (
        <Fragment key={e.id}>
          <h2>
            {index} - {e.title}
          </h2>
          <button onClick={() => handleClick(e.id)}>Delete Event</button>
        </Fragment>
      ))}
    </div>
  );
}
