import { CCarousel, CCarouselItem, CImage } from '@coreui/react-pro'
import React from 'react';

function StaffImages(){
    return <div class='desc'>
        <CImage align="center" src="/images/Icons/StaffIcon.png" width={70} height={70}/>                
        <h2>Our Beloved Staff</h2>
        <p>Our staff work hard with care and passion to provide you the best service!</p>
                <CCarousel controls indicators dark width={180} height={180}>
                <CCarouselItem>
                    <CImage className="d-block w-50" align="center" rounded src='/images/Staff/Prism.png' alt="Prism - Head Manager"/>
                    <h5>Prism - Head Manager</h5>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-50" align="center" rounded src='/images/Staff/Allie.png' alt="Allie - Receptionist"/>
                    <h5>Allie - Receptionist</h5>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-50" align="center" rounded src='/images/Staff/Shelby.png' alt="Shelby - Head Maintenance" />
                    <h5>Shelby - Head Maintenance</h5>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-50" align="center" rounded src='/images/Staff/Marcy.png' alt="Marcy - Venue Manager" />
                    <h5>Marcy - Venue Manager</h5>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-50" align="center" rounded src='/images/Staff/Elfie.png' alt="Elfie - Room Manager" />
                    <h5>Elfie - Room Manager</h5>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-50" align="center" rounded src='/images/Staff/Steve.png' alt="Steve - Head of Security" />
                    <h5>Steve - Head of Security</h5>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-50" align="center" rounded src='/images/Staff/Zepp.png' alt="Zepp - Sous-Chef" />
                    <h5>Zepp - Sous-Chef</h5>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-50" align="center" rounded src='/images/Staff/Brian.png' alt="Brian - Head IT" />
                    <h5>Brian - Head IT</h5>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-50" align="center" rounded src='/images/Staff/Bill.png' alt="Bill - Host" />
                    <h5>Bill - Host</h5>
                </CCarouselItem>
                </CCarousel>
           </div>
}

export default StaffImages;