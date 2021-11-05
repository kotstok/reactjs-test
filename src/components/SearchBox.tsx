import React from 'react';
import { ReactComponent as Icon } from 'assets/ico/search.svg';
import { useActions } from '../hooks/useActions';
import {useTypeSelector} from "../hooks/useTypeSelector";

export function SearchBox(): JSX.Element {
  const state = useTypeSelector((state) => state.articles);
  const [value, setValue] = React.useState(state.search);
  const { setArticleSearch } = useActions();

  React.useEffect(() => {
    if (value !== state.search) {
      setValue(state.search);
    }
  }, [state.search]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    setArticleSearch(e.currentTarget.value);
  };

  return (
    <div className="search-box">
      <input value={value} placeholder="Search" onChange={handleChange} disabled={window.location.pathname !== "/news"} />
      <Icon />
    </div>
  );
}
