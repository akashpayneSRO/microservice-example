module.exports = {
    plugins: [
        [
            "module-resolver",
            {
                alias: {
                    "#root":"./src"
                }
            }
        ]
    ],
    presents: [
        [
            "@babel/preset-env",
            {
                targets: {
                    node: "current"
                }
            }
        ]
    ]
};