import {REGEXP_EXTENDED_ASCII, REGEXP_LATIN_WORD, REGEXP_WORD} from "../helpers/regexp/regexp";
import {isNull} from "../helpers/null/is_null";
import capitalize from "./capitalize";
import lower from "./lower-case";

export default function title(s, noSplit){
    const _s = ""+s;
    const regexp = REGEXP_EXTENDED_ASCII.test(_s) ? REGEXP_LATIN_WORD : REGEXP_WORD;
    const noSplitArray = Array.isArray(noSplit) ? noSplit : !isNull(noSplit) ? noSplit.split() : [];

    return _s.replace(regexp, (w, i) => {
        const isNoSplit = i && noSplitArray.includes(_s[i - 1]);
        return isNoSplit ? lower(s) : capitalize(s);
    })
}
