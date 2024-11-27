import React from "react";
import {Routes, Route , useLocation} from 'react-router-dom';
import Bar from './pages/Bar';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Room from './pages/Room';
import RoomBooking from "./pages/bookingpages/RoomBooking";
import Venue from './pages/Venue';
import VenueBooking from "./pages/bookingpages/VenueBooking";
import Inquiries from './pages/Inquiries';
import Admin from './pages/Admin';
import Guestbook from './pages/adminpages/Guestbook';
import Roombook from './pages/adminpages/Roombook';
import Venuebook from './pages/adminpages/Venuebook';
import Staffbook from './pages/adminpages/Staffbook';
import Formbook from './pages/adminpages/Formbook';
import Inboxbook from './pages/adminpages/Inboxroom';
import NotFound from "./pages/NotFound";

import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
    
    return (
        <AnimatePresence  mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
                <Route>
                    <Route path="/"element={<Bar />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/Room" element={<Room />} />
                            <Route path="/Room/RoomBooking" element={<RoomBooking />} />    
                        <Route path="/Venue" element={<Venue />} />    
                            <Route path="/Venue/VenueBooking" element={<VenueBooking />} />
                        <Route path="/Inquiries" element={<Inquiries />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/Register" element={<Register />} />
                        <Route path="/Admin" element={<Admin />}>
                            <Route path="/Admin/Guest" element={<Guestbook />} />
                            <Route path="/Admin/Room" element={<Roombook />} />
                            <Route path="/Admin/Venue" element={<Venuebook />} />
                            <Route path="/Admin/Staff" element={<Staffbook />} />
                            <Route path="/Admin/Form" element={<Formbook />} />
                            <Route path="/Admin/Inbox" element={<Inboxbook />} />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Route>
            </Routes>
        </AnimatePresence>
        
    )
}

export default AnimatedRoutes;