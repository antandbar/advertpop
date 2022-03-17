import { Fragment } from 'react';

function Page({ title, children }) {
  return (
    <Fragment>
      <h2 className="layout-title bordered">{title}</h2>
      <section>{children}</section>
    </Fragment>
  );
}

export default Page;
