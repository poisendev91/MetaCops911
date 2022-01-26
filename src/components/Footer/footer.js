import React from 'react';
import style from './footer.module.css';
import { Link } from "react-router-dom";

const Footer = () => (
  <>
    <footer className={style.footer}>
      <div className={style['info-span']}>
        <p>
          Decent NFT utility project on Solana for NFT's collectors. Buy, stake, breed and sell these digital assets
          with ease.
        </p>
      </div>

      <ul className={style['footer-nav']}>
        <li className={style['nav-item']}>

        

          <h2 className={style['nav-title']}>NAVIGATION</h2>

          <ul className={style['nav-ul']}>
            <li>
              <a href="/" >Home</a>
            </li>
            <li>
              <a href="/contact" >Social</a>
            </li>
            <li>
              <a href="/roadmap" >Roadmap</a>
            </li>
         
          </ul>
        </li>

        <li className={style['nav-item2']}>
         

          <h2 className={style['nav-title']}>Helpful Resources</h2>

          <ul className={style['nav-ul']}>
            <li>
              <a href="https://phantom.app/" target="blank">Phantom Wallet</a>
            </li>
            <li>
              <a href="https://solana.com/" target="blank">Solana Official</a>
            </li>
          
            <li>
              <a href="https://www.sandbox.game/en" target="blank">Sanbox Metaverse</a>
            </li>
          </ul>

        </li>

        <li className={style['nav-item']}>
        
          <h2 className={style['nav-title']}>SOCIAL</h2>
          <ul className={style['nav-ul']}>
            <li><p>Be sure to give us a follow on: </p></li>
          </ul>
          <div className={`col ${style.col}`}>
            <ul className={style.social}>
              <li>
                <a
                  href="https://discord.gg/BGVqwU3xW6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-discord fa-2x" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/cops_nft"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter-square fa-2x" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/metacops911/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram fa-2x" />
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
   
    </footer>
  </>
);
export default Footer;
