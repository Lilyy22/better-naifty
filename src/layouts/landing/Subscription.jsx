import React, { useState } from "react";
import { LandPrimaryButton, PrimaryButton } from "../../components/Button";

export const Subscription = () => {
  const [email, setEmail] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };
  return (
    <>
      <div>
        <form className="flex gap-2" onSubmit={handleSubmit}>
          <div className="w-full">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-custom-white-100 text-black rounded-2xl focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 outline-none"
              placeholder="johndoe@gmail.com"
              required
            />
          </div>
          <LandPrimaryButton type="submit" text="Subscribe" />
        </form>
      </div>
    </>
  );
};
