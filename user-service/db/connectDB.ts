import mongoose, { Mongoose } from "mongoose";

import { USER_SERVICE_MONGO_URI } from '../utils/config';
import User from '../src/models/userModel';

const connectMongoDB = async () => {
  try {
      const user_conn: Mongoose = await mongoose.connect(USER_SERVICE_MONGO_URI);
      const historyEntries = [
        {
            timeSubmitted: new Date("2024-10-01T10:00:00Z"),
            questionTitle: "Question 1",
            questionId: 101,
            language: "Python",
            code: "print('Hello, World!')",
        },
        {
            timeSubmitted: new Date("2024-10-02T12:00:00Z"),
            questionTitle: "Question 2",
            questionId: 102,
            language: "JavaScript",
            code: "console.log('Hello, World!')",
        },
        {
            timeSubmitted: new Date("2024-10-03T12:00:00Z"),
            questionTitle: "Question 3",
            questionId: 103,
            language: "C",
            code: "console.log('Hello, World!')",
        },
        {
            timeSubmitted: new Date("2024-10-04T12:00:00Z"),
            questionTitle: "Question 4",
            questionId: 104,
            language: "C++",
            code: "console.log('Hello, World!')",
        },
        {
            timeSubmitted: new Date("2024-10-05T12:00:00Z"),
            questionTitle: "Question 5",
            questionId: 105,
            language: "JavaScript",
            code: "console.log('Hello, World!')",
        },
        {
            timeSubmitted: new Date("2024-10-06T12:00:00Z"),
            questionTitle: "Question 6",
            questionId: 106,
            language: "JavaScript",
            code: "console.log('Hello, World!')",
        },
        {
            timeSubmitted: new Date("2024-10-07T12:00:00Z"),
            questionTitle: "Question 7",
            questionId: 107,
            language: "JavaScript",
            code: "console.log('Hello, World!')",
        },
    ];

    // Create a new user with embedded history entries
    const newUser = new User({
        username: "Test123",
        email: "Test123@gmail.com",
        password: "Test45678",
        createdAt: new Date(),
        numberOfFailedLoginAttempts: 0,
        isAdmin: false,
        attemptHistory: historyEntries,
    });

    // Save the user to the database
    const savedUser = await newUser.save();
      console.log(`MongoDB connected: ${user_conn.connection.host}`);
  } catch (error) {
      if (error instanceof Error) {
          console.error(`Error connecting to MongoDB: ${error.message}`);
      } else {
          console.error('Unknown error connecting to MongoDB');
      }
  }
};

export default connectMongoDB;