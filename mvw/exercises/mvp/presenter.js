
/**
 * Presenter
 */

itoMVP.Presenter = function () {
    this._listaDeEventosQueVoyAEscuchar = [];
};

itoMVP.Presenter.prototype.setModel = function (model) {
    this._model = model;
};

itoMVP.Presenter.prototype.setView = function (view) {
    this._view = view;
};

itoMVP.Presenter.prototype.getModel = function () {
    return this._model;
};

itoMVP.Presenter.prototype.getView = function () {
    return this._view;
};

itoMVP.Presenter.prototype.render = function (view) {
    this._view = view;
};


// itoMVP.Presenter.prototype.listen = function () {};
// itoMVP.Presenter.prototype.emit = function () {};