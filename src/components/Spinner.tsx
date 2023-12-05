import { ScaleLoader } from 'react-spinners';

export const Spinner: React.FC = () => (
  <div className="spinner">
    <span>
      <ScaleLoader color="#a89e9e" />
    </span>
  </div>
);
