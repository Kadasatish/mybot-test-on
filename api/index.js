export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
    <html>
      <head><title>My Bot</title></head>
      <body style="text-align:center;padding:50px;font-family:sans-serif">
        <h1>💬 Telegram Bot is Live!</h1>
        <p>Hi Sateesh Darling 👑<br>Your bot webhook is working perfectly 🎯</p>
      </body>
    </html>
  `);
}
