import { CCarousel, CCarouselItem, CImage,CCarouselCaption } from '@coreui/react-pro'
import React from 'react';

function VenueImages(){
    return <div class = 'desc'>
        <CImage align="center" src="/images/Icons/VenueIcon.png" width={70} height={70}/>
        <h2>Our Elegant Venues</h2>             
        <p>We provide you with the best venues for you and your beloved guests!</p>
                <CCarousel controls indicators>
                <CCarouselItem>
                    <CImage className="d-block w-100" rounded src='/images/Venues/MeetingRoomA.png' alt="slide 1" />
                    <CCarouselCaption className="d-none d-md-block">
                    <h5>Meeting Rooms</h5>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" rounded src='/images/Venues/MainBanquetHall.png' alt="slide 2" />
                    <CCarouselCaption className="d-none d-md-block">
                    <h5>Banquet Halls</h5>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" rounded src='/images/Venues/Auditorium.png' alt="slide 3" />
                    <CCarouselCaption className="d-none d-md-block">
                    <h5>Auditorium</h5>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" rounded src='/images/Venues/EastGarden.png' alt="slide 3" />
                    <CCarouselCaption className="d-none d-md-block">
                    <h5>Gardens</h5>
                    </CCarouselCaption>
                </CCarouselItem>
                </CCarousel>
           </div>
}

export default VenueImages;