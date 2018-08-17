"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Coord = /** @class */ (function () {
    function Coord(X, Y) {
        this.X = X;
        this.Y = Y;
    }
    return Coord;
}());
exports.Coord = Coord;
var ShipType;
(function (ShipType) {
    ShipType[ShipType["NoShip"] = 0] = "NoShip";
    ShipType[ShipType["Destroyer"] = 2] = "Destroyer";
    ShipType[ShipType["Submarine"] = 3] = "Submarine";
    ShipType[ShipType["Battleship"] = 4] = "Battleship";
    ShipType[ShipType["Carrier"] = 5] = "Carrier"; // Portaerei
})(ShipType = exports.ShipType || (exports.ShipType = {}));
var ShipOrientation;
(function (ShipOrientation) {
    ShipOrientation[ShipOrientation["Horizontal"] = 0] = "Horizontal";
    ShipOrientation[ShipOrientation["Vertical"] = 1] = "Vertical";
})(ShipOrientation = exports.ShipOrientation || (exports.ShipOrientation = {}));
var ShipPlacement = /** @class */ (function () {
    function ShipPlacement(Type, Coord, Orientation) {
        this.Type = Type;
        this.Coord = Coord;
        this.Orientation = Orientation;
    }
    return ShipPlacement;
}());
exports.ShipPlacement = ShipPlacement;
var ShipTypeAvailability = /** @class */ (function () {
    function ShipTypeAvailability(ShipType, Count) {
        this.ShipType = ShipType;
        this.Count = Count;
        if (this.Count <= 0)
            throw new Error("Cannot place a negative number of ships!");
    }
    return ShipTypeAvailability;
}());
exports.ShipTypeAvailability = ShipTypeAvailability;
var MatchActionCode;
(function (MatchActionCode) {
    MatchActionCode[MatchActionCode["Attack"] = 0] = "Attack";
    MatchActionCode[MatchActionCode["Surrend"] = 1] = "Surrend";
    MatchActionCode[MatchActionCode["RequestTimeOut"] = 2] = "RequestTimeOut";
})(MatchActionCode = exports.MatchActionCode || (exports.MatchActionCode = {}));
var MatchAction = /** @class */ (function () {
    function MatchAction(ActionCode, Coord) {
        this.ActionCode = ActionCode;
        this.Coord = Coord;
    }
    return MatchAction;
}());
exports.MatchAction = MatchAction;
var BattleFieldSettings = /** @class */ (function () {
    function BattleFieldSettings(battleFieldWidth, battleFieldHeight) {
        if (battleFieldWidth === void 0) { battleFieldWidth = BattleFieldSettings.BattleFieldMinWidth; }
        if (battleFieldHeight === void 0) { battleFieldHeight = BattleFieldSettings.BattleFieldMinWidth; }
        if (battleFieldWidth < BattleFieldSettings.BattleFieldMinWidth
            || battleFieldHeight < BattleFieldSettings.BattleFieldMinHeight
            || battleFieldHeight > BattleFieldSettings.BattleFieldMaxHeight
            || battleFieldWidth > BattleFieldSettings.BattleFieldMaxWidth)
            throw new Error("Invalid BattleField size");
        this.BattleFieldHeight = battleFieldHeight;
        this.BattleFieldWidth = battleFieldWidth;
    }
    BattleFieldSettings.BattleFieldMinWidth = 10;
    BattleFieldSettings.BattleFieldMinHeight = 10;
    BattleFieldSettings.BattleFieldMaxWidth = 26;
    BattleFieldSettings.BattleFieldMaxHeight = 26;
    return BattleFieldSettings;
}());
exports.BattleFieldSettings = BattleFieldSettings;
var MatchSettings = /** @class */ (function () {
    function MatchSettings(battleFieldSettings, availableShips, minShipDistance) {
        if (battleFieldSettings === void 0) { battleFieldSettings = new BattleFieldSettings(); }
        if (availableShips === void 0) { availableShips = MatchSettings.getDefaultShipTypeAvailability(); }
        if (minShipDistance === void 0) { minShipDistance = 1; }
        if (battleFieldSettings == null)
            throw new Error("Battle field settings must be specified");
        this.BattleFieldSettings = battleFieldSettings;
        this.AvailableShips = availableShips;
        this.MinShipsDistance = minShipDistance;
    }
    MatchSettings.getDefaultShipTypeAvailability = function () {
        return [
            new ShipTypeAvailability(ShipType.Destroyer, 4),
            new ShipTypeAvailability(ShipType.Submarine, 2),
            new ShipTypeAvailability(ShipType.Battleship, 2),
            new ShipTypeAvailability(ShipType.Carrier, 1)
        ];
    };
    return MatchSettings;
}());
exports.MatchSettings = MatchSettings;
var FleetValidator = /** @class */ (function () {
    function FleetValidator() {
    }
    FleetValidator.getCoordsDistance = function (coord1, coord2) {
        return new Coord(Math.abs(coord1.X - coord2.X), Math.abs(coord1.Y - coord2.Y));
    };
    FleetValidator.getShipPlacementCoords = function (shipPlacement) {
        var shipCoords = [];
        for (var i = 0; i < shipPlacement.Type; i++) {
            if (shipPlacement.Orientation == ShipOrientation.Vertical)
                shipCoords.push(new Coord(shipPlacement.Coord.X + i, shipPlacement.Coord.Y));
            else
                shipCoords.push(new Coord(shipPlacement.Coord.X, shipPlacement.Coord.Y + i));
        }
        return shipCoords;
    };
    FleetValidator.validateShipPlacement = function (shipPlacement, fleetConfig) {
        var _this = this;
        var newShipPlacementCoords = this.getShipPlacementCoords(shipPlacement);
        var occupiedCoords = [].concat.apply([], fleetConfig.map(function (sp) { return _this.getShipPlacementCoords(sp); }));
        // -- beginning of test code: destroys all the cells inside the main dummy matrix of random shit
        var test = [].concat(new Array([], [43, 8, 32]));
        test.forEach(function (c) { return console.log(c); });
        // -- end of test code
        return newShipPlacementCoords.every(function (coord) {
            return occupiedCoords.every(function (oc) {
                var dist = _this.getCoordsDistance(coord, oc);
                return dist.X > 1 || dist.Y > 1;
            });
        });
    };
    FleetValidator.validateFleetConfig = function (battlefieldWidth, battlefieldHeight, fleetConfig) {
        throw new Error("Not implemented");
    };
    return FleetValidator;
}());
exports.FleetValidator = FleetValidator;
//# sourceMappingURL=game.js.map