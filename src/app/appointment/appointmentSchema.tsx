import { z } from "zod";

export const appointmentSchema = z.object({
  Name: z
    .string()
    .min(1, "Name is required")
    .max(50, "Name must be 50 characters or less"),
  Firstname: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name must be 50 characters or less"),
  Email: z.string().email("Invalid email address").min(1, "Email is required"),
  Message: z
    .string()
    .max(500, "Message must be 500 characters or less")
    .optional(),
  Contact: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number")
    .min(1, "Phone number is required"),
  AppointmentDate: z.date({
    required_error: "Appointment date is required",
    invalid_type_error: "Invalid date format",
  }),
  Status: z.enum(["pending", "rejected", "validated", "archived"]),
});
