import react from "react";

function SectionBlock(props) {
  return (
    <div className="section-block">
      <h2>{props.header}</h2>
      <div>
        {props.content}
      </div>
    </div>
  );
}

export default SectionBlock;
