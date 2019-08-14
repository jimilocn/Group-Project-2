const translate = require("@vitalets/google-translate-api");

var orm =
{
	translate: function(input, langId, callBack)
    {
        //Uses The Google Translate API Package To Translate The Text And Then Return It
        translate(input, {to: langId}).then(response =>
        {
            callBack(response.text);
        }).catch(error =>
        {	console.log(error);	})
    }
}

module.exports = orm;