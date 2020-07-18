import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faLinkedin, faGithub, faTwitter, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import {
  faLaptopCode,
  faDrawPolygon,
  faEdit,
  faBullhorn,
  faMapMarkerAlt,
  faPhone,
  faMobileAlt,
  faCogs,
  faCog,
  faPaperPlane,
  faCode
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* add any additional icon to the library */
library.add(
  fab,
  faCode,
  faLaptopCode,
  faDrawPolygon,
  faEdit,
  faEdit,
  faBullhorn,
  faMapMarkerAlt,
  faMobileAlt,
  faCogs,
  faCog,
  faTwitter,
  faLinkedin,
  faGithub,
  faTwitterSquare,
  faPaperPlane,
  faPhone
);

const Icon = ({ ...props }) => <FontAwesomeIcon {...props} />;

export default Icon;
