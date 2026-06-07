import app from './app/app.js';
import log from './utils/Logger.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    log.info(`Server is running on port ${PORT}`);
});