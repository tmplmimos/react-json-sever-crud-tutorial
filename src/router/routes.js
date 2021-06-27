import React from 'react';
import Home from "../Home";
import Metronome from "../Metronome";
import Tasks from "../Tasks";

const routes = [
  {
    path: '/',
    exact: true,
    children: <Home />
  },
  {
    path: '/Tasks',
    children: <Tasks />
  },
  {
    path: '/Metronome',
    children: <Metronome />
  },
];

export default routes;