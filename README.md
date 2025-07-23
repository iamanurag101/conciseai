<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

  <div class="header">
    <h1>Concise AI</h1>
    <p><strong>Deployed link:</strong> <a href="https://conciseai.byanurag.com" target="_blank" rel="noopener noreferrer">conciseai.byanurag.com</a></p>
  </div>

  <div style="height: 20px;"></div> <!-- Spacer div -->

  <h2>Website Appearance</h2>
  <div class="images">
    <div class="image-container">
      <p class="image-label">Landing Page:</p>
      <img width="1892" height="904" alt="Landing Page" src="https://github.com/user-attachments/assets/ddb1871e-2c2c-4a9c-a971-5b91724666ff" />
    </div>
    <div class="image-container">
      <p class="image-label">Dashboard:</p>
      <img width="1892" height="905" alt="Dashboard" src="https://github.com/user-attachments/assets/cba2d7b0-ab3a-403d-8e00-4e58488835dc" />
    </div>
    <div class="image-container">
      <p class="image-label">Individual Summary Page:</p>
      <img width="1893" height="906" alt="Summary Page" src="https://github.com/user-attachments/assets/9efb9db9-c612-4efb-8e66-c1f284c79f70" />
    </div>
  </div>

  <div style="height: 20px;"></div> <!-- Spacer div -->

  <h2>Overview</h2>
  <p>This is a full-stack AI PDF Summarizer website built using technologies:</p>
  <ul>
    <li><strong>Frontend:</strong> Next.js, Tailwind CSS, Framer Motion, TypeScript, ShadCN UI </li>
    <li><strong>Backend:</strong> Next.js, Clerk, Stripe, UploadThing, Google Gemini, LangChain </li>
    <li><strong>Database:</strong> Neon DB (PostgreSQL) </li>
  </ul>

  <p>This platform enables users to upload and summarize PDF documents using advanced AI.
  Users can sign up, manage their account and subscription, and process PDFs to receive concise summaries. The platform leverages real-time processing, AI-powered summarization with Google Gemini via LangChain, and secure payment handling through Stripe. It's optimized for a fast, intuitive user experience, featuring file upload with UploadThing, modern UI components with Tailwind and shadcn/ui, and seamless authentication with Clerk.</p>

  <div style="height: 20px;"></div> <!-- Spacer div -->

  <h2>Project Architecture</h2>

  <div class="images">
    <div class="image-container">
      <p class="image-label">High-Level Overview:</p>
      <img width="2304" height="1392" alt="High Level Overview - concise-ai" src="https://github.com/user-attachments/assets/4a37228d-f3b3-4160-bba6-e572a26c826f" />
    </div>
    <div class="image-container">
      <p class="image-label">User Data Model:</p>
      <img width="658" height="936" alt="DB Schema - concise-ai" src="https://github.com/user-attachments/assets/40f281c8-34bc-4752-b534-f4a60b8b8921" />
    </div>
  </div>

  <div style="height: 20px;"></div> <!-- Spacer div -->

  <h2>Features</h2>
  <ul>
    <li><strong>PDF Upload & Summarization:</strong> Users can upload PDF documents and receive AI-generated summaries using Google Gemini via LangChain.</li>
    <li><strong>User Authentication:</strong> Secure login and registration powered by Clerk for seamless session management.</li>
    <li><strong>Subscription Management:</strong> Stripe integration enables users to purchase and manage subscription plans with automatic status updates.</li>
    <li><strong>Personalized Dashboard:</strong> Users can view and manage their uploaded documents and summaries in a clean, intuitive interface.</li>
    <li><strong>Real-Time Processing:</strong> Fast, responsive UI with loading indicators and instant feedback using Next.js and server actions.</li>
    <li><strong>File Handling:</strong> UploadThing integration for smooth and secure PDF file uploads.</li>
    <li><strong>Responsive UI:</strong> Styled with Tailwind CSS and animated using Framer Motion for a modern, dynamic experience.</li>
    <li><strong>Database-Driven:</strong> User data, summaries, and payments are stored and managed via NeonDB (PostgreSQL).</li>
  </ul>


  <div style="height: 20px;"></div> <!-- Spacer div -->

  <div class="footer">
    <p><strong>&copy; 2025 Concise AI</strong></p>
  </div>
</body>
</html>
