export const Loader = () => {
  return (
    <div className="my-4 w-full animate-pulse">
      <div className="flex space-x-2">
        <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
        <div className="flex-1">
          <p className="bg-gray-300 w-24 py-2 mb-0.5 rounded"></p>
          <p className="w-16 bg-gray-300 py-2 mb-2 rounded"></p>
          <p className="bg-gray-300 w-full py-2 rounded"></p>
        </div>
      </div>
    </div>
  );
};
