import "./Popup.css";
import CloseIcon from "@mui/icons-material/Close";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";

const Popup = ({ setPopup }) => {
  return (
    <div className="container">
      <div className="box">
        <div id="card1" className="card">
          <h2> ReEagage</h2>
          <p>Get brand deals</p>
          <div className="card-icon">
            <SellOutlinedIcon style={{ fontSize: "3rem" }} />
          </div>
        </div>
        <div id="card2" className="card">
          <h2>Able </h2>
          <p>Sell products bellow youtube videos</p>
          <div className="card-icon">
            <YouTubeIcon style={{ fontSize: "3rem" }} />
          </div>
        </div>
        <div id="card3" className="card">
          <h2>Shop</h2>
          <p>Turn content into earnings</p>
          <div className="card-icon">
            <ShoppingCartIcon style={{ fontSize: "3rem" }} />
          </div>
        </div>
        <div id="card4" className="card">
          <h2>ReCommed</h2>
          <p>Sell branded products</p>
          <div className="card-icon">
            <InsertLinkOutlinedIcon style={{ fontSize: "3rem" }} />
          </div>
        </div>
      </div>
      <div className="icon" onClick={() => setPopup(false)}>
        <CloseIcon />
      </div>
    </div>
  );
};
export default Popup;
