import React from 'react';

interface PaginationType {
  page: number;
  totalCount: number;
  perPage: number;
  onNext: (nextPage: number) => void;
  onPrev: (nextPage: number) => void;
}

export function PageFromUrl(): number {
  const params = new URLSearchParams(window.location.search);
  if (!params.has('p')) {
    return 1;
  }

  const page = params.get('p');
  return null === page || isNaN(+page) ? 1 : parseInt(page);
}

export function Pagination(props: PaginationType): JSX.Element {
  const numberOfPages = (): number =>
    Math.ceil(props.totalCount / props.perPage);

  const next = (): void =>
    props.onNext(
      props.page + 1 > numberOfPages() ? props.page : props.page + 1
    );

  const prev = () => props.onPrev(props.page - 1 < 1 ? 1 : props.page - 1);

  if (numberOfPages() < 2) {
    return <></>;
  }

  return (
    <div className="pagination">
      <div className="counter">
        <span>
          {props.page * props.perPage - props.perPage + 1}-
          {props.perPage * props.page}
        </span>
        <span className="text-second-min">
          &nbsp;&nbsp;out of {props.totalCount}
        </span>
      </div>
      <div className="pagination-fast-nav">
        <button onClick={prev}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
}
