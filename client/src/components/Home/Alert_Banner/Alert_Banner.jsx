import React from "react";
import "./Alert_Banner.scss";
import Notification from "../../../assets/Home-tiles/SaazNight.jpg";
import NotificationQr from "../../../assets/Home-tiles/Home-Nofification-Banner/Qr.jpg";
import Ticket from "../../../assets/Home-tiles/Home-Nofification-Banner/ticket.png";
import SaazFabric from "../../../assets/Merch/Saaz-Fabric.png"
import TilePopup from "../Drawer/Drawer";
import { useState, useEffect } from "react";
function AlertBanner() {
  const [clickedTiles, setClickedTiles] = useState({});
  const handleClick = (tile) => {
    setClickedTiles((prevState) => ({
      ...prevState,
      [tile]: !prevState[tile],
    }));
  };
  useEffect(() => {
    console.log(clickedTiles["notification"]);
  }, [clickedTiles]);
  const notification = {
    title: "Saaz Night '26",
    date: "29",
    month: "March",
    year: "2026",
    fullDate: "29 March 2026",
    eventGallary: "Saaz Night '24",
    eventBulletins: [
     "Duet Competition",
     "Metal",
     "Qawwali",
     "Bollywood",
     "Rock",
     "Pop"
    ],
    registerLink: ""
  };
  return (
    <div className="Alert_banner"> 
      <div className="horizontal-bar">
        <div className="pc-Qr">
          <img src={NotificationQr} alt="" />
          <a href="" className="register">Register</a>
        </div>
        <div className="Bulletin">
          <div className="title">Prospects</div>
          <div className="bulletins">
            {notification.eventBulletins.map((x) => (
              <div> {"•" + " " + x} </div>
            ))}
          </div>
        </div>
        <div
          className="notification-details-square"
          style={{
            backgroundImage: `url(${Notification})`,
            backgroundSize: "320px",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover"
          }}
        >
          <div className="date">
            <div className="day">{notification.date}</div>
            <div className="month">{notification.month}</div>
            <div className="year">{notification.year}</div>
          </div>
          <img src={NotificationQr} alt="" className="Qr" />
          <div className="more" onClick={() => handleClick("notification")}>
            more
          </div>
        </div>
      </div>
      {clickedTiles["notification"] && (
        <TilePopup
          color="black"
          handleClick={() => handleClick("notification")}
          buttonId="notification"
          eventName={notification.title}
          image={Ticket}
          date={notification.fullDate}
          eventGallary={notification.eventGallary}
          clickedTiles={`${clickedTiles["notification"]}`}
        />
      )}
    </div>
  );
}

export default AlertBanner;
