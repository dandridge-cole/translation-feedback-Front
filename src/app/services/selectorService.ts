import {Injectable} from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {OrigText} from "../models/origText";
import {TranslationRoot} from "../models/translationRoot";
import {environment} from "../../environments/environment";

@Injectable()
export class SelectorService{
    public origTextUrl:string;
    public transRootUrl:string;
    public sendto:string;
    public selectedOrigText: OrigText;
    public selectedTransRoot: TranslationRoot;
    public origTextList: OrigText[];
    public transRootList: TranslationRoot[];
    constructor(private http: HttpClient){
        this.origTextUrl = environment.apiUrl+"/origtexts";
        this.transRootUrl = environment.apiUrl+"/translationroots";
    }

    async getOrigTexts(){
        await this.http.get<OrigText[]>(this.origTextUrl).subscribe(data=>this.origTextList=data);
    }

    async getTransRoots(){
        await this.http.get<TranslationRoot[]>(this.transRootUrl).subscribe(data=>this.transRootList=data);
    }
}