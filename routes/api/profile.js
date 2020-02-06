const express = require('express');
const router = express.Router();

/* @route    Post api/profile/me
   @desc     Get current user's profile
   @access   Private  
*/

router.get('/', (req, res) => {
	res.send('Profile route');
});

module.exports = router;
