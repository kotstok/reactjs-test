import React from 'react';
import { ReactComponent as Icon } from 'assets/ico/search.svg';
import {useTypeSelector} from "../hooks/useTypeSelector";

type SearchBoxType = {
  onChange: (value: string) => void
}

export function SearchBox(props: SearchBoxType): JSX.Element {
  const search = useTypeSelector((state) => state.articles.search);
  const [value, setValue] = React.useState(search);

  React.useEffect(() => {
    if (value !== search) {
      setValue(search);
    }
  }, [search, value]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    props.onChange(e.currentTarget.value);
  };

  return (
    <div className="search-box">
      <input value={value} placeholder="Search" onChange={handleChange} />
      <Icon />
    </div>
  );
}
