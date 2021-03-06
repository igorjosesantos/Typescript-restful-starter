import { Router } from "camesine";
import * as express from "express";
import { JWTController } from "../controllers/Jwt.controller";

export class JWTRouter extends Router {
    constructor() {
        super(JWTController);
        this.router = express.Router()
            .post("/", this.handler(JWTController.prototype.index));
    }
}
