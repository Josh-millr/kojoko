import { Puff } from 'react-loading-icons';

export function LoadingScreen() {
  return (
    <div className="absolute top-0 left-0 min-h-screen w-full flex justify-center items-center">
      <Puff stroke="#36454F" />
    </div>
  );
}
