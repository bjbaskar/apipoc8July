"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const InversifyConfig_1 = require("./core/config/InversifyConfig");
const InversifyTypes_1 = require("./core/config/InversifyTypes");
function getContext() {
    return {
        Setting: InversifyConfig_1.ContainerMain.get(InversifyTypes_1.TYPES.Setting),
        CurrentUser: undefined,
        PhotoService: InversifyConfig_1.ContainerMain.get(InversifyTypes_1.TYPES.PhotoService),
    };
}
exports.getContext = getContext;
//# sourceMappingURL=context.js.map