import app from './src/app/app.js';
import log from './src/utils/Logger.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    log.info(`Server is running on port ${PORT}`);
});