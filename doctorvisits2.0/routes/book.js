const router = express.Router()
const bookController = require('../controllers/book')
const { ensureAuth, ensureGuest } = require('../middleware/auth')
var moment = require('moment')

router.get("/reminders", ensureAuth, bookController.getReminders);
module.exports = router;