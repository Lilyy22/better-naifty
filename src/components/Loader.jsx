import React from "react";

export const TableLoader = () => {
  const array = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <div className="overflow-hidden rounded-xl bg-white animate-pulse min-w-5xl xl:w-[80%] font-mont">
        <div className="flex justify-between p-4">
          <div className="bg-gray-200 rounded p-3 w-16"></div>
          <div className="bg-gray-200 rounded p-3 w-16"></div>
        </div>
        <div className="box-body !p-0">
          <div className="px-4 my-4">
            <table className="mb-0 rounded-lg text-start border w-full overflow-x-scroll">
              <thead>
                <tr className="border border-red-900">
                  {array.map((item) => (
                    <th
                      scope="col"
                      className="text-start p-4 font-bold leading-3 border border-gray-100"
                      key={item}
                    >
                      <div className="bg-gray-200 p-3 rounded"></div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {array.map((item) => (
                  <tr className="border p-1" key={item}>
                    <td className="text-start px-4 py-2 border border-gray-100">
                      <div className="bg-gray-200 p-3 rounded"></div>
                    </td>
                    <td className="text-start px-4 py-2 border border-gray-100">
                      <div className="bg-gray-200 p-3 rounded"></div>
                    </td>
                    <td className="text-start px-4 py-2 border border-gray-100">
                      <div className="bg-gray-200 p-3 rounded"></div>
                    </td>
                    <td className="text-start px-4 py-2 border border-gray-100">
                      <div className="bg-gray-200 p-3 rounded"></div>
                    </td>
                    <td className="text-start px-4 py-2 border border-gray-100">
                      <div className="bg-gray-200 p-3 rounded"></div>
                    </td>
                    <td className="text-start px-4 py-2 border border-gray-100">
                      <div className="bg-gray-200 p-3 rounded"></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

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
                <div className="bg-gray-200 mb-1 p-1.5 rounded"></div>
                <div>
                  <span className="w-16 bg-gray-200 rounded py-1 mr-4"></span>
                  <span className="w-16 bg-gray-200 rounded py-1 mr-4"></span>
                  <span className="w-16 bg-gray-200 rounded py-1"></span>
                </div>
              </div>
              <div className="p-2 rounded-xl bg-gray-300 h-8 w-24"></div>
            </div>
            {/* END header */}
            <div className="my-6 bg-gray-300 rounded-md w-28 p-1.5 mb-1"></div>
            <p className="bg-gray-200 rounded-md w-full p-1.5 mb-1"></p>
            <p className="bg-gray-200 rounded-md w-full p-1.5 mb-1"></p>
            <p className="bg-gray-200 rounded-md w-full p-1.5 mb-1"></p>
            <p className="bg-gray-200 rounded-md w-full p-1.5 mb-1"></p>
            <div className="my-6 bg-gray-300 rounded-md w-28 p-1.5 mb-1"></div>
          </div>
          {/*END description card */}
          <div className="w-full lg:w-[60%]">
            <div className="w-full h-72 bg-gray-300"></div>
            <div className="p-6 bg-white rounded-b-lg">
              <div className="bg-white rounded-b-lg">
                <div className="my-4 w-24 p-1.5 bg-gray-300 rounded-md"></div>
                <ol className="list-outside">
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

export const ProfileLoader = () => {
  return (
    <>
      <div className="bg-white rounded-xl mt-8 w-full mx-auto animate-pulse">
        <div>
          <div className="box overflow-hidden rounded-xl shadow bg-white">
            <div className="box-body !p-0">
              <div className="sm:flex items-start p-6 bg-gray-300">
                <div>
                  <span className="bg-gray-400 rounded-full w-16 h-16 block me-4">
                    {/* <img alt="ProfilePicture" /> */}
                  </span>
                </div>
                <div className="flex-grow main-profile-info">
                  <div className="flex items-center !justify-between">
                    <div className="font-semibold mb-1 bg-white text-[1rem] w-44 inline-block">
                      {/* {firstName} {lastName} */}
                    </div>
                    <button
                      type="button"
                      className="bg-gray-200 px-3 py-2 !font-medium rounded flex gap-2 w-12 h-8"
                    ></button>
                  </div>
                  <div className="mb-1 bg-white w-12 opacity-[0.7]">
                    {/* {user.isInstructor ? "Instructor" : "Student"} @Naifty */}
                  </div>
                  <div className="text-[0.75rem] text-white mb-6 opacity-[0.5]">
                    {/* {user.email} */}
                  </div>
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

export const CourseCardLoader = () => {
  return (
    <>
      <div className="bg-white shadow w-full md:w-80 lg:w-72 rounded-lg mx-auto animate-pulse">
        {/* thumbnail */}
        <div className="bg-gray-300 rounded-t-lg w-full h-40"></div>
        {/* body */}
        <div className="p-4">
          <div className="bg-gray-300 w-1/4 py-1.5 mb-2 rounded-lg"></div>
          <p className="bg-gray-200 p-6 w-full py-1.5 mb-1 rounded-lg"></p>
          <p className="bg-gray-200 p-6 w-full py-1.5 mb-1 rounded-lg"></p>
          <p className="bg-gray-200 p-6 w-full py-1.5 mb-1 rounded-lg"></p>
          <p className="bg-gray-200 p-6 w-full py-1.5 mb-1 rounded-lg"></p>
        </div>
        {/* footer */}
        <div className="px-4 py-4 flex justify-between items-center border-t">
          {/* instructor profile */}
          <div className="flex gap-2">
            <div className="rounded-full w-9 h-9 bg-gray-200 m-auto"></div>
            <div className="my-auto">
              <span className="block w-24 bg-gray-300 p-1.5 rounded-lg mb-0.5"></span>
              <span className="block w-24 bg-gray-300 p-1.5 rounded-lg"></span>
            </div>
          </div>
          {/*END instructor profile */}
          {/* comment */}
          <div className="bg-slate-200 rounded-md p-3"></div>
        </div>
      </div>
    </>
  );
};
