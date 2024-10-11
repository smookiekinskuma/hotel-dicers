import { CCarousel, CCarouselItem, CImage,CCarouselCaption } from '@coreui/react'
import React from 'react';

function RoomImages(){
    return <div>                
                <CCarousel controls indicators>
                <CCarouselItem>
                    <CImage className="d-block w-100" src='/images/SingleBedRoom.png' alt="slide 1" />
                    <CCarouselCaption className="d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src='/images/TwoSingleBedRoom.png' alt="slide 2" />
                    <CCarouselCaption className="d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src='/images/CouplesBedRoom.png' alt="slide 3" />
                    <CCarouselCaption className="d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src='/images/TwoCouplesBedRoom.png' alt="slide 3" />
                    <CCarouselCaption className="d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                    </CCarouselCaption>
                </CCarouselItem>
                </CCarousel>
           </div>
}

export default RoomImages;