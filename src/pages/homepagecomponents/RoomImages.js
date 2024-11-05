import { CCarousel, CCarouselItem, CImage,CCarouselCaption } from '@coreui/react-pro'
import React from 'react';

function RoomImages(){
    return <div class='desc'>
        <CImage align="center" src="/images/Icons/RoomIcon.png" width={70} height={70}/>                
        <h2>Our Restful Rooms</h2>
        <p>We provide the best rooms to  make your stay comfortable and enjoyable!</p>
                <CCarousel controls indicators>
                <CCarouselItem>
                    <CImage className="d-block w-100" rounded src='/images/Rooms/SingleBedRoom.png' alt="slide 1" />
                    <CCarouselCaption className="d-none d-md-block">
                    <h5>Single Bedroom</h5>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" rounded src='/images/Rooms/TwoSingleBedRoom.png' alt="slide 2" />
                    <CCarouselCaption className="d-none d-md-block">
                    <h5>Two Single Bedroom</h5>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" rounded src='/images/Rooms/CouplesBedRoom.png' alt="slide 3" />
                    <CCarouselCaption className="d-none d-md-block">
                    <h5>Couple's Bedroom</h5>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" rounded src='/images/Rooms/TwoCouplesBedRoom.png' alt="slide 3" />
                    <CCarouselCaption className="d-none d-md-block">
                    <h5>Two Couple's Bedroom</h5>
                    </CCarouselCaption>
                </CCarouselItem>
                </CCarousel>
           </div>
}

export default RoomImages;