import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { login } from "../../https";
import { enqueueSnackbar } from "notistack"
import {useDispatch} from 'react-redux'
import { setUser } from "../../redux/slices/userSlice";
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation.mutate(formData);
  };

  //Data Fetching
  const loginMutation = useMutation({
    mutationFn: (reqData) => login(reqData),
    onSuccess: (res) => {
      const { data } = res;
      enqueueSnackbar(data.message, {variant: 'success'});
      const { _id, name, email, phone, role } = data.data
      dispatch(setUser({_id, name, email, phone, role}));
      navigate('/')
    },
    onError: (error) => {
      const { response } = error;
      enqueueSnackbar(response.data.message, {variant: 'error'})
    },
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block text-[#ababab] mb-2 text-sm font-medium">
            Employee Email
          </label>
          <div className="flex item-center rounded-lg p-5 px4 bg-[#1f1f1f]">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter empoloyee email"
              className="bg-transparent flex-1 text-white focus:outline-none"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-[#ababab] mb-2 text-sm font-medium">
            Passowrd
          </label>
          <div className="flex item-center rounded-lg p-5 px4 bg-[#1f1f1f]">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="bg-transparent flex-1 text-white focus:outline-none"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg mt-6 py-3 text-lg bg-yellow-400 text-gray-900 font-bold"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
