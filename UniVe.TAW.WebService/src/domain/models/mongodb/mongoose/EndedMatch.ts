import * as mongoose from 'mongoose';

import * as Constants from './Constants';
import * as MatchPlayerSide from './MatchPlayerSide';
import * as ShipPlacement from './ShipPlacement';
import * as ServerSideBattleFieldCell from './BattleFieldCell';
import * as User from './User';
//import * as BattleFieldSettings from './BattleFieldSettings';
import * as MatchSettings from './MatchSettings';
import * as Coord from './Coord';

import * as game from '../../../../infrastructure/game';
//import * as game_client from '../../../../infrastructure/game.client';
//import * as chat from '../../../../infrastructure/chat';
import { read } from 'fs';

export interface IMongooseEndedMatch extends mongoose.Document {
    readonly _id: mongoose.Types.ObjectId,
    readonly Settings: MatchSettings.IMongooseMatchSettings,
    readonly CreationDateTime: Date,
    readonly StartDateTime: Date,
    readonly EndDateTime: Date,
    readonly WinnerId: mongoose.Types.ObjectId,
    readonly FirstPlayerSide: MatchPlayerSide.IMongooseMatchPlayerSide,
    readonly SecondPlayerSide: MatchPlayerSide.IMongooseMatchPlayerSide
}

const endedMatchSchema = new mongoose.Schema({
    Settings: {
        type: MatchSettings.getSchema(),
        required: true,
        //default: MatchSettings
    },
    CreationDateTime: {
        type: mongoose.Schema.Types.Date,
        required: true,
        default: Date.now
    },
    StartDateTime: {
        type: mongoose.Schema.Types.Date,
        required: true,
        // validate: {
        //     validator: function (this: IMongooseMatch, value: Date): boolean {
        //         // TODO: check for it to work
        //         return this.CreationDateTime.getTime() == null
        //             && value.getTime() > this.CreationDateTime.getTime();
        //     },
        //     msg: 'Match cannot start before its creation!'
        // }
    },
    EndDateTime: {
        type: mongoose.Schema.Types.Date,
        required: true,
        // validate: {
        //     validator: function (this: IMongooseMatch, value: Date): boolean {
        //         // TODO: check for it to work
        //         return this.StartDateTime.getTime() != null
        //             && this.EndDateTime.getTime() == null
        //             && value.getTime() > this.StartDateTime.getTime();
        //     },
        //     msg: 'Match cannot end before it starts!'
        // }
    },
    WinnerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: Constants.ModelsNames.User,
        // validate: {
        //     validator: function (this: IMongooseMatch, value: mongoose.Types.ObjectId): boolean {
        //         // TODO: check for it to work
        //         return value === this.FirstPlayerSide.PlayerId || value === this.SecondPlayerSide.PlayerId;
        //     },
        //     msg: 'Action must be granted to one the match players'
        // }
    },
    FirstPlayerSide: {
        type: MatchPlayerSide.getSchema(),
        required: true,
        // validate: {
        //     validator: function (this: IMongooseMatch, value: MatchPlayerSide.IMongooseMatchPlayerSide): boolean {
        //         return this.FirstPlayerSide == null
        //             && value != null;
        //     },
        //     msg: "1st player side not valid" // TODO: add error message (anche sulle altre colonne)
        // }
    },
    SecondPlayerSide: {
        type: MatchPlayerSide.getSchema(),
        required: true,
        // validate: {
        //     validator: function (this: IMongooseMatch, value: MatchPlayerSide.IMongooseMatchPlayerSide): boolean {
        //         return this.SecondPlayerSide == null
        //             && value != null;
        //     },
        //     msg: "2st player side not valid"
        // }
    }
});

let endedMatchModel;
export function getModel(): mongoose.Model<IMongooseEndedMatch> {
    if (!endedMatchModel) {
        endedMatchModel = mongoose.model(Constants.ModelsNames.Match, endedMatchSchema);
    }
    return endedMatchModel;
}

export function create(data: any): IMongooseEndedMatch {
    let endedMatchModelCtor = getModel();
    let newEndedMatch = new endedMatchModelCtor(data);

    return newEndedMatch;
}