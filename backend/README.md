# Backend

This folder is reserved for the Node.js + Express + MongoDB API described in the
project's full-stack plan (Modules 1–7: auth, course management, enrollment,
learning management, progress tracking, dashboards, notifications).

Suggested structure once you start building:

```
backend/
├── server.js
├── package.json
├── config/
│   └── db.js
├── models/
│   ├── Student.js
│   ├── Course.js
│   ├── Enrollment.js
│   └── Progress.js
├── routes/
│   ├── auth.routes.js
│   ├── course.routes.js
│   ├── enrollment.routes.js
│   └── progress.routes.js
├── controllers/
├── middleware/
│   └── auth.middleware.js   (JWT verification)
└── .env
```
