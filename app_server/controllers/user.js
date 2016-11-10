/**
 * Created by wendell on 06/11/16.
 */

/* User home Page */
module.exports.signup = function(req, res, next) {
    res.render('index', { title: 'Signup',
                          wellcometext: 'the test MEAN Application stack'
    });
}

module.exports.login = function(req, res, next) {
    res.render('index', { title: 'Login',
                          wellcometext: 'the test MEAN Application stack'
    });
}

module.exports.wellcome = function(req, res, next) {
    res.render('index', { title: 'Wellcome User!',
                          wellcometext: 'the test MEAN Application stack'
    });
}
