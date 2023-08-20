"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.AirHumidityField = void 0;
var icons_material_1 = require("@mui/icons-material");
var material_1 = require("@mui/material");
var react_1 = require("react");
var react_admin_1 = require("react-admin");
var ResourceName_1 = require("../../../core/ResourceName");
exports.AirHumidityField = function (_a) {
    var props = __rest(_a, []);
    var action = props.action, guide = props.guide, rest = __rest(props, ["action", "guide"]);
    var guideAirHumidity = guide.airHumidity;
    var deviceAirHumidity = action.airHumidity;
    if ((guideAirHumidity + guideAirHumidity * 0.15) < deviceAirHumidity)
        return (react_1["default"].createElement(react_admin_1.FunctionField, __assign({}, rest, { record: action, resource: ResourceName_1.ResourceName.PLANTS_HIST, source: "airHumidity", render: function (record) { return (react_1["default"].createElement("div", null,
                "`$", record === null || record === void 0 ? void 0 :
                record.airHumidity,
                "%`",
                react_1["default"].createElement(material_1.Tooltip, { title: "air humidity too high" },
                    react_1["default"].createElement(icons_material_1.Feedback, null)))); } })));
    if ((guideAirHumidity - guideAirHumidity * 0.15) > deviceAirHumidity)
        return (react_1["default"].createElement(react_admin_1.FunctionField, __assign({}, rest, { record: action, resource: ResourceName_1.ResourceName.PLANTS_HIST, source: "airHumidity", render: function (record) { return (react_1["default"].createElement("div", null,
                "`$", record === null || record === void 0 ? void 0 :
                record.airHumidity,
                "%`",
                react_1["default"].createElement(material_1.Tooltip, { title: "air humidity too low" },
                    react_1["default"].createElement(icons_material_1.Feedback, null)))); } })));
    return (react_1["default"].createElement(react_admin_1.FunctionField, __assign({}, rest, { record: action, resource: ResourceName_1.ResourceName.PLANTS_HIST, source: "airHumidity", render: function (record) { return (react_1["default"].createElement("div", null,
            "`$", record === null || record === void 0 ? void 0 :
            record.airHumidity,
            "%`")); } })));
};
