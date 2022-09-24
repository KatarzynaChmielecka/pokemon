import { useParams } from 'react-router-dom';

const Details = () => {
  const params = useParams();

  return (
    <div>
      Details
      <span>{params.id}</span>
    </div>
  );
};

export default Details;
