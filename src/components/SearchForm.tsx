import React from "react";

interface SearchFormProps {
  message: string;
}

const SearchForm: React.FC<SearchFormProps> = ({ message }) => {
  return (
    <div>
      <p>SearchForm SearchForm</p>
      <p>{message}</p>
    </div>
  );
};

export default SearchForm;
