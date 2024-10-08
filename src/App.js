import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail } from "./components";
// , SearchBar, Sidebar, Videos, VideoCard, ChannelCard
import React from "react";

const App = () => {
  return (
    <BrowserRouter>
        <Box sx={{backgroundColor: '#000'}}>
            <Navbar/>
            <Routes>
                <Route path="/" exact element={<Feed/>}/>
                <Route path="/video/:id" element={<VideoDetail/>} />
                <Route path="/channel/:id" element={<ChannelDetail/>} />
                <Route path="/search/:searchTerm" element={<SearchFeed/>} />
            </Routes>

        </Box>
    </BrowserRouter>
  )
}

export default App