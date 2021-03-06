/**
 * @desc     Get all bootcamps
 * @route    Get /api/v1/bootcamps
 * @access   Public
 */
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
};

/**
 * @desc     Get single bootcamps
 * @route    Get /api/v1/bootcamps/:id
 * @access   Public
 */
exports.getBootcamp = (req, res, next) => {};

/**
 * @desc     Create new bootcamp
 * @route    POST /api/v1/bootcamps
 * @access   Private
 */
exports.createBootcamp = (req, res, next) => {};

/**
 * @desc     Update bootcamp
 * @route    PUT /api/v1/bootcamps/:id
 * @access   Private
 */
exports.updateBootcamp = (req, res, next) => {};

/**
 * @desc     Delete bootcamp
 * @route    DELETE /api/v1/bootcamps/:id
 * @access   Private
 */
exports.deleteBootcamp = (req, res, next) => {};
