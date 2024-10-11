import React from 'react';
import '../components/Boxes.css';

import { CRating } from '@coreui/react-pro';
import '@coreui/coreui-pro/dist/css/coreui.min.css'

const Inboxbook = ({ review }) => {
    return (
        <div id = "LongBox">
            <h3>{review.fName}</h3>
            <CRating readOnly value={review.Rating} />
            <h3>{review.Title}</h3>
            <h4>{review.Description}</h4>
        </div>
    )
}

export default Inboxbook;

