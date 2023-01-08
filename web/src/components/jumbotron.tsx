import React from "react";

interface JumbotronProps {
  header: string;
  leadingParagraph: string;
}

const Jumbotron: React.FC<JumbotronProps> = ({ header, leadingParagraph }: JumbotronProps) => {
  return (
    <div className=" bg-jumbotron bg-white pt-20 h-auto mb-20">
      <div className="bg-overlay sm:px-12">
        <div className="  flex flex-col px-10 py-20 justify-center">
          <h1 className="text-center mb-10 text-xl text-white">{header}</h1>
          <p className="text-white text-center mb-10">{leadingParagraph}</p>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
