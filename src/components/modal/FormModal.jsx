import React, { useState } from "react";
import { DashForm } from "../form/Form";
import { PrimaryButton } from "../Button";

export const FormModal = ({ children, loading, handleOpen, title }) => {
  return (
    <div className="overflow-x-hidden fixed top-0 flex left-0 z-40 justify-center items-center min-h-full w-full bg-gray-700/20">
      <div className="w-full max-w-xl xl:max-w-3xl">
        <DashForm title={title}>
          <button
            className={`absolute top-4 right-4 group ${
              loading && "cursor-not-allowed"
            }`}
            onClick={handleOpen}
            disabled={loading ? true : false}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 fill-current group-hover:fill-red-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          {children}
        </DashForm>
      </div>
    </div>
  );
};

export const RoleModal = ({ userId, isOpen, handleModal, handleRole }) => {
  const [userRole, setUserRole] = useState({
    isInstructor: false,
    isSuperuser: false,
  });
  return (
    <>
      <FormModal title="Role" handleOpen={handleModal}>
        <form className="p-4">
          <div className="flex items-center mb-2">
            <input
              id="roleAdmin"
              onChange={() => {
                setUserRole({ isInstructor: false, isSuperuser: true });
              }}
              className="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-purple-500"
              type="radio"
              name="role"
            />
            <label
              htmlFor="roleAdmin"
              className="ps-2 text-sm font-medium text-gray-900 cursor-pointer"
            >
              Admin
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              // {isInstructor ? checked : ""}
              onChange={() => {
                setUserRole({ isInstructor: true, isSuperuser: false });
              }}
              id="roleInstructor"
              type="radio"
              value=""
              name="role"
              className="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-purple-500"
            />
            <label
              htmlFor="roleInstructor"
              className="pl-2 text-sm font-medium text-gray-900 cursor-pointer"
            >
              Instructor
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              // {isInstructor ? checked : ""}
              onChange={() => {
                setUserRole({ isInstructor: false, isSuperuser: false });
              }}
              id="roleStudent"
              type="radio"
              value=""
              name="role"
              className="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-purple-500"
            />
            <label
              htmlFor="roleStudent"
              className="pl-2 text-sm font-medium text-gray-900 cursor-pointer"
            >
              Student
            </label>
          </div>
          <PrimaryButton
            type="button"
            handleClick={() =>
              handleRole(userId, userRole?.isInstructor, userRole?.isSuperuser)
            }
          >
            Update
          </PrimaryButton>
        </form>
      </FormModal>
    </>
  );
};
