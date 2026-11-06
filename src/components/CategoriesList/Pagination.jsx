const getPageNumbers = (totalPages) => {
  const numbers = [];
  for (let i = 1; i <= totalPages; i++) {
    return numbers.push(i);
  }
  return numbers;
};

const PageButton = (props) => {
  const { number, current, onSelect } = props;

  const handleSelect = () => onSelect(number);

  return <button onClick={handleSelect}>{number}</button>;
};

export const Pagination = (props) => {
  const { page, totalPages, onChange } = props;
  return <></>;
};
