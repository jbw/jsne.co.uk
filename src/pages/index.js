import React from 'react';

import IconText from '../components/shared/IconText';
import ClockIcon from '../components/shared/Icons/Clock';
import CalendarIcon from '../components/shared/Icons/Calendar';
import MapIcon from '../components/shared/Icons/Map';

import HomeHero from '../components/Home';
import { MailingListFormSection } from '../components/shared/MailingListForm';
import { MapSection } from '../components/shared/Map';

import config from '../config';

const venue = config.venues.jazzCafe;

const IndexPage = () => [

    <HomeHero
        key="hero"
        primary={{
            title: <div><span>JavaScript</span> North East</div>,
            text: 'We\'re an all things JavaScript meetup based in Newcastle. We meet every third Wednesday of the month.',
        }}
        secondary={{
            preTitle: 'Up next:',
            title: 'JavaScript & Testing',
            text: 'Scott Walton from Hotjar will give an overview and dive into testing in JavaScript, showing us why it\'s an important factor in delivering reliable systems that you can continue to build on over time. Scott will also take us through an application he\'s written in Node and Marionette to demo testing end-to-end.',

            infos: [
                <IconText key="date" theme="light" icon={<CalendarIcon />} text={<span>16<sup>th</sup> May</span>} />,
                <IconText key="time" icon={<ClockIcon />} text="6.00pm" />,
                <IconText key="venue" icon={<MapIcon />} text="Jazz Cafe" to="#venue-map" />,
            ],
        }}
        eventInfo={{
            url: 'javascript-testing',
        }}
    />,

    <MailingListFormSection key="MailingListFormSection" />,
    <MapSection
        key="MapSection"
        center={venue.location}
        markers={[{
            title: venue.name,
            text: (
                <div>
                    {venue.address.street} <br />
                    {venue.address.postcode}
                </div>
            ),
            lat: venue.location.lat,
            link: {
                href: venue.mapsLink,
                text: 'View on Google Maps',
            },
            lng: venue.location.lng,
        }]}
    />,
];

export default IndexPage;
