/**
 * View
 */

itoMVP.View = function () {
    this._html = '';
};

itoMVP.View.prototype.setPresenter = function (presenter) {
    this._presenter = presenter;
};

itoMVP.View.prototype.getPresenter = function () {
    return this._presenter;
};

itoMVP.View.prototype.bind = function (event, elem) {
    this._presenter._listaDeEventosQueVoyAEscuchar.add(evento)
};

// itoMVP.View.prototype.listen = function () {};
// itoMVP.View.prototype.emit = function () {};
