export const CourseDetailLoader = () => {
  return (
    <>
      <div className="my-8 rounded-lg animate-pulse">
        {/* Start container */}
        <div className="flex flex-wrap justify-between">
          {/*Start description card */}
          <div className="w-full lg:w-[39%] px-2 py-6 lg:p-6 order-last">
            {/* header */}
            <div className="flex flex-wrap justify-between">
              <div>
                <h1 className="bg-gray-200 mb-1 p-1.5 rounded"></h1>
                <div>
                  <span className="w-16 bg-gray-200 rounded py-1 mr-4"></span>
                  <span className="w-16 bg-gray-200 rounded py-1 mr-4"></span>
                  <span className="w-16 bg-gray-200 rounded py-1"></span>
                </div>
              </div>
              <div className="p-2 rounded-xl bg-gray-300 h-8 w-24"></div>
            </div>
            {/* END header */}
            <h1 className="my-6 bg-gray-300 rounded-md w-28 p-1.5 mb-1"></h1>
            <p className="bg-gray-200 rounded-md w-full p-1.5 mb-1"></p>
            <p className="bg-gray-200 rounded-md w-full p-1.5 mb-1"></p>
            <p className="bg-gray-200 rounded-md w-full p-1.5 mb-1"></p>
            <p className="bg-gray-200 rounded-md w-full p-1.5 mb-1"></p>
            <h1 className="my-6 bg-gray-300 rounded-md w-28 p-1.5 mb-1"></h1>
          </div>
          {/*END description card */}
          <div className="w-full lg:w-[60%]">
            <div className="w-full h-72 bg-gray-300"></div>
            <div className="p-6 bg-white rounded-b-lg">
              <div className="bg-white rounded-b-lg">
                <h1 className="my-4 w-24 p-1.5 bg-gray-300 rounded-md"></h1>
                <ol>
                  <li className="bg-gray-200 w-full rounded-md p-2 mb-2"></li>
                  <li className="bg-gray-200 w-full rounded-md p-2 mb-2"></li>
                  <li className="bg-gray-200 w-full rounded-md p-2 mb-2"></li>
                  <li className="bg-gray-200 w-full rounded-md p-2 mb-2"></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* END container */}
      </div>
    </>
  );
};
