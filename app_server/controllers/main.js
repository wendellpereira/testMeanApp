/**
 * Created by wendell on 06/11/16.
 */

/* GET home Page */
module.exports.index = function(req, res, next) {
    res.render('index', { title: 'Express do Wendell',
                          wellcometext: 'the test MEAN Application stack'
    });
}
