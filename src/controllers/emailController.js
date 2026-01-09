const { generateEmailTemplate } = require("../services/aiEmailService");

exports.generateEmail = async (req, res) => {
  try {
    const purpose = req.body.purpose?.trim();
    const recipient_name = req.body.recipient_name?.trim();
    const tone = req.body.tone?.trim();

    if (!purpose || !recipient_name || !tone) {
      return res.status(400).json({
        error: "purpose, recipient_name and tone are required"
      });
    }

    console.log("Generating email for:", {
      purpose,
      recipient_name,
      tone
    });

    const result = await generateEmailTemplate(
      purpose,
      recipient_name,
      tone
    );

    return res.status(200).json(result);

  } catch (error) {
    console.error("Email generation error:", error.message);

    return res.status(500).json({
      error: "Internal server error"
    });
  }
};
