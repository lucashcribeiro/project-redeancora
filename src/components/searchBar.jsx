import PropTypes from "prop-types";
import Input from "./input";
// import Keyboard, { KeyboardTrigger, KeyboardContent, KeyboardInput } from "./keyboard";

export default function SearchBar(props) {
  return (
    <form action="">

      {/* <Keyboard>
        <KeyboardTrigger />
        <KeyboardContent />
        <KeyboardInput 
          type="text"
          placeholder="Digite o item que você procura"
          className="h-10 w-full border-solid border-2 rounded-md border-azul-ancora"
          onFocus={() => props.setActiveInput(true)}
          value={props.search}
          onChange={(input) => props.setSearch(input.target.value)}
        />
      </Keyboard> */}
      
      <Input
        type="text"
        placeholder="Digite o item que você procura"
        className="h-10 w-full border-solid border-2 rounded-md border-azul-ancora"
        value={props.search}
        onChange={(value) => props.setSearch(value)}
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
