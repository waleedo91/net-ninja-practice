import React, { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import "./App.css";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((prev) => {
      return [...prev, event];
    });
    setShowModal(false);
  };

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
    console.log(id);
  };

  const subtitle = "All the latest events in Mario Land";

  return (
    <div className="App">
      <Title title="Events in Your Area" subtitle={subtitle} />
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide vents</button>
          <EventList handleClick={handleClick} events={events} />{" "}
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}

      {showModal && (
        <Modal isSalesModal={true}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}
      <div>
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>
    </div>
  );
}

export default App;
