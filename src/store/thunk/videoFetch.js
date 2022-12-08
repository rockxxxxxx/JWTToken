import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const KEY = "AIzaSyBIDa7o8bGS4p-lMcwiDNQ1g4LH811lU4U";
const fetchVideo = createAsyncThunk("fetch/video", async () => {
  const response = await axios.get("https://www.googleapis.com/youtube/v3");
});
