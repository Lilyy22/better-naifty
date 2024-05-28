import React, { useState } from "react";
import { FormModal } from "../../../components/modal/FormModal";
import { useMutation } from "@apollo/client";
import { CHANGEPASSWORD } from "./data/mutation";
import { PrimaryButton } from "../../../components/Button";
import { InputPassword } from "../../../components/form/Input";
import { Toast } from "../../../components/Toast";

export const ChangePassword = ({ handleOpen }) => {
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [changePassword] = useMutation(CHANGEPASSWORD);

  const [close, setClose] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    success: false,
    error: false,
    errorContent: "",
    successContent: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (newPassword === confirmPassword) {
      try {
        const { data } = await changePassword({
          variables: {
            oldPassword: oldPassword,
            newPassword: newPassword,
          },
        });

        if (data?.change_password?.success) {
          setLoading(false);
          setClose(false);
          setStatus({
            ...status,
            success: true,
            successContent: "Password Changed Successfully!",
          });
          setTimeout(() => {
            handleOpen();
          }, 1000);
        } else {
          setLoading(false);
          setClose(false);
          setStatus({
            ...status,
            success: false,
            error: true,
            errorContent: "Wrong Password, please insert correct Password!",
          });
          setTimeout(() => {
            handleOpen();
          }, 1000);
        }
      } catch (error) {
        setLoading(false);
        setClose(false);
        setStatus({
          ...status,
          error: true,
          success: false,
          errorContent: error?.graphQLErrors?.[0]?.message,
        });
        setTimeout(() => {
          handleOpen();
        }, 1000);
      }
    } else {
      setLoading(false);
      setStatus({
        ...status,
        error: true,
        success: false,
        errorContent: "Password Do not Match!",
      });
    }
  };

  return (
    <>
      {status.error && (
        <Toast
          text={status.errorContent ?? "Something went wrong."}
          isSuccess={false}
          close={close}
          setClose={setClose}
        />
      )}
      {status.success && (
        <Toast
          text={status.successContent ?? "Successfull!"}
          isSuccess={true}
          close={close}
          setClose={setClose}
        />
      )}

      <FormModal
        title="Change Password"
        loading={loading}
        handleOpen={handleOpen}
      >
        <form className="p-6 top-0 text-sm" onSubmit={handleSubmit}>
          <InputPassword
            label="Old Password"
            password={oldPassword}
            setPassword={setOldPassword}
          />
          <InputPassword
            label="New Password"
            password={newPassword}
            setPassword={setNewPassword}
          />
          <InputPassword
            label="Confirm Password"
            password={confirmPassword}
            setPassword={setConfirmPassword}
          />

          <PrimaryButton
            text={loading ? "•••" : "Submit"}
            isDisabled={loading ? true : false}
          />
        </form>
      </FormModal>
    </>
  );
};
