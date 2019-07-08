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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const path = __importStar(require("path"));
const AbstractSetting_1 = require("./AbstractSetting");
const dotenv = __importStar(require("dotenv"));
let Setting = class Setting extends AbstractSetting_1.AbstractSetting {
    constructor() {
        super();
        dotenv.config();
        this.settings = {
            flickerURL: "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=bjbaskar&format=json&tags=",
            log: {
                filedir: path.join(__dirname, "../../../log"),
                filename: "project1-%DATE%.log"
            },
            server: {
                port: process.env.PORT,
                max_login_attempts: Number(process.env.MAX_LOGIN_ATTEMPTS),
                lock_time: Number(process.env.LOCK_TIME),
                jwt_secret: process.env.JWT_SECRET,
                token_expires_in: Number(process.env.TOKEN_EXPIRES_IN)
            },
            database: undefined
        };
    }
    get config() {
        return this.settings;
    }
};
Setting = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], Setting);
exports.Setting = Setting;
//# sourceMappingURL=Setting.js.map