import React from "react";

import { FooterStyled as F } from "./FooterStyled";
import { GlobalContainer } from "../../styles/global";
import { Button } from "../../components/Button/Button";

export const Footer = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <F.Footer>
      <GlobalContainer>
        <F.Table>
          <F.Box>
            <F.Logo to={"/"}>Hekto</F.Logo>
            <F.Form onSubmit={handleSubmit}>
              <input type="email" required placeholder="Enter Email Address" />
              <Button>Sign up</Button>
            </F.Form>
            <F.Info>
              <p>Contact Info</p>
              <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </F.Info>
          </F.Box>
          <F.Box>
            <h3>Categories</h3>
            <ul>
              <li>
                <a href="#">Laptops & Computers</a>
              </li>
              <li>
                <a href="#">Cameras & Photography</a>
              </li>
              <li>
                <a href="#">Smart Phones & Tablets</a>
              </li>
              <li>
                <a href="#">Video Games & Consoles</a>
              </li>
              <li>
                <a href="#">Waterproof Headphones</a>
              </li>
            </ul>
          </F.Box>
          <F.Box>
            <h3>Customer Care</h3>
            <ul>
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">Visual Composer Modules</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Orders History</a>
              </li>
              <li>
                <a href="#">Order Tracking</a>
              </li>
            </ul>
          </F.Box>
          <F.Box>
            <h3>Pages</h3>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Browse the Shop</a>
              </li>
              <li>
                <a href="#">Category</a>
              </li>
              <li>
                <a href="#">Pre-Built Pages</a>
              </li>
              <li>
                <a href="#">Visual Composer Elements</a>
              </li>
              <li>
                <a href="#">WooCommerce Pages</a>
              </li>
            </ul>
          </F.Box>
        </F.Table>
      </GlobalContainer>
    </F.Footer>
  );
};
