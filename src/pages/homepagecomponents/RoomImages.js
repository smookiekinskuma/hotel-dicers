import { CCarousel, CCarouselItem, CImage,CCarouselCaption } from '@coreui/react-pro'
import React from 'react';

function RoomImages(){
    return <div>                
        <h2>Our Rooms</h2>
                <CCarousel controls indicators>
                <CCarouselItem>
                    <CImage className="d-block w-100" rounded src='/images/SingleBedRoom.png' alt="slide 1" />
                    <CCarouselCaption className="d-none d-md-block">
                    <h5>Single Bedroom</h5>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" rounded src='/images/TwoSingleBedRoom.png' alt="slide 2" />
                    <CCarouselCaption className="d-none d-md-block">
                    <h5>Two Single Bedroom</h5>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" rounded src='/images/CouplesBedRoom.png' alt="slide 3" />
                    <CCarouselCaption className="d-none d-md-block">
                    <h5>Couple's Bedroom</h5>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" rounded src='/images/TwoCouplesBedRoom.png' alt="slide 3" />
                    <CCarouselCaption className="d-none d-md-block">
                    <h5>Two Couple's Bedroom</h5>
                    </CCarouselCaption>
                </CCarouselItem>
                </CCarousel>
           </div>
}

export default RoomImages;