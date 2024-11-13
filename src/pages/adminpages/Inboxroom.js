import React from 'react';
import '../boxcomponents/Boxes.css';

import { CRating } from '@coreui/react-pro';
import '@coreui/coreui-pro/dist/css/coreui.min.css'

//This is Reviews btw

const Inboxbook = ({ review }) => {
    return (
        <div id = "LongBox">
            <h3>{review.fullName}</h3>
            <h4>{review.email}</h4>
            <CRating readOnly value={review.Rating} />
            <h3>{review.Title}</h3>
            <h4>{review.Description}</h4>
        </div>
    )
}

export default Inboxbook;

