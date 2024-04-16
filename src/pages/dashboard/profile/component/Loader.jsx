export const ProfileLoader = () => {
  return (
    <>
      <div className="bg-white rounded-xl mt-8 w-full xl:w-[70%] animate-pulse">
        <div>
          <div className="box overflow-hidden rounded-xl shadow bg-white">
            <div className="box-body !p-0">
              <div className="sm:flex items-start p-6 bg-gray-300">
                <div>
                  <span className="bg-gray-400 rounded-full w-16 h-16 block me-4"></span>
                </div>
                <div className="flex-grow main-profile-info">
                  <div className="flex items-center !justify-between">
                    <h6 className="font-semibold mb-1 bg-white text-[1rem] w-44 inline-block"></h6>
                    <button
                      type="button"
                      className="bg-gray-200 px-3 py-2 !font-medium rounded flex gap-2 w-12 h-8"
                    ></button>
                  </div>
                  <p className="mb-1 bg-white w-12 opacity-[0.7]"></p>
                  <p className="text-[0.75rem] text-white mb-6 opacity-[0.5]"></p>
                </div>
              </div>
              <div className="p-6 border-b border-dashed">
                <div className="mb-6">
                  <span className="block bg-gray-200 px-6 py-2 m-2 w-24 rounded-md"></span>
                  <span className="block bg-gray-200 px-6 py-2 m-2 w-1/2 rounded-md"></span>
                  <span className="block bg-gray-200 px-6 py-2 m-2 w-1/2 rounded-md"></span>
                </div>
              </div>
              <span className="float-right block bg-gray-200 px-6 py-2 m-2 w-24 rounded-md"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
