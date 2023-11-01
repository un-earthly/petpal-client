import React from 'react';

interface Props {
  imageUrl: string;
  name: string;
  title: string;
  description: string;
}

const ReviewCard: React.FC<Props> = ({ imageUrl, name, title, description }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <img
            src={imageUrl}
            alt={name}
            className="inline-block w-8 h-8 text-gray-400 mb-8"
          />
          <p className="leading-relaxed text-lg">{description}</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
            {name}
          </h2>
          <p className="text-gray-500">{title}</p>
        </div>
      </div>
    </section>
  );
};

export default ReviewCard;
