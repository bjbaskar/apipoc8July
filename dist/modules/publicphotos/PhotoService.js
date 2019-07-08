"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const exceptions_1 = require("../../core/exceptions");
const request_1 = __importDefault(require("request"));
const AbstractSetting_1 = require("../../core/config/AbstractSetting");
const AbstractLogger_1 = require("../../core/logger/AbstractLogger");
const InversifyTypes_1 = require("../../core/config/InversifyTypes");
let PhotoService = class PhotoService {
    constructor(logger, setting) {
        this.logger = logger;
        this.setting = setting;
    }
    getAllPhotos(inputTag) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return new Promise((resolve, reject) => {
                    let allData = [];
                    const tagValue = inputTag ? inputTag.trim() : "";
                    const url = this.setting.config.flickerURL + tagValue;
                    request_1.default(url, { json: true }, (err, res, data) => __awaiter(this, void 0, void 0, function* () {
                        if (err) {
                            return reject(err);
                        }
                        const jsonpData = data;
                        let json;
                        try {
                            json = JSON.parse(jsonpData);
                        }
                        catch (e) {
                            const startPos = jsonpData.indexOf("({");
                            const endPos = jsonpData.indexOf("})");
                            const jsonString = jsonpData.substring(startPos + 1, endPos + 1);
                            json = JSON.parse(jsonString);
                        }
                        allData = yield [json];
                        return resolve(allData);
                    }));
                });
            }
            catch (error) {
                throw new exceptions_1.BadMapping("Unhandled Error", error);
            }
        });
    }
};
PhotoService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(InversifyTypes_1.TYPES.Logger)),
    __param(1, inversify_1.inject(InversifyTypes_1.TYPES.Setting)),
    __metadata("design:paramtypes", [AbstractLogger_1.AbstractLogger,
        AbstractSetting_1.AbstractSetting])
], PhotoService);
exports.PhotoService = PhotoService;
//# sourceMappingURL=PhotoService.js.map