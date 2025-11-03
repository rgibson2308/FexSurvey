import { RequestHandler } from "express";
import nodemailer from "nodemailer";

export interface SurveyData {
  fullName: string;
  age: string;
  productInterest: string;
  smoker: string;
  monthlyBudget: string;
  coverageAmount: string;
  whyLooking: string;
}

// Create transporter for Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rgibson2308@gmail.com",
    pass: process.env.GMAIL_APP_PASSWORD || "",
  },
});

export const handleSurvey: RequestHandler = async (req, res) => {
  try {
    const surveyData: SurveyData = req.body;

    if (
      !surveyData.fullName ||
      !surveyData.age ||
      !surveyData.productInterest ||
      !surveyData.smoker ||
      !surveyData.monthlyBudget ||
      !surveyData.coverageAmount ||
      !surveyData.whyLooking
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Format email content
    const emailContent = `
New Survey Submission

Full Name: ${surveyData.fullName}
Age: ${surveyData.age}
Product Interested In: ${surveyData.productInterest}
Smoker: ${surveyData.smoker === "yes" ? "Yes" : "No"}
Monthly Budget (USD): $${surveyData.monthlyBudget}
Coverage Amount Looking For (USD): $${surveyData.coverageAmount}

Why Looking for Coverage:
${surveyData.whyLooking}

Timestamp: ${new Date().toISOString()}
    `.trim();

    // Send email
    await transporter.sendMail({
      from: "rgibson2308@gmail.com",
      to: "rgibson2308@gmail.com",
      subject: `New Survey Submission from ${surveyData.fullName}`,
      text: emailContent,
      html: `
        <h2>New Survey Submission</h2>
        <p><strong>Full Name:</strong> ${surveyData.fullName}</p>
        <p><strong>Age:</strong> ${surveyData.age}</p>
        <p><strong>Product Interested In:</strong> ${surveyData.productInterest}</p>
        <p><strong>Smoker:</strong> ${surveyData.smoker === "yes" ? "Yes" : "No"}</p>
        <p><strong>Monthly Budget (USD):</strong> $${surveyData.monthlyBudget}</p>
        <p><strong>Coverage Amount Looking For (USD):</strong> $${surveyData.coverageAmount}</p>
        <p><strong>Why Looking for Coverage:</strong></p>
        <p>${surveyData.whyLooking.replace(/\n/g, "<br />")}</p>
        <p><small>Submitted: ${new Date().toISOString()}</small></p>
      `,
    });

    console.log("Survey email sent successfully:", {
      name: surveyData.fullName,
      email: "rgibson2308@gmail.com",
      timestamp: new Date().toISOString(),
    });

    res.json({
      success: true,
      message: "Survey received. We'll review and contact you shortly.",
    });
  } catch (error) {
    console.error("Survey submission error:", error);
    res.status(500).json({ error: "Failed to process survey" });
  }
};
