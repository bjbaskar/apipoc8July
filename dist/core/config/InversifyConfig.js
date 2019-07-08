"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
const InversifyTypes_1 = require("./InversifyTypes");
const server_1 = require("../../server");
const Setting_1 = require("./Setting");
const Logger_1 = require("../logger/Logger");
const PhotoService_1 = require("../../modules/publicphotos/PhotoService");
const ContainerMain = new inversify_1.Container();
exports.ContainerMain = ContainerMain;
ContainerMain.bind(InversifyTypes_1.TYPES.Server).to(server_1.Server);
ContainerMain.bind(InversifyTypes_1.TYPES.Setting).to(Setting_1.Setting);
ContainerMain.bind(InversifyTypes_1.TYPES.Logger).to(Logger_1.Logger);
ContainerMain.bind(InversifyTypes_1.TYPES.PhotoService).to(PhotoService_1.PhotoService);
//# sourceMappingURL=InversifyConfig.js.map