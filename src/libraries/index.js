import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import thunk from "redux-thunk";
import styled from "styled-components";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// import InputRange from 'react-input-range';
import PropTypes from "prop-types";
import ReactLoading from "react-loading";
import SwiperCore, { Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import firebase from 'firebase';
import { Helmet } from "react-helmet-async";

export {
  React,
  ReactDOM,
  axios,
  thunk,
  styled,
  Masonry,
  ResponsiveMasonry,
  // InputRange,
  PropTypes,
  ReactLoading,
  SwiperCore,
  Thumbs,
  Swiper,
  SwiperSlide,
  firebase,
  Helmet,
};

export * from "react";
export * from "react-router-dom";
export * from "redux";
export * from "react-redux";
export * from "redux-devtools-extension";
export * from "react-helmet-async";
// export * from "firebase/auth";
