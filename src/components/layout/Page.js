import { Fragment } from 'react';
import AdvertsFilter from '../adverts/AdvertsPage/AdvertsFilter';

function Page({ title, children }) {
  return (
    <Fragment>
      <h2 className="layout-title">{title}</h2>
      <AdvertsFilter></AdvertsFilter>
      <section>{children}</section>
    </Fragment>
  );
}

export default Page;
