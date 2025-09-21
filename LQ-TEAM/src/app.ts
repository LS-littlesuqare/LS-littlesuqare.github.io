import express from 'express';
import { json } from 'body-parser';
import { setAuthRoutes } from './routes/authRoutes';
import { setPostRoutes } from './routes/postRoutes';
import { setUserRoutes } from './routes/userRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());

setAuthRoutes(app);
setPostRoutes(app);
setUserRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});