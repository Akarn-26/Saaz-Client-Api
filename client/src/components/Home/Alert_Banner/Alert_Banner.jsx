import React, { useState } from "react";
import "./Alert_Banner.scss";
import BandImage from "../../../assets/Home-tiles/SaazNight.jpg";
import SoloImage from "../../../assets/Home-tiles/SoloSinging.jpg";
import NotificationQr from "../../../assets/Home-tiles/Home-Nofification-Banner/Qr.jpg";
import BandTicket from "../../../assets/Home-tiles/Home-Nofification-Banner/SaazNight.jpg";
import SoloTicket from "../../../assets/Home-tiles/Home-Nofification-Banner/SoloSinging.jpg";
import TilePopup from "../Drawer/Drawer";

// Order matters: first = left tile, second = right tile.
// imagePosition: "center 0%" = top of poster, "center 100%" = bottom of poster.
const events = [
  {
    id: "solo",
    title: "Solo Singing",
    date: "09",
    month: "October",
    year: "2026",
    fullDate: "09 October 2026",
    eventGallary: "Ecstasy '26",
    image: SoloImage,
    imagePosition: "center 85%", // 100% shows the very bottom, 70% shows more of the top
    ticket: SoloTicket,
    qr: NotificationQr,
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdfvMV7J0aECV30rAjmZzj6OVVz50tLOm5VvOhbH1SK9JN6uw/viewform",
  },
  {
    id: "band",
    title: "Band Competition",
    date: "09",
    month: "October",
    year: "2026",
    fullDate: "09 October 2026",
    eventGallary: "Ecstasy '26",
    image: BandImage,
    imagePosition: "center center",
    ticket: BandTicket,
    qr: NotificationQr,
    registerLink: "https://forms.gle/LTcr2LuSFzfRaG2A6",
  },
];

const eventBulletins = [
  "Band Competition",
  "Solo Singing",
  "Metal",
  "Classical Fusion",
  "Bollywood",
  "Rock",
  "Pop",
];

function EventTile({ event, onMore }) {
  return (
    <div
      className="notification-details-square"
      style={{
        backgroundImage: `url(${event.image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: event.imagePosition || "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="date">
        <div className="day">{event.date}</div>
        <div className="month">{event.month}</div>
        <div className="year">{event.year}</div>
      </div>
      <img src={event.qr} alt="" className="Qr" />
      <div className="more" onClick={() => onMore(event.id)}>
        more
      </div>
    </div>
  );
}

function AlertBanner() {
  const [clickedTiles, setClickedTiles] = useState({});

  const handleClick = (tile) => {
    setClickedTiles((prev) => ({
      ...prev,
      [tile]: !prev[tile],
    }));
  };

  const [leftEvent, rightEvent] = events;

  return (
    <div className="Alert_banner">
      <div className="horizontal-bar">
        {/* Left tile: Solo Singing */}
        <EventTile event={leftEvent} onMore={handleClick} />

        {/* Middle: Prospects */}
        <div className="Bulletin">
          <div className="title">Prospects</div>
          <div className="bulletins">
            {eventBulletins.map((x) => (
              <div key={x}>{"• " + x}</div>
            ))}
          </div>
        </div>

        {/* Right tile: Band Competition */}
        <EventTile event={rightEvent} onMore={handleClick} />
      </div>

      {/* Popups, one per event */}
      {events.map(
        (event) =>
          clickedTiles[event.id] && (
            <TilePopup
              key={event.id}
              color="black"
              handleClick={() => handleClick(event.id)}
              buttonId={event.id}
              eventName={event.title}
              image={event.ticket}
              date={event.fullDate}
              eventGallary={event.eventGallary}
              registerLink={event.registerLink}
              clickedTiles={`${clickedTiles[event.id]}`}
            />
          )
      )}
    </div>
  );
}

export default AlertBanner;