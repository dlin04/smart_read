# Smart Read

Smart Read is a full-stack web application with a React frontend and a FastAPI backend. This application employs web scraping and an integrated large language model (LLM) to provide users with prompt-based interactions for deeper insights into the scraped data. By periodically scraping news and finance sites and storing the latest updates for user interactions, users can query and receive context-aware responses. Users can also input custom URLs to broaden their sources. 

### Key Features

- **Web Scraping:** Uses Selenium and BeautifulSoup to parse content.
- **LLM-Powered Prompt Interactions:** Uses Ollama’s models for interactive content.
- **User-Provided Links:** Users have the flexibility to input URLs, allowing the application to analyze additional articles or sources beyond the default sites.

## Getting Started

### Usage and Distribution
This project is not hosted due to the complexities of integrating Ollama in production. 
The current setup requires users to download Ollama locally and pull the model.
Users are welcome to download the source code and run it locally. 
To get started, simply download the ZIP file and follow the installation instructions 
below. This allows you to explore and modify the application as 
needed, whether for personal use, development, or experimentation.

### Prerequisites

Ensure you have the following installed:

- Python 3.8+
- Node.js 14+

### Installation
#### 1. Download the ZIP

- Download the latest version of the project by clicking the ZIP link and extracting it to a location on your machine.

#### 2. Install ChromeDriver

- Download the **ChromeDriver** from the official site: [ChromeDriver for Testing](https://googlechromelabs.github.io/chrome-for-testing/#stable).
- Once downloaded, extract the ChromeDriver and place it in the **`backend`** folder of the project, where it is already part of .gitignore.

#### 3. Install Ollama

- Download and install **Ollama** from [Ollama's official website](https://ollama.com/).
- Follow the installation instructions provided on their site to get it running on your local machine.

#### 4. Set Up Backend

- Navigate to the **`backend`** directory in your terminal or command prompt.
- Create a virtual environment by running the following command:

    ```bash
    python -m venv venv
    ```

- Activate the virtual environment:
    - On Windows:

      ```bash
      .\venv\Scripts\activate
      ```

    - On macOS/Linux:

      ```bash
      source venv/bin/activate
      ```

- Install the necessary backend dependencies:

    ```bash
    pip install -r requirements.txt
    ```

#### 5. Set Up Frontend

- Navigate to the **`frontend`** directory in your terminal.
- Install the required frontend dependencies using npm:

    ```bash
    npm install
    ```

#### 6. Run the Application

- To start the backend server, navigate to the **`backend`** directory and run:

    ```bash
    uvicorn app:app --reload
    ```

- To start the frontend, navigate to the **`frontend`** directory and run:

    ```bash
    npm start
    ```

The backend will be accessible at `http://localhost:8000`, and the frontend at `http://localhost:5173`.

---

### Notes

- The application requires **Ollama** to be running locally to interact with the model. Make sure Ollama is installed and properly configured before running the application.
- If you encounter issues with ChromeDriver, ensure it matches your current version of Chrome.




