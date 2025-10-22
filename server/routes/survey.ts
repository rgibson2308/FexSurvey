import { RequestHandler } from "express";

export interface SurveyData {
  fullName: string;
  age: string;
  productInterest: string;
  smoker: string;
  monthlyBudget: string;
  coverageAmount: string;
  whyLooking: string;
}

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

    console.log("Survey submission received:", {
      name: surveyData.fullName,
      age: surveyData.age,
      product: surveyData.productInterest,
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
