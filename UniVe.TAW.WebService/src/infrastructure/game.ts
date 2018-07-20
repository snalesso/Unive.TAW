export interface ICoord {
    readonly X: number;
    readonly Y: number;
}

export class Coord implements ICoord {

    public constructor(
        public readonly X: number,
        public readonly Y: number) { }
}

export enum ShipType {
    NoShip = 0,
    Destroyer = 2, // Cacciatorpediniere
    Submarine = 3,  // Sottomarino
    Battleship = 4, // Corazzata
    Carrier = 5  // Portaerei
}

export enum ShipOrientation {
    Horizontal,
    Vertical
}

export interface IShipPlacement {
    Type: ShipType;
    Coord: Coord;
    Orientation: ShipOrientation;
}

export class ShipPlacement {
    constructor(
        public readonly Type: ShipType,
        public readonly Coord: Coord,
        public readonly Orientation: ShipOrientation) {
    }
}

export class ShipTypeAvailability {
    public constructor(
        public readonly ShipType: ShipType,
        public readonly Count: number) {
        if (this.Count <= 0)
            throw new Error("Cannot place a negative number of ships!");
    }
}

export enum MatchActionCode {
    Attack,
    Surrend,
    RequestTimeOut
}

export class MatchAction {

    constructor(
        public readonly ActionCode: MatchActionCode,
        public readonly Coord: Coord) {
    }
}

export class BattleFieldSettings {

    public static readonly BattleFieldMinWidth: number = 10;
    public static readonly BattleFieldMinHeight: number = 10;

    public static readonly BattleFieldMaxWidth: number = 26;
    public static readonly BattleFieldMaxHeight: number = 26;

    constructor(
        battleFieldWidth: number = BattleFieldSettings.BattleFieldMinWidth,
        battleFieldHeight: number = BattleFieldSettings.BattleFieldMinWidth) {

        if (battleFieldWidth < BattleFieldSettings.BattleFieldMinWidth
            || battleFieldHeight < BattleFieldSettings.BattleFieldMinHeight
            || battleFieldHeight > BattleFieldSettings.BattleFieldMaxHeight
            || battleFieldWidth > BattleFieldSettings.BattleFieldMaxWidth)
            throw new Error("Invalid BattleField size");

        this.BattleFieldHeight = battleFieldHeight;
        this.BattleFieldWidth = battleFieldWidth;
    }

    public readonly BattleFieldWidth: number;
    public readonly BattleFieldHeight: number;
}

export class MatchSettings {

    constructor(
        battleFieldSettings: BattleFieldSettings = new BattleFieldSettings(),
        availableShips: ShipTypeAvailability[] = MatchSettings.getDefaultShipTypeAvailability(),
        minShipDistance: number = 1) {

        if (battleFieldSettings == null)
            throw new Error("Battle field settings must be specified");

        this.BattleFieldSettings = battleFieldSettings;
        this.AvailableShips = availableShips;
        this.MinShipsDistance = minShipDistance;
    }

    public readonly BattleFieldSettings: BattleFieldSettings;
    public readonly AvailableShips: ReadonlyArray<ShipTypeAvailability>;
    public readonly MinShipsDistance: number;

    public static getDefaultShipTypeAvailability(): ShipTypeAvailability[] {
        return [
            new ShipTypeAvailability(ShipType.Destroyer, 4),
            new ShipTypeAvailability(ShipType.Submarine, 2),
            new ShipTypeAvailability(ShipType.Battleship, 2),
            new ShipTypeAvailability(ShipType.Carrier, 1)
        ];
    }
}