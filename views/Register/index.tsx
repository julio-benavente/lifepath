import React from "react";
import * as C from "@/components/index";
import Link from "next/link";

const LoginView = () => {
  return (
    <div className="grid min-h-screen px-8 py-16">
      <div className="grid w-full min-h-full grid-cols-12">
        <div className="grid self-center col-start-1 col-end-7">
          <p className="mb-4 text-4xl font-bold">
            Create new{" "}
            <span className="inline-block">
              account<span className="text-blue-500">.</span>
            </span>
          </p>
          <p className="mb-4 text-sm">
            Already has an account?{" "}
            <Link href="/login" className="text-blue-500 underline">
              Log in
            </Link>
          </p>
          <div className="grid grid-cols-2 mb-4 gap-x-4 gap-y-4">
            <C.Input.Text variant="outlined" id="name" label="Frist name" />
            <C.Input.Text variant="outlined" id="lastname" label="Last name" />
            <C.Input.Email
              variant="outlined"
              id="email"
              className="col-span-full"
              label="Email"
            />
            <C.Input.Password
              variant="outlined"
              id="password"
              className="col-span-full"
              label="Password"
            />
          </div>
          <C.Button className="block mx-auto">Create account</C.Button>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
