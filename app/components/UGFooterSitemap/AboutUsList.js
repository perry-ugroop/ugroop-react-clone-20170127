import React from 'react';
import UGFooterLinkList from './UGFooterLinkList';

const AboutUsList = UGFooterLinkList[0].AboutUs.map((items) => <li><a href={items.url} alt={items.Name}>
  {items.Name}
</a></li>
);

export default AboutUsList;
