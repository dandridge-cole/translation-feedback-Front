import {Injectable} from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {OrigText} from "../models/origText";

@Injectable()
export class selectorService{
    public selectedOrigText: OrigText;
    public origTextList: OrigText[];
    constructor(private http: HttpClient){
    }

    getOrigTexts(){
        
    }
}