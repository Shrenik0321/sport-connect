"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const envConfig_js_1 = require("./config/envConfig.js");
const dbConfig_js_1 = __importDefault(require("./config/dbConfig.js"));
const adminRoutes_js_1 = __importDefault(require("./api/routes/adminRoutes.js"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Defining Routes
app.use("/api/admin", adminRoutes_js_1.default);
// Global Error Handling
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("Uh oh! An unexpected error occured.");
});
app.listen(envConfig_js_1.SERVER_PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    (0, dbConfig_js_1.default)();
    console.log(`Server listening on port ${envConfig_js_1.SERVER_PORT}`);
}));
