# ISTE NITK Website - React + Django

This project is a full-stack website for ISTE NITK, built with React for the frontend and Django for the backend.  It features a modern, responsive design with a blue and white theme, multiple pages for showcasing ISTE's activities, and a REST API for managing content.

## Project Structure
iste-nitk/
├── backend/ # Django Backend
│ ├── api/ # Django app for the API
│ │ ├── migrations/
│ │ ├── admin.py
│ │ ├── apps.py
│ │ ├── models.py # Database models (Event, Blog, SIG, Project)
│ │ ├── serializers.py # API serializers
│ │ ├── urls.py # API endpoint URLs
│ │ ├── views.py # API views (logic)
│ │ └── ...
│ ├── core/ # Main Django project settings
│ │ ├── settings.py # Project settings (database, installed apps, etc.)
│ │ ├── urls.py # Main project URL configuration
│ │ ├── wsgi.py
│ │ └── ...
│ ├── manage.py
│ ├── requirements.txt # Python dependencies
│ └── ...
├── frontend/ # React Frontend
│ ├── node_modules/
│ ├── public/
│ │ ├── index.html
│ │ └── ...
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ │ ├── Navbar.js
│ │ │ ├── Footer.js
│ │ │ ├── Hero.js
│ │ │ ├── GallerySlider.js
│ │ │ ├── EventCard.js
│ │ │ ├── BlogCard.js
│ │ │ ├── SIGCard.js
│ │ │ ├── CountdownTimer.js
│ │ │ ├── SocialIcons.js
│ │ │ ├── DarkModeToggle.js
│ │ │ └── ...
│ │ ├── pages/ # Individual pages
│ │ │ ├── Home.js
│ │ │ ├── About.js
│ │ │ ├── SIGs.js
│ │ │ ├── SIGPage.js
│ │ │ ├── ProjectExpo.js
│ │ │ ├── Events.js
│ │ │ ├── SocialInitiatives.js
│ │ │ ├── SHE.js
│ │ │ ├── Blogs.js
│ │ │ ├── BlogPage.js
│ │ │ ├── TheTeam.js
│ │ │ ├── ContactUs.js
│ │ │ ├── NotFound.js # 404 Page
│ │ │ └── ...
│ │ ├── App.js # Main app component & routing
│ │ ├── index.js # React entry point
│ │ ├── index.css # Global styles (Tailwind imports)
│ │ ├── services/
│ │ │ └── api.js # API request handling
│ │ └── context/
│ │ └── ThemeContext.js # Dark mode context
│ ├── package.json # Node.js dependencies and scripts
│ ├── tailwind.config.js # Tailwind CSS configuration
│ └── ...
├── .env # Environment variables (database URL, etc. - IMPORTANT: DO NOT COMMIT THIS FILE)
└── README.md # This file


## Getting Started

### Prerequisites

*   **Node.js and npm:** (Install from [nodejs.org](https://nodejs.org/)) - Version 16+ recommended.
*   **Python 3:** (Install from [python.org](https://www.python.org/)) - Version 3.8+ recommended.
*   **PostgreSQL:** (Install from [postgresql.org](https://www.postgresql.org/)) -  You can also use a cloud-based PostgreSQL service like Render, ElephantSQL, or Heroku Postgres.
*   A code editor (VS Code recommended).
*   Git (for version control).

### Installation and Setup

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd iste-nitk
    ```

2.  **Backend Setup (Django):**

    ```bash
    cd backend
    python3 -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    pip install -r requirements.txt
    ```
    Create a `.env` file in the `backend` directory and add your database URL:

    ```
    DATABASE_URL=postgres://user:password@host:port/database_name
    ```
    Replace with your actual PostgreSQL credentials.  If using a service like Render, they will provide you with the `DATABASE_URL`.

    Now, run migrations and create a superuser:

    ```bash
    python manage.py migrate
    python manage.py createsuperuser
    ```
    Run the backend server:
     ```bash
    python manage.py runserver
    ```
    The Django backend will be running at `http://127.0.0.1:8000/`.  You can access the Django admin panel at `http://127.0.0.1:8000/admin/`.

3.  **Frontend Setup (React):**

    ```bash
    cd ../frontend
    npm install
    ```
    Create a `.env` file in the `frontend` directory. Add the base url as follows,
    ```
    REACT_APP_API_BASE_URL=http://localhost:8000/api
    ```

    Start the React development server:

    ```bash
    npm start
    ```

    The React frontend will be running at `http://localhost:3000/`.

### File Explanations and Updates

#### Backend (Django)

*   **`backend/api/models.py`:** Defines the database schema.  To add new data types (e.g., a "TeamMember" model), add a new `class` here, inheriting from `models.Model`.  After making changes, run:

    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```

*   **`backend/api/serializers.py`:**  Converts Django model instances to JSON format for the API.  If you add new models, create corresponding serializers here.

*   **`backend/api/views.py`:** Contains the API logic (creating, reading, updating, deleting data).  To add new API endpoints or modify existing ones, edit this file.  Use Django REST Framework's generic views for common CRUD operations.

*   **`backend/api/urls.py`:**  Maps API endpoints to views.  Add new URL patterns here to expose new API functionality.

*   **`backend/core/settings.py`:**  The main Django settings file.  Important settings include:
    *   `INSTALLED_APPS`:  Add any new Django apps you create here.
    *   `DATABASES`: Database configuration (should be loaded from the `.env` file).
    *   `MIDDLEWARE`:  Middleware configuration.
    *   `CORS_ALLOW_ALL_ORIGINS`:  For development, set to `True` to allow requests from your React frontend.  **In production, change this to a specific list of allowed origins (e.g., your deployed frontend URL).**
    * `REST_FRAMEWORK`: Add necessary REST Framework settings, such as permission classes here.
    *   `STATIC_URL`, `STATIC_ROOT`, `STATICFILES_STORAGE`: Configuration for static files.
    *   `MEDIA_URL`, `MEDIA_ROOT`: Configuration for media files (uploaded images, etc.).

*   **`backend/core/urls.py`:**  Includes the URLs from your `api` app and the Django admin.

#### Frontend (React)

*   **`frontend/src/components/`:** Contains reusable UI components. To add a new component (e.g., `ProjectCard.js`), create it here and import it into the pages where you need it.

*   **`frontend/src/pages/`:** Contains the individual pages of your website.  To create a new page (e.g., `Gallery.js`), create a new file here and add a corresponding route in `frontend/src/App.js`.

*   **`frontend/src/App.js`:** Defines the routing for your application using `react-router-dom`.  Add new routes here to link to new pages.

*   **`frontend/src/services/api.js`:** Handles all API requests to the Django backend.  Add new functions here to interact with new API endpoints.

*   **`frontend/src/context/ThemeContext.js`:**  Manages the dark/light mode state for the application.

*   **`frontend/tailwind.config.js`:** Configuration file for Tailwind CSS.  You can customize colors, fonts, and other Tailwind settings here.

*    **`frontend/index.css`:** Add global styles not handled by tailwind to this.

### Deployment

#### Deployment to Vercel (Frontend)

1.  Create a Vercel account ([vercel.com](https://vercel.com/)).
2.  Connect your GitHub repository to Vercel.
3.  In the project settings on Vercel:
    *   Set the "Framework Preset" to "Create React App".
    *   Set the "Build Command" to `npm run build`.
    *   Set the "Output Directory" to `build`.
    *   Add an environment variable `REACT_APP_API_BASE_URL` with the URL of your deployed Django backend (e.g., `https://your-django-app.onrender.com/api`).  **This is crucial for the frontend to communicate with the backend after deployment.**
4.  Deploy! Vercel will automatically build and deploy your frontend.

#### Deployment to Render (Backend)

1.  Create a Render account ([render.com](https://render.com/)).
2.  Create a new "Web Service".
3.  Connect your GitHub repository.
4.  In the settings:
    *   Set the "Build Command" to:

        ```bash
        pip install -r requirements.txt && python manage.py collectstatic --noinput && python manage.py migrate
        ```
    *   Set the "Start Command" to:
        ```bash
        gunicorn core.wsgi:application --log-file - --log-level debug
        ```
         If gunicorn is not installed, add it:
        ```
        pip install gunicorn
        ```
         And then add it to the requirements.txt.
    *   Add environment variables:
        *   `DATABASE_URL`: Your PostgreSQL database URL.
        *   `SECRET_KEY`: A strong, randomly generated secret key.
        *   Any other environment variables you defined in your `.env` file.
    *   **Crucially**, choose a PostgreSQL database instance on Render (or connect to an external PostgreSQL database) and ensure the `DATABASE_URL` environment variable is correctly set.

5.  Deploy! Render will build and deploy your Django backend.

### Key Updates and Improvements

*   **Error Handling:** The frontend code includes more robust error handling (using `try...catch` and error states) to provide better user feedback in case of API issues.
*   **Loading States:** Loading indicators are added to improve the user experience while data is being fetched.
*   **Responsiveness:**  The mobile menu in the Navbar is implemented, and Tailwind classes are used consistently for responsive layouts.
*   **Form Handling:** Basic form structures are included in `SocialInitiatives.js` and placeholders in `Blogs.js` and `ContactUs.js`.  You'll need to add backend endpoints and form submission logic to make these fully functional.
*   **Dynamic SIG Pages:** The `SIGPage.js` component uses `useParams` to fetch data for the specific SIG based on the URL.
* **404 Page:** Added a basic NotFound page for undefined routes.
*   **Comments and Clarity:** Code comments are added throughout to explain the purpose of different sections.
* **Environment Variables:** Use of `.env` files for sensitive information (database URLs, API keys) and instructions on how to use them for deployment.
* **Deployment Instructions:** Clear step-by-step instructions for deploying to Vercel (frontend) and Render (backend), including crucial environment variable settings.
*   **Code Organization:** Improved project structure and organization for better maintainability.
*  **Image Placeholders:** Use placeholder image paths. Remember to replace these with your actual image paths/URLs.  You should put your images in the `frontend/public/images` directory.

This comprehensive README should give you a very solid foundation for managing, updating, and deploying your ISTE NITK website project. Remember to commit your changes to GitHub regularly!
