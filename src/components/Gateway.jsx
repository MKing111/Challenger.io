import { fetchFromBlizzardAPI } from "../utils/fetchFromBlizzardAPI";
import { postToDB } from "../utils/postToDB";
import { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { test } from '../utils/constants';

const Gateway = ({ player }) => {
  
  
  return (
        <button onClick={postToDB({ "name": player.name, "realm": player.realm, "guild": player.guild.name, "playerClass": player.class})}>intoDB</button>
      )
}

export default Gateway