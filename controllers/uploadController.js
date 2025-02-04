 const uploadImage = (req, res) => {
    console.log("File received:", req.file);
    if (!req.file) {
        return res.status(400).json({message:"No file uploaded"});
     }
     res.json({
        message:"Image uploaded successfully",
        filename: req.file.filename,
        filePath:`/uploads/${req.file.filename}`,
     });
};

module.exports = uploadImage;



