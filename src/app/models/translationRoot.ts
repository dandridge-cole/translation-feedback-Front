import { Language } from './language';
import { OrigText } from './origText';

export class TranslationRoot {
    id:number;
    name:string;
    language:Language;
    origText:OrigText;
}