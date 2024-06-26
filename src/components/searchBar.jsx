import PropTypes from "prop-types";

export default function SearchBar(props) {
  return (
    <form action="">
      <input
        type="text"
        placeholder="Digite o item que você procura"
        className="h-10 w-full border-solid border-2 rounded-md border-azul-ancora"
        onFocus={() => props.setActiveInput(true)}
        value={props.search}
        onChange={(input) => props.setSearch(input.target.value)}
      />
    </form>
  );
}

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  activeInput: PropTypes.bool.isRequired,
  setActiveInput: PropTypes.func.isRequired,
};
