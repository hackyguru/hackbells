import Blockies from "react-blockies";

export const Blockie = (props) => (
  <Blockies
    seed={props.seed}
    size={10}
    scale={3}
    color="#dfe"
    bgColor="#ffe"
    spotColor="#abc"
    className="identicon"
  />
);
