"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { appointmentSchema } from "./appointmentSchema";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./appointmentForm.css";

type FormData = {
  Name: string;
  Firstname: string;
  Email: string;
  Message: string;
  Contact: number;
  AppointmentDate: Date;
  Status: "pending" | "rejected" | "validated" | "archived";
};

const AppointmentForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
    try {
      await axios.post("/appointment", data);
      alert("Appointment saved successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to save appointment");
    }
  };

  return (
    <div className="container">
      <h1>Do you want to make an appointment?</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="Name">Name:</label>
          <input
            {...register("Name", { required: true })}
            type="text"
            id="Name"
            placeholder="Enter your name"
            autoComplete="off"
          />
          {errors.Name && (
            <p className="error-message">{errors.Name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="Firstname">First Name:</label>
          <input
            {...register("Firstname", { required: true })}
            type="text"
            id="Firstname"
            placeholder="Enter your first name"
            autoComplete="off"
          />
          {errors.Firstname && (
            <p className="error-message">{errors.Firstname.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="Email">Email address:</label>
          <input
            {...register("Email", { required: true })}
            type="email"
            id="Email"
            placeholder="Enter your email address"
            autoComplete="off"
          />
          {errors.Email && (
            <p className="error-message">{errors.Email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="Contact">Contact:</label>
          <input
            {...register("Contact", { required: true })}
            type="number"
            id="Contact"
            placeholder="Enter your contact"
            autoComplete="off"
          />
          {errors.Contact && (
            <p className="error-message">{errors.Contact.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="AppointmentDate">Appointment date:</label>
          <input
            {...register("AppointmentDate", { required: true })}
            type="date"
            id="AppointmentDate"
            placeholder="Enter your appointment date"
            autoComplete="off"
          />
          {errors.AppointmentDate && (
            <p className="error-message">{errors.AppointmentDate.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="Status">Status:</label>
          <select {...register("Status", { required: true })} id="Status">
            <option value="pending">Pending</option>
            <option value="validated">Validated</option>
            <option value="rejected">Rejected</option>
            <option value="archived">Archived</option>
          </select>
          {errors.Status && (
            <p className="error-message">{errors.Status.message}</p>
          )}
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
