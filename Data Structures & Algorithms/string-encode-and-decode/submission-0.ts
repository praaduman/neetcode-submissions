class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.map(str=>(`${str.length}#${str}`)).join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
  decode(str: string): string[] {
        let res: string[] = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            while (str[j] !== "#") {
                j++;
            }

            let len = Number(str.slice(i, j));
            let word = str.slice(j + 1, j + 1 + len);

            res.push(word);

            i = j + 1 + len;
        }

        return res;
    }
}
