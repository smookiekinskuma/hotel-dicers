import { CCarousel, CCarouselItem, CImage } from '@coreui/react-pro'
import React from 'react';

function StaffImages(){
    return <div>                
        <h2>Our Staff</h2>
                <CCarousel controls indicators dark width={180} height={180}>
                <CCarouselItem>
                    <CImage className="d-block w-50" align="center" rounded src='/images/Prism.png' alt="slide 1"/>
                    <h5>Prism - Head Manager</h5>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-50" align="center" rounded src='/images/Allie.png' alt="slide 2"/>
                    <h5>Allie - Receptionist</h5>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-50" align="center" rounded src='/images/Shelby.png' alt="slide 3" />
                    <h5>Shelby - Head Maintenance</h5>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-50" align="center" rounded src='/images/Marcy.png' alt="slide 3" />
                    <h5>Marcy - Venue Manager</h5>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-50" align="center" rounded src='/images/Elfie.png' alt="slide 3" />
                    <h5>Elfie - Room Manager</h5>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-50" align="center" rounded src='/images/Steve.png' alt="slide 3" />
                    <h5>Steve - Head of Security</h5>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-50" align="center" rounded src='/images/Zepp.png' alt="slide 3" />
                    <h5>Zepp - Sous-Chef</h5>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-50" align="center" rounded src='/images/Brian.png' alt="slide 3" />
                    <h5>Brian - Head IT</h5>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-50" align="center" rounded src='/images/Bill.png' alt="slide 3" />
                    <h5>Bill - Host</h5>
                </CCarouselItem>
                </CCarousel>
           </div>
}

export default StaffImages;