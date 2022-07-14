import React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import "./Contact.css";
import style from '../../components/Footer/footer.module.css';
import discord from '../../assets/discord.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'

const Contact = () => {
  return (
    <div className="sell_outermost">
      <Container>
        <h1 style={{ color: "white", margin: "0" }}>Join the Club</h1>
        <div className="sell_outer_container">

          <div className={`col ${style.col}`}>
            <ul className={`nobullet ${style.social}`} >
              <li >
                <a
                  href="https://discord.gg/UurzmJW3bC"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={discord}
                    alt="placeholder"
                    style={{width:"100px", borderRadius: "12px" }}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/cops_nft"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                       <img
                    src={twitter}
                    alt="placeholder"
                    style={{ width:"100px", borderRadius: "12px" }}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/metacops911/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={instagram}
                    alt="placeholder"
                    style={{width:"100px", borderRadius: "12px" }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
