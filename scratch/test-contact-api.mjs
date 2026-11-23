async function testApi() {
  console.log("Testing POST to http://localhost:5173/api/contact.php...");
  
  const testPayload = {
    fullName: "Pooja Hegde",
    email: "pooja.hegde@example.com",
    phone: "+91 98765 43210",
    course: "Digital Marketing & SEO",
    preferredTime: "Morning",
    message: "I would like to inquire about syllabus and enrollment."
  };

  const response = await fetch("http://localhost:5173/api/contact.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(testPayload)
  });

  const status = response.status;
  const json = await response.json();
  console.log("Response status:", status);
  console.log("Response body:", json);

  // Check submissions.log
  const fs = await import("fs");
  const logContent = fs.readFileSync("public/api/submissions.log", "utf8");
  const lines = logContent.trim().split("\n");
  const lastLine = lines[lines.length - 1];
  console.log("Last line in submissions.log:", lastLine);
}

testApi().catch(err => {
  console.error("Test failed:", err);
  process.exit(1);
});
