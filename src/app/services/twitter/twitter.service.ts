import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {CONFIG} from "../../config/config";

@Injectable()
export class TwitterService {

    constructor(private http: Http) {
        
    }

}
