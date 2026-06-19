
import React, { useState } from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import axios from "axios";

type Form = {
  name: string;
  email: string;
  phone: string;
};

export default function RegisterForm() {
  const [form, setForm] = useState<Form>({
    name: "",
    email: "",
    phone: "",
  });

  const handleForm = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://workshop-landingpage-1.onrender.com/contact/enquiry",
        form
      );

    

      setForm({
        name: "",
        email: "",
        phone: "",
      });

      alert("It worked!");
       return res.data
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section
      id="register"
      className="py-20 bg-slate-50"
    >
     
  <div className="max-w-4xl mx-auto px-6">
    <div className="text-center mb-10">
      <h2 className="text-4xl font-bold text-slate-900">
        Register for the Workshop
      </h2>

      <p className="mt-3 text-gray-600">
        Fill in your details to reserve your seat in the
        AI & Robotics Summer Workshop.
      </p>
    </div>

    <form onSubmit={handleForm}
      className="
        max-w-xl
        mx-auto
        bg-white
        p-8
        rounded-3xl
        shadow-lg
        border border-slate-200
        flex flex-col gap-5
      "
    >
      <Input
        name="name"
        id="name"
        type="text"
        value={form.name}
        label="Full Name"
        onChange={handleChange}
        placeholder="Enter your name"
        className="
          w-full
          border
          border-slate-300
          rounded-xl
          px-4
          py-3
          outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      />

      <Input
        name="email"
        id="email"
        type="email"
        value={form.email}
        label="Email Address"
        onChange={handleChange}
        placeholder="Enter your email"
        className="
          w-full
          border
          border-slate-300
          rounded-xl
          px-4
          py-3
          outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      />

      <Input
        name="phone"
        id="phone"
        type="tel"
        value={form.phone}
        label="Phone Number"
        onChange={handleChange}
        placeholder="Enter your phone number"
        className="
          w-full
          border
          border-slate-300
          rounded-xl
          px-4
          py-3
          outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      />

      <Button type='submit'
        className="
          mt-2
          bg-blue-600
          hover:bg-blue-700
          text-white
          py-3
          rounded-xl
          transition
          font-semibold
        "
      >
        Enroll Now
      </Button>
    </form>
  </div>
    </section>
  );
}