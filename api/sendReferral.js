// api/sendReferral.js
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)


function generateReferralCode(length = 8) {
  return Math.random().toString(36).substring(2, 2 + length).toUpperCase()
}

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send("Only POST allowed")
  }

  const { name, email } = req.body
  const referralCode = generateReferralCode()

//   try {
//     await resend.emails.send({
//       // from: process.env.FROM_EMAIL, // e.g. noreply@yourdomain.com
//       from: 'Acme <onboarding@resend.dev>', // e.g. noreply@yourdomain.com onboarding@resend.dev
//       to: email,
//       subject: "Your Rakepto Referral Code",
//       html: `<p>Hi ${name},</p><p>Your referral code is: <strong>${referralCode}</strong></p>`,
//     })

//     return res.status(200).json({ success: true })
//   } catch (error) {
//     console.error(error)
//     return res.status(500).json({ error: "Failed to send email" })
//   }
// }

try {
  const response = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: email,
    subject: "Your Rakepto Referral Code",
    html: `<p>Hi ${name},</p><p>Your referral code is: <strong>${referralCode}</strong></p>`,
  });

  console.log("✅ Resend email response:", response); // ✅ Add this log

  return res.status(200).json({ success: true });
} catch (error) {
  console.error("❌ Resend email error:", error); // ✅ Better error logging
  return res.status(500).json({ error: "Failed to send email" });
}
}