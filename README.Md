## 🧠 Part 1: AI Agent with n8n

I built a smart automation agent using **n8n**, which checks for new emails and drafts replies automatically using an AI model.

The agent works by:

* Detecting if the email is customer support-related
* Drafting a response using AI
* Sending the draft to my backend for review
* **Waiting for human approval before sending the final email**

To help the AI respond better, I provided clear instructions, examples, and context about our support process. This ensures the replies are accurate and in the correct tone, but **a human always makes the final decision before the email goes out**.



## ⚛️ Part 2: React Frontend + Django Backend

The frontend is built with **React**, and the backend uses **Django REST Framework**.

Here’s how they work together:

* The React app keeps checking (polling) the backend every few seconds for new AI-generated drafts
* Once a draft is ready, it’s displayed to the user
* When approved, the React app sends it to an **n8n webhook**

This setup ensures smooth syncing between the AI agent and the frontend user interface.

---

## 🛠️ Part 3: How to Run This Project Locally

### 1. Backend Setup (Django)

```bash
# Clone the project and move into the backend folder
cd backend/

# Create a virtual environment
python -m venv env
source env/bin/activate  # Use `env\Scripts\activate` on Windows

# Install all required packages
pip install -r requirements.txt

# Run the Django development server
python manage.py runserver
```

> ⚠️ **Important**: The backend runs on `localhost`, but for n8n to reach it, you must expose it using [ngrok](https://ngrok.com/):

```bash
ngrok http 8000
```

This will give you a public URL like ` https://6d1d-2xxx-7xxx-ff03-4eb9-c5b0-exxx-639b-dba7.ngrok-free.app` — use this in your **n8n HTTP nodes**.

---

### 2. Frontend Setup (React)

```bash
# Move into the frontend directory
cd frontend/

# Install dependencies
npm install

# Start the React development server
npm run dev
```

---

### 3. n8n Setup

* I’ve included two JSON files:

  * One for **PDF to vector embedding** using Pinecone
  * Another for the **Customer Support AI Agent**

To use them:

1. Import the JSON workflows into your n8n instance
2. Update the **API keys** in the appropriate service nodes (OpenAI, Pinecone, etc.). You will. need to recharge your openai api account with atleast 5$
3. Make sure your backend’s ngrok URL is used in HTTP nodes
4. Always confirm whether ur workflow is active or not. Based on that the webhook url will change.


You’re all set!

---

