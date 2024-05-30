let PostFunc = (req, res, next) => {
    let LocalRequestBody = req.body;
    const requiredFields = ["UserName", "Password"];

    if (Object.keys(LocalRequestBody).length === 0) {
        res.status(404).json({
            KTF: false,
            KReason: "Post request body should contain:",
            body: {
                "UserName": "",
                "Password": ""
            }
        });
        return;
    }

    for (let field of requiredFields) {
        if (!LocalRequestBody.hasOwnProperty(field) || LocalRequestBody[field] === "") {
            res.status(400).json({
                KTF: false,
                KReason: `Missing or empty field: ${field}`,
                body: {
                    "UserName": "",
                    "Password": ""
                }
            });
            return;
        }
    }

    next();
};

export { PostFunc }
