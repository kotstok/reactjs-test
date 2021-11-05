import React from 'react';

type FetchingErrorType = {
  message: string;
};

export function FetchingError(props: FetchingErrorType): JSX.Element {
  return <h1>{props.message}</h1>;
}
