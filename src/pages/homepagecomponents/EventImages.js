import { CCarousel, CCarouselItem, CImage,CCarouselCaption } from '@coreui/react-pro'
import React from 'react';

function VenueImages(){
    return <div>
        <h2>Our Venues</h2>             
                <CCarousel controls indicators>
                <CCarouselItem>
                    <CImage className="d-block w-100" rounded src='/images/MeetingRoom.png' alt="slide 1" />
                    <CCarouselCaption className="d-none d-md-block">
                    <h5>Meeting Rooms</h5>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" rounded src='/images/DiningHall.png' alt="slide 2" />
                    <CCarouselCaption className="d-none d-md-block">
                    <h5>Dining Halls</h5>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" rounded src='/images/Auditorium.png' alt="slide 3" />
                    <CCarouselCaption className="d-none d-md-block">
                    <h5>Auditorium</h5>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" rounded src='/images/Garden.png' alt="slide 3" />
                    <CCarouselCaption className="d-none d-md-block">
                    <h5>Gardens</h5>
                    </CCarouselCaption>
                </CCarouselItem>
                </CCarousel>
           </div>
}

export default VenueImages;