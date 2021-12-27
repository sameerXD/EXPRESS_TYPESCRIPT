import express, { application } from 'express';
import logging from './config/logging';
import config from './config/config';
import sampleRoutes from './routes/sample';

const router = express();
const NAMESPACE = 'server';

router.use((req, res, next) => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP -[${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
    next();
});

/**parse the request */
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

/**rules for our api */
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Acess-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH PUT DELETE POST');
        return res.status(200).json({});
    }
    next();
});

/**routes */
router.use('/sample', sampleRoutes);

/**Error handling --> if the end point user gets to the end of the routes that means
 * the route entered does n=ot exist
 */

router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

/**server */
router.listen(config.server.port, () => {
    logging.info(NAMESPACE, `SERVER RUNNING ON ${config.server.host}: ${config.server.port}`);
});
