class Cs142TemplateProcessor{
    constructor(template) {
        this.template = template;
    }

    fillIn(dictionary) {
        var temp = this.template;
        for (var FIRST in dictionary) {
            var SECOND = new RegExp('\\{\\{' + FIRST + '\\}\\}');
            temp = temp.replace(SECOND, dictionary[FIRST]);
        }
        temp = temp.replace(new RegExp('\\{\\{\\w+\\}\\}', "g"), "");
        return temp;
    }
}