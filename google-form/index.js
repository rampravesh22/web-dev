// app.js
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => {
	console.error("Error connecting to MongoDB:", error);
});

db.once("open", () => {
	console.log("Connected to MongoDB");
});

// Define a schema for the form data
const formDataSchema = new mongoose.Schema({
	name: String,
	email: String,
	message: String,
});
const FormData = mongoose.model("FormData", formDataSchema);

const port = process.env.PORT || 3000; // Use the specified port or default to 3000
app.use(
	cors({
		origin: "http://localhost:5175", // Replace with the origin (URL) you want to allow
		methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
		credentials: true,
	})
);

app.use(bodyParser.json());
// Middleware to parse JSON requests

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.USER_EMAIL,
		pass: process.env.USER_PASSWORD,
	},
});
// Define a route to handle form submissions
app.post("/submit-form", async (req, res) => {
	try {
		// Validate the request (Add more validation as needed)
		const { name, email, message } = req.body;
		console.log(req.body);
		if (!name || !email || !message) {
			return res.status(400).json({
				error: "Name, email, and message are required fields.",
			});
		}
		const formData = new FormData({
			name,
			email,
			message,
		});

		await formData.save();

		// Send an email to the user

		const mailOptions = {
			from: process.env.FROM_EMAIL,
			to: email,
			subject: "Your Subject",
			text: `Dear ${name},\n\n${message}`,
		};

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.error(error);
				return res.status(500).json({ error: "Failed to send email." });
			}
			console.log("Email sent:", info.response);
			res.status(200).json({ success: "Email sent successfully." });
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error." });
	}
});

app.get("/find-one-data", async (req, res) => {
	try {
		const { to, subject, text } = req.body;
		const mailOptions = {
			from: "ram@gmail.com",
			to: to,
			subject: subject,
			text: text,
		};
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return res.status(500).json({ error: error.toString() });
			}
			res.status(200).json({ message: "Email sent!", info });
		});
	} catch (error) {}
});

// Start the server
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
